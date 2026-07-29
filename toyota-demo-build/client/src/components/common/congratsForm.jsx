import React, { useEffect, useState } from 'react';
import style from '../../components/assets/style/congrats.module.scss';
import conditions from '../../assets/media/pdf/SpinTNC.pdf';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectCupon, toggleSpinToWin } from './../../container/spinToWin/spinToWin.redux';




import useGAEventsTracker from '../../useGAevnetsTracker';

/**
 * @function CongratsFormComponent
 * @param {String} winner prop passed by parent 
 * @returns Render registration form submition.
 */
const CongratsFormComponent = ({ winner, handleCloseModalClick }) => {
    const dispatch = useDispatch();

    const GAEventsTracket = useGAEventsTracker('Congrats Form')




    const winOrLose = useSelector(selectCupon);
    const history = useHistory();

    const [isRules, setIsRules] = useState(false);

    let userName = React.createRef();
    let lastName = React.createRef();
    let emailAddress = React.createRef();

    async function handleSubmitForm() {
        const userInfo = {
            firstName: userName.current.value,
            lastName: lastName.current.value,
            email: emailAddress.current.value,
            agreedRules: isRules,
            coupon: winOrLose?.[0].reserve_coupon
        }
         
        GAEventsTracket('Submitted Form', `${userInfo.name} ${userInfo.lastName}`)

        // Demo mode: this is an archived portfolio piece with no live backend,
        // so the registration call is skipped rather than hitting a dead API.

         //dismiss spint to win
         dispatch(toggleSpinToWin(true));

    }

  
    function handler (value) {
        setIsRules(value);
    };

    function handleNextButton() {
        document.getElementById('form').style.display = 'block';
        document.getElementById('head').style.display = 'none';
        document.getElementById('next').style.display = 'none';
    }

    if (winOrLose?.[0]?.reserve_coupon === "00000000-0000-0000-0000-000000000000") {
        setTimeout(() => {
            // TODO: create a global state and avoid reload
            // window.location.reload();
            // dispatch(toggleSpinToWin(false));
            handleCloseModalClick();
        }, 3000)

        return (

            <>
                <div className={style.container}>
                    <div className={style.containerContent}>
                        <div id="head">
                            <div className={style.containerContentTitle}>Sorry :(</div>
                            <p>Better Luck next time!</p>
                        </div>


                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className={style.container}>
                <div className={style.containerContent}>
                    <div id="head">
                        <div className={style.containerContentTitle}>Congrats!</div>
                        <p>You have won 20% off your next JBL online purchase! Please fill out the following information and the discount code will be sent to your email address.</p>
                    </div>

                    <div id="form" className={style.containerContentForm}>
                        <div>
                            <p>First Name:</p>
                            <input type="text" ref={userName} />
                            <p>Last Name:</p>
                            <input type="text" ref={lastName} />
                            <p>Email Address:</p>
                            <input type="email" ref={emailAddress} />

                            <input type="checkbox"  value="lsRememberMe" id="rememberMe" onChange={(ev) => handler(ev.target.checked)} />
                            <label htmlFor="rememberMe">I have read and agree to the <a rel="noreferrer" href={conditions} target="_blank" onClick={() => GAEventsTracket('Official Rules', `${conditions}`)}>Official Rules</a></label>

                            <div className={style.containerContentSubmitButton} onClick={async (e) => await handleSubmitForm(e)}>
                                <button className="button">Done</button>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => handleNextButton()} id="next" className={`${style.containerContentNext} button`}>Next</button>
                </div>
            </div>
        </>
    );
};

export { CongratsFormComponent };
