import React from 'react'
import Detail from './Detail'
import i12black from './i12black.jpg'
import i12white from './i12white.jpg'
import i12purple from './i12purple.jpg'
import nord2t from './nord2t.jpg'
import bzBlack from './bzBlack.jpg'
import bzBlue from './bzBlue.jpg'
import bzRed from './bzRed.jpg'
import nothingblack from './nothingblack.webp'
import nothingWhite from './nothingWhite.webp'
import m13black from './m13black.jpg'
import redmi9act from './redmi9act.jpg'
import k10 from './k10.webp'


export default function Home() {
    // const [data,setData] = useState()
    const data = [
        
        {
            heading: "Apple iPhone 12",
            rate: "Sold Out",
            colour: "Black",
            storage: "128 GB",
            img: i12black,
            message:"Apple iPhone 12 - 128 - Black"


        },
        {
            heading: "Apple iPhone 12",
            rate: "Sold Out",
            colour: "Purple",
            storage: "128 GB",
            img: i12purple,
            message:"Apple iPhone 12 - 128 - Purple"
            

        },
        {
            heading: "Apple iPhone 12",
            rate: "51,499",
            colour: "White",
            storage: "128 GB",
            img: i12white,
            message:"Apple iPhone 12 - 128 - White"

        },
        {
            heading: "OnePlus Nord 2T",
            rate: "30,499 Rs",
            colour: "Jade Fog",
            storage: "12+256 GB",
            img: nord2t,
            message:"Nord 2T 12+256- Jade Fog"

        },
        {
            heading: "Oppo k10 5G",
            rate: "15,999 Rs",
            colour: "Blue",
            storage: "6+128 GB",
            img: k10,
            message:"oppo k10 5g"

        },
        {
            heading: "redmi 9 active",
            rate: "7899 Rs",
            colour: "Black",
            storage: "4+64 GB",
            img: redmi9act,
            message:"redmi 9 active"

        },
        {
            heading: "Samsung m13",
            rate: "9499 Rs",
            colour: "Black",
            storage: "4+64 GB",
            img: m13black,
            message:"M13 Black 4+64"

        },
        {
            heading: "Nothing Phone",
            rate: "30999 Rs",
            colour: "White",
            storage: "8+256 GB",
            img: nothingWhite,
            message:"Nothing Phone white"

        },
        {
            heading: "Nothing Phone",
            rate: "30999 Rs",
            colour: "Black",
            storage: "8+256 GB",
            img: nothingblack,
            message:"Nothing Phone Black"

        },
        {
            heading: "Oneplus Bullets Z2 Earphones",
            rate: "1649 Rs",
            colour: "Black",
            storage: null,
            img: bzBlack,
            message:"Bullets Z2 Black"

        },
        {
            heading: "Oneplus Bullets Z2 Earphones",
            rate: "1649 Rs",
            colour: "Red",
            storage: null,
            img: bzRed,
            message:"Bullets Z2 Red"

        },
        {
            heading: "Oneplus Bullets Z2 Earphones",
            rate: "1649 Rs",
            colour: "Blue",
            storage: null,
            img: bzBlue,
            message:"Bullets Z2 Blue"

        }

    ]




    return (

        <div className='container'>
            {data.map((idx) => (
                <Detail data={idx}></Detail>
            ))
            }
        </div>
    )
}
