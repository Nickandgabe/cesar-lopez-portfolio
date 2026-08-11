import React, { useState } from 'react';
import style from '../walkaroundDetails/style/walkaround.module.scss';

import { ReactComponent as ButonExplore } from './../../assets/Icons/Buttons/TOY_VIRTUAL_button_Explore.svg';

import { VideoComponent, ExploreNavComponent } from '../../components/common';


/**
 * @function WalkAroundContainer
 * @param {*} props {*} callback
 * @returns Render navigation component to main view displaying auto video / navigation / explore-more.
 */
const WalkAroundContainer = ({ open, onClose, car, videoSrc }) => {

  const [isVideoEnded, setVideoEnded] = useState(false);
  const [isExploreMore, setExploreMore] = useState(false);

  // callback function in order to close modal and show traditional
  // regular navigation bar.
  function handleCloseModalClick() {
    onClose(false); // pass any argument to the callback
  }

  function onFinished(ended) {
    setVideoEnded(ended);
  }

  return (
    <>
      {
        open
          ?
          <>
            <div className={style.Box}>
              <div className={style.Button}>
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

              {
                !isExploreMore
                  ?
                  <>
                    <VideoComponent src={videoSrc} onFinished={(ended) => onFinished(ended)} />
                    <div className={style.Footer}>
                      <div className={style.FooterDisclamer}>
                        {
                          !isVideoEnded
                            ? car?.disclaimer
                            :
                            <>
                              <div className={style.flexContainerButton}>
                                <div className={style.flexItemLeftButton}>
                                  <a href={car?.learnMore} target={`_black`}>
                                    <button className={`${style.btnLearn} button`}>Learn More</button>
                                  </a>
                                </div>
                                <div className={style.flexItemLeftButton}>
                                  <a href={car?.buildYourOwn} target={`_black`}>
                                    <button className={`${style.btnBuild} button`}>Build Your Own</button>
                                  </a>
                                </div>
                                <div className={style.flexItemLeftButton}>
                                  <a href={car?.accessories} target={`_black`}>
                                    <button className={`${style.btnView} button`}>View Accessories</button>
                                  </a>
                                </div>
                              </div>
                            </>
                        }
                      </div>
                      <div className={style.FooterButton} onClick={() => {
                        setExploreMore(true);
                        setVideoEnded(false);
                      }}>
                        <ButonExplore />
                      </div>

                    </div>
                  </>
                  :
                  <>
                    <div className={style.hoopsLeft}><div className={style.hoopsCircle}></div></div>
                    <div className={style.hoopsRight}><div className={style.hoopsCircle}></div></div>
                    <ExploreNavComponent backButton={false} />
                  </>
              }
            </div>
          </>
          : <></>
      }

    </>
  );
};

export default WalkAroundContainer;
