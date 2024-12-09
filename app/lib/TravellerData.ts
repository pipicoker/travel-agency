import traveller1 from '../../public/traveller-1.png'
import traveller2 from '../../public/traveller-2.png'
import traveller3 from '../../public/traveller-3.png'
import { StaticImageData } from 'next/image'; 


type TravelData = {
    src:  StaticImageData;
    name: string
    title: string
}

const TravellerData: TravelData[] = [
    {
        src: traveller1,
        name: "John Doe",
        title: "Accountant"

    },
    {
        src: traveller2,
        name: "John Smith",
        title: "Journalist, HWO News"

    },
    {
        src: traveller3,
        name: "Tamara bellis",
        title: "Managing Director, JT"
    },
    {
        src: traveller1,
        name: "John Doe",
        title: "Accountant"

    },
    {
        src: traveller2,
        name: "John Smith",
        title: "Journalist, HWO News"

    },
    
]

export default TravellerData