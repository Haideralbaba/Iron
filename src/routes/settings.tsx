import {createFileRoute} from '@tanstack/react-router';
import {Settings} from '@/features/iron/personal';
import {pageHead} from '@/features/iron/metadata';
export const Route=createFileRoute('/settings')({head:()=>pageHead('الإعدادات','خصص بياناتك ووحدة الأوزان والمعدات وتنبيهات المؤقت.'),component:Settings});
