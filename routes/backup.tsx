import {createFileRoute} from '@tanstack/react-router';
import {Backup} from '@/features/iron/personal';
import {pageHead} from '@/features/iron/metadata';
export const Route=createFileRoute('/backup')({head:()=>pageHead('النسخ الاحتياطي','صدّر واستورد سجل تدريبك واطبع برنامجك الأسبوعي.'),component:Backup});
