import {createFileRoute} from '@tanstack/react-router';
import {Library} from '@/features/iron/library';
import {pageHead} from '@/features/iron/metadata';
export const Route=createFileRoute('/library/')({head:()=>pageHead('مكتبة التمارين','تمارين مصورة مع بحث عربي وإنجليزي وفلاتر العضلات والمعدات.'),component:Library});
