import {FC} from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '@/store/store';
import '@/styles/main.scss'

const MyApp: FC = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);