import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import style from '../dynamicVideo/style/fullvideo.module.scss';

import { ReactComponent as ButtonReplay } from '../../assets/Icons/Buttons/TOY_VIRTUAL_button_Replay.svg';

import { MainNavComponent, NavComponent, VideoComponent } from '../../components/common';
import CustomHeader from '../headerLayout/customHeader';

/**
 * @function VideoContainer
 * @param {*} props {*} callback
 * @returns Render navigation component to main view displaying auto video / navigation / explore-more.
 */
const VideoContainer = ({ src, learnMore, setVideoContent, backTo = '/' }) => {
    const [isVideoEnded, setVideoEnded] = useState(false);
    const [useReplayVideo, setVideoReplay] = useState(false);

    useEffect(() => {
        console.log('source : ', src);
    }, []);

    function onFinished(ended) {
        setVideoEnded(ended);
        setVideoReplay(false);
    }

    function onOpenOrCloseNav(openOrClose) {
        //setMenu(openOrClose);
        openOrClose ? onFinished(false) : <></>;
    }

    return (
        <>
            <div className={style.box}>
                <div className={style.boxClose}>
                    <Link to={backTo}>
                        <button
                            className={`hamburger hamburger--slider-r is-active`}
                            type="button"
                        //onClick={() => setVideoContent(false)}
                        >
                            <span className="hamburger-box">
                                <span className={`hamburger-inner`}></span>
                            </span>
                        </button>
                    </Link>

                </div>
                <CustomHeader
                    Nav={
                        <NavComponent childComponent={<MainNavComponent />} width={100} height={100} zIndex={14} />
                    }
                    innerNav='inner'
                    colorNavText='#747474'
                    classicNav={false}
                    classicFooter={false}
                    gradientHeader={false}
                    headerWidth={40}
                    callback={(status) => onOpenOrCloseNav(status)}
                    childComponent={
                        <VideoComponent key={src} src={src} onFinished={(ended) => onFinished(ended)} onReplay={useReplayVideo} checkAutoPlay={false} />
                    }
                    childName='dynamicVideo'
                />

                {
                    isVideoEnded
                        ?
                        <>
                            <div className={style.boxVideoInfo}>
                                <div className={style.boxVideoInfoButton} onClick={() => { setVideoReplay(!useReplayVideo); setVideoEnded(false) }}>
                                    <ButtonReplay className={style.boxVideoInfoButtonReplay} />
                                </div>
                                <div className={style.boxVideoInfoButton}>
                                    <a href={learnMore} target={'_black'}>
                                        <button className={`${style.boxVideoInfoButtonLearnMore} button`}>
                                            More Information
                                                </button>
                                    </a>
                                </div>

                            </div>
                        </>
                        : null
                }
            </div>
        </>
    )
};

export default VideoContainer;
