import React, { useState, useRef, useEffect } from 'react';
import { FacebookShareButton, InstapaperShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import { Link } from 'react-router-dom';
import { MeataDataComponent } from '../../components/common';

import useGAEventsTracker from '../../useGAevnetsTracker';

import style from './style/header.module.scss';
import toyota from '../../config/toyota.js';

//import { ReactComponent as InfoIcon } from './../../assets/Icons/Toogle/TOY_VIRTUAL_Toogle1_Info.svg';
//import { ReactComponent as SoundIcon } from './../../assets/Icons/Toogle/TOY_VIRTUAL_Toogle1_sound.svg';
import { ReactComponent as AutoExLogo } from './../../assets/Icons/Toogle/TOY_VIRTUAL_Toogle1_autoExLogo.svg';
import { ReactComponent as AutoExLogoMain } from './../../assets/Icons/Toogle/TOY_VIRTUAL_Toogle2_autoExLogo.svg';

import { ReactComponent as FaceBookIcon } from '../../assets/Icons/Social/TOY_VIRTUAL_button_Facebook.svg';
//import { ReactComponent as InstagramIcon } from '../../assets/Icons/Social/TOY_VIRTUAL_button_Instagram.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/Icons/Social/TOY_VIRTUAL_button_LinkedIn.svg';
import { ReactComponent as TwitterIcon } from '../../assets/Icons/Social/TOY_VIRTUAL_button_Twitter.svg';

//import toggleOverView from '../../assets/media/sounds/backToOverview.mp3';
var audio = new Audio(toyota['Sound'].BackToOverView);


/***
 * @function playSound
 * @description check and play sound with promise to make sure 
 * it plays correctly
 */
function playSound() {
    // Stop and rewind the sound (stops it if already playing).
    audio.pause();
    audio.currentTime = 0;

    // Play the sound.
    audio.play().then(response => {
        console.log('Sound playing')
    }).catch(e => {
        console.log(e);
    })

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
 * @function HeroInfo
 * @param {callBack} setInfo
 * @returns Html Content
 * @description Function in charge to return overlay content to display
 * information content.
 */
const HeroInfo = ({ setInfo }) => {
    return (
        <div className={style.heroInfoModal}>
            <div className={style.heroInfoModalButtonClose}>
                <button
                    className={`hamburger hamburger--slider-r is-active`}
                    type="button"
                    onClick={() => setInfo()}
                >
                    <span className="hamburger-box">
                        <span className={`hamburger-inner`}></span>
                    </span>
                </button>
            </div>
            <div className={style.heroInfoModalInfoBox}>
                {/* <h2>EXPLORE  <span className={style.heroInfoModalInfoBoxLine}></span></h2> */}
                <div className={style.heroInfoModalInfoBoxTitle}>
                    EXPLORE
                    <div className={style.heroInfoModalInfoBoxTitleLine}></div>
                </div>
                <ul>
                    <li>
                        <span>1</span>Drag to Move Around the Auto Show
                    </li>
                    <li>
                        <span>2</span>Click Icons to Explore
                    </li>
                    <li>
                        <span>3</span>Click the <b>Let’s Go Places</b> Toggle to Change Your Background
                    </li>
                </ul>
                <p onClick={() => setInfo()}>Close</p>
            </div>
        </div>
    );
};

/**
 * @function HeroShare
 * @param {callBack} setShare
 * @param {String} image Path source
 * @returns Html Content
 * @description Function in charge to return overlay content to display
 * information content.
 */
const HeroShare = ({ setShare, share }) => {
    const herocar = window.location.pathname.split('/')[1].toLowerCase(); //window.location.pathname.split(':')[1].toLowerCase();
    const GAEventsTracket = useGAEventsTracker(`Share Social: ${herocar}`);

    const text = 'Share this Experience!';
    let input = useRef(null);
    let url = window.location.href;


    function copyText(e) {
        e.preventDefault();
        navigator.clipboard.writeText(input.current.value);
    }

    return (
        <>
            <MeataDataComponent image={share} />
            <div className={style.heroInfoModal}>
                <div className={style.heroInfoModalButtonClose}>
                    <button
                        className={`hamburger hamburger--slider-r is-active`}
                        type="button"
                        onClick={() => setShare(false)}
                    >
                        <span className="hamburger-box">
                            <span className={`hamburger-inner`}></span>
                        </span>
                    </button>
                </div>

                <div className={style.heroInfoModalShareBox}>
                    <div className={style.heroInfoModalShareBoxCapture}>
                        <img src={share} alt="capture" />
                    </div>
                    <div className={style.heroInfoModalShareBoxSocial}>
                        <p className={style.heroInfoModalShareBoxSocial}>{text}</p>
                        <form>
                            <input ref={input} type="text" disabled="disabled" defaultValue={url} />
                            <button onClick={(e) => copyText(e)}>Copy</button>
                        </form>
                    </div>
                    <div className={style.heroInfoModalShareBoxIcons}>

                        <FacebookShareButton
                            // url={"https://toyota-test.immersicom.com"}
                            url={url}
                            quote={"Auto Show-Experience"}
                            hashtag="#toyota"
                            className={style.heroInfoModalShareBoxIconsButton}
                            onClick={() => GAEventsTracket('Facebook Share', `${url}`)}>
                            <FaceBookIcon />
                        </FacebookShareButton>
                        {/* <InstapaperShareButton
                            url={url}
                            title={"Auto Show-Experience"}
                            hashtag="#toyota"
                            className={style.heroInfoModalShareBoxIconsButton}>
                            <InstagramIcon />
                        </InstapaperShareButton> */}
                        <LinkedinShareButton
                            url={url}
                            title={"Auto Show-Experience"}
                            hashtag="#toyota"
                            className={style.heroInfoModalShareBoxIconsButton}
                            onClick={() => GAEventsTracket('Linkedin Share', `${url}`)}>
                            <LinkedInIcon />
                        </LinkedinShareButton>
                        <TwitterShareButton
                            url={url}
                            title={"Auto Show-Experience"}
                            hashtag="#toyota"
                            className={style.heroInfoModalShareBoxIconsButton}
                            onClick={() => GAEventsTracket('Twitter Share', `${url}`)}>
                            <TwitterIcon size={36} />
                        </TwitterShareButton>

                    </div>
                </div>
            </div>
        </>
    );
};

/**
 * @function RenderClassicHeader
 * @param {String} inner
 * @param {Boolean} isMenuOpen
 * @param {callBack} setMenu
 * @returns Html Content
 * @description Function in charge to return a classing header navigation for
 * cars hero experience.
 */
const RenderCustomeClassicHeader = ({
    inner,
    isMenuOpen,
    setMenu,
    classicFooter,
    showOnlyFooter,
    showOverview,
    overViewColor,
    backToViewLink,
    callback
}) => {
    const [currentLocation, setCurrentCar] = useState(window.location.pathname.toLowerCase());
    const [hiddenOverview, setOverview] = useState(true);

    const GAEventsTracket = useGAEventsTracker('Menu Nav')

    // On Component Mount we set the current car
    useEffect(() => {
        setCurrentCar(window.location.pathname.toLowerCase());
        if (currentLocation === '/toyota' || currentLocation === '/overview') {
            setOverview(false)
        }
    }, [currentLocation]);


    return (
        <>
            <div className={style.headerLeft}>
                <button
                    className={`hamburger hamburger--slider-r ${isMenuOpen ? 'is-active' : ''}`}
                    type="button"
                    onClick={() => {
                        setMenu(false);
                        callback(isMenuOpen);
                    }}
                >
                    <span className="hamburger-box">
                        <span className={`hamburger-${!isMenuOpen ? inner : 'inner'}`}></span>
                    </span>
                </button>
                {isMenuOpen || showOverview ? (
                    <Link to={`/${backToViewLink}`} onMouseDown={() => playSound()} onClick={() => GAEventsTracket('Back to Overview')}>
                        <p style={{ color: `${!isMenuOpen ? overViewColor : '#FFFFFF'}`, visibility: hiddenOverview ? 'visible' : 'hidden' }}>Back to Overview</p>
                    </Link>
                ) : (
                    <></>
                )}
            </div>
            {classicFooter ? (
                <>
                    {!isMenuOpen ? (
                        <>
                            <div className={style.footer}>
                                {showOnlyFooter ? <AutoExLogoMain className={style.footerLogo} /> : <></>}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={style.headerRight}>
                                <a href="https://www.toyota.com" target={'_blanck'}>Toyota.com</a>
                            </div>
                            <div className={style.footer}>
                                <AutoExLogo className={style.footerLogo} />
                            </div>
                        </>
                    )}
                </>
            ) : (
                <>
                    {isMenuOpen
                        ?
                        <>
                            <div className={style.headerRight}>
                                <a href="https://www.toyota.com" target={'_blanck'}>Toyota.com</a>
                            </div>
                            <div className={style.footer}>
                                <AutoExLogo className={style.footerLogo} />
                            </div>
                        </>
                        : <></>
                    }
                </>
            )}
        </>
    );
};

/**
 * @function  RenderMainClassicHeader
 * @param {String} inner
 * @param {Boolean} isMenuOpen
 * @param {callBack} setMenu
 * @param {callback} setInfo
 * @return Html Content
 * @description Function on charge to return a custom header navigation for
 * landing page.
 */
const RenderMainClassicHeader = ({
    inner,
    isMenuOpen,
    setMenu,
    setInfo,
    setSound,
    setShare,
    useInfo,
    isSound,
    backToViewLink,
    overViewColor,
    useSoundIcon,
    callBack
}) => {

    const GAEventsTracket = useGAEventsTracker('Menu Nav')

    return (
        <>
            <div className={style.headerLeft}>
                <button
                    className={`hamburger hamburger--slider-r ${isMenuOpen ? 'is-active' : ''}`}
                    type="button"
                    onClick={() => setMenu(false)}
                >
                    <span className="hamburger-box">
                        <span className={`hamburger-${inner}`}></span>
                    </span>
                </button>
                <Link to={`/${backToViewLink}`} onClick={() => GAEventsTracket('Back to Overview')}
                    onMouseDown={() => playSound()}>
                    <p style={{ color: `${!isMenuOpen ? overViewColor : '#FFFFFF'}` }}>Back to Overview</p>
                </Link>
            </div>

            {!isMenuOpen ? (
                <div className={style.headerRight}>
                    {
                        useInfo
                            ?
                            <div className={style.headerRightInfo} onClick={() => setInfo(true)}>
                                <div className={style.headerRightInfoLogo}></div>
                            </div>
                            : <></>
                    }
                    {/* {useSoundIcon ? <SoundIcon   onClick={() => {setSound(false); callBack(isSound)} }/> : <></>} */}
                    {useSoundIcon
                        ?
                        <>
                            <div className={style.headerRightSound} onClick={() => { setSound(false); callBack(isSound) }}>
                                <div className={`${!isSound ? style.headerRightSoundIcon : style.activeSound}`}></div>
                            </div>
                        </>
                        : <></>
                    }
                    <p onClick={() => setShare(true)}>Share</p>
                    <AutoExLogo className={style.headerRightLogo} />
                </div>
            ) : (
                <>
                    <div className={style.headerRight}>
                        <a href="https://www.toyota.com" target={'_blanck'}>Toyota.com</a>
                    </div>
                    <div className={style.footer}>
                        <AutoExLogo className={style.footerLogo} />
                    </div>
                </>
            )}
        </>
    );
};

/**
 * @function CustomHeaderCompoent
 * @param {Component} Nav
 * @param {String} innerNav
 * @param {String} colorNavText
 * @param {Boolean} classicNav
 * @param {Nubmer} headerWidth
 * @param {Boolean} classicFooter
 * @param {Boolean} showOverview
 * @param {String} shareImage
 * @param {Object} callback
 * @param {Component} childComponent
 * @param {String} childName
 * @return Html Content
 * @description Function in charge to renter a cusmtom header.
 */
const CustomHeaderCompoent = ({
    Nav,
    innerNav,
    colorNavText,
    classicNav = true,
    headerWidth = 100,
    classicFooter = true,
    showOnlyFooter = true,
    showOverview = true,
    overViewColor = '#FFFFFF',
    backToViewLink = 'overview',
    gradientHeader = true,
    shareImage = null,
    useInfo = true,
    useSound = true,
    callback = () => { },
    childComponent,
    childName = null,
}) => {
    const [isMenuOpen, setMenu] = useState(false);
    const [isInfoOpen, setInfo] = useState(false);
    const [isShareOpen, setShare] = useState(false);

    const [isSound, setSound] = useState(false);

    const GAEventsTracket = useGAEventsTracker('Menu Nav');
    const location = window.location.pathname.split(':')[1];

    useEffect(() => {
        if (isMenuOpen) {
            GAEventsTracket('Nav Open', isMenuOpen)
        }
        if (isInfoOpen) {
            GAEventsTracket('Menu Info open', isInfoOpen)
        }
        if (isShareOpen) {
            GAEventsTracket(`Menu Share open: ${location}`, isShareOpen)
        }
    }, [isMenuOpen, isInfoOpen, isShareOpen]);

    return (
        <>
            <div className={`${gradientHeader ? style.headerGradient : ''}`}></div>
            {/* <div className={`${gradientHeader ? style.footerGradinet : ''}`}></div> */}

            {isInfoOpen ? <HeroInfo setInfo={() => setInfo(false)} /> : null}
            {isShareOpen ? <HeroShare setShare={() => setShare(false)} share={shareImage} /> : null}
            <div className={style.header} style={{ color: colorNavText, width: `${!isMenuOpen ? headerWidth : 100}%` }}>
                {!classicNav ? (
                    <RenderCustomeClassicHeader
                        inner={innerNav}
                        isMenuOpen={isMenuOpen}
                        setMenu={() => setMenu(!isMenuOpen)}
                        classicFooter={classicFooter}
                        showOnlyFooter={showOnlyFooter}
                        showOverview={showOverview}
                        overViewColor={overViewColor}
                        backToViewLink={backToViewLink}
                        callback={callback}
                        playSoundToogleOverview=""
                    />
                ) : (
                    <RenderMainClassicHeader
                        inner={innerNav}
                        isMenuOpen={isMenuOpen}
                        setMenu={() => setMenu(!isMenuOpen)}
                        setInfo={() => setInfo(!isInfoOpen)}
                        setSound={() => setSound(!isSound)}
                        setShare={() => setShare(!isShareOpen)}
                        useInfo={useInfo}
                        isSound={isSound}
                        backToViewLink={backToViewLink}
                        overViewColor={overViewColor}
                        useSound={useSound}
                        callBack={callback}
                        playSoundToogleOverview=""
                    />
                )}
            </div>

            {isMenuOpen ? (
                <>{Nav}</>
            ) : (
                <>
                    {childName === 'spinning' ? <>{!isMenuOpen ? childComponent : null}</> : <></>}
                    {childName === 'explore' ? <>{!isMenuOpen ? childComponent : null}</> : <></>}
                    {childName === 'giftphoto' ? <>{!isMenuOpen ? childComponent : null}</> : <></>}
                    {childName === 'dynamicVideo' ? <>{!isMenuOpen ? childComponent : null}</> : <></>}
                    {childName === 'drivers' ? <>{!isMenuOpen ? childComponent : null}</> : <></>}
                </>
            )}
        </>
    );
};

export default CustomHeaderCompoent;
