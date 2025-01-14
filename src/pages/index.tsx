import Layout from '../components/Layout';
import TeachersSection from '../components/sections/TeachersSection';
import AboutSmartLandSection from '@/components/sections/AboutSmartLandSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ResultsSection from '@/components/sections/ResultsSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ContactsSection from '@/components/sections/ContactsSection';
import PricesSection from '@/components/sections/PricesSection';

export default function Home() {
  return (
    <Layout>
      <AboutSmartLandSection />
      <ServicesSection />
      <PricesSection />
      <TeachersSection />
      <ResultsSection />
      <ReviewsSection />
      <ContactsSection />
    </Layout>
  );
}