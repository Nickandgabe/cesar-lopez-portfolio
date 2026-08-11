import React, { useEffect } from 'react';
import style from './style/iframe.module.scss';


/**
 * @function IFrameTestContainer
 * @param {*} props {*} callback
 * @returns Render navigation component to main view displaying auto video / navigation / explore-more.
 */
const IFrameTestContainer = ({callback}) => {
    useEffect(() => {
        const childWindow = document.getElementById('iframe').contentWindow;
        //in main window
        window.addEventListener('message', function (message) {
            if (message.source !== childWindow) {
                return; // Skip message in this event listener
            }

            if (message.data === "Survey uploaded: Success") {
                //do something
                console.log('Data successfully submited: ', message.data)
                callback(false);
            }
        });


    }, [callback])

    return (
        <div className={style.Box}>
            <iframe id="iframe" title="virtual" src="https://www.toyotavirtualshow.com" frameBorder="0" allowFullScreen
                type="text/html">
            </iframe>
        </div>
    )

};

export default IFrameTestContainer;
