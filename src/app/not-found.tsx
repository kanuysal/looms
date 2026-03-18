import { Metadata } from 'next';
import ErrorMain from '@/app-pages/department-pages/error/error-main'
 
export const metadata: Metadata = {
  title: "INTERLOOMS - Not Found Page",
};

export default function NotFound() {
  return (
    <ErrorMain/>
  )
}
