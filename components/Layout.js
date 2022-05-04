import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return ( 
    <div className="container p-4 max-w-5xl">
      <Navbar />
      { children}
      <Footer />
    </div>
  );
}
 
export default Layout;