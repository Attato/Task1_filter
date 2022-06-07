import React from 'react'
import './Preloader.scss';

const Preloader = () => {
    return (
        <div className="cat__wrapper">
            <div className="cat">
                <div className="ear__left ear"/>
                <div className="ear__right ear"/>
                <div className="face">
                    <div className="eye__left eye">
                        <div className="eye-pupil"/>
                    </div>
                    <div className="eye__right eye">
                        <div className="eye-pupil"/>
                    </div>
                    <div className="muzzle"/>
                </div>
            </div>
        </div>
    )
}

export default Preloader;
