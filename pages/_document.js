import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MDNJWG6');`}}></Script>


<script async src="https://www.googletagmanager.com/gtag/js?id=G-CBT2Y5HKH3"></script>
<Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-CBT2Y5HKH3');`}}></Script>
        </Head>

        <body>

        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MDNJWG6"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>

          <Main />
          <NextScript />
          <div classname="npf_chatbots" data-w="c5d5c2ced1d146ffa3047d6adc4aaa71" style={{display: 'none'}} />
          <script
            src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossOrigin="anonymous"
          ></script>
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script> */}
          <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
          <script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
          {/* <script src="/js/custome.js?v=4"></script> */}
          
          <script type="text/javascript"> var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.in5.nopaperforms.com/emwgts.js"; document.body.appendChild(s); </script>
          <script type="text/javascript"> var s=document.createElement("script");    s.type="text/javascript";    s.async=true;    s.src="https://chatbot.in5.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/515762061aa74833e/c5d5c2ced1d146ffa3047d6adc4aaa71";    document.body.appendChild(s);</script> 
        </body>
      </Html>
    )
  }
}

export default MyDocument
