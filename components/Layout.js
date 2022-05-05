import Navigator from "./navigator/Navigator";
import Footer from "./footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navigator />
      {children}
      <Footer />
    </>
  );
}
