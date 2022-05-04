import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return ( 
    <div>
      <Navbar />
      <div className="bg-grayLight py-6">
        <div className="container p-4 max-w-5xl">
          {children}
        </div>	
      </div>
      <Footer />
    </div>
  );
}
 
export default Layout;