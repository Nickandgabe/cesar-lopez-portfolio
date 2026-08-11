import React, { useState, useEffect } from 'react';
import style from '../drivers/style/drivers.module.scss';


import { MainNavComponent, NavComponent, ScrollComponent } from '../../components/common';
import CustomHeader from '../headerLayout/customHeader';

import toyota from '../../config/toyota.js';


/**
 * @function DriversContainer
 * @param {*} props {*} callback
 * @returns Render driver container to main view display.
 */
const DriversContainer = () => {
    const [thumbnail, setThumbnail] = useState([]);

    useEffect(() => {
        setThumbnail(toyota['Drivers']);
    }, []);

    return (
        <>
            <div className={style.box}>

                <CustomHeader
                    Nav={
                        <NavComponent childComponent={<MainNavComponent />} width={100} height={100} zIndex={14} />
                    }
                    innerNav='inner-traditional'
                    colorNavText='#747474'
                    overViewColor='#747474'
                    gradientHeader={false}
                    classicNav={false}
                    classicFooter={false}
                    headerWidth={30}
                    childComponent={
                        <NavComponent
                            childComponent={<ScrollComponent drivers={thumbnail}/>}
                              backgroundColor={'#FFFFFF'} />
                    }
                    childName='drivers'
                />
            </div>
        </>
    )
};


export default DriversContainer;
