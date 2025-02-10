// _app.js
import "@/styles/globals.css";
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
      <Script src="/assets/vendor/php-email-form/validate.js" />
      <Script src="/assets/vendor/aos/aos.js" />
      <Script src="/assets/vendor/glightbox/js/glightbox.min.js" />
      <Script src="/assets/vendor/swiper/swiper-bundle.min.js" />
      <Script src="/assets/js/main.js" />
    </>
  );
}