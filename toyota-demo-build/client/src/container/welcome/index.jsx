import React, { useEffect, useState } from 'react';
import style from './style/welcome.module.scss';

import { ReactComponent as ExperienceLogo } from './../../assets/Icons/Toogle/TOY_VIRTUAL_Toogle2_autoExLogo.svg';


/**
 * @function WelcomeContainer
 * @returns Render navigation component to main view displaying auto video / navigation.
 */
const WelcomeContainer = ({ callback }) => {
    const [useExperience, setUserExperience] = useState(false);
    useEffect(() => {
        callback(useExperience)
    }, [useExperience, callback])


    return (
        <>
            <div className={style.welcomeMessage}>
                <div className={style.hoopsLeft}><div className={style.hoopsCircle}></div></div>
                <div className={style.hoopsRight}><div className={style.hoopsCircle}></div></div>

                <div className={style.welcomeMessageText1}>Welcome to the</div>
                <div className={style.welcomeMessageLogo}>
                    <ExperienceLogo />
                </div>
                <div className={style.welcomeMessageText2}>
                    <p>Explore the Auto Show like never before. Discover new vehicles, the T360 Theater, and enter for a chance to win prizes & more!</p>
                </div>
                <button onClick={() => { setUserExperience(!useExperience);} } className={`${style.welcomeMessageButton} button`}>Enter the Experince</button>
            </div>
        </>
    )

};

export default WelcomeContainer;
