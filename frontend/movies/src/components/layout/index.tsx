import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col relative pb-10">
      <Header /> 
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
