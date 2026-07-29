import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { userInfo, selectCupon, storeCupon, toggleStartSurvey, selectStartSurvey, toggleSpinToWin } from './spinToWin.redux';
import style from '../spinToWin/style/spinbox.module.scss';

import { CongratsFormComponent } from '../../components/common';
import SpinToWin from '../spinWheel';

import useGAEventsTracker from '../../useGAevnetsTracker';

var playSpinGame = false;
/**
 * @function SpinToWinComponent
 * @param {*} props {*} callback
 * @returns Render navigation component to main view displaying auto video / navigation / explore-more.
 */
const SpinToWinComponent = ({ open, onClose, callback }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [winner, setWinner] = useState('');
    const [useCongratsForm, setCongratsForm] = useState(false);
    const [useSpinToWin, setSpinToWin] = useState(false);
    // const [useAgeRage, setAgeRange] = useState(true);

    const startSurveyState = useSelector(selectStartSurvey);
    const winOrLose = useSelector(selectCupon);

    const GAEventsTracket = useGAEventsTracker('Spin To Win');


    useEffect(() => {
        //pass through introVideo if user types url:/overview
        if (window.location.pathname.split('/')[1].toLowerCase() === 'overview') {
            handleCloseModalClick();
        }

        setSpinToWin(playSpinGame);
    }, [playSpinGame]);

    const onFinished = (winner) => {
        //setWinner(`${winner}!`);

        //show congrats card.
        setTimeout(function () {
            setCongratsForm(true)
        }, 1500);
    }

    const reserveCupon = async () => {
        if (winOrLose === 0) {
            // Demo mode: this is an archived portfolio piece with no live backend,
            // so a coupon reservation is simulated locally instead of hitting a dead API.
            const getCupon = { data: [{ reserve_coupon: 'DEMO-0000-0000-0000-000000000000' }] };
            dispatch(storeCupon(getCupon.data))
        }
    }

    // useEffect(() => {
    //     reserveCupon();
    // }, []);


    const startSurvey = () => {
        //send GA event
        GAEventsTracket('Start Surver', 'Redirect to survey');
        reserveCupon();
        history.push('/survey');
    }

    // callback function in order to close modal and show traditional
    // regular navigation bar.
    function handleCloseModalClick() {
        onClose(false); // pass any argument to the callback

        //dismiss spint to win
        dispatch(toggleSpinToWin(true));
    }

    return (
        <>
            {open
                ?

                <div className={style.box}>
                    <div className={style.boxClose}>
                        <button
                            className={`hamburger hamburger--slider-r is-active`}
                            type="button"
                            onClick={() => handleCloseModalClick()}
                        >
                            <span className="hamburger-box">
                                <span className={`hamburger-inner-traditional`}></span>
                            </span>
                        </button>
                    </div>
                    {!useCongratsForm
                        ?
                        <>

                            <div className={style.boxcontainer}>
                                <SpinToWin
                                    winOrLose={winOrLose?.[0]?.reserve_coupon === "00000000-0000-0000-0000-000000000000" ? 'lose' : 'win'}
                                    containerX_L={`${-20}vw`}
                                    controlX_R={`${-20}vw`}
                                    controlX_L={`${47}vw`}
                                    controlTop={`${18}vw`} //20
                                    middleSpharePosition={style.boxcontainerWheelCenter}
                                    onFinished={(winner) => onFinished(winner)}
                                    showSpinToWinButton={startSurveyState}
                                    showResetButton={false}
                                />

                                <div className={style.boxcontainerBox}>
                                    <div className={style.boxcontainerBoxDescription}>
                                        <div className={style.boxcontainerBoxDescriptionTitle}>Spin to Win!</div>
                                        {
                                            startSurveyState
                                                ?
                                                <p>Spin the wheel and try your luck for a chance to receive a 20% discount from JBL!</p>
                                                :
                                                <>
                                                    <p>Please fill out the following information to spin the wheel and try your luck for a chance to receive a 20% JBL.com discount!</p>
                                                    {/* <button className={`${style.boxcontainerBoxDescriptionButton} button`} onClick={() => setSpinToWin(true)}>Start</button> */}

                                                    <button className={`${style.boxcontainerBoxDescriptionButton} button`} onClick={() => startSurvey()}>Start</button>

                                                </>
                                        }
                                        {/* <p>Please fill out the following information to spin the wheel for a chance to win Lorean Ipsum for JBL!</p> */}
                                        {/* <ButtonStart className={style.boxcontainerBoxDescriptionButton}/> */}
                                        {/* <p>{winner}</p> */}
                                    </div>

                                </div>
                            </div>
                        </>
                        :
                        <CongratsFormComponent winner={winner} handleCloseModalClick={() => handleCloseModalClick()} />
                    }
                </div>
                : <></>}

        </>
    )

};

export default SpinToWinComponent;
