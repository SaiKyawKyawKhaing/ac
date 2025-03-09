
import Vision from '@/components/Vision';
import Footer from '@/components/layouts/Footer.js';
import Header from '@/components/layouts/Header.js';
import ManinBanner from '@/components/layouts/MainBanner.js';
import Product from '@/components/Products';
import Service from '@/components/Service';
import Choose from '@/components/Choose';
import Contact from '@/components/Contact';
import ContactForm from '@/components/ContactForm';
import AboutUs from '@/components/AboutUs';

export default function Home() {
  return (
    <>
      <div className="index-page">
      <Header/>
      <ManinBanner/>
      <AboutUs/>
      <Vision/>
      <Service/>
      <Choose/>
      <Contact/>
      </div>
        <Footer/>
    </>
  );
}
