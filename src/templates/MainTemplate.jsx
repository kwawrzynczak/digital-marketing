import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainTemplate = ({ children }) => {
  console.log(children);
  return (
    <div className="flex min-h-screen flex-col justify-between bg-slate-200">
      <Navbar />

      <div className="w-8/12 self-center px-12 py-[120px]">{children}</div>

      <Footer />
    </div>
  );
};

export default MainTemplate;
