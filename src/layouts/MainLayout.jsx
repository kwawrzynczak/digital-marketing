import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
  console.log(children);
  return (
    <div className="flex min-h-screen flex-col bg-blue-100">
      <Navbar />

      <div className="w-9/12 self-center bg-[url('bg.jpg')] bg-cover px-12 py-[120px]">
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
