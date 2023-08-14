import Footer from '../components/Footer';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import NewsLetter from '../components/NewsLetter';
import OurPartners from '../components/OurPartners';
import OurTeam from '../components/OurTeam';
import Service from '../components/Services';

export default function Home() {
  return (
    <div className=" flex flex-col w-full h-auto font-[Poppins] sm:bg-blue-400 md:bg-orange-300 lg:bg-green-200 xl:bg-red-300">
      <div className=" flex flex-col h-screen w-full">
        <NavBar />
        <Hero />
      </div>
      <div className="flex flex-col gap-20 md:gap-36 px-[7%]">
        <Service />
        <OurTeam />
        <OurPartners />
        <NewsLetter />
      </div>
      <Footer />
    </div>
  );
}
