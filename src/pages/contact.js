import Footer from '@/components/layouts/Footer.js';
import Header from '@/components/layouts/Header.js';
import Banner from '@/components/layouts/Banner.js';
import ContactForm from '@/components/ContactForm.js';
import { useRouter } from 'next/router';

export default function Contact() {
  const { basePath } = useRouter();
  return (
    <>
      <div className="index-page">
      <Header />
      <Banner
        title="Contact Us"
        description="Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias."
        breadcrumbs={[
          { href: '/', text: 'Home' },
          { href: `${basePath}/contact`, text: 'Contact Us', current: true },
        ]}
      />
      <ContactForm/>
      </div>
        <Footer/>
    </>
  );
}
