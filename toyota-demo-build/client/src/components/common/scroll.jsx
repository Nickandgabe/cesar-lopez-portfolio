import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from '../../components/assets/style/scroll.module.scss';

import { useDispatch} from 'react-redux';
import { setAssetLoader } from '../../store/gobal';

import useGAEventsTracker from '../../useGAevnetsTracker';

/**
 * @function ScrollComponent
 * @param {*} props 
 * @returns Render navigation component to main view.
 */
const ScrollComponent = ({ drivers }) => {
    const dispatch = useDispatch();

    const GAEventsTracket = useGAEventsTracker('Drivers')

    var content;
    var contentFooter;
    var scrollStep = 0; //1392;//1304; //1083

    useEffect(() => {
        dispatch(setAssetLoader(false));

        document.getElementById('right-button').addEventListener('click', handleRightButton);
        document.getElementById('left-button').addEventListener('click', handleLeftButton);
        
    }, []);

    function handleRightButton(e) {
        e.preventDefault();
        content = document.getElementById('content');
        contentFooter = document.getElementById('contentFooter');

        let currentImgWidth = document.getElementById('0').clientWidth;
        let offSet = (content.clientWidth - (currentImgWidth * 5.474));
        //scrollStep = (content.offsetWidth/5) + offSet;
        scrollStep = (content.clientWidth) - (offSet);

        let sl = content.scrollLeft,
            cw = content.scrollWidth;



        if ((sl + scrollStep) >= cw) {
            content.scrollTo(cw, 0);
            contentFooter.scrollTo(cw, 0);
        } else {
            // content.scrollTo((sl + scrollStep), 0);
            content.scrollTo({ top: content.offsetTop, left: (sl + scrollStep), behavior: 'smooth' });
            contentFooter.scrollTo({ top: contentFooter.offsetTop, left: (sl + scrollStep), behavior: 'smooth' });
        }
    }
    function handleLeftButton(e) {
        e.preventDefault();
        content = document.getElementById('content');
        contentFooter = document.getElementById('contentFooter');

        let sl = content.scrollLeft;

        if ((sl - scrollStep) <= 0) {
            content.scrollTo(0, 0);
            contentFooter.scrollTo(0, 0);
        } else {
            //content.scrollTo((sl - scrollStep), 0);
            content.scrollTo({ top: content.offsetTop, left: (sl - scrollStep), behavior: 'smooth' });
            contentFooter.scrollTo({ top: contentFooter.offsetTop, left: (sl - scrollStep), behavior: 'smooth' });
        }
    }


    return (
        <>
            <div className={style.container}>
                <div className={style.containerBtnClose}>
                    <Link to="/toyota-racing">
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
                <div className={style.containerRow}>
                    <div className={style.containerColumn}>
                        <div className={style.containerHead}>
                            <div className={style.containerHeadImage}>
                                <a className={style.containerHeadImageLeft} href="https://www.toyota.com/racing/other-series" target={'_black'} onClick={() => GAEventsTracket('External Links', 'https://www.toyota.com/racing/other-series')}>
                                    <img src="https://toyota-static-assets.s3.amazonaws.com/assets/HeroCars/Racing/Assets/TOY_VIRTUAL_Racing_Black.svg" alt="racing" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={style.containerColumn}>
                        <div className={style.containerHead}>
                            {/* <div className={style.containerHeadText}>MEET THE<h1>DRIVERS</h1></div> */}
                            <div className={style.containerHeadText}>
                                <b>
                                    MEET THE<span>DRIVERS</span>
                                </b>
                            </div>
                        </div>
                    </div>
                    <div className={style.containerColumn}>
                        <div className={style.containerHead}>
                            <div className={style.containerHeadImage}>
                                <a className={style.containerHeadImageRight} href="https://www.toyota.com/racing/other-series" target={'_black'}  onClick={() => GAEventsTracket('External Links', 'https://www.toyota.com/racing/other-series')}>
                                    <img src="https://toyota-static-assets.s3.amazonaws.com/assets/HeroCars/Racing/Assets/TOY_VIRTUAL_TOYOTA_Black.svg" alt="toyota" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.containerSlider}>

                    <div className={style.containerSliderouter} id="content">
                        {/* <ButtonArrowL className={style.containerSliderlefty} id="left-button" /> */}
                        <i className={style.containerSliderArrowL} id="left-button"></i>
                        {
                            drivers.map((item, i) => {
                                return (
                                    <div key={i} className={style.containerSliderinner}>
                                        <a href={item.href} target={'_blanck'}  onClick={() => GAEventsTracket('External Links', `${item.href}`)}>
                                            <img id={i} src={item.thumbnail} alt={item.name} />
                                        </a>
                                        {/* <span key={`text-${i}`}><strong>{item.name}</strong> <br /> <p>{item.categorie}</p> </span> */}
                                    </div>
                                )
                            })
                        }
                        {/* <ButtonArrowR className={style.containerSliderrighty} id="right-button" /> */}
                        <i className={style.containerSliderArrowR} id="right-button"></i>
                    </div>
                    <div className={style.containerSliderouterFooter} id="contentFooter">
                        {
                            drivers.map((item, i) => {
                                return (
                                    <div key={i} className={style.containerSliderouterFooterNames}>
                                        <div key={`text-${i}`} className={style.containerSliderouterFooterNamesText}>{item.name}<br />
                                            <div className={style.containerSliderouterFooterNamesTextSerie}>{item.categorie}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
                <div className={style.containerFooter}>
                    <a href="https://www.toyota.com/racing" target={'_blanck'} onClick={() => GAEventsTracket('External Links', 'https://www.toyota.com/racing')}>
                        {/* <ButonLearnMore className={style.containerFooterBtnInformation} /> */}
                        <button className={`${style.containerFooterBtnInformation} button`}>More Information</button>
                    </a>
                </div>
            </div>


        </>
    );
};

export { ScrollComponent };
