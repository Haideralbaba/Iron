import {createFileRoute} from '@tanstack/react-router';
import {Dashboard} from '@/features/iron/dashboard';
import {pageHead} from '@/features/iron/metadata';
export const Route=createFileRoute('/')({head:()=>pageHead('الرئيسية','لوحة تدريبك العربية: تمرين اليوم، الجلسات المكتملة والتغطية الأسبوعية.'),component:Dashboard});
