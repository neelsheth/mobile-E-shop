import React, { useEffect, useRef, useState } from 'react'
import Detail from './Detail'


export default function Home() {
    const [data, setData] = useState(null)
    const [serch, setSerch] = useState("")
    const serchRef = useRef()

    useEffect(() => {
        fetch("mobile.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const serchItm = () => {
        var input = serchRef.current.value
        setSerch(input.toLowerCase())
    }

    return (
        <>
            <div className='serch'>
                <input ref={serchRef}></input>
                <button className='serchbtn' onClick={serchItm}>Serch</button>
                <button className='serchbtn' onClick={() => setSerch("")}>Show all</button>

            </div>

            <div className='container'>

                {data !== null && data.map((idx) => (
                    <>
                        {idx.heading.includes(serch) &&
                            <Detail data={idx}></Detail>}
                    </>
                ))
                }
            </div>
        </>

    )
}
