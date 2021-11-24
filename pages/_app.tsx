import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles/GlobalStyles';
import ProgressBar from '@badrap/bar-of-progress';
import { theme } from '@styles/theme';
import '../src/styles/globals.css';
import router from 'next/router';

const progress = new ProgressBar({
	size: 4,
	color: '#FD5B61',
	className: 'z-50',
	delay: 100,
});

router.events.on('routeChangeStart', progress.start);
router.events.on('routeChangeComplete', progress.finish);
router.events.on('routeChangeError', progress.finish);

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};
export default MyApp;
