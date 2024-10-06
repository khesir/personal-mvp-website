/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

import '../../css/markdown.css'
import { useCustomBanner } from '@/hooks/useCustomBanner';

export function ReadPage() {
  const { setImageUrl } = useCustomBanner();

  const { id } = useParams();
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://personal-backend-psi.vercel.app/blogs/${id}`);
        setMarkdown(response.data.result.parent);
      } catch (err) {
        console.error(err);
        setError('Failed to load content');
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='markdown-body'>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
