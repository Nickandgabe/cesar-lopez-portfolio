import React, { useState, useEffect } from 'react';
import style from '../assets/style/modal.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setAssetLoader } from '../../store/gobal';

import toyota from '../../config/toyota.js';

import useGAEventsTracker from '../../useGAevnetsTracker';

/**
 * @function ModalComponent
 * @returns Render Explore more vehicles navigation component.
 */
const ExploreNavComponent = ({ backTo = '/overview', backButton = true }) => {
    const dispatch = useDispatch();
    //const exploreOptions = ['Camry', 'Avalon', 'RAV4', 'Prius Prime', 'Avalon Hybrid', 'RAV4 Prime', 'Prius', 'Tacoma', '4Runner', 'Corolla', 'Tundra', 'Sequoia', 'Corolla Hybrid', 'Highlander Hybrid', 'Land Cruiser', 'Corolla Hatchback', 'C-HR', ''];
    const [ExploreOptions, setExploreOptions] = useState([]);

    const GAEventsTracket = useGAEventsTracker('Explore More Vehicles Nav');
    
    useEffect(() => {
        dispatch(setAssetLoader(false));
        setExploreOptions(toyota.ExploreMoreVehicles);
    }, []);

    return (
        <div className={style.exploremore}>
            <div className={style.exploremoreButton}>
                {
                    backButton
                        ?
                        <Link to={backTo}>
                            <button
                                className={`hamburger hamburger--slider-r is-active`}
                                type="button"
                            >
                                <span className="hamburger-box">
                                    <span className={`hamburger-inner-traditional`}></span>
                                </span>
                            </button>
                        </Link>
                        : <></>
                }

            </div>

            <div className={style.exploremoreTileContainer}>
                <label>2021</label>
                <div className={style.exploremoreTileContainerTitle}>
                    <span>EXPLORE MORE VEHICLES</span>
                </div>
                <p>Select a Vehicle to Learn More</p>
            </div>
            <div className={style.exploremoreContentBox}>
                <div className={style.exploremoreContentBoxflexBox}>
                    {
                        ExploreOptions.map((item, i) => {
                            return (
                                <div key={i} className={style.exploremoreflexChild}>
                                    <Link to={`${item.url}`} onClick={() => GAEventsTracket('Location', item.url)}>
                                        {item.name}
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={style.exploremoreFooter}>
                <a href="https://toyota.com/all-vehicles" target={'_blanck'} onClick={() => GAEventsTracket('External Links', 'https://toyota.com/all-vehicles')}>
                    <button className={`${style.exploremoreFooterButton} button`}>More Information</button>
                </a>

            </div>
        </div>
    );
};

export { ExploreNavComponent };
