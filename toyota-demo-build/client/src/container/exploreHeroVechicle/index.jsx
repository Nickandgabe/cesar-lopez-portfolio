import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import style from '../exploreHeroVechicle/style/exploreherovehicle.module.scss';

import { MainNavComponent, NavComponent, VideoComponent } from '../../components/common';
import CustomHeader from '../headerLayout/customHeader';
import { ReactComponent as ButonExplore } from './../../assets/Icons/Buttons/TOY_VIRTUAL_button_Explore.svg';

import { setAssetLoader } from '../../store/gobal.js';
import toyota from '../../config/toyota.js';

//var carconfig = {};

/**
 * @function ExploreHeroVehicleContainer
 * @param {*} props {*} callback
 * @returns Render navigation component to main view displaying  navigation / explore-more.
 */
const ExploreHeroVehicleContainer = () => {
    const dispatch = useDispatch();

    const [useLocation, setLocation] = useState();//useState(window.location.pathname.split(':')[0]);//useState(window.location.pathname.split(':')[1]);
    const [isVideoEnded, setVideoEnded] = useState(false);

    const [carconfig, setCarconfig] = useState({});


    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function lowerCaseString(string) {
        if (!string) return;
        return string.toLowerCase();
    }

    useEffect(() => {
        dispatch(setAssetLoader(false));
       
        setLocation(capitalizeFirstLetter( window.location.pathname.split('/')[1].toLowerCase() ));

    }, [useLocation])

    function onFinished(ended) {
        // console.log('[VIDEO-ENDED]:', ended);
        setVideoEnded(ended)
    }

    const toCapitalizedWords = (name) => {
        if (!name) return;

        if (name.includes('_')) {
            return name.split('_').join(' ');
        } else if (name === 'C-HR') {
            return name
        } else {
            return name
        }
    };

    useEffect(() => {

        console.log('Hero video car : ', useLocation);
      
        if (useLocation === 'Highlander' || useLocation === 'Sienna' || useLocation === 'Venza' || useLocation === 'Mirai') {
            setCarconfig(toyota.FeatureVehicles.find(obj => obj.name === toCapitalizedWords(useLocation)))            
           
        } else if (useLocation === 'CamryHybrid' || useLocation === 'Camryhybrid' || useLocation === 'Supra') {
            setCarconfig(toyota.FeatureVehicles.find(obj => obj.prefix === toCapitalizedWords(useLocation)))
        }
        else {
            if (useLocation === 'Rav4hybrid') {
                setCarconfig(toyota.FeatureVehicles.find(obj => obj.prefix === toCapitalizedWords(useLocation)))
            } else {
                setCarconfig(toyota.ExploreMoreVehicles.find(obj => obj.name === toCapitalizedWords(useLocation)))
            }
        }

    }, [carconfig]);

  


    return (
        <>
            <CustomHeader
                Nav={
                    <NavComponent childComponent={<MainNavComponent />} width={100} height={100} zIndex={14} />
                }
                innerNav='inner-traditional'
                colorNavText='#747474'
                overViewColor='#747474'
                classicNav={false}
                classicFooter={false}
                headerWidth={40}
                gradientHeader={false}
                childComponent={
                    <>
                        <div className={style.Button}>
                            <Link to={`/${lowerCaseString(useLocation)}`}>
                                <button
                                    className={`hamburger hamburger--slider-r is-active`}
                                    type="button"
                                >
                                    <span className="hamburger-box">
                                        <span className={`hamburger-inner-traditional`}></span>
                                    </span>
                                </button>
                            </Link>
                        </div>
                        <VideoComponent key={useLocation} src={carconfig?.media} onFinished={(ended) => onFinished(ended)} />
                        <div className={style.Container}>
                            <div className={style.Footer}>
                                <div className={style.FooterDisclamer}>
                                    {
                                        !isVideoEnded
                                            ? carconfig?.disclaimer
                                            :
                                            <>
                                                <div className={style.flexContainerButton}>
                                                    <div className={style.flexItemLeftButton}>
                                                        <a href={carconfig?.learnMore} target={`_black`}>
                                                            <button className={`${style.btnLearn} button`}>Learn More</button>
                                                        </a>
                                                    </div>
                                                    <div className={style.flexItemLeftButton}>
                                                        <a href={carconfig?.buildYourOwn} target={`_black`}>
                                                            <button className={`${style.btnBuild} button`}>Build Your Own</button>
                                                        </a>
                                                    </div>
                                                    <div className={style.flexItemLeftButton}>
                                                        <a href={carconfig?.accessories} target={`_black`}>
                                                            <button className={`${style.btnView} button`}>View Accessories</button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </>
                                    }
                                </div>
                                <div className={style.FooterButton}>
                                    <Link to={`/explore-more-vehicles`}>
                                        <ButonExplore />
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </>
                }
                childName='dynamicVideo'
            />


        </>
    )
};

export default ExploreHeroVehicleContainer;
