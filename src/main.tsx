import {Analytics} from '@vercel/analytics/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './app/app.tsx';
import {ThemeProvider} from './components/providers/theme-provider.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		{import.meta.env.VITE_MODE === 'development' ? (
			<ThemeProvider>
				<App />
			</ThemeProvider>
		) : (
			<ThemeProvider>
				<App />
				<Analytics />
			</ThemeProvider>
		)}
	</React.StrictMode>,
);
