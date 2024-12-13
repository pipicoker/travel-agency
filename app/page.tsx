'use client'
import Header from "./ui/Header";
import Hero from "./ui/Hero";
import {Rubik} from 'next/font/google'
import PopularDestination from "./ui/PopularDestination";
import SpecialOffer from "./ui/SpecialOffer";
import Blog from "./ui/Blog";
import TripPlanners from "./ui/TripPlanners";
import DestinationGallery from "./ui/DestinationGallery";
import TravellersExperience from "./ui/TravellersExperience";
import Newsletter from "./ui/Newsletter";
import Footer from "./ui/Footer";


const rubik = Rubik({
    weight: '400',
    subsets: ['latin']
})

export default function Home() {
  return (
    <div 
    
    
    className={rubik.className}>
      
      <div id='home' className="w-screen bg-hero-bg-mobile md:bg-hero-bg-desktop bg-no-repeat bg-cover">
        <div className="bg-[#000000] bg-opacity-30 px-4 lg:px-[90px]">
          <Header />
          <Hero />
        </div>
       
      </div>

    <div 
    
    className="bg-[#FFFFFF]">
      <PopularDestination />
        <SpecialOffer />
        <Blog />
        <TripPlanners />
        <DestinationGallery />
        <TravellersExperience />

        <div className="relative">
          <div className="-mb-12 md:-mb-16 ">
            <Newsletter />
          </div>
          <Footer />
        </div>
    </div>
      
      
      
    </div>
  );
}
