import React from 'react'
import Charpert from './Chapter';
import '../asset/classVideo.css'
//import { getAllElement } from '../api/api';

const ClassVideo = ({ title, subTitle }) => {
    // <img src={require('../../public/logo.png').default} className="card-img-bottom" alt="..." />
    return (

        <main className="card border-0">
            <div className='d-flex '>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"><small className="text-muted">{subTitle}</small></p>
                </div>
                <Charpert />
            </div>
         <img src={process.env.PUBLIC_URL + '/img/logo512.png'} className='video'/>
        </main>

    )
}

export default ClassVideo;