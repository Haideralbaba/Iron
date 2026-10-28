import {createFileRoute} from '@tanstack/react-router';
import {Muscles} from '@/features/iron/insights';
import {pageHead} from '@/features/iron/metadata';
export const Route=createFileRoute('/muscles')({head:()=>pageHead('مستكشف العضلات','وظائف العضلات وتمارينها وتغطيتها من سجل التدريب الفعلي.'),component:Muscles});
