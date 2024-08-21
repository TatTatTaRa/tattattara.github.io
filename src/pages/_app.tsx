import '../styles/global.css';  // 전역 스타일 시트를 가져옴
import '../styles/variable.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
