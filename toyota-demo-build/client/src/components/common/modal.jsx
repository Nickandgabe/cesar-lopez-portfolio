import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import style from '../assets/style/modal.module.scss';
import { ReactComponent as CloseModal } from './../../assets/Icons/Modal/TOY_VIRTUAL_Modal_4.svg';
import { ReactComponent as ButonLearn } from './../../assets/Icons/Buttons/TOY_VIRTUAL_button_Learn.svg';
import { ReactComponent as ButonBuild } from './../../assets/Icons/Buttons/TOY_VIRTUAL_button_Build.svg';
import { ReactComponent as ButonView } from './../../assets/Icons/Buttons/TOY_VIRTUAL_button_View.svg';
import { ReactComponent as ButonExplore } from './../../assets/Icons/Buttons/TOY_VIRTUAL_button_Explore.svg';


import { MainNavComponent, ExploreNavComponent } from './';

/**
 * @function ModalComponent
 * @param {*} props {*} callback
 * @returns Render navigation component to main view displaying auto video / navigation / explore-more.
 */
const ModalComponent = ({ open, onClose, src }) => {
  const [isMenuOpen, setMenu] = useState(false);
  const [isExploreMore, setExploreMore] = useState(false);

  const [isVideoEnded, setVideoEnded] = useState(false);

  // callback function in order to close modal and show traditional
  // regular navigation bar.
  function handleCloseModalClick() {
    onClose(false); // pass any argument to the callback
  }

  return (
    <>
      {open ? (
        <div className={`${!isMenuOpen ? style.modalmainBody : style.modalchangeBodyColor}`}>
          <div className={style.navOptions} style={{ color: !isMenuOpen ? '#747474' : '#FFFFFF' }}>
            <div className={style.navOptionsLeft}>
              <button
                className={`hamburger hamburger--slider-r ${isMenuOpen ? 'is-active' : ''}`}
                type="button"
                onClick={() => {
                  setMenu(!isMenuOpen);
                  setVideoEnded(false);
                }}
              >
                <span className="hamburger-box">
                  <span
                    className={`hamburger-${open && !isMenuOpen ? 'inner-traditional' : 'inner'}`}
                  ></span>
                </span>
              </button>
              <Link to="/toyota">
                <p>Back to Overview</p>
              </Link>
            </div>
            <div className={style.navOptionsRight}>
              <CloseModal onClick={() => handleCloseModalClick()} />
            </div>
          </div>
          {!isMenuOpen ? (
            <>
              {!isExploreMore ? (
                <div className={style.videoContainer}>
                  <video autoPlay onEnded={() => setVideoEnded(true)}>
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                  <></>
                )}
            </>
          ) : (
              <MainNavComponent />
            )}
          {!isMenuOpen && !isExploreMore ? (
            <div className={style.footer}>
              <div className={style.explore} onClick={() => {
                setExploreMore(true);
                setVideoEnded(false);
              }}>
                <ButonExplore className={style.exploreButton} />
              </div>
              {isVideoEnded ? (
                <div className={style.accesoriesBox}>
                  <div className={style.flexContainerVideo}>
                    <div className={style.flexItemLeftVideo}>
                      <ButonLearn className={style.btnLearn} />
                    </div>
                    <div className={style.flexItemLeftVideo}>
                      <ButonBuild className={style.btnLearn} />
                    </div>
                    <div className={style.flexItemLeftVideo}>
                      <ButonView className={style.btnLearn} />
                    </div>
                  </div>
                </div>
              ) : (
                  <></>
                )}
            </div>
          ) : (
              <>{isMenuOpen ? <></> : <ExploreNavComponent />}</>
            )}
        </div>
      ) : (
          <></>
        )}
    </>
  );
};

export { ModalComponent };
