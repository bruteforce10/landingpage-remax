import About from "@/components/fragments/about";
import Header from "@/components/fragments/header";
import Navbar from "@/components/fragments/Navbar";
import TopNavbar from "@/components/fragments/navbarTop";
import Whyme from "@/components/fragments/whyme";
import Open_sans from "@/services/FontSecondary";

export default function Home() {
  return (
    <main className={`min-h-screen ${Open_sans.className}  relative`}>
      <div className="top-0 z-10 sticky ">
        <TopNavbar />
        <Navbar />
      </div>
      <Header />
      <About />
      <Whyme />
    </main>
  );
}
