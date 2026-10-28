import {createFileRoute} from '@tanstack/react-router';
import {LiveSession} from '@/features/iron/training';
import {pageHead} from '@/features/iron/metadata';
export const Route=createFileRoute('/session')({head:()=>pageHead('الجلسة المباشرة','سجل الأوزان والتكرارات لكل مجموعة واستأنف جلستك على جهازك.'),component:LiveSession});
