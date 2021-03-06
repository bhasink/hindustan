import { useEffect } from 'react'
import Head from "next/head";
import {ToastProvider} from "react-toast-notifications";
import "antd/dist/antd.css";
import TagManager from 'react-gtm-module';

// import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {

    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-MDNJWG6' });
    }, []);

    useEffect(() => {
        const scriptTag1 = document.createElement('script');
        scriptTag1.src= "https://chatbot.in5.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/515762061aa74833e/c5d5c2ced1d146ffa3047d6adc4aaa71";
        scriptTag1.async = true;
        document.body.appendChild(scriptTag1);
    }, []);


    return (
    
    <>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hindustan Online - CODE</title>
        <link rel="icon" type="image/png" sizes="32x32" href="./images/hofavicon.png"></link>
                    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css?ver=5.3.2" rel="stylesheet" type="text/css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.3/animate.min.css" />
            <link href="https://kit-pro.fontawesome.com/releases/v5.11.2/css/pro.min.css?ver=5.3.2" rel="stylesheet" type="text/css" />
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&display=swap" rel="stylesheet"/>

            <link rel="stylesheet" type="text/css" href={`/style.css`} />

          

        </Head>
        
        <ToastProvider
            autoDismiss={true}
            autoDismissTimeout="2000"
            placement="bottom-right"
            style={{zIndex:"2000"}}
        >
        <Component {...pageProps} />
        </ToastProvider>
    </>
        
    );
}

export default MyApp;