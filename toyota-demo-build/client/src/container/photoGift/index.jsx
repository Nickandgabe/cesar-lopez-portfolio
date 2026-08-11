import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import style from '../photoGift/style/photo.module.scss';
import Webcam from 'react-webcam';
import loader from './../../assets/loader/LoadingRed.gif';
import axios from 'axios';
import photoBoothToyotaLogo from './../../config/assets/photobooth/logo.base64';

import useGAEventsTracker from '../../useGAevnetsTracker';

import {
  MainNavComponent,
  NavComponent,
  CardNavComponent,
  CardResultComponent,
} from '../../components/common';
import CustomHeader from '../headerLayout/customHeader';
import {
  selectPreBgRemovalPhoto,
  selectCurrentPhoto,
  storeCurrentPhoto,
  fetchBackgroundRemoval,
  selectCurrentPhotoGrid,
  resetState,
  storeCurrentPhotoGrid,
} from './photoBooth.redux';
import { setAssetLoader } from '../../store/gobal';

import photo from './../../config/photo';

// Demo mode: this is an archived portfolio piece with no live backend, so the
// real remove.bg-backed endpoint is swapped for a local mock that returns the
// original image unchanged (no background removal, but the flow still completes).
const removeBackground = (payload) => Promise.resolve({ data: { imageBase64: payload.imageBase64 } });

const duration = 30 * 1000;
const end = Date.now() + duration;

let photoScene;

let isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
      isMobile = true;
}

/**
 * @function PhotoGiftComponent
 * @param {*} props {*} callback
 * @returns Render navigation component to main view displaying auto video / navigation / explore-more.
 */
const PhotoGiftComponent = () => {
  let isMobileDevice = useMediaQuery({ query: '(max-height: 440px)' }) ? '350' : '550';
  let isTablet = useMediaQuery({ query: '(min-height: 700px)' }) ? '720' : isMobileDevice;
  let isDekstop = useMediaQuery({ query: '(min-height: 1060px)' }) ? '1080' : '940';
  let screenHeight = useMediaQuery({ query: '(max-height: 920px)' }) ? isTablet : isDekstop;

  const preRemoval = useSelector(selectPreBgRemovalPhoto);
  const afterRemoval = useSelector(selectCurrentPhoto);
  const photoGrid = useSelector(selectCurrentPhotoGrid);

  const [logo, setLogo] = useState({});
  const [content, setContent] = useState({});
  const [background, setBackground] = useState('');
  const [thumbnail, setThumbnail] = useState([]);
  const [isMoreInfo, setMoreInfo] = useState({});
  const dispatch = useDispatch();
  const [photoBoothStep, setPhotoboothStep] = useState(0);
  const [isPhotoLoading, setLoader] = useState(false);
  const [count, setCount] = useState(3);
  const [flash, setFlash] = useState(false);
  const [showCountDown, setShowCountDown] = useState(false);
  const [showCountDownPhotoGrid, setShowCountDownPhotoGrid] = useState(false);
  const [capturingInProgress, setCaptureInProgress] = useState(false);

  const webcamRef = useRef(null);
  const photoPreviewCanvas = useRef(null);

  const [useBackToOverViewLink, setOverViewLink] = useState();

  const [isMobile, setisMobile] = useState(false);

  const [useCardContent, setCardContent] = useState({});
  // const [currentCar, setCurrentCar] = useState();

  const GAEventsTracket = useGAEventsTracker('Photo Booth');

  const videoConstraints = {
    // width: window.innerWidth / 2,
    width: window.innerHeight / 1.5,
    height: window.innerHeight / 1.5,
    // width: 1280,
    // height: 800,
    facingMode: 'user',
  };

  useEffect(() => {
    if (window.location.pathname.split('/')[1].toLowerCase() === 'toyota-racing') {
      photoScene = 'ToyotaRacing';
      setCardContent(photo['ToyotaRacing']['ResultText']);
    } else {
      photoScene = 'TeamToyota';
      setCardContent(photo['TeamToyota']['ResultText']);
    }
    console.log('name:', window.location.pathname.split('/')[1].toLowerCase());
    //photoScene = window.location.pathname.split(':')[1];
    setOverViewLink(photo[photoScene].backTo);
    setLogo(photo[photoScene].logo);
    setContent(photo[photoScene].content);
    setBackground(photo[photoScene].background);
    setMoreInfo(photo[photoScene].moreInfo);
    if (photo[photoScene].thumbnail) setThumbnail(photo[photoScene].thumbnail);
  }, []);

  useEffect(() => {
    dispatch(setAssetLoader(false));
    drawOnCanvas('initial');
  }, []);

  // Only Draw the background on canvas
  useEffect(() => {
    drawOnCanvas('backgroundOnly', afterRemoval);
  }, [background]);

  useEffect(() => {
    if (Number(screenHeight) === 350) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  }, []);

  const redrawCanvas = () => {
    if (photoBoothStep === 0) {
      drawOnCanvas('');
    }
    // if(photoBoothStep === 1) {
    //
    // }

    // if(photoBoothStep === 3) {
    // drawOnCanvas('photoInsert', '', photoGrid);
    // }

    console.log('===== redraw canvas');
  };

  useEffect(() => {
    window.addEventListener('resize', redrawCanvas);
  }, []);

  // Reset State on component unmount
  useEffect(() => {
    return () => dispatch(resetState());
  }, []);

  const resetAll = () => {
     //seding event to GA
     GAEventsTracket('Photo - Image Try Again', window.location.pathname.toLowerCase());

    dispatch(resetState());
    setCount(3);
    drawOnCanvas('initial');
    setPhotoboothStep(0);
  };

  const changePhotoBoothStep = (step) => {
    setPhotoboothStep(step);
  };

  useEffect(() => {
    console.log('=== local state', { photoBoothStep, count });
  });

  // Trigger an update once we have the photoGrid comming back from back end
  useEffect(() => {
    drawOnCanvas('preview', null, photoGrid);
  }, [photoGrid]);

  const capture = useCallback(async () => {
    //seding event to GA
    GAEventsTracket('Capture - Image', window.location.pathname.toLowerCase());

    setCaptureInProgress(true);
    let lcount = 3;
    let gridCount = 3;
    let round = 0;

    // GET UNIQUE SHOOT
    const getShoot = () => {
      setLoader(true);
      setFlash(true);

      let clickSound = new Audio(
        'https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Sounds/PhotoCameraFilmTypeSnapShot.wav'
      );
      clickSound.currentTime = 0;
      clickSound
        .play()
        .then((response) => {
          console.log('Sound playing universal');
          setFlash(false);
        })
        .catch((e) => {
          console.log(e);
        });

      const imageSrc = webcamRef.current.getScreenshot({
        width: 1280,
        height: 1280,
      });
      changePhotoBoothStep(2);

      dispatch(storeCurrentPhoto(imageSrc.split(',')[1]));

      drawOnCanvas('preview', imageSrc.split(',')[1]);
      setFlash(false);
      setCaptureInProgress(false);
    };

    let photoNumbers = 4;
    let tempPhotoGrid = [];

    // Get photo sequence
    const getPhotoGridShoot = () => {

      if(isMobile === false) {
        setFlash(true);
      let clickSound = new Audio(
        'https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Sounds/PhotoCameraFilmTypeSnapShot.wav'
      );
      clickSound.currentTime = 0;
      clickSound
        .play()
        .then((response) => {
          console.log('Sound playing universal');
        })
        .catch((e) => {
          console.log(e);
        });

        setFlash(false);
      }
      //   clickSound.pause();

      const imageSrc = webcamRef.current.getScreenshot({
        width: 1280,
        height: 1280,
      });

      tempPhotoGrid.push(imageSrc.split(',')[1]);

      if (round === 3) {
        dispatch(storeCurrentPhotoGrid(tempPhotoGrid));
        changePhotoBoothStep(2);
        setCaptureInProgress(false);
      }
    };

    if (window.location.pathname.toLowerCase() === '/team-toyota/photo-booth') {
      setShowCountDownPhotoGrid(true);
      const countDown = setInterval(function () {
        console.log({ lcount });
        lcount = lcount - 1;
        setCount(lcount);

        if (lcount === 0) {
          photoNumbers = photoNumbers - 1;
          getPhotoGridShoot();
          round = round + 1;
          lcount = lcount = 3;
          setCount(lcount);

          if (round === 4) {
            clearInterval(countDown);
            setShowCountDownPhotoGrid(false);
          }
        }
      }, 1000);
    } else {
      setShowCountDown(true);
      const countDown = setInterval(function () {
        lcount = lcount - 1;
        setCount(lcount);
        if (lcount === 0) {
          clearInterval(countDown);
          setShowCountDown(false);
          getShoot();
        }
      }, 1000);
    }
  }, [webcamRef]);

  const finish = async () => {
    setLoader(true);

     //seding event to GA
     GAEventsTracket('Composed - Image Finish', window.location.pathname.toLowerCase());

    if (window.location.pathname.toLowerCase() === '/team-toyota/photo-booth') {
      let photoGridNoBg = [];

      axios
        .all([
          removeBackground({
            imageBase64: photoGrid[0],
          }),
          removeBackground({
            imageBase64: photoGrid[1],
          }),
          removeBackground({
            imageBase64: photoGrid[2],
          }),
          removeBackground({
            imageBase64: photoGrid[3],
          }),
        ])
        .then(
          axios.spread(function (res1, res2, res3, res4) {
            photoGridNoBg = [
              res1.data.imageBase64,
              res2.data.imageBase64,
              res3.data.imageBase64,
              res4.data.imageBase64,
            ];
          })
        )
        .then(() => {
          changePhotoBoothStep(3);

          drawOnCanvas('photoInsert', '', photoGridNoBg);
        });
    } else {
      const response = await removeBackground({
        imageBase64: preRemoval,
      });
      changePhotoBoothStep(3);

      drawOnCanvas('photoInsert', response.data.imageBase64, response.data.imageBase64);
    }
  };

  const downloadImage = () => {
    const image = photoPreviewCanvas.current
      .toDataURL('image/png', 1.0)
      .replace('image/png', 'image/octet-stream');
    let link = document.createElement('a');
    link.download = 'Toyota-autoshow.png';
    link.href = image;
    link.click();

     //seding event to GA
     GAEventsTracket('Dowload Photo Booth - Image', 'Toyota-autoshow.png');
    
  };

  const drawOnCanvas = (type, base64, photoGridBase64) => {
    let canvas = photoPreviewCanvas.current;

    // Initialize Image Elements
    const img = new Image();
    const imgBackground = new Image();

    const ctx = canvas.getContext('2d');

    // Window size
    const win = {
      w: photoBoothStep === 0 ? window.innerWidth / 1.67 : 1080,
      h: photoBoothStep === 0 ? window.innerHeight / 1.67 : 1080,
    };

    // TODO: needs to be a global function or redraw on resize
    const resizeCanvas = async () => {
      win.w = photoBoothStep === 0 ? window.innerWidth / 1.67 : 1080;
      win.h = photoBoothStep === 0 ? window.innerHeight / 1.67 : 1080;

      if (
        photoBoothStep !== 0 &&
        window.location.pathname.toLowerCase() === '/team-toyota/photo-booth'
      ) {
        canvas.width = win.w;
        canvas.height = win.h + 150;
        // canvas.style.width = `${window.innerHeight / 1.67}px`;
        // canvas.style.height = `${window.innerHeight / 1.67 + 150}px`;
        canvas.style.width = '1080px';
        canvas.style.height = '1230px';
      } else {
        canvas.width = win.w;
        canvas.height = win.h;

        if (window.location.pathname.toLowerCase() === '/toyota-racing/photo-booth') {
          canvas.style.width = `${window.innerHeight / 1.67}px`;
          canvas.style.height = `${window.innerHeight / 1.67}px`;
        } else {
          canvas.style.width = `${win.w}px`;
          canvas.style.height = `${win.h}px`;
          // canvas.style.width = "1080px";
          // canvas.style.height = "1080px";
        }
      }

      return true;
    };

    // Draw Image With keeping the Aspect Ratio
    const drawImageWithScale = async (img, grid) => {
      const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
      const dpr = window.devicePixelRatio;
      const dpi = 300;
      const xWidth = canvas.width / 2 - (img.width / 2) * scale;
      const yHeight = canvas.height / 2 - (img.height / 2) * scale;

      console.log('==== canvas', { xWidth, yHeight, photoBoothStep });

      if (
        window.location.pathname.toLowerCase() === '/team-toyota/photo-booth' &&
        photoGrid.length !== 0 &&
        photoGridBase64 !== undefined &&
        photoGridBase64.length !== 0
      ) {
        if (photoBoothStep !== 0) {
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, win.w, win.h);
        }

        if (photoBoothStep === 2) {
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, win.w, win.h + 150);
          // ctx.scale(scale, scale);
        }

        ctx.lineWidth = 20;
        const p = ctx.lineWidth / 2;
        // const p = 0;
        let frame = 0;

        const toyotaLogo = new Image();
        toyotaLogo.src = `data:image/png;base64,${photoBoothToyotaLogo}`;
        let isLogoInsterted = false;

        for (let xCell = 0; xCell < 2; xCell++) {
          for (let yCell = 0; yCell < 2; yCell++) {
            const x = (xCell * win.w) / 2;
            const y = (yCell * win.h) / 2;

            const imgGrid = new Image();
            imgGrid.onload = function () {
              ctx.imageSmoothingQuality = 'high';

              if (xCell % 2 === 0) {
                if (yCell % 2 === 0) {
                  // Right Top
                  // Background
                  ctx.drawImage(
                    img,
                    x + p + 15,
                    y + p + 10,
                    win.w / 2.1 - p * scale,
                    win.h / 2.1 - p * scale
                  );
                  // Camera Raw
                  ctx.drawImage(
                    imgGrid,
                    x + p + 15,
                    y + p + 10,
                    win.w / 2.1 - p * scale,
                    win.h / 2.1 - p * scale
                  );
                } else {
                  // Right Bottom
                  // Background
                  ctx.drawImage(
                    img,
                    x + p + 15,
                    y + p - 10,
                    win.w / 2.1 - p * scale,
                    win.h / 2.1 - p * scale
                  );
                  // Camera Raw
                  ctx.drawImage(
                    imgGrid,
                    x + p + 15,
                    y + p - 10,
                    win.w / 2.1 - p * scale,
                    win.h / 2.1 - p * scale
                  );
                }
              } else {
                // Left Top
                if (yCell % 2 === 0) {
                  // Background
                  ctx.drawImage(
                    img,
                    x + p - 0,
                    y + p + 10,
                    win.w / 2.1 - p * scale,
                    win.h / 2.1 - p * scale
                  );

                  // Camera Raw
                  ctx.drawImage(
                    imgGrid,
                    x + p - 0,
                    y + p + 10,
                    win.w / 2.1 - p * scale,
                    win.h / 2.1 - p * scale
                  );
                } else {
                  // Left Bottom
                  // background
                  ctx.drawImage(
                    img,
                    x + p,
                    y + p - 10,
                    win.w / 2.1 - p * scale,
                    win.h / 2.1 - p * scale
                  );
                  // Camera Raw
                  ctx.drawImage(
                    imgGrid,
                    x + p,
                    y + p - 10,
                    win.w / 2.1 - p * scale,
                    win.h / 2.1 - p * scale
                  );
                }
              }

              if (photoBoothStep === 2 && isLogoInsterted === false) {
                isLogoInsterted = true;
                ctx.drawImage(toyotaLogo, win.w / 2.7, win.h + 20, 240 - p * scale, 96 - p * scale);
              }
            };

            imgGrid.src = `data:image/png;base64,${
              photoBoothStep === 2 ? photoGridBase64[frame] : photoGrid[frame]
            }`;
            frame = frame + 1;
          }
        }
      } else {
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, xWidth, yHeight, win.w, win.h);
      }

      return true;
    };

    // Once Background is ready we will wait to onLoad to paint second layer
    const backgroundIsReady = async () => {
      img.src = `data:image/png;base64,${base64}`;
      img.onload = paintPerson;
    };

    const renderBackground = async () => {
      // Clean Canvas Before next render
      ctx.clearRect(0, 0, win.w, win.h);

      await drawImageWithScale(imgBackground);

      if (window.location.pathname.toLowerCase() !== '/team-toyota/photo-booth') {
        await backgroundIsReady();
      }
      setLoader(false);
    };

    const paintPerson = async () => {
      await drawImageWithScale(img);
      setLoader(false);
    };

    const init = async () => {
      await resizeCanvas();

      if (type === 'initial') {
        await renderBackground();
      } else {
        await renderBackground();
      }
    };

    // Start Paiting background
    imgBackground.src = `data:image/png;base64,${background}`;
    imgBackground.onload = init;

    if (type === 'preview') {
      ctx.clearRect(0, 0, win.w, win.h);
      img.src = `data:image/png;base64,${base64}`;
      img.onload = paintPerson;
    }
  };

  const returnCanvasPhotoCss = () => {
    if (photoScene === 'TeamToyota') {
      if (photoBoothStep === 2 || photoBoothStep === 3) {
        return style.boxPhotoBackgroundCanvas;
      } else {
        return style.boxPhotoBackground;
      }
    } else {
      return style.boxPhotoBackground;
    }
  };

  return (
    <>
      {/* <center>
        <button onClick={() => downloadImage()}> Download </button>
      </center> */}
      <div className={style[photoScene]}>
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
          overViewColor="#747474"
          gradientHeader={false}
          classicNav={false}
          classicFooter={false}
          showOverview={!isMobile}
          headerWidth={20}
          childComponent={
            <NavComponent
              childComponent={
                <>
                  {photoBoothStep !== 3 ? (
                    <CardNavComponent
                      Logo={logo}
                      moreInfo={isMoreInfo}
                      backTo={useBackToOverViewLink}
                      textTitle={content.Title}
                      textBody={content.Text}
                    />
                  ) : (
                    <CardResultComponent
                      backTo={useBackToOverViewLink}
                      textTitle={useCardContent.header}
                      textBody={useCardContent['paragraphs']}
                      callback={() => downloadImage()}
                    />
                  )}
                </>
              }
              width={!isMobile ? (photoBoothStep !== 3 ? 30 : 33) : 35}
              height={100}
              zIndex={13}
              backgroundColor={'#FFFFFF'}
            />
          }
          childName="giftphoto"
        />

        <div className={style.boxPhoto}>
          <div
            className={style.countDownContainer}
            style={{ display: showCountDown ? 'block' : 'none' }}
          >
            <h1 className={style.countDown}>{count}</h1>
          </div>
          <div
            className={style.countDownContainer}
            style={{ display: showCountDownPhotoGrid ? 'block' : 'none' }}
          >
            <h1 className={style.countDown}>{count}</h1>
          </div>
          <div className={style.cameraFlash} style={{ visibility: flash ? 'visible' : 'hidden' }} />
          {isPhotoLoading ? (
            <div className={style.Loader}>
              <img src={loader} alt="loading..." />
            </div>
          ) : (
            false
          )}
          {/* <div style={{ width: "500px", height: "500px"}}>  */}

          <canvas
            style={{
              display:
                photoBoothStep === 0 || photoBoothStep === 2 || photoBoothStep === 3
                  ? 'block'
                  : 'none',
              // transform: photoBoothStep === 1 || photoBoothStep === 2 ? "scale(0.5)" : "scale(1)"
            }}
            ref={photoPreviewCanvas}
            // className={style.boxPhotoBackground}
            className={returnCanvasPhotoCss()}
          />
          {/* </div> */}

          {photoBoothStep === 0 || photoBoothStep === 3 ? (
            <>
              {photoBoothStep === 0 ? (
                <div className={style.boxCameraIcon}>
                  <img
                    src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Icons/Racing/TOY_VIRTUAL_Racing_Camera_white.svg"
                    alt="photoicon"
                    onClick={() => changePhotoBoothStep(1)}
                  />
                  <p>Begin</p>
                </div>
              ) : (
                false
              )}
            </>
          ) : (
            false
          )}
          <div className={style.boxPhotoscrollmenu}>
            <div className={style.boxPhotoscrollmenuChild}>
              {photoBoothStep === 1 ? (
                <>
                  <Webcam
                    ref={webcamRef}
                    screenshotFormat="image/png"
                    videoConstraints={videoConstraints}
                    screenshotQuality={1}
                  />
                </>
              ) : (
                false
              )}
              {thumbnail.length > 0 && photoBoothStep === 0 ? (
                <>
                  {/* <div style={{ height: '140px', marginLeft: '30px' }}> */}
                  {thumbnail.map((item, i) => {
                    return (
                      <img
                        id={item.src}
                        key={i}
                        src={`data:image/png;base64,${item.src}`}
                        alt={`thumbnail-${i}`}
                        style={{ border: item.src === background ? '3px solid #eb0a1e' : '' }}
                        className={style.bgSelection}
                        onClick={() => setBackground(item.src)}
                      />
                    );
                  })}
                  {/* </div> */}
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className={style.boxPhotoFooter}>
            <div className={style.boxPhotoFooterBox}>
              {photoBoothStep === 1 ? (
                <>
                  <p style={{ padding: '10px' }}>
                    Click the start button below and the camera will count down from 3. Strike your
                    best pose!
                  </p>
                  <div
                    style={{ width: '100%' }}
                    style={{ visibility: capturingInProgress ? 'hidden' : 'visible' }}
                  >
                    <button className="button" style={{ width: '200px' }} onClick={capture}>
                      {' '}
                      Start{' '}
                    </button>
                  </div>
                </>
              ) : (
                false
              )}
              {photoBoothStep === 2 && !isPhotoLoading ? (
                // <div style={{ width: '100%' }}>
                <div className={style.boxPhotoFooterBoxFinish}>
                  <p style={{ padding: '10px' }}>
                    Are you happy with your photos? Click the Finish button below, or click Try
                    Again to strike more poses.
                  </p>
                  <button
                    className="button"
                    style={{ width: '200px', marginLeft: '0' }}
                    onClick={resetAll}
                  >
                    Try Again
                  </button>
                  <button
                    className="button"
                    style={{ width: '200px', marginLeft: '100px' }}
                    onClick={finish}
                  >
                    Finish
                  </button>
                </div>
              ) : (
                false
              )}

              {/* {photoBoothStep === 3 ? (
              <div style={{ width: '100%' }}>
                <button
                  className="button"
                  style={{ width: '200px', marginLeft: '0' }}
                  onClick={downloadImage}
                >
                  Download
                </button>
              </div>
            ) : (
              false
            )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoGiftComponent;
