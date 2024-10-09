/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

import '../../css/markdown.css'
import { useCustomBanner } from '@/hooks/useCustomBanner';
import { usePathname } from '@/hooks/use-pathname-store';

interface ReadpageProps {
  name: string;
}

export function ReadPage({name}: ReadpageProps) {
  const { setImageUrl } = useCustomBanner();
  const location = useLocation();
  const {setPathname} = usePathname();

  const { id } = useParams();
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname, setPathname]); 

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://personal-backend-psi.vercel.app/${name}/${id}`);
        setMarkdown(response.data.result.parent);
        setImageUrl('')
      } catch (err) {
        console.error(err);
        setError('Failed to load content');
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, [id, name, setImageUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='prose prose-gray'>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
