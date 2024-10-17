'use client';

import {MoonIcon, SunIcon} from 'lucide-react';
import { Button } from '../ui/Button';
import { useTheme } from './theme-provider';

export function ModeToggle() {
	const {setTheme, theme} = useTheme();

	return (
		<Button
			className="rounded-full w-20 h-20 bg-background border-none dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent "
			variant="outline"
			size="icon"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			<SunIcon className="w-[1.5rem] h-[1.5rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100" />
			<MoonIcon className="absolute w-[1.5rem] h-[1.5rem] rotate-0 scale-1000 transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0" />
			<span className="sr-only">Switch Theme</span>
		</Button>
	);
}