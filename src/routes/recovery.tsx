import {createFileRoute} from '@tanstack/react-router';
import {Recovery} from '@/features/iron/personal';
import {pageHead} from '@/features/iron/metadata';
export const Route=createFileRoute('/recovery')({head:()=>pageHead('التعافي والإحماء','سجل النوم والتعب والانزعاج وراجع خطوات الإحماء.'),component:Recovery});
