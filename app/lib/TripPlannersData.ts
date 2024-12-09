import rome from '../../public/rome-tour.jpg'
import paris from '../../public/paris-tour.jpg'
import barcelona from '../../public/barcelona-tour.jpg'
import budapest from '../../public/budapest-tour.jpg'
import { StaticImageData } from 'next/image'; 


type TripPlans = {
    src:  StaticImageData;
    place: string
    days: number
    price: number
}

const TripPlannersData: TripPlans[] = [
    {
        src: rome,
        place: "Rome City Tour",
        days: 7,
        price: 99

    },
    {
        src: paris,
        place: "Paris City Tour",
        days: 5,
        price: 120

    },
    {
        src: barcelona,
        place: "Barcelona City Tour",
        days: 10,
        price: 60
    },
    {
        src: budapest,
        place: "Budapest City Tour",
        days: 7,
        price: 50

    },
    
]

export default TripPlannersData