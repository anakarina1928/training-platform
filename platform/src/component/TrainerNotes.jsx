import React from 'react'

const TrainerNotes = ({ text, trainerName, info }) => {
    return (

        <section className="card mb-3 border-0" >
            <div className="row g-0">

                <div className="col-md-8">
                    <div className="card-body">

                        <p className="card-text">{text}
                        </p>

                    </div>
                </div>
               

                   

                        <div className="col-lg-6">
                            <h4>Aboult Instructor</h4>
                            <div className='d-flex'>
                                <img src={process.env.PUBLIC_URL + '/img/logo.png'} className="img" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">ana karina</h5>
                                    <p className="card-text"><small className="text-muted">profesora</small></p>
                                </div>
                            </div>
                            <div c className="member-info">

                                <span>Chief Medical Officer</span>
                                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>

                            </div>

                        </div>


                   
               
            </div>
        </section>

    )
}

export default TrainerNotes;