/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

import React, { useEffect, Fragment, useState, useRef } from 'react';
import style from './style/hero.module.scss';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';

import CustomHeader from '../headerLayout/customHeader';
import { MainNavComponent, NavComponent } from '../../components/common';

import WalkAroundContainer from '../walkaroundDetails/index.jsx';
import VideoContent from '../dynamicVideo/index.jsx';

import { Link } from 'react-router-dom';
import BackgroundImageOnLoad from 'background-image-on-load';

import { ReactComponent as GlassIcon } from './../../assets/Icons/Toogle/TOY_VIRTUAL_Toogle1_Magnify.svg';
import { ReactComponent as GoPlaces } from './../../assets/letsgo.svg';

import cars from './../../config/cars';
import toyota from '../../config/toyota.js';

import scrollIntoView from 'scroll-into-view';
import { useDispatch } from 'react-redux';

import LoaderImage from '../../assets/loader/LoadingRed.gif';

import { setAssetLoader } from '../../store/gobal.js';
import useGAEventsTracker from '../../useGAevnetsTracker';

// import toggleAnimation from '../../assets/media/sounds/robot-mechanism-animation.mp3';
// import toggleSwithLetGo from '../../assets/media/sounds/toggle-switch-letsGo.mp3';

//Loaded souds befores states.
var audioLetsGo = new Audio(toyota['Sound'].ToggleSwitchLetsGo);
// var audioAnimation = new Audio(toyota['Sound'].RobotMechanismAnimation);
var audioAnimation;

let Api360;
let isDown = false;
let startX = null;
let scrollLeft = null;
let is360;

let car360IntervalId;

// let currentCar;
let carconfig;

let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

let isMobileDevice;

if (
  /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  isMobileDevice = true;
} else {
  isMobileDevice = false;
}

function toLoweCasee(string) {
  return string.toLoweCasee();
}

//array state for assets.
const LoadAssets = {
  Toyota_Racing: {
    backgroundLayer1: false,
    backgroundLayer2: false,
  },
  Supra: {
    backgroundLayer1: false,
    backgroundLayer2: false,
    videoLoop: false,
  },
  Highlander: {
    backgroundLayer1: false,
    backgroundLayer2: false,
    spriteSpin: false,
  },
  TRD_Pro: {
    backgroundLayer1: false,
    backgroundLayer2: false,
    videoLoop: false,
  },
  RAV4_Hybrid: {
    backgroundLayer1: false,
    backgroundLayer2: false,
    spriteSpin: false,
  },
  Sienna: {
    backgroundLayer1: false,
    backgroundLayer2: false,
    spriteSpin: false,
    videoDay: false,
    videoNight: false,
  },
  Venza: {
    backgroundLayer1: false,
    backgroundLayer2: false,
    spriteSpin: false,
    videoDay: false,
    videoNight: false,
  },
  Mobility: {
    backgroundLayer1: false,
    backgroundLayer2: false,
    videoLoop: false,
  },
  Mirai: {
    backgroundLayer1: false,
    backgroundLayer2: false,
    videoLoop: false,
  },
  CamryHybrid: {
    backgroundLayer1: false,
    backgroundLayer2: false,
    spriteSpin: false,
  },
  Team_Toyota: {
    backgroundLayer1: false,
    backgroundLayer2: false,
    videoTeam: false,
  },
};

const HeroVehicleDetails = () => {
  let isMobile = useMediaQuery({ query: '(max-height: 440px)' }) ? '350' : '550';
  let isTablet = useMediaQuery({ query: '(min-height: 700px)' }) ? '720' : isMobile;
  let isDekstop = useMediaQuery({ query: '(min-height: 1060px)' }) ? '1080' : '940';
  let screenHeight = useMediaQuery({ query: '(max-height: 920px)' }) ? isTablet : isDekstop;

  let teamVideoRef = useRef();
  let backgroundLayer1 = useRef();
  let backgroundLayer2 = useRef();

  let videoDay = useRef();
  let videoLoop = useRef();
  let videoNight = useRef();

  let spriteSpin = useRef();

  const scrollWrapperRef = useRef();

  const history = useHistory();
  const dispatch = useDispatch();
  const [config, setConfig] = useState({});
  const [background, setBackground] = useState(true);

  const [useExploreCar, setExploreCar] = useState({});
  const [userWalkaround, setWalkaround] = useState(false);
  const [useVideoContent, setVideoContent] = useState(false);
  const [userCarDrag, setUserCarDrag] = useState(false);
  const [isLGPAllowed, setLGP] = useState(true);

  const [useShareImage, setShareImage] = useState(null);

  const [day, setDay] = useState(false);
  const [loop, setLoop] = useState(false);
  const [night, setNight] = useState(false);
  const [videoInit, setVideoInit] = useState(true);
  const [hide360, set360] = useState(false);
  const [currentCar, setCurrentCar] = useState(
    toyota['prefixUrlNames'].find(
      (obj) => obj.url === window.location.pathname.split('/')[1].toLowerCase()
    ).car
  ); //useState(window.location.pathname.split(':')[1]);
  const [force360Update, setForce360ToUpdate] = useState(false);

  const [is360Interactive, set360Interaction] = useState(true);

  const GAEventsTracket = useGAEventsTracker(`HeroCar:${currentCar}`);

  // On Component Mount we set the current car
  useEffect(() => {
    //setCurrentCar(window.location.pathname.split(':')[1]);

    setCurrentCar(
      toyota['prefixUrlNames'].find(
        (obj) => obj.url === window.location.pathname.split('/')[1].toLowerCase()
      ).car
    );
    audioAnimation =
      currentCar !== 'TRD_Pro'
        ? new Audio(toyota['Sound'].RobotMechanismAnimation)
        : new Audio(toyota['Sound'].RobotMechanismAnimationTRD);
  }, [currentCar]);

  // hack supra playauto issue in mobile
  // short term solution.
  useEffect(() => {
    const videoLoopSupra = document.getElementById('Supra');
    if (isMobileDevice && videoLoopSupra) {
      videoLoopSupra.load();
      videoLoopSupra.pause();
      videoLoopSupra.currentTime = 0;
    }
  });

  // Every Resize we Center the car
  const CenterVehicle = () => {
    setTimeout(() => {
      let containerOverFlow = document.querySelectorAll(`.${style.Image360BlockTop}`)[0];
      scrollIntoView(containerOverFlow);
    });
  };

  useEffect(() => {
    carconfig = cars[currentCar];
    is360 = currentCar.assetsPath360?.includes('360');
    setConfig(carconfig);
    setShareImage(carconfig?.share);
    CenterVehicle();

    if (currentCar !== 'Mobility') {
      let exploreCar = toyota.FeatureVehicles.find(
        (obj) => obj.name === currentCar || obj.prefix === currentCar
      );
      setExploreCar(exploreCar);
    }

    window.addEventListener('resize', CenterVehicle);
  }, [config, currentCar]);

  // For Sienna and Venza we reload the 360 with different assets between scenes
  useEffect(() => {
    // if (
    //   window.location.pathname.split(':')[1] === 'Venza' ||
    //   window.location.pathname.split(':')[1] === 'Sienna'
    // ) {
    //   car360Load();
    // }
    if (
      toyota['prefixUrlNames'].find(
        (obj) => obj.url === window.location.pathname.split('/')[1].toLowerCase()
      ).car === 'Venza' ||
      toyota['prefixUrlNames'].find(
        (obj) => obj.url === window.location.pathname.split('/')[1].toLowerCase()
      ).car === 'Sienna'
    ) {
      car360Load();
    }
  }, [background]);

  useEffect(() => {
    car360Load('init');
  }, [currentCar]);

  // if(document.getElementById('Supra')) {
  //   console.log('check it out: ', document.getElementById('Supra'));
  //   //document.getElementById('Supra').load();
  //   document.getElementById('Supra').pause();
  //   document.getElementById('Supra').currentTime=0;
  // }

  /**
   * @description component will update everytime for current car changes,
   * state will reload all videos to have more stabe experince on all devices.
   */
  useEffect(() => {
    document.querySelectorAll('video').forEach((element, i) => {
      element.pause();
      element.removeAttribute('src'); // empty source
      element.load();
    });
    audioAnimation =
      currentCar !== 'TRD_Pro'
        ? new Audio(toyota['Sound'].RobotMechanismAnimation)
        : new Audio(toyota['Sound'].RobotMechanismAnimationTRD);
  }, [currentCar]);

  const car360Load = (_type) => {
    carconfig =
      cars[
        toyota['prefixUrlNames'].find(
          (obj) => obj.url === window.location.pathname.split('/')[1].toLowerCase()
        ).car
      ]; //cars[window.location.pathname.split(':')[1]];
    let path360 = carconfig.assetsPath360;

    // if (
    //   window.location.pathname.split(':')[1] === 'Venza' ||
    //   window.location.pathname.split(':')[1] === 'Sienna'
    // ) {
    //   path360 = background ? carconfig.assetsPath360 : carconfig.assetsPath3602;
    // }
    if (
      toyota['prefixUrlNames'].find(
        (obj) => obj.url === window.location.pathname.split('/')[1].toLowerCase()
      ).car === 'Venza' ||
      toyota['prefixUrlNames'].find(
        (obj) => obj.url === window.location.pathname.split('/')[1].toLowerCase()
      ).car === 'Sienna'
    ) {
      path360 = background ? carconfig.assetsPath360 : carconfig.assetsPath3602;
    }

    const timeoutID = window.setTimeout(() => {
      $('.spritespin').spritespin({
        source: SpriteSpin.sourceArray(path360, {
          frame: [1, 60],
          digits: 1,
        }),
        animate: false,
        loop: false,
        lanes: 3,
        responsive: true,
        onLoad: (e) => {
          LoadAssetsOnChange(currentCar, 'spriteSpin');
        },
        sense: -1,
      });
      Api360 = $('.spritespin').spritespin('api'); //eslint-disable-line
      window.Api360 = Api360;
    }, []);

    return () => window.clearTimeout(timeoutID);
  };

  const toggleWalkaround = () => {
    setWalkaround(false);
  };

  const resetAll = async () => {
    dispatch(setAssetLoader(true));
    // $('.spritespin').spritespin('destroy');

    //Reset default values everytime we redict to new car.
    setDay(false);
    setLoop(false);
    setNight(false);
    setVideoInit(true);
    set360(false);
    setBackground(true);
    setLGP(true);
    setShareImage(null);
    set360Interaction(true);
  };

  useEffect(() => {
    let scrollContainer = scrollWrapperRef.current;

    scrollContainer.addEventListener(
      'mousedown',
      (e) => {
        // const closest = is360 ? e.target.closest('.spritespin') : null;
        const closest = e.target.closest('.spritespin');
        if (closest === null) {
          isDown = true;
          startX = e.pageX - scrollContainer.offsetLeft;
          scrollLeft = scrollContainer.scrollLeft;
        } else {
          if (userCarDrag === false) {
            setUserCarDrag(true);
            //send event to analytics if car is drag
            GAEventsTracket('CarDrag', `${currentCar}`);
          }
          e.stopPropagation();
        }
      },
      { passive: true }
    );
    scrollContainer.addEventListener(
      'mouseleave',
      () => {
        isDown = false;
      },
      { passive: true }
    );
    scrollContainer.addEventListener(
      'mouseup',
      () => {
        isDown = false;
      },
      { passive: true }
    );

    scrollContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();

      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 1; //scroll-fast
      scrollContainer.scrollLeft = scrollLeft - walk;
    });
  }, [userCarDrag, currentCar]);

  /**
   * @function LoadAssetsOnChange
   * @param {*} name
   * @param {*} asset
   * @description Check loading state of heavy assets and return scene to show
   * if assets have been donwloaded.
   * NOTE: Active Object will be set propeties to true if donwload is completed and
   * will be set false for the rest of unuse objects as its default values.
   */
  const LoadAssetsOnChange = (name, asset) => {
    // dispatch(setAssetLoader(true));

    if (!LoadAssets[name][asset]) {
      LoadAssets[name][asset] = true;
    } else {
      //set all default state
      Object.keys(LoadAssets).forEach(function (key) {
        if (key !== name) {
          Object.keys(LoadAssets[key]).forEach(function (propety) {
            LoadAssets[key][propety] = false;
          });
        }
      });
    }
    /////////
    //More mantainable way to make sure assets from object are successfuly downloaded.
    /////
    if (Object.values(LoadAssets[name]).every((v) => v)) {
      Object.keys(LoadAssets[name]).forEach(function (key) {});
      //Dismiss loader
      lazyLoading(false);
    }
  };
  /**
   * @function lazyLoading
   * @param {*} state
   * @description Slow 3sec before to dismiss loader,
   * using timeout as a Promise.
   */
  const lazyLoading = (state) => {
    if (!state) {
      setTimeout(() => {
        dispatch(setAssetLoader(state));
      }, 700);
    } else {
      dispatch(setAssetLoader(state));
    }
  };

  /**
   * @function resteLoadAssetsToDefaultState
   * @param {*} name
   * @description Reset values everytime we chage cars
   */
  const resteLoadAssetsToDefaultState = async (name) => {
    let temps = LoadAssets[name];
    for (let key in temps) {
      temps[key] = false;
    }
  };

  const checkingCurrentFrame = () => {
    if (Api360.currentFrame() === 0) {
      clearInterval(car360IntervalId);
      setLGP(true);
      setTimeout(() => {
        changeBackground();
        // setForce360ToUpdate(!force360Update);
      }, 50);
    }
  };

  const changeBackground = (event, mode) => {
    GAEventsTracket(`Let's Go Places`, mode);

    if (
      Api360?.currentFrame() !== 0 &&
      (currentCar === 'Sienna' || currentCar === 'Venza') &&
      !isSafari &&
      isLGPAllowed
    ) {
      set360Interaction(false);
      setLGP(false);

      Api360.toggleAnimation();
      car360IntervalId = window.setInterval(function () {
        checkingCurrentFrame();
      }, 50);
    } else {
      if (isLGPAllowed || event === 'end') {
        setLGP(false);
        if (videoInit) {
          setVideoInit(false);
        }
        if (currentCar === 'Venza' || currentCar === 'Sienna') {
          set360(true);
        }

        const loop = config?.videoBackground?.loop?.mp4 !== null || false;
        // for end of video event
        if (event === 'end') {
          set360(false);

          stopSound();

          // if car ends with a turntable we will hide the videos
          if (currentCar !== 'Venza' && currentCar !== 'Sienna') {
            if (mode === 'night') {
              if (loop) {
                setNight(false);
                setLoop(true);
              }
            } else {
              if (loop) {
                setLoop(false);
              }
              setDay(true);
            }
          } else {
            setDay(false);
            setNight(false);
            setLoop(false);
          }

          setLGP(true);
          set360Interaction(true);
        }
        // For non video events
        else {
          if (background) {
            // Changing day to night
            if (config.videoBackground !== undefined) {
              videoDay.current.currentTime = 0;
              videoDay.current.play();
            }
            setDay(false);
            setNight(true);
          } else {
            // Changing night to day
            if (config.videoBackground !== undefined) {
              videoNight.current.currentTime = 0;
              videoNight.current.play();
            }
            setLoop(false);
            setDay(true);
            setNight(false);
          }

          setBackground(!background);

          playSound();

          if (config.videoBackground === undefined) {
            setLGP(true);
          }
        }
      }
    }
  };

  const pushLinkTo = async (pose) => {
    if (pose === 'right' && currentCar === 'Toyota_Racing') {
      GAEventsTracket('Plus Icon Next', '/supra');

      history.push('/supra');
      setCurrentCar('Supra');
    }

    if (pose === 'left' && currentCar === 'Supra') {
      GAEventsTracket('Plus Icon Previous', '/toyota-racing');

      history.push('/toyota-racing');
      setCurrentCar('Toyota_Racing');
    } else if (pose === 'right' && currentCar === 'Supra') {
      GAEventsTracket('Plus Icon Next', '/highlander');

      history.push('/highlander');
      setCurrentCar('Highlander');
    }

    if (pose === 'left' && currentCar === 'Highlander') {
      GAEventsTracket('Plus Icon Previous', '/supra');

      history.push('/supra');
      setCurrentCar('Supra');
    } else if (pose === 'right' && currentCar === 'Highlander') {
      GAEventsTracket('Plus Icon Next', '/trd-pro');

      history.push('/trd-pro');
      setCurrentCar('TRD_Pro');
    }

    if (pose === 'left' && currentCar === 'TRD_Pro') {
      GAEventsTracket('Plus Icon Previous', '/highlander');

      history.push('/highlander');
      setCurrentCar('Highlander');
    } else if (pose === 'right' && currentCar === 'TRD_Pro') {
      GAEventsTracket('Plus Icon Next', '/rav4hybrid');

      history.push('/rav4hybrid');
      setCurrentCar('RAV4_Hybrid');
    }

    if (pose === 'left' && currentCar === 'RAV4_Hybrid') {
      GAEventsTracket('Plus Icon Previous', '/trd-pro');

      history.push('/trd-pro');
      setCurrentCar('TRD_Pro');
    } else if (pose === 'right' && currentCar === 'RAV4_Hybrid') {
      GAEventsTracket('Plus Icon Next', '/sienna');

      history.push('/sienna');
      setCurrentCar('Sienna');
    }

    if (pose === 'left' && currentCar === 'Sienna') {
      GAEventsTracket('Plus Icon Previous', '/rav4hybrid');

      history.push('/rav4hybrid');
      setCurrentCar('RAV4_Hybrid');
    } else if (pose === 'right' && currentCar === 'Sienna') {
      GAEventsTracket('Plus Icon Next', '/venza');

      history.push('/venza');
      setCurrentCar('Venza');
    }

    if (pose === 'left' && currentCar === 'Venza') {
      GAEventsTracket('Plus Icon Previous', '/sienna');

      history.push('/sienna');
      setCurrentCar('Sienna');
    } else if (pose === 'right' && currentCar === 'Venza') {
      GAEventsTracket('Plus Icon Next', '/mobility');

      history.push('/mobility');
      setCurrentCar('Mobility');
    }

    if (pose === 'left' && currentCar === 'Mobility') {
      GAEventsTracket('Plus Icon Previous', '/venza');

      history.push('/venza');
      setCurrentCar('Venza');
    } else if (pose === 'right' && currentCar === 'Mobility') {
      GAEventsTracket('Plus Icon Next', '/mirai');

      history.push('/mirai');
      setCurrentCar('Mirai');
    }

    if (pose === 'left' && currentCar === 'Mirai') {
      GAEventsTracket('Plus Icon Previous', '/mobility');

      history.push('/mobility');
      setCurrentCar('Mobility');
    } else if (pose === 'right' && currentCar === 'Mirai') {
      GAEventsTracket('Plus Icon Next', '/camryhybrid');

      history.push('/camryhybrid');
      setCurrentCar('CamryHybrid');
    }

    if (pose === 'left' && currentCar === 'CamryHybrid') {
      GAEventsTracket('Plus Icon Previous', '/mirai');

      history.push('/mirai');
      setCurrentCar('Mirai');
    } else if (pose === 'right' && currentCar === 'CamryHybrid') {
      GAEventsTracket('Plus Icon Next', '/team-toyota');

      history.push('/team-toyota');
      setCurrentCar('Team_Toyota');
    }
    if (pose === 'left' && currentCar === 'Team_Toyota') {
      GAEventsTracket('Plus Icon Previous', '/camryhybrid');

      history.push('/camryhybrid');
      setCurrentCar('CamryHybrid');
    }
  };

  const handleGlasPlusIconLeftOrRight = async (pose) => {
    await resetAll();
    await resteLoadAssetsToDefaultState(currentCar);
    await pushLinkTo(pose);
  };

  function lowerFirstLetter(string) {
    if (string === 'RAV4_Hybrid') {
      string = 'rav4hybrid';
      return string.toLowerCase();
    }
    return string.charAt(0).toLowerCase() + string.slice(1);
  }
  const walkaroundScene = () => {
    GAEventsTracket('Walk Around', `/${lowerFirstLetter(currentCar)}/walk-around`);
    // history.push(`/exploreHeroVehicle:${currentCar}`);
    history.push(`/${lowerFirstLetter(currentCar)}/walk-around`);
  };
  const playHeroCarVideo = () => {
    GAEventsTracket('HeroVideo', `/${currentCar}/genvmonitor`);
    //history.push(`/heroVideo:${currentCar}`);
    history.push(`/${lowerFirstLetter(currentCar)}/genvmonitor`);
  };

  /***
   * @function playSound
   * @description check and play sound with promise to make sure
   * it plays correctly
   */
  function playSound() {
    // Stop and rewind the sound (stops it if already playing).
    audioLetsGo.pause();
    audioLetsGo.currentTime = 0;

    audioAnimation.pause();
    audioAnimation.currentTime = 0;

    if (
      currentCar === 'Supra' ||
      currentCar === 'TRD_Pro' ||
      currentCar === 'Sienna' ||
      currentCar === 'Venza' ||
      currentCar === 'Mobility' ||
      currentCar === 'Mirai'
    ) {
      // Play the sound.
      // audioAnimation.play().then(response => {
      //   console.log('Sound playing only with animation');
      // }).catch(e => {
      //   console.log(e);
      // });
      // Play the sound.
      audioLetsGo
        .play()
        .then((response) => {
          console.log('Sound playing universal');
        })
        .catch((e) => {
          console.log(e);
        });

      audioLetsGo.onended = () => {
        audioAnimation
          .play()
          .then((response) => {
            console.log('Sound playing with animation');
          })
          .catch((e) => {
            console.log(e);
          });
      };
    } else {
      // Play the sound.
      audioLetsGo
        .play()
        .then((response) => {
          console.log('Sound playing universal');
        })
        .catch((e) => {
          console.log(e);
        });
      audioLetsGo.onended = () => {
        stopSound();
      };
    }
  }

  /***
   * @function stopSound
   * @description Alway stop sound to start from beginning.
   */
  function stopSound() {
    // Stop and rewind the sound (stops it if still playing).
    audioLetsGo.pause();
    audioLetsGo.currentTime = 0;

    audioAnimation.pause();
    audioAnimation.currentTime = 0;
  }

  const forcePushLink = async (_location) => {
    await asyncHistoryPushLink(_location);
  };
  const asyncHistoryPushLink = async (_location) => {
    history.push(_location);
  };
  return (
    <>
      <Fragment>
        <div className={style.sceneOverFlow}>
          <CustomHeader
            Nav={
              <NavComponent
                childComponent={<MainNavComponent />}
                width={100}
                height={100}
                zIndex={14}
              />
            }
            innerNav={`${!userWalkaround ? 'inner' : 'inner-traditional'}`}
            headerWidth={`${!userWalkaround ? 100 : 90}`}
            classicNav={!userWalkaround}
            colorNavText={`${!userWalkaround ? '#FFFFFF' : '#747474'}`}
            overViewColor={`${userWalkaround ? '#747474' : '#FFFFFF'}`}
            classicFooter={!userWalkaround}
            useSound={false}
            shareImage={useShareImage}
            childComponent={
              <NavComponent
                childComponent={
                  userWalkaround ? (
                    <WalkAroundContainer
                      open={userWalkaround}
                      onClose={toggleWalkaround}
                      car={useExploreCar}
                      videoSrc={useExploreCar.media}
                    />
                  ) : (
                    <></>
                  )
                }
                width={100}
                height={100}
                zIndex={13}
                backgroundColor={'#FFFFFF'}
              />
            }
            childName={`${!userWalkaround ? null : 'explore'}`}
          />

          {useVideoContent ? (
            <VideoContent
              open={useVideoContent}
              src={useExploreCar.LED}
              learnMore={useExploreCar.learnMore}
              setVideoContent={() => setVideoContent(false)}
            />
          ) : null}
        </div>

        {/* {currentCar === 'Explore_More_Vehicles' ? (window.location.href = '/explore') : null} */}

        <div className={`${style.scrollContainer} currentCar`} key={currentCar}>
          <div
            className={`${style.scrollContainerWrapper}  ${style[currentCar]}`}
            ref={scrollWrapperRef}
          >
            <div className={style.scrollContainerFlex}>
              {/*static global plus icons*/}
              <div
                className={style.GlasPlusIconLeft}
                onClick={() => handleGlasPlusIconLeftOrRight('left')}
              >
                <img
                  src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Icons/Toogle/TOY_VIRTUAL_Toogle1_Plus.svg"
                  alt="plus"
                />
              </div>
              <div
                className={style.GlasPlusIconRight}
                onClick={() => handleGlasPlusIconLeftOrRight('right')}
              >
                <img
                  src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Icons/Toogle/TOY_VIRTUAL_Toogle1_Plus.svg"
                  alt="plus"
                />
              </div>
              {/**/}
              <div
                className={style.scrollContainerFlexWrapper}
                style={{ width: config.background?.size[screenHeight] }}
              >
                <div
                  ref={backgroundLayer1}
                  className={style.autoShowCloud}
                  style={{
                    backgroundImage: `url(${config.background?.['set1']?.layer1[screenHeight]})`,
                    visibility: background ? 'visible' : 'hidden',
                  }}
                >
                  <BackgroundImageOnLoad
                    src={LoaderImage}
                    onLoadBg={() => {
                      LoadAssetsOnChange(currentCar, 'backgroundLayer1');
                    }}
                  />
                </div>

                <div
                  ref={backgroundLayer1}
                  className={style.autoShowCloud}
                  style={{
                    backgroundImage: `url(${config.background?.['set2']?.layer1[screenHeight]})`,
                    visibility: background ? 'hidden' : 'visible',
                  }}
                >
                  <BackgroundImageOnLoad
                    src={LoaderImage}
                    onLoadBg={() => {
                      LoadAssetsOnChange(currentCar, 'backgroundLayer1');
                    }}
                  />
                </div>

                <div
                  ref={backgroundLayer2}
                  className={`${style.autoShowBackground} ${
                    background ? style.layerActive : style.layerInative
                  }`}
                  style={{
                    backgroundImage: `url(${config.background?.['set1']?.layer2[screenHeight]})`,
                  }}
                >
                  <BackgroundImageOnLoad
                    src={LoaderImage}
                    onLoadBg={() => {
                      LoadAssetsOnChange(currentCar, 'backgroundLayer2');
                    }}
                  />
                </div>

                <div
                  ref={backgroundLayer2}
                  className={`${style.autoShowBackground} ${
                    background ? style.layerInative : style.layerActive
                  }`}
                  style={{
                    backgroundImage: `url(${config.background?.['set2']?.layer2[screenHeight]})`,
                  }}
                >
                  <BackgroundImageOnLoad
                    src={LoaderImage}
                    onLoadBg={() => {
                      LoadAssetsOnChange(currentCar, 'backgroundLayer2');
                    }}
                  />
                </div>
                <div className={`${style.Image360}`}>
                  {config.videoBackground !== undefined ? (
                    <>
                      {config.videoBackground?.init.mp4 !== null || false ? (
                        <video
                          className={videoInit ? style.fadeIn : style.fadeOut}
                          preload="auto"
                          muted
                          autoPlay
                          playsInline
                          loop={true}
                          ref={videoLoop}
                          id={currentCar}
                          onLoadedData={() => {
                            !isMobileDevice ? LoadAssetsOnChange(currentCar, 'videoLoop') : false;
                          }}
                          onLoadedMetadata={() => {
                            isMobileDevice ? LoadAssetsOnChange(currentCar, 'videoLoop') : false;
                          }}
                        >
                          {!isSafari ? (
                            <source src={config.videoBackground.init.webm} type="video/webm" />
                          ) : (
                            ''
                          )}
                          <source
                            src={config.videoBackground.init.mp4}
                            type='video/mp4; codecs="hvc1"'
                          />
                        </video>
                      ) : null}

                      {config.videoBackground.loop.mp4 !== null ? (
                        <video
                          className={loop ? style.fadeIn : style.fadeOut}
                          preload="auto"
                          muted
                          autoPlay
                          playsInline
                          loop={true}
                          ref={videoLoop}
                          onLoadedData={() => {
                            !isMobileDevice ? LoadAssetsOnChange(currentCar, 'videoLoop') : false;
                          }}
                          onLoadedMetadata={() => {
                            isMobileDevice ? LoadAssetsOnChange(currentCar, 'videoLoop') : false;
                          }}
                        >
                          {!isSafari ? (
                            <source src={config.videoBackground.loop.webm} type="video/webm" />
                          ) : (
                            ''
                          )}
                          <source
                            src={config.videoBackground.loop.mp4}
                            type='video/mp4; codecs="hvc1"'
                          />
                        </video>
                      ) : null}

                      <video
                        className={night ? style.fadeIn : style.fadeOut}
                        preload="auto"
                        muted
                        playsInline
                        ref={videoDay}
                        onEnded={() => changeBackground('end', 'night')}
                        onLoadedData={() => {
                          !isMobileDevice ? LoadAssetsOnChange(currentCar, 'videoDay') : false;
                        }}
                        onLoadedMetadata={() => {
                          isMobileDevice ? LoadAssetsOnChange(currentCar, 'videoDay') : false;
                        }}
                      >
                        {!isSafari ? (
                          <source src={config.videoBackground.night.webm} type="video/webm" />
                        ) : (
                          ''
                        )}
                        <source
                          src={config.videoBackground.night.mp4}
                          type='video/mp4; codecs="hvc1"'
                        />
                      </video>

                      <video
                        className={day ? style.fadeIn : style.fadeOut}
                        preload="auto"
                        muted
                        playsInline
                        ref={videoNight}
                        onEnded={() => changeBackground('end', 'day')}
                        onLoadedData={() => {
                          !isMobileDevice ? LoadAssetsOnChange(currentCar, 'videoNight') : false;
                        }}
                        onLoadedMetadata={() => {
                          isMobileDevice ? LoadAssetsOnChange(currentCar, 'videoNight') : false;
                        }}
                      >
                        {!isSafari ? (
                          <source src={config.videoBackground.day.webm} type="video/webm" />
                        ) : (
                          ''
                        )}
                        <source
                          src={config.videoBackground.day.mp4}
                          type='video/mp4; codecs="hvc1"'
                        />
                      </video>
                    </>
                  ) : null}
                  <div
                    className={style.Image360GlassIcon}
                    onClick={() => {
                      if (currentCar === 'TRD_Pro') {
                        GAEventsTracket('External Links', 'https://www.toyota.com/trdpro/');
                        window.open('https://www.toyota.com/trdpro/');
                      } else if (currentCar === 'Mobility') {
                        GAEventsTracket(
                          'External Links',
                          'https://www.startyourimpossible.com/en-us/mobility'
                        );
                        window.open('https://www.startyourimpossible.com/en-us/mobility');
                      } else {
                        //setWalkaround(true);
                        walkaroundScene();
                      }
                    }}
                  >
                    <GlassIcon />
                  </div>

                  <img
                    className={style.Image360Icon}
                    src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Icons/Overview/TOY_VIRTUAL_logo_360.svg"
                    alt="360"
                  />

                  {/* setVideoContent(true)} */}
                  <div className={style.Image360PlayIcon} onClick={() => playHeroCarVideo()}>
                    <img
                      src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Icons/Toogle/TOY_VIRTUAL_Toogle1_Play.svg"
                      alt="play"
                    />
                  </div>
                  <Link
                    to="/toyota-racing/drivers"
                    onClick={() => GAEventsTracket('Drivers', '/toyota-racing/drivers')}
                  >
                    <div className={style.Image360DrivesIcon}>
                      <img
                        src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Icons/Racing/TOY_VIRTUAL_Racing_Helmet_White.svg"
                        alt="racing"
                      />
                    </div>
                  </Link>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.toyota.com/team-toyota/"
                    onClick={() =>
                      GAEventsTracket('External Links', 'https://www.toyota.com/team-toyota/')
                    }
                  >
                    <div className={style.Image360MedalIcon}>
                      <img
                        src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Icons/Teams/TOY_VIRTUAL_Team _Medal_White.svg"
                        alt="racing"
                      />
                    </div>
                  </a>
                  <Link
                    to={`${
                      currentCar === 'Team_Toyota'
                        ? '/team-toyota/photo-booth'
                        : '/toyota-racing/photo-booth'
                    }`}
                    onClick={() =>
                      GAEventsTracket(
                        'Photo Booth',
                        `${
                          currentCar === 'Team_Toyota'
                            ? '/toyota-racing/photo-booth'
                            : '/toyota-racing/photo-booth'
                        }`
                      )
                    }
                  >
                    <div className={style.Image360RacingPhotoBoth}>
                      <img
                        src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Icons/Racing/TOY_VIRTUAL_Racing_Camera_white.svg"
                        alt="racing"
                      />
                    </div>
                  </Link>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.toyota.com/racing/other-series"
                    onClick={() =>
                      GAEventsTracket(
                        'External Links',
                        'https://www.toyota.com/racing/other-series'
                      )
                    }
                  >
                    <div className={style.Image360RacingExternal}>
                      <img
                        src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Icons/Racing/TOY_VIRTUAL_Toogle1_Flag.svg"
                        alt="racing"
                      />
                    </div>
                  </a>
                  <div
                    className={style.Image360RacingExternalLabel}
                    style={{
                      color: `${currentCar === 'Toyota_Racing' && !background ? 'white' : 'black'}`,
                    }}
                  >
                    {currentCar === 'Toyota_Racing' ? (
                      <>Check out the other racing series Toyota is involved in!</>
                    ) : (
                      <></>
                    )}
                    {currentCar === 'Team_Toyota' ? (
                      <>Learn more about our Team Toyota athletes!</>
                    ) : (
                      <></>
                    )}
                  </div>
                  {/* <Link to="/photo:platform"> */}
                  {/* <div className={style.Image360RacingPhotoBoth}>
                  <img
                    src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Icons/Racing/TOY_VIRTUAL_Racing_Helmet_White.svg"
                    alt="racing"
                  />
                </div> */}
                  {/* </Link> */}
                  {currentCar === 'Team_Toyota' ? (
                    <video
                      preload="auto"
                      playsInline
                      className={style.teamVideo}
                      autoPlay
                      muted
                      loop={true}
                      ref={teamVideoRef}
                      onLoadedData={() => {
                        !isMobileDevice ? LoadAssetsOnChange(currentCar, 'videoTeam') : false;
                      }}
                      onLoadedMetadata={() => {
                        isMobileDevice ? LoadAssetsOnChange(currentCar, 'videoTeam') : false;
                      }}
                    >
                      {!isSafari ? (
                        <source
                          src="https://d28z8i57b3adv3.cloudfront.net/assets/HeroCars/Team/Assets/Videos/Pillards/webm/Pillards_Led.webm"
                          type="video/webm"
                        />
                      ) : (
                        ''
                      )}
                      <source
                        src="https://d28z8i57b3adv3.cloudfront.net/assets/HeroCars/Team/Assets/Videos/Pillards/HEVC/Pillards_Led.mov"
                        type='video/mp4; codecs="hvc1"'
                      />
                    </video>
                  ) : null}

                  {config?.turnable === false ? (
                    <div className={style.car360} key={currentCar}>
                      <img src={config.assetsPath360} />
                    </div>
                  ) : (
                    <div className={style.car360Wrapper}>
                      <div
                        key={currentCar}
                        ref={spriteSpin}
                        className={`spritespin cloudimage-360 ${
                          currentCar === 'Sienna' && !background ? style.SiennaB2Active : null
                        }`}
                        style={{ visibility: hide360 ? 'hidden' : 'visible' }}
                      />
                    </div>
                  )}

                  <div className={style.Image360BlockTop}>
                    <img className="carLogo" src={config.logo?.white} alt="car-logo" />
                  </div>
                  <div className={style.Image360BlockLeft} />
                  <div className={style.Image360BlockRight} />
                  <div
                    className={style.Image360BlockAll}
                    style={{ display: is360Interactive ? 'none' : 'block' }}
                  />
                  <div className={style.Image360BlockBottom}>
                    <div className={style.letsGoToPlaces}>
                      <GoPlaces />
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={!background}
                          disabled={!isLGPAllowed}
                          onChange={() => changeBackground('change', !background ? 'day' : 'night')}
                        />
                        <span className="slider round" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className={style.fadeFooter}></div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </>
  );
};

export default HeroVehicleDetails;
