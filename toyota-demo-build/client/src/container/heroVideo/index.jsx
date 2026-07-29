
import React, { useEffect, useState } from 'react';

import toyota from '../../config/toyota.js';

import VideoContent from '../dynamicVideo/index.jsx';
import { useDispatch } from 'react-redux';
import { setAssetLoader } from '../../store/gobal';

//var carconfig = {};

/**
 * @function VideoContainer
 * @param {*} props {*} callback
 * @returns Render navigation component to main view displaying auto video / navigation / explore-more.
 */
const HeroVideoContainer = () => {
    const dispatch = useDispatch();
    const [useLocation, setLocation] = useState(); //useState(window.location.pathname.split(':')[1]); 
    const [isVideoEnded, setVideoEnded] = useState(false);

    const [useConfig, setConfig] = useState({})
    const [useVideo, setVideo] = useState();
    const [useLearnMore, setLearnMore] = useState();

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function lowerCaseString(string) {
        if (!string) return;
        return string.toLowerCase();
    }

    // On Component Mount we set the current car
    useEffect(() => {
        //setLocation(window.location.pathname.split(':')[1]);
        setLocation(capitalizeFirstLetter(window.location.pathname.split('/')[1].toLowerCase()));
     
    }, [useLocation]);

    useEffect(() => {
        dispatch(setAssetLoader(false));
        let carconfig = toyota.FeatureVehicles.find(obj => obj.name === toCapitalizedWords(useLocation));
        setConfig(carconfig);
        setVideo(useConfig?.LED)
        setLearnMore(useConfig?.learnMore)
        //console.log(useVideo)
    }, [useConfig, useVideo, useLearnMore]);

    function onFinished(ended) {
        console.log('[VIDEO-ENDED]:', ended);
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

    //carconfig = toyota.FeatureVehicles.find(obj => obj.name === toCapitalizedWords(useLocation));

    return (
        <>

            <VideoContent
                key={useLocation}
                src={useVideo}
                learnMore={useLearnMore}
                backTo={`/${lowerCaseString(useLocation)}`}
            />
        </>
    )
};

export default HeroVideoContainer;
