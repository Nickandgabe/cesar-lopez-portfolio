import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { ReactComponent as PlusIcon } from './../../assets/Icons/Hamburguer_Nav/TOY_VIRTUAL_Plus_White.svg';
import { ReactComponent as ExperienceLogo } from './../../assets/Icons/Toogle/TOY_VIRTUAL_Toogle2_autoExLogo.svg';
import style from './style/carScene.module.scss';

import { NavComponent, MainNavComponent } from '../../components/common';
import CustomHeader from '../headerLayout/customHeader';
import SpinToWinComponent from '../spinToWin/index.jsx';

import cars from './../../config/cars';
import toyota from '../../config/toyota.js';

import { toggleIntroVideo, selectVideoIntro } from './mainCarScene.redux';
import { setAssetLoader } from '../../store/gobal';

import { selectSpintoWin } from '../spinToWin/spinToWin.redux';

import IFrame from '../iframe/index.jsx';
import useGAEventsTracker from '../../useGAevnetsTracker';

//import toggleTitleFlyOut from '../../assets/media/sound/buttonTitleFlyOut.wav';
var audio = new Audio(toyota['Sound'].ButtonTitleFlyOut);

let isMobilePlatform;

if (
  /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  isMobilePlatform = true;
} else {
  isMobilePlatform = false;
}

const MainCarScene = () => {
  let isMobileDevice = useMediaQuery({ query: '(max-height: 440px)' }) ? '350' : '550';
  let isTablet = useMediaQuery({ query: '(min-height: 700px)' }) ? '720' : isMobileDevice;
  let isDekstop = useMediaQuery({ query: '(min-height: 1060px)' }) ? '1080' : '940';
  let screenHeight = useMediaQuery({ query: '(max-height: 920px)' }) ? isTablet : isDekstop;

  const GAEventsTracket = useGAEventsTracker('Landing Page');

  const spinToWinState = useSelector(selectSpintoWin);

  const history = useHistory();
  const videoIntroState = useSelector(selectVideoIntro);
  const videoIntro = useRef();
  const plucarCar = useRef();
  const [userOpenSpinWheelBox, setOpenSpinWheelBox] = useState(true);
  //const [useVideoIntro, setuseIntroVideo] = useState(true);
  const dispatch = useDispatch();

  const [useFormToSubmit, setFormToSubmit] = useState(false);
  const [showSkipButton, setSkipButton] = useState(false);

  const toCapitalizedWords = (name) => {
    var words = name.match(/[A-Za-z][a-z]*/g) || [];

    if (name === 'TRD_Pro') {
      return 'TRD PRO';
    } else if (name === 'RAV4_Hybrid') {
      return 'RAV4 Hybrid';
    } else if (name === 'Team_Toyota') {
      return 'Team USA';
    } else {
      return words.map(capitalize).join(' ');
    }
    //return name === 'TRD_Pro' ? 'TRD PRO' : words.map(capitalize).join(' ');
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setOpenSpinWheelBox(true);
  //   }, 38000);
  // }, []);

  let segmentEnd = 4;
  let startSegment = 2;
  /***
   * @function playSound
   * @description check and play sound with promise to make sure
   * it plays correctly
   */
  function playSound() {
    // Stop and rewind the sound (stops it if already playing).
    audio.pause();
    audio.currentTime = 0;

    // set a segment to play
    audio.currentTime = startSegment;

    // Play the sound.
    audio
      .play()
      .then((response) => {
        console.log('Sound playing');
      })
      .catch((e) => {
        console.log(e);
      });
  }

  /***
   * @function stopSound
   * @description Alway stop sound to start from beginning.
   */
  function stopSound() {
    // Stop and rewind the sound (stops it if still playing).
    audio.pause();
    audio.currentTime = 0;
  }

  /**
   * @listener timeupdate
   * @description  Current listener in charge of stop audio in specific
   * segment time set.
   */
  audio.addEventListener(
    'timeupdate',
    function () {
      if (segmentEnd && audio.currentTime >= segmentEnd) {
        stopSound();
      }
    },
    false
  );

  /**
   *
   * @param {*} word
   * @returns string
   * @description Capitalize word.
   */
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  };

  /***
   * @function WelcomeContainer
   * @description Render welcome card to play video intro main laing page.
   * and send click to analytics.
   */
  const WelcomeContainer = () => {
    useEffect(() => {
      document.getElementById('play').addEventListener('click', playButton);
    }, []);
    function playButton() {
      document.getElementById('welcome').style.display = 'none';
      document.querySelector('video').play();

      var videoTags = document.getElementsByTagName('video');
      // GAEventsTracket('Intro Video', videoTags.item(0).currentSrc);

      GAEventsTracket('Intro Video', 'Enter the Experience');
    }

    return (
      <>
        <div className={style.welcomeMessage}>
          <div className={style.hoopsLeft}>
            <div className={style.hoopsCircle}></div>
          </div>
          <div className={style.hoopsRight}>
            <div className={style.hoopsCircle}></div>
          </div>

          <div className={style.welcomeMessageText1}>Welcome to the</div>
          <div className={style.welcomeMessageLogo}>
            <ExperienceLogo />
          </div>
          <div className={style.welcomeMessageText2}>
            <p>
              Explore the Auto Show like never before. Discover new vehicles, the T360 Theater, and
              enter for a chance to win prizes & more!
            </p>
          </div>
          <button
            id="play"
            onClick={() => playButton()}
            className={`${style.welcomeMessageButton} button`}
          >
            Enter the Experience
          </button>
        </div>
      </>
    );
  };

  useEffect(() => {
    //pass through introVideo if user types url:/overview
    if (window.location.pathname.split('/')[1].toLowerCase() === 'overview') {
      dispatch(toggleIntroVideo(false));
      window.firstVisit = false;
    }

    //console.log('check status: ', videoIntroState, ' or window status : ',window.firstVisit);


    try {
      if (window.firstVisit && videoIntroState) {
        // videoIntro.current.currentTime = 28;
        // videoIntro.current.currentTime = 0;
        videoIntro.current
          .play()
          .then(() => {
            console.log('Autoplay started');
            document.getElementById('play').style.display = 'none';
          })
          .catch((error) => {
            // Autoplay was prevented.
            // Show a "Play" button so that user can start playback.
            console.log('Autoplay was prevented');
            //document.getElementById('play').style.display = 'block';
            document.getElementById('welcome').style.display = 'block';
            //document.getElementById('play').addEventListener('click', playButton);
          });
      }
    } catch (e) {
      dispatch(toggleIntroVideo(false));
      dispatch(setAssetLoader(false));
    }
  }, [dispatch, videoIntroState]);

  useEffect(() => {
    if (isMobilePlatform) {
      //console.log('video: ', videoIntro.current)
      videoIntro.current.onloadedmetadata = (event) => {
        dispatch(setAssetLoader(false));
      };
    } else {
      videoIntro.current.onloadeddata = (event) => {
        dispatch(setAssetLoader(false));
      };
    }
  }, []);

  const handleIntroVideo = (msg) => {
    dispatch(toggleIntroVideo(false));
    window.firstVisit = false;

    videoIntro.current.pause();
    videoIntro.current.currentTime = 0;

    if (msg === 'skip video') {
      GAEventsTracket('Intro Video', 'User skipped Intro Video');
    }
    if (msg === 'exit video') {
      GAEventsTracket('Intro Video', 'User closed Intro Video');
    }

    setTimeout(() => {
      setOpenSpinWheelBox(true);
    }, 2000);
  };

  const handleLink = (_location, i) => {
    if (_location === 'Theater') {
      //_location = `/Theater:${_location}`
      _location = '/t360-theater';
    } else if (_location === 'Explore_More_Vehicles') {
      _location = `/explore-more-vehicles`;
    } else {
      // _location = `/heroCar:${_location}`
      _location = toyota['prefixUrlNames'].find((obj) => obj.car === _location).url;
    }

    // plucarCar.current.children[
    //   i
    // ].className = `${plucarCar.current.children[i].className} ${style.plusCarIconActive}`;
    dispatch(setAssetLoader(true));
    setTimeout(() => {
      history.push(_location);
    }, 1000);
  };

  const handleFormSubmited = (state) => {
    setFormToSubmit(state);
  };

  return (
    <>
      {videoIntroState === false ? (
        <CustomHeader
          Nav={
            <NavComponent
              childComponent={<MainNavComponent />}
              width={100}
              height={100}
              zIndex={14}
            />
          }
          innerNav="inner-traditional"
          colorNavText="#747474"
          classicNav={false}
          showOnlyFooter={!useFormToSubmit ? true : false}
          headerWidth={!isMobilePlatform ? 40 : 10}
          showOverview={false}
          gradientHeader={false}
          childComponent={
            <NavComponent
              childComponent={
                !useFormToSubmit ? (
                  <SpinToWinComponent
                    // open={userOpenSpinWheelBox}
                    open={!spinToWinState}
                    onClose={() => setOpenSpinWheelBox(false)}
                    callback={(state) => setFormToSubmit(state)}
                  />
                ) : (
                  <>
                    <div className={style.btnClose}>
                      <button
                        className={`hamburger hamburger--slider-r is-active`}
                        type="button"
                        onClick={() => {
                          setFormToSubmit(false);
                        }}
                      >
                        <span className="hamburger-box">
                          <span className={`hamburger-inner-traditional`}></span>
                        </span>
                      </button>
                    </div>
                    <IFrame callback={(e) => handleFormSubmited(e)} />
                  </>
                )
              }
              width={!useFormToSubmit ? 50 : 100}
              height={100}
              zIndex={13}
              backgroundColor={'#FFFFFF'}
            />
          }
          // childName={`${!userOpenSpinWheelBox ? null : 'spinning'}`}
          childName={`${spinToWinState ? null : 'spinning'}`}
        />
      ) : null}

      {/* {introVideo ? */}
      <>
        <div
          className={style.btnClose}
          style={{ display: `${videoIntroState ? 'block' : 'none'}` }}
        >
          <button
            className={`hamburger hamburger--slider-r is-active`}
            type="button"
            onClick={() => {
              handleIntroVideo('exit video');
            }}
          >
            <span className="hamburger-box">
              <span className={`hamburger-inner`}></span>
            </span>
          </button>
        </div>

        <div
          className={`${style.videoContainer} ${videoIntroState ? style.layerActive : style.layerInative
            }`}
        >
          <video
            width="100%"
            height="100%"
            // controls controlsList="nofullscreen nodownload"
            muted={false}
            playsInline
            onEnded={() => handleIntroVideo()}
            onLoadedData={() => {
              dispatch(setAssetLoader(false));
            }}
            onTimeUpdate={(e) => e.target.currentTime >= 3 && showSkipButton === false ? setSkipButton(true) : false}
            ref={videoIntro}
          >
            <source
              src="https://toyota-static-assets.s3.amazonaws.com/assets/WebsiteIntroAnimation/intro_animation.webm"
              type="video/webm"
            />
            <source
              src="https://toyota-static-assets.s3.amazonaws.com/assets/WebsiteIntroAnimation/intro_animation.mov"
              type="video/mp4"
            />
          </video>

          {showSkipButton ?
            <button
              className={`${style.skipVideoButton} button`}
              onClick={() => {
                handleIntroVideo('skip video');
              }}
            > Skip Video </button>
            : false}
        </div>
        <div id="welcome" style={{ display: 'none' }}>
          <WelcomeContainer />
        </div>
      </>
      {/* : */}

      <div
        // className={`${style.carMainSceneBox} ${setTimeout(() => videoIntroState ? style.layerInative : style.layerActive )}`}
        className={`${style.carMainSceneBox} ${videoIntroState ? style.layerInative : style.layerActive
          }`}
        style={{ display: videoIntroState ? 'none' : 'block' }}
      // style={{ visibility: videoIntroState  ? 'hidden' : 'visible' }}
      >
        <div className={style.carMainSceneBoxTeamLogo}>
          <img
            src="https://d28z8i57b3adv3.cloudfront.net/assets/HeroCars/Team/Assets/TOY_VIRTUAL_Team_Logo_Black.svg"
            alt="logo"
          />
        </div>
        <img
          src="https://d28z8i57b3adv3.cloudfront.net/assets/Cars_Main_Scene/Cars_Main_Scene.jpg"
          alt="main"
        />
        <div className={style.carMainSceneBoxFloor} ref={plucarCar}>
          {Object.entries(cars).map((c, i) => {
            return (
              // <Link key={i} to={`/heroCar:${c[0]}`}>
              // <Link key={i} to={c[0] !== 'Theater' ? `/heroCar:${c[0]}` : `/Theater:${c[0]}`}>

              <div
                key={i}
                className={`${style.plusCarIcon}`}
                style={{
                  left: c[1].mainCarSceneLocation.l,
                  top: c[1].mainCarSceneLocation.t,
                  right: c[1].mainCarSceneLocation.r,
                  bottom: c[1].mainCarSceneLocation.b,
                }}
                // onClick={() => handleLink(c[0] !== 'Theater' ? `/heroCar:${c[0]}` : `/Theater:${c[0]}`, i)}
                onClick={() => handleLink(c[0], i)}
                onMouseEnter={() => {
                  playSound();
                }}
                onMouseLeave={() => {
                  stopSound();
                }}
                onMouseDown={() => (isMobilePlatform ? playSound() : false)}
                onMouseUp={() => (isMobilePlatform ? stopSound() : false)}
              >
                <PlusIcon />
                <div className={style.plusCarIconLabel}>
                  {/* <p> {toCapitalizedWords(c[0])} </p> */}
                  <p> {c[0] === 'Theater' ? 'T360° Theater' : toCapitalizedWords(c[0])} </p>
                </div>
              </div>
              // </Link>
            );
          })}
        </div>
      </div>
      {/* } */}
    </>
  );
};

export default MainCarScene;
