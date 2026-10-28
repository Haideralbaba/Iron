import {createFileRoute} from '@tanstack/react-router';
import {Plan} from '@/features/iron/training';
import {pageHead} from '@/features/iron/metadata';
export const Route=createFileRoute('/plan')({head:()=>pageHead('الجدول الأسبوعي','برنامج ستة أيام قابل للتعديل مع الجمعة للراحة.'),component:Plan});
