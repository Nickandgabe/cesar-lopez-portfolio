import React, { useEffect, useRef, useState } from 'react';
import style from '../assets/style/video.module.scss';

/**
 * @function VideoComponent
 * @param {*} props {*} callback
 * @returns Render navigation component to main view displaying auto video / navigation / explore-more.
 */
const VideoComponent = ({ src, onFinished, onReplay = false, carModel = '', carName = '', ismuted = false, checkAutoPlay = true }) => {
    //var promise = document.querySelector('video');
    const video = useRef(null);
    const [didVideoEnded, setDidVideoEnded] = useState(false);


    function handleVideoEnded() {
        onFinished(true);
        setDidVideoEnded(true);
    }

    useEffect(() => {
       // console.log('track replay: ', onReplay)
        if (onReplay) {

            video.current.pause();
            video.current.currentTime = 0;
            // //To avoid Promes error
            setTimeout(function () {
                video.current.play();
            }, 150);
        }
        if (checkAutoPlay) {
            // video.current.play()
            //     .then(() => {
            //         // console.log('Autoplay started');
            //         document.getElementById('play').style.display = 'none';
            //     })
            //     .catch(error => {
            //         // Autoplay was prevented.
            //         // Show a "Play" button so that user can start playback.
            //         //console.log('Autoplay was prevented');

            //         document.getElementById('play').style.display = 'block';
            //         document.getElementById('play').addEventListener('click', playButton);
            //     });

        }
       

    }, [onReplay, ismuted, checkAutoPlay]);

    useEffect(() => {

        try {
            video.current.play()
                .then(() => {
                    console.log('Autoplay started');
                    document.getElementById('play').style.display = 'none';
                })
                .catch(error => {
                    // Autoplay was prevented.
                    console.log('Autoplay was prevented');
                    document.getElementById('play').style.display = 'block';
                    document.getElementById('play').addEventListener('click', playButton);
                });

        } catch (e) {
            console.log('[Eroro-Video]:', e);
        }
    },[]);

    function playButton() {
        document.querySelector('#video').load();
        document.querySelector('#video').play();
        document.getElementById('play').style.display = 'none';
    }
    return (
        <>
            <div className={style.Title}>
                <label>{carModel}</label>
                <span>{carName}</span>
            </div>
            <div  className={style.videoContainer}>
                <video ref={video} id="video" autoPlay playsInline muted={ismuted} onEnded={() => handleVideoEnded(true)} >
                    <source src={src?.webm} type="video/webm" />
                    <source src={src?.mp4} type='video/mp4; codecs="hvc1"' />
                    Your browser does not support the video tag.
                  </video>
                <div id="play" className={style.btnPlay} style={{ display: 'none' }}>
                    <button></button>
                </div>
            </div>
        </>
    );
};

export { VideoComponent };
