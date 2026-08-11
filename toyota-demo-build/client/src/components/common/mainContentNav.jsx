import React, { useState, Fragment, useEffect } from 'react';
//import { Link, useHistory } from 'react-router-dom';

import style from '../assets/style/nav.module.scss';

import toyota from '../../config/toyota.js';

// import { ReactComponent as PlusIcon } from '../../assets/Icons/Hamburguer_Nav/TOY_VIRTUAL_Plus_White.svg';
// import { ReactComponent as LessIcon } from '../../assets/Icons/Hamburguer_Nav/TOY_VIRTUAL_Less_White.svg';

import { useHistory } from 'react-router-dom';

import useGAEventsTracker from '../../useGAevnetsTracker';

/**
 * @function NavComponent
 * @param {*} props 
 * @returns Render navigation component to main view.
 */
const MainNavComponent = (props) => {
    const [isFeaturedOpen, setFeatured] = useState(false);
    const [isExploredOpen, setExplored] = useState(false);
    //const [isPartnersOpen, setPartners] = useState(false);

    const [FeatureOptions, setFeatureOptions] = useState([]);
    const [ExploreOptions, setExploreOptions] = useState([]);
    const [ExperienceOptions, setExperienceOptions] = useState([]);
    //const [PartnerOptions, setPartnerOptions] = useState([]);
    const [FindDealerOptions, setFindDealerOptions] = useState({});

    const featured = { display: isFeaturedOpen ? 'block' : 'none' };
    const explored = { display: isExploredOpen ? 'block' : 'none' };
    //const partners = { display: isPartnersOpen ? 'block' : 'none' };

    const history = useHistory();
    const GAEventsTracket = useGAEventsTracker('Nav Links');

    useEffect(() => {
        setFeatureOptions(toyota.FeatureVehicles);
        setExploreOptions(toyota.ExploreMoreVehicles);
        setExperienceOptions(toyota.ExperienceOptions);
        //setPartnerOptions(toyota.PartnerOptions);
        setFindDealerOptions(toyota.DealershipLocator);
    }, []);

   
    const pushLinkTo = (location) => {
        history.push(location)
    }
    return (
        <>
            <div className={style.traditionalNav}>
                {/* <div className={style.navOptionsRightMenu}>
                    <a href="https://www.toyota.com" target={'_blanck'}>Toyota.com</a>
                    <Link to="/toyota">
                        <p>Share</p>
                    </Link> *
                </div> */}
                <div className={style.navigator}>

                    <div className={style.flexContainer}>
                        <div className={style.flexItemLeft}>
                            <div onClick={() => setFeatured(!isFeaturedOpen)}>Featured Vehicles
                                <span className={style.flexItemLeftIcon}>
                                    {
                                        // !isFeaturedOpen
                                        //     ? <PlusIcon className={style.flexItemLeftIconPlus} />
                                        //     : <LessIcon className={style.flexItemLeftIconLess} />
                                        !isFeaturedOpen
                                            ? <div className={style.flexItemLeftIconPlusIcon}></div>
                                            : <div className={style.flexItemLeftIconLessIcon}></div>
                                    }
                                </span>
                            </div>
                            <Fragment>
                                <div style={featured} className={style.panel}>
                                    <div className={style.flexSubContainer}>
                                        {
                                            FeatureOptions.map((item, i) => {
                                                return (
                                                    <div key={i} className={style.flexSubItemLeft}>
                                                        <a href={item.url} onClick={() => GAEventsTracket('Location', item.url)}>{item.name}</a>
                                                        {/* <Link to={`${item.url}`}>{item.name}</Link> */}
                                                        {/* <div className={style.flexSubItemLeftLink} onClick={() =>  pushLinkTo(item.url)}>{item.name}</div> */}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </Fragment>
                            <div >
                                <div onClick={() => setExplored(!isExploredOpen)}>Explore More Vehicles
                                    <span className={style.flexItemLeftIcon}>
                                        {
                                            !isExploredOpen
                                                ? <div className={style.flexItemLeftIconPlusIcon}></div>
                                                : <div className={style.flexItemLeftIconLessIcon}></div>
                                        }
                                    </span>
                                </div>
                                <Fragment>
                                    <div style={explored} className={style.panel}>
                                        <div className={style.flexSubContainer}>
                                            {
                                                ExploreOptions.map((item, i) => {
                                                    return (
                                                        <div key={i} className={style.flexSubItemLeft}>
                                                            {/* <a href={item.href} target={'_black'}>{item.name}</a> */}
                                                            <a href={item.url} onClick={() => GAEventsTracket('Location', item.url)}>{item.name}</a>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </Fragment>
                            </div>
                        </div>
                        <div className={style.flexItemCenter}>
                            {
                                ExperienceOptions.map((item, i) => {
                                    return (
                                        <p key={i}><a href={`${item.href}`} onClick={() => GAEventsTracket('Location', item.href)}>{item.name}</a></p>
                                    )
                                })
                            }
                        </div>
                        <div className={style.flexItemRight}>
                            {/* <p onClick={() => setPartners(!isPartnersOpen)}>Partners
                            <span className={style.flexItemLeftIcon}>
                                    {
                                        !isPartnersOpen
                                            ? <PlusIcon className={style.flexItemLeftIconPlus} />
                                            : <LessIcon className={style.flexItemLeftIconLess} />
                                    }
                                </span>
                            </p>
                            <Fragment>
                                <div style={partners} className={style.panel}>
                                    <div className={style.flexSubContainer}>
                                        {
                                            PartnerOptions.map((item, i) => {
                                                return (
                                                    <div className={style.flexSubSingleItem} key={i}>
                                                        <a href={item.href} target={'_black'}>{item.name}</a>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </Fragment> */}
                            <div>
                                <p><a href={FindDealerOptions.href} target={'_black'}>{FindDealerOptions.name}</a></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export { MainNavComponent };
