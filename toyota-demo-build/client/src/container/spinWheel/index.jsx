import React, { useEffect, useState } from 'react';
import style from './style/spin.module.scss';
import Winwheel from "./spin";


import toyota from '../../config/toyota.js';

import useGAEventsTracker from '../../useGAevnetsTracker';

//import prize from '../../assets/media/sounds/prize_wheel.mp3';
let audio = new Audio(toyota['Sound'].PrizeWheel);

const needle = 'https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Images/SpinWheel/png/NeedleRealSize.png';
const firstWheel = 'https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Images/SpinWheel/png/Shadow.png';
const centerCircle = 'https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Images/SpinWheel/png/Center.png';

let theWheel;
let wheelPower = 0;
let wheelSpinning = false;
/**
 * @function WelcomeContainer
 * @returns Render navigation component to main view displaying auto video / navigation.
 */
const SpinWheelContainer = ({
    winOrLose,
    canvasWidth = 600,
    canvasHeight = 600,
    containerX_L = 0,
    containerX_R = 0,
    controlX_L = 800,
    controlX_R = 0,
    controlBottom = 0,
    controlTop = 400,
    middleSpharePosition = null,
    onFinished,
    showSpinToWinButton = true,
    showResetButton = true
}) => {

    useEffect(() => {
        theWheel = new Winwheel({
            numSegments: 8,
            outerRadius: 270,
            textFontSize: 24,
            rotationAngle: 60,
            textFontFamily: 'ToyotaType-Regular',
            wheelImage: firstWheel,
            strokeStyle: 'rgba(227,227,227)',
            segments:
                [
                    { 'fillStyle': '#FFFFFF', 'text': 'WINNER!', textFillStyle: '#747474' },
                    { 'fillStyle': '#EB0A1E', 'text': 'No Luck Today', textFillStyle: '#FFFFFF' },
                    { 'fillStyle': '#FFFFFF', 'text': 'WINNER!', textFillStyle: '#747474' },
                    { 'fillStyle': '#EB0A1E', 'text': 'Try Again Soon', textFillStyle: '#FFFFFF' },
                    { 'fillStyle': '#FFFFFF', 'text': 'WINNER!', textFillStyle: '#747474' },
                    { 'fillStyle': '#EB0A1E', 'text': 'No Luck Today', textFillStyle: '#FFFFFF' },
                    { 'fillStyle': '#FFFFFF', 'text': 'WINNER!', textFillStyle: '#747474' },
                    { 'fillStyle': '#EB0A1E', 'text': 'Try Again Soon', textFillStyle: '#FFFFFF' }
                ],
            animation:
            {
                type: 'spinToStop',
                duration: 5,
                spins: 8,
                callbackFinished: Finsished,
                //callbackSound: playSound,
            }
        });

    });

    const GAEventsTracket = useGAEventsTracker('Spin to Win')
    // Function with formula to work out stopAngle before spinning animation.
    // Called from Click of the Spin button.
    function calculatePrize() {
        // This formula always makes the wheel stop somewhere inside prize 3 at least
        // 1 degree away from the start and end edges of the segment.
        let stopAt = winOrLose === 'lose' ? 65 : 120;

        // Important thing is to set the stopAngle of the animation before stating the spin.
        theWheel.animation.stopAngle = stopAt;

        // May as well start the spin from here.
        theWheel.startAnimation();

        // Send event to analitycs
        GAEventsTracket('Spinning Wheel','20%');
        

        // Start sound 
        playSound()
    }
    function Finsished() {
        if (onFinished)
            onFinished(true);
            stopSound();
    }

    function playSound() {
        // Stop and rewind the sound (stops it if already playing).
        audio.pause();
        audio.currentTime = 0;

        // Play the sound.
        //audio.play();
        audio.play().then(response => {
            console.log('Sound playing')
        }).catch(e => {
            console.log(e);
        })

    }

    function stopSound() {
        // Stop and rewind the sound (stops it if still playing).
        audio.pause();
        audio.currentTime = 0;
    }

    function startSpin() {
        // Ensure that spinning can't be clicked again while already running.
        if (wheelSpinning == false) {
            // Based on the power level selected adjust the number of spins for the wheel, the more times is has
            // to rotate with the duration of the animation the quicker the wheel spins.
            if (wheelPower == 1) {
                theWheel.animation.spins = 3;
            } else if (wheelPower == 2) {
                theWheel.animation.spins = 8;
            } else if (wheelPower == 3) {
                theWheel.animation.spins = 15;
            }

            // Begin the spin animation by calling startAnimation on the wheel object.
            theWheel.startAnimation();

            // Set to true so that power can't be changed and spin button re-enabled during
            // the current animation. The user will have to reset before spinning again.
            wheelSpinning = true;
        }
    }
    function resetWheel() {
        theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
        theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
        theWheel.draw();                // Call draw to render changes to the wheel.

        //wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
    }

    // we dont need this since we use an asset.
    const drawTriangle = () => {
        // Get the canvas context the wheel uses.
        let ctx = theWheel.ctx;

        ctx.strokeStyle = 'navy';     // Set line colour.
        ctx.fillStyle = 'aqua';     // Set fill colour.
        ctx.lineWidth = 2;
        ctx.beginPath();              // Begin path.
        ctx.moveTo(170, 5);           // Move to initial position.
        ctx.lineTo(230, 5);           // Draw lines to make the shape.
        ctx.lineTo(200, 40);
        ctx.lineTo(171, 5);
        ctx.stroke();                 // Complete the path by stroking (draw lines).
        ctx.fill();                   // Then fill.
    }

    return (
        <>
            <div className={style.container} style={{ left: containerX_L, right: containerX_R }}>
                <img src={firstWheel} className={style.containerWheelbigWheel} alt="parentWheel" />
                <img src={needle} className={style.containerWheelNeedle} alt="needle" />
                <img src={centerCircle} className={middleSpharePosition === null ? style.containerWheelCenter : middleSpharePosition} alt="ceter" />
                <canvas id='canvas' width={canvasWidth} height={canvasHeight}>
                    Canvas not supported, use another browser.
                </canvas>

                <div className={style.containerController}>
                    {showSpinToWinButton
                        ?
                        <button className={`${style.containerButtonSpin} button`}
                            style={{
                                left: controlX_L,
                                top: controlTop
                            }}
                            onClick={(e) => calculatePrize(e)}>Spin</button>
                        : null} <br />

                    {showResetButton
                        ?
                        <button className={`${style.containerButtonReset} button`}
                            style={{
                                left: controlX_L
                            }}
                            onClick={(e) => resetWheel(e)}>Reset</button>
                        : null}

                </div>

            </div>
        </>
    )

};

export default SpinWheelContainer;


