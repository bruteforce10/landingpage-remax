import Header from "@/components/fragments/Header";
import Navbar from "@/components/fragments/Navbar";
import TopNavbar from "@/components/fragments/TopNavbar";
import Open_sans from "@/services/FontSecondary";

export default function Home() {
  return (
    <main className={`min-h-screen  ${Open_sans.className}`}>
      <TopNavbar />
      <Navbar />
      <Header />
    </main>
  );
}
