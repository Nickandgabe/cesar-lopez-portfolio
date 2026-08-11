import React from 'react';
import style from '../explore/style/explore.module.scss';

import { MainNavComponent, NavComponent, ExploreNavComponent } from '../../components/common';
import CustomHeader from '../headerLayout/customHeader';



// import toyota from '../../config/toyota.js';


function RenderExploreMoreMenu() {
    return (
        <>
            <div className={style.Box}>
                <div className={style.hoopsLeft}><div className={style.hoopsCircle}></div></div>
                <div className={style.hoopsRight}><div className={style.hoopsCircle}></div></div>

                <ExploreNavComponent />

            </div>
        </>
    )
}
/**
 * @function PhotoGiftContainer
 * @param {*} props {*} callback
 * @returns Render navigation component to main view displaying  navigation / explore-more.
 */
const ExploreMoreContainer = () => {
   
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
                childComponent={ <RenderExploreMoreMenu />}
                childName='explore'
            />


        </>
    )
};

export default ExploreMoreContainer;
