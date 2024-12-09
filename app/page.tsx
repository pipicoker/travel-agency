import Image from "next/image";
import Header from "./ui/Header";
import Hero from "./ui/Hero";
import {Rubik} from 'next/font/google'
import PopularDestination from "./ui/PopularDestination";
import SpecialOffer from "./ui/SpecialOffer";
import Blog from "./ui/Blog";
import TripPlanners from "./ui/TripPlanners";
import DestinationGallery from "./ui/DestinationGallery";
import TravellersExperience from "./ui/TravellersExperience";

const rubik = Rubik({
    weight: '400',
    subsets: ['latin']
})

export default function Home() {
  return (
    <div className={rubik.className}>
      
      <div className="bg-hero-bg-mobile md:bg-hero-bg-desktop px-4 lg:px-[90px]">
        <Header />
        <Hero />
      </div>

      <PopularDestination />
      <SpecialOffer />
      <Blog />
      <TripPlanners />
      <DestinationGallery />
      <TravellersExperience />
    </div>
  );
}
