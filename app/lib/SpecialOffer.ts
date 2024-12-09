import portugal from '../../public/portugal.jpg'
import athens from '../../public/athens.jpg'
import rome from '../../public/rome.jpg'
import { StaticImageData } from 'next/image'; 


type SpecialOfferItem = {
    src:  StaticImageData;
    place: string
    description: string
    price: number
}

const SpecialOfferData: SpecialOfferItem[] = [
    {
        src: portugal,
        place: "Lisbon, Portugal",
        description: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
        price: 500

    },
    {
        src: athens,
        place: "Athens, Greece",
        description: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
        price: 800

    },
    {
        src: rome,
        place: "Rome, Italy",
        description: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
        price: 750
    },
    {
        src: portugal,
        place: "Lisbon, Portugal",
        description: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
        price: 500

    },
    {
        src: athens,
        place: "Athens, Greece",
        description: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
        price: 800

    },
]

export default SpecialOfferData