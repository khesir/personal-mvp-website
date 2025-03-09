import {useLocation} from 'react-router-dom';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from './ui/breadcrumb';
import {capitalizeFirstLetter} from '@/lib/utils';
import React from 'react';

export const Breadcrumbs = () => {
	const location = useLocation();
	const pathSegments = location.pathname.split('/').filter(Boolean);

	// Exclude the last path segment for the breadcrumb list
	const breadcrumbItems = pathSegments.slice(0, -1).map((segment, index) => {
		const title = capitalizeFirstLetter(segment.replace(/-/g, ' ')); // Capitalize the first letter and replace hyphens with spaces
		const link = '/' + pathSegments.slice(0, index + 1).join('/');

		return {title, link, key: `${title}-${index}`}; // Ensure unique keys
	});

	// Combine breadcrumbs
	const breadcrumbs = [{title: 'Home', link: '/'}, ...breadcrumbItems];

	return (
		<Breadcrumb>
			<BreadcrumbList>
				{breadcrumbs.map((item, index) => (
					<React.Fragment key={index}>
						{index !== breadcrumbs.length - 1 && (
							<BreadcrumbItem>
								<BreadcrumbLink href={item.link}>{item.title}</BreadcrumbLink>
							</BreadcrumbItem>
						)}
						{index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
						{index === breadcrumbs.length - 1 && (
							<BreadcrumbPage>{item.title}</BreadcrumbPage>
						)}
					</React.Fragment>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
};
