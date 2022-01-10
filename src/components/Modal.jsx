import React from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'

const Modal = ({detail, closeModal, darkMode}) => {
    return (
        <div className='modal-wrapper'>
            <div className="modal-header">
                <div className="project-title">{detail.name}</div>
                <button className='btn btn--circle' onClick={closeModal}><AiFillCloseCircle /></button>
            </div>
            <div className={`modal ${darkMode || "light"}`}>
                <div className="slide-show">
                    <img src={detail.image} alt={detail.name} />
                </div>
                <div className="content">
                    <div className="row">
                        <div className="label">
                            Technologies used
                        </div>
                        <div className="detail">
                            {detail.technology}
                        </div>
                    </div>
                    <div className="row">
                        <div className="label">
                            Description
                        </div>
                        <div className="detail">
                            {detail.about}
                        </div>
                    </div>
                    <div className="row">
                        <div className="label">
                            Features
                        </div>
                        <div className="detail">
                            <ul className="list">
                                {
                                    detail.features.map(feature => <li key="feature">{feature}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
