import {createFileRoute} from '@tanstack/react-router';
import {Detail} from '@/features/iron/library';
import {EXERCISE_BY_ID} from '@/data/exercises';
import {pageHead} from '@/features/iron/metadata';
export const Route=createFileRoute('/library/$id')({head:({params})=>pageHead(EXERCISE_BY_ID[params.id]?.ar??'تمرين غير موجود',EXERCISE_BY_ID[params.id]?.desc??'تفاصيل التمرين في IRON SYSTEM'),component:ExercisePage});
function ExercisePage(){const {id}=Route.useParams();return <Detail id={id}/>;}
