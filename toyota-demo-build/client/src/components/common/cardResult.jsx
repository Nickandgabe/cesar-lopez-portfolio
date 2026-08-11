import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from '../../components/assets/style/cardresult.module.scss';

//import { ReactComponent as ButonLearnMore } from './../../assets/Icons/Buttons/TOY_VIRTUAL_button_LearnMore.svg';
import { ReactComponent as FaceBookIcon } from '../../assets/Icons/Social/TOY_VIRTUAL_button_Facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/Icons/Social/TOY_VIRTUAL_button_Instagram.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/Icons/Social/TOY_VIRTUAL_button_LinkedIn.svg';
import { ReactComponent as TwitterIcon } from '../../assets/Icons/Social/TOY_VIRTUAL_button_Twitter.svg';

import { ReactComponent as TrayDwon } from '../../assets/Icons/Social/TOY_VIRTUAL_button_TrayDown.svg';

import useGAEventsTracker from '../../useGAevnetsTracker';

import pdf from '../../assets/media/pdf/SpinTNC.pdf';
/**
 * @function NavComponent
 * @param {*} props 
 * @returns Render navigation component to main view.
 */
const CardResultComponent = ({ href, backTo, textTitle, textBody, singUp, callback }) => {
   const [useSingUp, setSingUp] = useState(false);

   //const [useDownload, setDownlaod] = useState(false);

   const GAEventsTracket = useGAEventsTracker('T-360 Game Social')

   useEffect(() => {
      setSingUp(!singUp);
   }, []);


   /**
    * @function download
    * @param {*} url 
    * @param {*} filename 
    * @descrition Download any kind of file in local device.
    */
   function download(url, filename = 't360-image') {
      filename = url.substr(url.lastIndexOf('/') + 1);
      fetch(url).then(function (t) {
         return t.blob().then((b) => {
            var a = document.createElement("a");
            a.href = URL.createObjectURL(b);
            a.setAttribute("download", filename);
            a.click();
         }
         );
      });
   }


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
               {/* <div className={style.containerContentLogo}><a href={Logo.href} target={'_blanck'}><img src={Logo.url} alt="logocard" /></a></div> */}
               <div className={style.containerContentTitle}>{textTitle}</div>
               <div className={style.containerContentBody}>
                  <div dangerouslySetInnerHTML={{ __html: textBody[0].text }} />
                  <div className={style.containerContentBodySocial}>
                     <a href="https://www.facebook.com/" target={'_black'} onClick={() => GAEventsTracket('Facebook Share', 'https://www.facebook.com/')}>
                        <FaceBookIcon />
                     </a>
                     <a href="https://www.instagram.com/accounts/login/" target={'_black'} onClick={() => GAEventsTracket('Instagram Share', 'https://www.instagram.com/accounts/login/')}>
                        <InstagramIcon />
                     </a>
                     <a href="https://www.linkedin.com/" target={'_black'} onClick={() => GAEventsTracket('Linkedin Share', 'https://www.linkedin.com/')}>
                        <LinkedInIcon />
                     </a>
                     <a href="https://twitter.com/login?lang=en-gb" target={'_black'} onClick={() => GAEventsTracket('Twitter Share', 'https://twitter.com/login?lang=en-gb')}>
                        <TwitterIcon />
                     </a>

                     {/* <TrayDwon onClick={() => download(uriToDownload)} /> */}
                     <TrayDwon onClick={() => callback()} />

                  </div>
                  <div dangerouslySetInnerHTML={{ __html: textBody[1].text }} />
               </div>
               {/* <button className={`${style.containerContentButton} button`} onClick={() => {setSingUp(!useSingUp); callback(useSingUp);  GAEventsTracket('SingUp') }}>Sign Up</button> */}
               <Link to='/survey'>
                  <button className={`${style.containerContentButton} button`} onClick={() => GAEventsTracket('SingUp')}>Sign Up</button>
               </Link>

            </div>
         </div>
      </>
   );
};

export { CardResultComponent };
