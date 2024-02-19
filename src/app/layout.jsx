import "./style.css"
import "./animate.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import BottomToTop from "@/components/bottom-to-top";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import BootstrapClient from "@/components/bootstrapclient";


export const metadata = {
  title: "BetaSource.tech",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <Navbar/>
        {children}
        <BootstrapClient/>
        <Footer/>
        <BottomToTop/>
        </body>
    </html>
  );
}