/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {useEffect, useState} from 'react';
import {useLocation, useSearchParams} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import '../../../css/markdown.css';
import {useCustomBanner} from '@/hooks/useCustomBanner';
import {usePathname} from '@/hooks/use-pathname-store';
import {Breadcrumbs} from '@/components/breadcrumbs';
import {dateParser} from '@/lib/utils';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import {Skeleton} from '@/components/ui/skeleton';
import {Tweet} from 'react-twitter-widgets';
import {fetchProjectsByID} from '@/app/api/projects';
import {toast} from 'sonner';
import {fetchBlogsByID} from '@/app/api/blogs';
import rehypeSanitize from 'rehype-sanitize';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {xonokai as Xonokai} from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ReadpageProps {
	name: string;
}

export function ReadPage({name}: ReadpageProps) {
	const {setImageUrl} = useCustomBanner();
	const location = useLocation();
	const {setPathname} = usePathname();

	const [searchParams] = useSearchParams();
	const [markdown, setMarkdown] = useState('');
	const [error, setError] = useState<string | null>(null);
	const [data, setData] = useState<any>('');
	const [loading, setLoading] = useState<boolean>();
	useEffect(() => {
		setPathname(location.pathname);
	}, [location.pathname, setPathname]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const id = searchParams.get('id');
				if (id === null) {
					toast.error('Missing ID - Data not found');
					return;
				}
				let response;
				switch (name) {
					case 'projects':
						response = await fetchProjectsByID(id);
						break;
					case 'blogs':
						response = await fetchBlogsByID(id);
						break;
				}
				if (response === null) return;
				setMarkdown(response.markdown);
				setData(response.data);
			} catch (err) {
				console.error(err);
				setError('Failed to load content');
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [name, searchParams, setImageUrl]);

	if (error) {
		return <div className="font-bold text-3xl dark:text-white">{error}</div>;
	}

	if (!data || (!markdown && loading)) {
		const skeletons = generateRandomSkeletons(10); // Change the count to your desired number of skeletons
		return (
			<div className="flex flex-col gap-3">
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
		);
	}

	return (
		<>
			<div>
				<div className="flex flex-col gap-3">
					<Breadcrumbs />
					<h1 className="font-bold text-3xl dark:text-white">
						{data?.properties?.Name?.title[0].plain_text}
					</h1>
					<div className="flex gap-2 font-semibold text-md hover:underline text-blue-600 dark:text-blue-400">
						<span>
							{data.properties['Released Date']?.date?.start
								? dateParser(data?.properties['Released Date'].date.start)
								: 'In progress'}
						</span>
						<span>/</span>
						<span>
							Read Time:{' '}
							{data?.properties['Min']?.number
								? data?.properties['Min']?.number
								: 'Not set'}{' '}
							mins
						</span>
					</div>
				</div>
				<div className="prose dark:prose-invert prose-gray max-w-full flex flex-col">
					<MarkDownComponent markdown={markdown} />
				</div>
			</div>
		</>
	);
}

export const isTweetLink = (url: string | string[] | undefined) => {
	return typeof url === 'string' && url.includes('x.com/khesirr/status/');
};

export const getTweetId = (url: string) => {
	const tweetIdMatch = url.match(/status\/(\d+)/);
	return tweetIdMatch ? tweetIdMatch[1] : null;
};

export const isVideoLink = (url: string | string[] | undefined) => {
	const videoExtensions = /\.(mp4|m4p|webm|ogv|mov)(\?.*)?$/i;

	return (
		typeof url === 'string' &&
		(url.includes('youtube.com') ||
			url.includes('vimeo.com') ||
			videoExtensions.test(url))
	); // Checks for video file extensions
};

export const VideoComponent = ({src}: {src: string}) => {
	// Check if the source is a video file
	if (src.match(/\.(mp4|m4p|webm|ogv|mov)(\?.*)?$/i)) {
		return (
			<div className="video-container">
				<video width="100%" height="315" controls>
					<source src={src} type={`video/${src.split('.').pop()}`} />
					Your browser does not support the video tag.
				</video>
			</div>
		);
	}

	// Otherwise, assume it's a YouTube link
	const videoId = getId(src);

	return (
		<div className="video-container">
			<iframe
				width="100%"
				height="315"
				src={`//www.youtube.com/embed/${videoId}`}
				title="Video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
	);
};
export function getId(url: string) {
	const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
	const match = url.match(regExp);

	return match && match[2].length === 11 ? match[2] : null;
}

export const generateRandomSkeletons = (count: number) => {
	return Array.from({length: count}, () => ({
		width: Math.floor(Math.random() * 600) + 100, // Random width between 100px and 700px
		height: Math.floor(Math.random() * 100) + 20, // Random height between 20px and 120px
	}));
};
export function MarkDownComponent({markdown}: {markdown: string}) {
	return (
		<ReactMarkdown
			className="w-full prose dark:prose-invert max-w-none" // Tailwind + better styling
			rehypePlugins={[rehypeRaw, rehypeSanitize]} // Enable raw HTML rendering
			remarkPlugins={[remarkGfm]} // Enable GitHub-flavored markdown features
			components={{
				h1: ({children}) => (
					<h1 className="text-3xl font-bold my-4">{children}</h1>
				),
				h2: ({children}) => (
					<h2 className="text-2xl font-semibold my-3">{children}</h2>
				),
				h3: ({children}) => (
					<h3 className="text-xl font-semibold my-2">{children}</h3>
				),
				p: ({children}) => <p className="my-2 leading-relaxed">{children}</p>,
				a: ({href, children}) => {
					// Check if the link text is 'video' and the link is a video URL
					if (isVideoLink(href)) {
						return href ? <VideoComponent src={href} /> : null;
					}
					if (isTweetLink(href)) {
						const tweetId = href ? getTweetId(href) : null;
						return tweetId ? (
							<div className="w-full mx-auto">
								<Tweet tweetId={tweetId} />
							</div>
						) : null;
					}
					// Otherwise, return a normal link
					return (
						<a href={href} target="_blank" rel="noopener noreferrer">
							{children}
						</a>
					);
				},
				img: ({src, alt}) => {
					return (
						<div className="w-full h-[400px] overflow-hidden flex items-center justify-center">
							<img
								src={src}
								alt={alt}
								style={{
									maxWidth: '100%', // Allow the image to be as wide as the container
									maxHeight: '100%', // Allow the image to be as tall as the container
									objectFit: 'contain', // Maintain aspect ratio
								}}
								className="rounded-lg shadow-md" // Additional styling
							/>
						</div>
					);
				},
				code({
					node,
					inline,
					className,
					children,
					...props
				}: {
					node?: any;
					inline?: boolean;
					className?: string;
					children?: React.ReactNode;
					[key: string]: any;
				}) {
					const match = /language-(\w+)/.exec(className || '');
					return !inline && match ? (
						<SyntaxHighlighter style={Xonokai} language={match[1]} {...props}>
							{String(children).replace(/\n$/, '')}
						</SyntaxHighlighter>
					) : (
						<code className={className} {...props}>
							{children}
						</code>
					);
				},
			}}
		>
			{markdown}
		</ReactMarkdown>
	);
}
