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
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { Skeleton } from '@/components/ui/skeleton';

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
  const [loading, setLoading] = useState<boolean>();
  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname, setPathname]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://personal-backend-psi.vercel.app/${name}/${searchParams.get('id')}`);
        console.log(response)
        console.log(response.data.result.data)
        setMarkdown(response.data.result.markdown);
        setData(response.data.result.data)
      } catch (err) {
        console.error(err);
        setError('Failed to load content');
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, [name, searchParams, setImageUrl]);

  if (error) {
    return <div className='font-bold text-3xl dark:text-white'>{error}</div>;
  }

  if (!data || !markdown || loading) {
    const skeletons = generateRandomSkeletons(10); // Change the count to your desired number of skeletons
    console.log(skeletons)
    return (
      <div className='flex flex-col gap-3'>
        <Skeleton className="h-6 w-[400px] dark:bg-slate-700" />
        <Skeleton className="h-[50px] w-full dark:bg-slate-700" />
        <Skeleton className="h-6 w-[300px] dark:bg-slate-700" />
        <div className="gap-5 flex flex-col">
          {skeletons.map((skeleton, index) => (
            <Skeleton 
              key={index} 
              style={{
                height: `${skeleton.height}px`,
                width: `${skeleton.width}px`,
              }} 
              className={`dark:bg-slate-700`} 
            />
          ))}
      </div>
    </div>
    )
  }
  
  return (
    <div>
      <div className='flex flex-col gap-3'>
        <Breadcrumbs />
        <h1 className='font-bold text-3xl dark:text-white'>{data?.properties?.Name?.title[0].plain_text}</h1>
        <div className='flex gap-2 font-semibold text-md hover:underline text-blue-600 dark:text-blue-400'>
          <p>{data.properties['Released Date']?.date?.start ? dateParser(data?.properties['Released Date'].date.start) : 'In progress'}</p>
          <span>/</span>
          <span>Read Time: {data?.properties['Min']?.number ? data?.properties['Min']?.number : 'Not set'} mins</span>
        </div>
      </div>
      <div className='prose prose-gray dark:prose-invert max-w-full flex flex-col'>
        <ReactMarkdown 
          className='w-full' 
          rehypePlugins={[rehypeRaw]} // Enable raw HTML rendering
          remarkPlugins={[remarkGfm]} // Enable GitHub-flavored markdown features
          components={{
            a: ({ href, children }) => {
              // Check if the link text is 'video' and the link is a video URL
              if (Array.isArray(children) && children[0] === 'video' && isVideoLink(href)) {
                return href ? <VideoComponent src={href} /> : null;
              }
              // Otherwise, return a normal link
              return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
            },
            blockquote: ({ node, ...props }) => {
              const hasTwitterClass = node && Array.isArray(node.properties?.className) && node.properties?.className.includes('twitter-tweet');
              const firstChild = node?.children[0];
              const tweetId = firstChild && 'properties' in firstChild && typeof firstChild.properties?.href === 'string' && firstChild.properties.href.split('/status/')[1];

              if (hasTwitterClass && tweetId) {
                return <TwitterEmbed tweetId={tweetId} />;
              }

              return <blockquote {...props} />;
            },
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}
const isVideoLink = (url: string | string[] | undefined) => {
  return url ? url.includes('youtube.com') || url.includes('vimeo.com') : false; // Add more video platforms if needed
};

const VideoComponent = ({ src }: { src: string }) => {
  return (
    <div className="video-container">
      <iframe
        width="100%"
        height="315"
        src={src}
        title="Video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const TwitterEmbed = ({ tweetId }: { tweetId: string }) => {
  useEffect(() => {
    // Load Twitter's embed script
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    script.setAttribute('async', 'true');
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, [tweetId]);

  return (
    <blockquote className="twitter-tweet">
      <a href={`https://twitter.com/x/status/${tweetId}`}></a>
    </blockquote>
  );
};
const generateRandomSkeletons = (count: number) => {
  return Array.from({ length: count }, () => ({
    width: Math.floor(Math.random() * 600) + 100, // Random width between 100px and 700px
    height: Math.floor(Math.random() * 100) + 20, // Random height between 20px and 120px
  }));
};

