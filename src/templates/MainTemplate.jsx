import Navbar from '../components/Navbar'

const MainTemplate = ({ children }) => (
    <div className="bg-slate-300 flex min-h-screen">
        <Navbar />
        <div>{children}</div>
    </div>
)

export default MainTemplate
