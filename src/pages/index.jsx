import Navbar from "@/components/fragments/Navbar.jsx";
import TopNavbar from "@/components/fragments/NavbarTop.jsx";
import BankPartners from "@/components/fragments/BankPartners.jsx";
import Open_sans from "@/services/FontSecondary";
import dynamic from "next/dynamic";
import WhyMe from "@/components/fragments/Whyme.jsx";

export default function Home({ dataFetch }) {
  const HeaderNoSSR = dynamic(
    () => import("@/components/fragments/Header.jsx"),
    {
      ssr: false,
    }
  );

  const AboutNoSSR = dynamic(() => import("@/components/fragments/About.jsx"), {
    ssr: false,
  });

  return (
    <main className={`min-h-screen ${Open_sans.className}  relative`}>
      <div className="top-0 z-[99] sticky ">
        <TopNavbar {...dataFetch} />
        <Navbar {...dataFetch} />
      </div>
      <HeaderNoSSR {...dataFetch} />
      <AboutNoSSR {...dataFetch} />
      <BankPartners {...dataFetch} />
      <WhyMe {...dataFetch} />
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/data");
  const data = await res.json();

  return { props: { dataFetch: data.data } };
}
