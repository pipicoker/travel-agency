import berlin from '../../public/berlin.jpg'
import london from '../../public/london.jpg'
import italy from '../../public/italy.jpg'
import lisbon from '../../public/lisbon.jpg'
import { StaticImageData } from 'next/image'; 


type PopulatItem = {
    src: string | StaticImageData;
    name: string;
    place: string
}

const PopularDestinationData: PopulatItem[] = [
    {
        src: berlin,
        name: "Monument of Berlin",
        place: "Berlin, Germany"

    },
    {
        src: london,
        name: "Millennium Bridge",
        place: "London, United Kingdom"

    },
    {
        src: italy,
        name: "Rialto Bridge",
        place: "Venice, Italy"

    },
    {
        src: lisbon,
        name: "Sea of Orange Tiles",
        place: "Lisbon, Portugal"

    },
    {
        src: berlin,
        name: "Monument of Berlin",
        place: "Berlin, Germany"

    },
    {
        src: london,
        name: "Millennium Bridge",
        place: "London, United Kingdom"

    },
]

export default PopularDestinationData