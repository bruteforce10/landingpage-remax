import About from "@/components/fragments/about";
import Header from "@/components/fragments/header";
import Navbar from "@/components/fragments/Navbar";
import TopNavbar from "@/components/fragments/navbarTop";
import BankPartners from "@/components/fragments/BankPartners";
import Open_sans from "@/services/FontSecondary";
import dynamic from "next/dynamic";
import WhyMe from "@/components/fragments/WhyMe";

export default function Home({ dataFetch }) {
  const HeaderNoSSR = dynamic(() => import("@/components/fragments/header"), {
    ssr: false,
  });

  const AboutNoSSR = dynamic(() => import("@/components/fragments/about"), {
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
