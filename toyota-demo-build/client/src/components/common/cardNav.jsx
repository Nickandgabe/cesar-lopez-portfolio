import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../components/assets/style/card.module.scss';

import { ReactComponent as ButonLearnMore } from './../../assets/Icons/Buttons/TOY_VIRTUAL_button_LearnMore.svg';

import useGAEventsTracker from '../../useGAevnetsTracker';
/**
 * @function NavComponent
 * @param {*} props 
 * @returns Render navigation component to main view.
 */
const CardNavComponent = ({ Logo, moreInfo, backTo, textTitle, textBody }) => {

   const GAEventsTracket = useGAEventsTracker('Photo Booth');
   
   return (
      <>
         <div className={style.btnClose}>
            <Link to={`${backTo}`}>
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
         <div className={style.container}>
            <div className={style.containerContent}>
               <div className={style.containerContentLogo}><a href={Logo.href} target={'_blanck'}><img src={Logo.url} alt="logocard" /></a></div>
               <div className={style.containerContentTitle}>{textTitle}</div>
               <div className={style.containerContentBody}>
               <div dangerouslySetInnerHTML={{ __html: textBody }} />
               </div>
                
               <a href={moreInfo.href} target={'_blanck'} onClick={() => GAEventsTracket('External Link', `${moreInfo.href}`)}>
                  {/* <ButonLearnMore className={style.containerContentButton} /> */}
                  <button className={`${style.containerContentButton} button`}>More Information</button>
               </a>
            </div>
         </div>
      </>
   );
};

export { CardNavComponent };
