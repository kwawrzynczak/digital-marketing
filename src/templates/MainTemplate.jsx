import Navbar from '../components/Navbar';

const MainTemplate = ({ children }) => {
  console.log(children);
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <Navbar />

      <div className="w-8/12 self-center px-12 py-20">{children}</div>
    </div>
  );
};

export default MainTemplate;
