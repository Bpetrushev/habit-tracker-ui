import Header from '@/components/layout/public/Header';
import Footer from '@/components/layout/public/Footer';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PublicLayout;
