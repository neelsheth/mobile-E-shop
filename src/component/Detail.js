import React from 'react';
import './Detail.css'

export default function Detail(props) {
    
    return (
        <div >
            <div className='display'>
                <img src={props.data.img} width={180} height={200}></img>
                <div className='text'>
                    <div className='textHead'>{props.data.heading}</div>
                    {props.data.storage !== null && <div>{props.data.storage}</div> }
                    <div>{props.data.colour}</div>
                    <div>{props.data.rate}</div>
                    
                    <div className='center'>

                    <a href= {`https://wa.me/7802014355/?text=${props.data.message}`}  target="_blank">
                    <button>Buy on whatsapp</button>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
