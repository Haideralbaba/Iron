import { createContext,useContext,useEffect,useRef,useState,type ReactNode } from 'react';
import { initialState,parseBackup,type AppState } from './model';
const KEY='iron-system-v1';
type Store={state:AppState;ready:boolean;error:string;update:(fn:(s:AppState)=>AppState)=>void;replace:(s:AppState)=>void};
const Context=createContext<Store|null>(null);
export function IronProvider({children}:{children:ReactNode}){const [state,setState]=useState(initialState);const [ready,setReady]=useState(false);const [error,setError]=useState('');const lastEnd=useRef<number|null>(null);
useEffect(()=>{try{const text=localStorage.getItem(KEY);if(text)setState(parseBackup(text));}catch{setError('تعذر قراءة البيانات المحفوظة. لم يتم استبدالها؛ احتفظ بنسخة احتياطية قبل المتابعة.');}setReady(true);},[]);
const save=(next:AppState)=>{try{localStorage.setItem(KEY,JSON.stringify(next));setError('');}catch{setError('تعذر حفظ البيانات على الجهاز؛ صدّر نسخة احتياطية الآن.');}return next;};
const update=(fn:(s:AppState)=>AppState)=>setState(s=>save(fn(s)));
useEffect(()=>{const timer=setInterval(()=>{const end=state.timer.end;if(end&&end<=Date.now()&&lastEnd.current!==end){lastEnd.current=end;if(state.settings.vibrate&&navigator.vibrate)navigator.vibrate([200,100,200]);if(state.settings.sound){try{const audio=new AudioContext();const osc=audio.createOscillator();const gain=audio.createGain();gain.gain.value=.08;osc.connect(gain);gain.connect(audio.destination);osc.start();osc.stop(audio.currentTime+.3);osc.onended=()=>void audio.close();}catch{}}update(s=>({...s,timer:{...s.timer,end:null,remaining:0}}));}},500);return()=>clearInterval(timer);},[state.timer.end,state.settings.sound,state.settings.vibrate]);
return <Context.Provider value={{state,ready,error,update,replace:s=>setState(save(s))}}>{children}</Context.Provider>;}
export function useIron(){const c=useContext(Context);if(!c)throw new Error('IronProvider missing');return c;}
