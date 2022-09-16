import React from 'react'
import NavBar from './NavBar';
import ClassVideo from './ClassVideo';
import { getAllElement } from '../api/api';
import Notes from './Notes';
import TrainerNotes from './TrainerNotes';

import '../app.css';

const MasterClass = () => {

    const trainer = getAllElement().trainer;
    const firstVideo = getAllElement().classroomVideo[2];

    return (

        <>

            <NavBar />


            <section className='container p-5 '>

                <div className='row'>
                    <main className='col-sm-8'>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item ">Courses</li>
                                <li className="breadcrumb-item active">Desing</li>
                                <li className="breadcrumb-item active">Masterclass:Desingning for web</li>
                            </ol>
                        </nav>

                        < ClassVideo
                            title={firstVideo.className}
                            subTitle={trainer.name + ", " + trainer.departament}
                        />
                        <Notes
                        
                        />
                        <TrainerNotes 
                        text={'Docente, divulgador informático y streamer de código. Amante de CSS, Javascript y de la plataforma web. Ha trabajado como profesor en la Universidad de La Laguna y es director del curso de Programación web FullStack y FrontEnd de EOI desde Tenerife. En sus ratos libres, busca GIF de gatos en Internet.'}
                        trainerName={trainer.name}
                        info={trainer.info}
                        />
                    </main>

                    <div className='col-sm-4 d-flex justify-content-end'>

                        hola
                    </div>
                </div>

            </section>
        </>
    )
}

export default MasterClass;
