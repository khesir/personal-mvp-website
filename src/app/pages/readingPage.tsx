/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

import '../../css/markdown.css'
import { useCustomBanner } from '@/hooks/useCustomBanner';
import { usePathname } from '@/hooks/use-pathname-store';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { dateParser } from '@/lib/utils';

interface ReadpageProps {
  name: string;
}

export function ReadPage({name}: ReadpageProps) {
  const { setImageUrl } = useCustomBanner();
  const location = useLocation();
  const {setPathname} = usePathname();

	const [searchParams] = useSearchParams();
  const [markdown, setMarkdown] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>('')
  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname, setPathname]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://personal-backend-psi.vercel.app/${name}/${searchParams.get('id')}`);
        console.log(response.data.result.data)
        setMarkdown(response.data.result.markdown);
        setData(response.data.result.data)
      } catch (err) {
        console.error(err);
        setError('Failed to load content');
      }
    };

    fetchData();
  }, [name, searchParams, setImageUrl]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!data || !markdown ) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <div className='flex flex-col gap-3'>
        <Breadcrumbs />
        <h1 className='font-bold text-3xl'>{data?.properties?.Name?.title[0].plain_text}</h1>
        <div className='flex gap-2 font-semibold text-md hover:underline text-blue-600 dark:text-blue-400'>
          <p>{data.properties['Released Date']?.date?.start ? dateParser(data?.properties['Released Date'].date.start) : 'In progress'}</p>
          <span>/</span>
          <span>Read Time: {data.properties['Min'].number ? data.properties['Min'].number : 'Not set'}</span>
        </div>
      </div>
      <div className='prose prose-gray max-w-full flex flex-col'>
        <ReactMarkdown className='w-full'>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}
