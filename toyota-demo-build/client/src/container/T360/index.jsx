import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import style from '../T360/style/theater.module.scss';
import { MainNavComponent, NavComponent, VideoComponent } from '../../components/common';
import CustomHeader from '../headerLayout/customHeader';

import { useHistory } from 'react-router-dom';
import { toggleIntroVideo, selectVideoIntro } from './t360.redux';

import cars from '../../config/cars';
//import { Mobile, isSafari } from './isMobile';
import { setAssetLoader, selectAssetLoader } from '../../store/gobal';

import useGAEventsTracker from '../../useGAevnetsTracker';


const TheaterContainer = () => {
  const [isVideoEnded, setVideoEnded] = useState(false);
  //const [useReplayVideo, setVideoReplay] = useState(false);
  const [useVideo, setVideo] = useState('');

  const [config, setConfig] = useState({});
  const [useShareImage, setShareImage] = useState(null);
  const [useThumbnail, setThumbnail] = useState([]);

  const [useLocation, setLocation] = useState(); //useState(window.location.pathname.split(':')[1]);
  const [useCloseButton, setCloseButon] = useState(false);

  const GAEventsTracket = useGAEventsTracker('T-360')

  const videoIntroState = useSelector(selectVideoIntro);
  const dispatch = useDispatch();

  const history = useHistory();


  // const [isMobile, setisMobile] = useState(Mobile() || isSafari() === 'Safari' ? true: false);
  // const [useSound, setSound] = useState(Mobile() || isSafari() === 'Safari' ? true: false);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  useEffect(() => {
    // console.log(window.location.pathname.split('/').pop());
    let _prefixName = window.location.pathname.split('/').pop().toLowerCase();

    if (_prefixName === 't360-theater') {
      setLocation('Theater');
    } else if (_prefixName === 'choose-your-experience') {
      setLocation('Landing')
    }
     else {
      setLocation(capitalizeFirstLetter(window.location.pathname.split('/').pop().toLowerCase() ))
    }
 

  }, [useLocation])

  useEffect(() => {
    dispatch(setAssetLoader(false));

    const carconfig = cars['Theater'];

    setConfig(carconfig);
    setThumbnail(carconfig?.Thumbnail)
    setShareImage(carconfig?.share);
  

    setCloseButon(true);
   
    if (useLocation === 'Landing') {
      //console.log('intro first time : ', videoIntroState)
      if (videoIntroState) {
        //setVideo(carconfig?.[useLocation][0]);
        setVideo(carconfig?.['LandingFirstTime'][0]);
      }
      else {
        let element = carconfig?.[useLocation];
        setVideo(carconfig?.[useLocation][Math.floor(Math.random() * element.length)]);
      }
    } else {
      setVideo(carconfig?.[useLocation])
    }

    if (useLocation === 'Landing') {
      setCloseButon(false)
    }

  }, [useLocation, videoIntroState]);

  const onFinished = async(ended) => {
    
    setVideoEnded(ended);
    //setVideoReplay(false);
    if (useLocation === 'Theater') {
      // history.push('/Theater:Landing');
   
      await pushLink('/t360-theater/choose-your-experience')
      setLocation('Landing')

      dispatch(toggleIntroVideo(false));
    }
    if (useLocation === 'Sienna' || useLocation === 'Venza' || useLocation === 'Brand') {
      //history.push('/Theater:Landing');
   
      await pushLink('/t360-theater/choose-your-experience')
      setLocation('Landing')

    }
    if (useLocation === 'Landing' && videoIntroState) {
      dispatch(toggleIntroVideo(false));
    }
  }


  function handleSound(state) {
    console.log('sound state : ', state)
    //setSound(state)
  }

  function handleCloseVideo() {
    if (useLocation === 'Sienna' || useLocation === 'Venza' || useLocation === 'Brand') {
      dispatch(toggleIntroVideo(false));
      setCloseButon(false)
    } else {
      setCloseButon(false)
    }
  }

  const pushLink = async (_location) => {
    history.push(_location);
   
    setLocation(_location);
   
    GAEventsTracket('Location', `${_location}`)
   
  }

  return (
    <div className={style.Box} >

      <CustomHeader
        Nav={
          <NavComponent
            childComponent={<MainNavComponent />}
            width={100}
            height={100}
            zIndex={14}
          />
        }
        innerNav={'inner'}
        headerWidth={useLocation === 'Theater' || useLocation === 'Landing' ? 100 : 40}
        classicNav={useLocation === 'Theater' || useLocation === 'Landing' ? true : false}
        classicFooter={useLocation === 'Theater' || useLocation === 'Landing' ? true : false}
        colorNavText={'#FFFFFF'}
        overViewColor={'#FFFFFF'}
        gradientHeader={true}
        useInfo={false}
        callback={(status) => handleSound(status)}
        useSound={false} //{isMobile}
        shareImage={useShareImage}
        childComponent={
          <>
            {
              useCloseButton
                ?
                <div className={style.Button}>
                  {/* <a href={'/Theater:Landing'}> */}
                  <div onClick={() => pushLink('/t360-theater/choose-your-experience')}>
                    <button
                      className={`hamburger hamburger--slider-r is-active`}
                      type="button"
                      onClick={() => handleCloseVideo()}
                    >
                      <span className="hamburger-box">
                        <span className={`hamburger-inner`}></span>
                      </span>
                    </button>
                  </div>
                </div>
                : <></>
            }
            <VideoComponent key={useVideo} src={useVideo} carModel='' onFinished={(ended) => onFinished(ended)} />
          </>
        }
        childName='dynamicVideo'
      />
      {
        useLocation === 'Landing'
          ?
          <>
            <div className={style.BoxLogoBox}>
              <div className={style.BoxRow}>
                <div className={style.BoxColumn}>
                  <div className={style.BoxInnerBox}>
                    <img src={config.logo?.white} alt="landing" />
                  </div>
                </div>
                <div className={style.BoxColumn}>
                  <div className={style.BoxInnerBox}>
                    <div className={style.BoxLogoBoxText}>CHOOSE YOUR EXPERIENCE</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.BoxSelection}>
              <div className={style.BoxRow}>
                {
                  useThumbnail.map((item, i) => {
                    return (
                      <div key={i} className={style.BoxColumn}>
                        <div key={i} className={style.BoxInnerBox}>
                          <img src={item.img} alt={item.name} />
                          {/* <a href={item.href} onClick={() => item.href === '/quiz' ? GAEventsTracket('Location', `${item.href}`) : false}>
                            <button id={item.name} className={`${style.BoxInnerBoxButton} button`} >{item.name}</button>
                          </a> */}
                          <div onClick={() => pushLink(item.href) }>
                            <button id={item.name} className={`${style.BoxInnerBoxButton} button`} >{item.name}</button>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }

              </div>
            </div>
          </>
          : <></>
      }


    </div>
  )
}

export default TheaterContainer;