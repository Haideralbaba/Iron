import {createFileRoute} from '@tanstack/react-router';
import {Progress} from '@/features/iron/insights';
import {pageHead} from '@/features/iron/metadata';
export const Route=createFileRoute('/progress')({head:()=>pageHead('التقدم والسجل','سجل الجلسات ورسوم تطور الحمل والحجم التدريبي.'),component:Progress});
