import React from 'react';
import loader from '../../assets/loader/LoadingRed.gif';

import style from '../assets/style/loader.module.scss';
/**
 * @function MeataDataComponent
 * @param {*} props {*} callback
 * @returns Render meta data dynamicaly base on page view.
 */
const LoaderComponent = (props) => {


    return (
        <div className={style.Loader}>
            <img src={loader} alt="loading..." />
        </div>
    );
};

export { LoaderComponent };
