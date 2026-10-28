import { describe,it,expect } from 'vitest';
import { initialState,parseBackup,volume,suggestion,coverage,type Session } from './model';
import { EXERCISE_BY_ID } from '@/data/exercises';
const session=(id='bb_bench'):Session=>({id:'test',title:'Push A',started:1,finished:2,paused:false,current:0,exercises:[{originalId:id,exerciseId:id,repsMax:10,rest:90,sets:[{weight:50,reps:10,rir:null,done:true},{weight:50,reps:10,rir:null,done:true},{weight:50,reps:10,rir:null,done:true}]}]});
function exercise(id:string){const e=EXERCISE_BY_ID[id];if(!e)throw new Error('Missing exercise '+id);return e;}
function first(s:Session){const e=s.exercises[0];if(!e)throw new Error('Missing row');return e;}
describe('training rules',()=>{
it('records 50 × 10 × 3 = 1500 volume',()=>expect(volume(session())).toBe(1500));
it('adds 2.5 kg only at the upper bound for every compound set',()=>{const s=session();expect(suggestion(exercise('bb_bench'),first(s).sets,10)).toBe(52.5);const third=first(s).sets[2];if(!third)throw new Error('Missing set');third.reps=9;expect(suggestion(exercise('bb_bench'),first(s).sets,10)).toBeNull();});
it('adds 1 kg per dumbbell',()=>expect(suggestion(exercise('incline_db'),first(session('incline_db')).sets,10)).toBe(51));
it('never adds load for bodyweight or timed movements',()=>{for(const id of ['pushups','plank']){const e=exercise(id);expect(suggestion(e,first(session(id)).sets,10)).toBeNull();}});
it('rejects declining load',()=>expect(suggestion(exercise('bb_bench'),first(session()).sets,10,55)).toBeNull());
it('counts primary sets fully and secondary sets by half',()=>{const e=exercise('bb_bench');expect(coverage([session()],e.primary[0]??'missing').total).toBe(3);expect(coverage([session()],e.secondary[0]??'missing').total).toBe(1.5);});
it('validates imports and preserves session values',()=>{const s=initialState();s.active=session();expect(parseBackup(JSON.stringify(s)).active?.exercises[0]?.sets[0]?.weight).toBe(50);expect(()=>parseBackup('{"version":2}')).toThrow();first(s.active).exerciseId='fake';expect(()=>parseBackup(JSON.stringify(s))).toThrow();});
it('keeps Friday a rest day',()=>expect(initialState().program.find(x=>x.weekday===5)?.items).toHaveLength(0));
});
