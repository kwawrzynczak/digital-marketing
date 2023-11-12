import Navbar from '../components/Navbar';

const MainTemplate = ({ children }) => (
  <div className="flex min-h-screen bg-slate-400">
    <Navbar />
    <div>{children}</div>
  </div>
);

export default MainTemplate;
