import React, { useState } from 'react'
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



export default function Home() {
    // const [data,setData] = useState()
    const data = [
        {
            heading: "Apple iPhone 12",
            rate: "50,750 Rs",
            colour: "White",
            storage: "128 GB",
            img: i12white,
            message:"Apple iPhone 12 - 128 - White"

        },
        {
            heading: "Apple iPhone 12",
            rate: "50,750 Rs",
            colour: "Black",
            storage: "128 GB",
            img: i12black,
            message:"Apple iPhone 12 - 128 - Black"


        },
        {
            heading: "Apple iPhone 12",
            rate: "50,750 Rs",
            colour: "Purple",
            storage: "128 GB",
            img: i12purple,
            message:"Apple iPhone 12 - 128 - Purple"
            

        },
        {
            heading: "OnePlus Nord 2T",
            rate: "30,750 Rs",
            colour: "Jade Fog",
            storage: "8+128 GB",
            img: nord2t,
            message:"Nord 2T 8-128 - Jade Fog"

        },
        {
            heading: "Nothing Phone",
            rate: "30799 Rs",
            colour: "White",
            storage: "8+256 GB",
            img: nothingWhite,
            message:"Nothing Phone white"

        },
        {
            heading: "Nothing Phone",
            rate: "30799 Rs",
            colour: "Black",
            storage: "8+256 GB",
            img: nothingblack,
            message:"Nothing Phone Black"

        },
        {
            heading: "Oneplus Bullets Z2 Earphones",
            rate: "1599 Rs",
            colour: "Black",
            storage: null,
            img: bzBlack,
            message:"Bullets Z2 Black"

        },
        {
            heading: "Oneplus Bullets Z2 Earphones",
            rate: "1599 Rs",
            colour: "Red",
            storage: null,
            img: bzRed,
            message:"Bullets Z2 Red"

        },
        {
            heading: "Oneplus Bullets Z2 Earphones",
            rate: "1599 Rs",
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
