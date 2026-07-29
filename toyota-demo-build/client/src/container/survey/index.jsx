import React, { useEffect, useState, useRef } from 'react';
import style from './style/survey.module.scss';
import { useHistory } from 'react-router-dom';
import MaskedInput from 'react-text-mask';

import { useDispatch } from 'react-redux';
import { setAssetLoader } from '../../store/gobal';
import { toggleStartSurvey } from './../spinToWin/spinToWin.redux';
import axios from 'axios';

import survey from '../../config/survey';

import useGAEventsTracker from '../../useGAevnetsTracker';

var email;
var setSelectedVehichles = [];
var userDetails = {};

const Timer = () => {
  const history = useHistory();
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          history.push('/overview');
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  //<h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1>
  return (
    <div>
      {minutes === 0 && seconds === 0 ? null : <h1> {seconds < 10 ? `${seconds}` : seconds}</h1>}
    </div>
  );
};

/**
 * @function SurveyContainer
 * @param {*} props {*} callback
 * @returns Render navigation component to main view displaying auto video / navigation / explore-more.
 */
const SurveyContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [useConfigMiniVan, setConfigMiniVan] = useState([]);
  const [useConfigTruck, setConfigTruck] = useState([]);
  const [useConfigCrossOver, setConfigCrossOver] = useState([]);
  const [useConfigConceptVehicle, setConfigConceptVehicle] = useState([]);

  const [useMiniVan, setMiniVan] = useState(false);
  const [useTruck, setTruck] = useState(false);
  const [useCrossover, setCrossover] = useState(false);
  const [useConceptVehicle, setConceptVehicle] = useState(false);

  const [useBegin, setBeing] = useState(0);
  const [useEmail, setEmail] = useState('');
  const [useUserEmail, setUserEmail] = useState('');
  const [useUserPhone, setuseUserPhone] = useState('');

  let userAge = useRef();
  let userName = useRef();
  let lastName = useRef();
  let userZipcode = useRef();

  let userOwner = useRef();
  let userPurChaseOrLease = useRef();
  let userTelephone = useRef();

  let userEmail = useRef();

  const [useUserInfo, setUserInfo] = useState({
    email: '',
    age: '',
    userName: '',
    lastName: '',
    zipcode: '',
    phone: '',
  });

  const phoneWarning = 'Please enter a valid phone number';

  const ageRange = [
    { item: 'Under 18', formValue: 'Under 18' },
    { item: '18 - 25', formValue: '18-25' },
    { item: '26 - 35', formValue: '26-35' },
    { item: '36 - 45', formValue: '36-45' },
    { item: '46 - 55', formValue: '46-55' },
    { item: '56 - 65', formValue: '56-65' },
    { item: 'Over 65', formValue: '65+' },
  ];
  const purchaseOrLease = [
    { item: 'In 0-3 months', formValue: '0-3 months' },
    { item: 'In 4-6 months', formValue: '4-6 months' },
    { item: 'In 7-12 months', formValue: '7-12 months' },
    { item: 'In 12+ months', formValue: '12+ months' },
  ];

  //submit form states
  const [useChooseOnlyEmail, setChooseOnlyEmail] = useState(true);

  const [useReceivedEmail, setReceivedEmail] = useState(false);
  const [useContactBy, setContactBy] = useState(false);
  const [useTelephone, setTelephone] = useState(false);
  const [useEmailAddres, setEmailAddres] = useState(false);

  const [useValidate, setValidate] = useState(false);

  const GAEventsTracket = useGAEventsTracker('Survey');

  useEffect(() => {
    dispatch(setAssetLoader(false));

    setConfigMiniVan(survey['MiniVan']);
    setConfigTruck(survey['Truck']);
    setConfigCrossOver(survey['Crossover']);
    setConfigConceptVehicle(survey['ConceptVehicles']);
  }, []);

  const setNextQuestion = (_s) => {
    console.log('======== user info next step', useUserInfo);
    let counter = useBegin + 1;

    if (_s === 1) {
      setBeing(counter);
    }

    if (counter === 2) {
      document.querySelectorAll('.userForm').forEach((item, i) => {
        if (!userEmail.current.validity.valid) {
          item.style.border = '1px solid red';
          return;
        }
        setBeing(counter);
        item.style.border = 'none';
      });
      if (!useEmail) return;
    }

    if (_s === 3) {
      if (userDetails.ageRange !== undefined) {
        setBeing(counter);
      }
    }

    if (counter === 4) {
      let fieldsValid = 0;
      document.querySelectorAll('.userForm').forEach((item, i) => {
        if (!item.value) {
          item.style.border = '1px solid red';
          return;
        }

        if (userZipcode.current.validity.valid === false) {
          item.style.border = '1px solid red';
          return;
        }
        // setBeing(counter);
        item.style.border = 'none';
        fieldsValid = fieldsValid + 1;
        return;
      });

      if (fieldsValid === 3) {
        setBeing(counter);
      }

      // if (!userName.current.value || !lastName.current.value || !userZipcode.current.value) return;

      userDetails.firstName = userName.current.value;
      userDetails.lastName = lastName.current.value;
      userDetails.zipCode = userZipcode.current.value;
      userDetails.email = useUserInfo.email;
    }

    if (_s === 5) {
      if (userDetails.vehichles !== undefined && userDetails.vehichles.length !== 0) {
        setBeing(counter);
      }
    }

    if (_s === 6 && userDetails.phoneContact !== '' && useTelephone) {
      if (userDetails.phoneContact.toLowerCase() === 'yes') {
        if (!validatePhoneNumber(useUserPhone)) {
          setValidate(true);
          return;
        }
        setBeing(counter);
      }
      setValidate(false);
      userDetails.phone = useUserPhone;
    }

    // Submit
    if (_s === 6) {
      // console.log('======== user final old', { userDetails })
      // console.log('======== user final', { useUserInfo })
      axios
        .post('/api/s2w/sendUserData', userDetails)
        .then((d) => {
          dispatch(toggleStartSurvey(true));
        })
        .catch((e) => {
          console.log('=== fail on sending data to server', e);
        });
      setTimeout(() => {
        history.push('/overview');
      }, 2000);
    }
  };

  const handleChange = (event) => {
    if (event.target.value || useUserEmail) {
      email = event.target.value + useUserEmail;
      setEmail(email);
      setUserInfo({ email: useEmail });
    }
  };

  const handleDomainChange = (e) => {
    setEmail(e.target.value);
    const prevValues = Object.assign({}, useUserInfo);
    prevValues['email'] = prevValues['email'] + e.target.value;
    setUserInfo(prevValues);
  };

  // useEffect(() => {
  //   console.log('======== user info', { useUserInfo });
  // }, [useUserInfo]);

  const onInputChange = (type, value) => {
    // console.log({ type, value });
    const prevValues = Object.assign({}, useUserInfo);
    prevValues[type] = value;

    setUserInfo(prevValues);
  };

  /**
   *
   * @param {*} inputtxt
   * @returns Number validated.
   */
  function validatePhoneNumber(input_str) {
    // var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return re.test(input_str);
  }

  /**
   * @function SubmintUserDetails
   * @description Submit all user data collected on survery experience.
   */
  const SubmintUserDetails = () => {
    // console.log('usename :', userName.current.value);
    // console.log('lastname :', lastName.current.value);
    // console.log('zipcode :', userZipcode.current.value);
    // console.log('carSelected :', setSelectedVehichles);
    //console.log('validate : ', validatePhoneNumber(useUserPhone))

    console.log(' Redirect if valitation is true : ', useValidate);
    // if (useValidate && useTelephone) {
    //   console.log('All user data collected : ', userDetails, ' validate : ', useValidate);
    //   setTimeout(() => {
    //     history.push('/overview')
    //   }, 2000)
    // }

    GAEventsTracket('Submit', 'User Data Information');
  };

  /**
   * @function selectedVehicles
   * @param {*} e
   * @description Set selected vehicle with the rule of been only three
   * of all selections.
   */
  const selectedVehicles = (e) => {
    let element = document.getElementById(`${e.target.id}`);
    if (element.classList.contains(`${style.selected}`)) {
      element.classList.remove(`${style.selected}`);
      setSelectedVehichles.splice(setSelectedVehichles.indexOf(e.target.id), 1);
    } else {
      if (setSelectedVehichles.length >= 0 && setSelectedVehichles.length < 3) {
        element.classList.add(`${style.selected}`);
        setSelectedVehichles.push(e.target.id);
      }
    }
    userDetails.vehichles = setSelectedVehichles;
  };

  /**
   * @function handlePurchaseOrLeaseSeciton
   * @param {*} e
   * @description Check/Uncheck box for Purchase or Lease section.
   */
  const handleRadioCheckboxSelected = (e, classname) => {
    if (!e.target.id) return;

    clearAllCheckBox(`${classname}`);
    document.querySelector(`#${e.target.id}`).checked = true;
    userDetails[`${classname}`] = e.target.value;

    GAEventsTracket(`${classname}`, `${e.target.value}`);

    if (e.target.value === 'Under 18') {
      setBeing(null);
      // setTimeout(() => {
      //   history.push('/overview')
      // }, 2000)
    }

    if (e.target.value === '7-12 months' || e.target.value === '12+ months') {
      setChooseOnlyEmail(false);
    }
    if (e.target.value === '0-3 months' || e.target.value === '4-6 months') {
      setChooseOnlyEmail(true);
    }
  };

  /***
   * @function handleChooseOneSection
   * @description Check/Uncheck box selection and display options.
   */
  const handleChooseOneSection = (e) => {
    if (!e.target.id) return;

    if (e.target.id === 'receiveEmail') {
      clearAllCheckBox('emailOption');
      userDetails['dealerOption'] = 'No';

      clearAllCheckBox('dealerOption');
      setReceivedEmail(!useReceivedEmail);
      setContactBy(false);
      document.querySelector(`#${e.target.id}`).checked = !useReceivedEmail;

      setTelephone(false);
      setEmailAddres(false);
      userDetails['emailOption'] = e.target.id ? 'Yes' : 'No';

      // GAEventsTracket('ReceiveEmail:Choose', `${e.target.id}`);
    }
    if (e.target.id === 'contactByDealer') {
      clearAllCheckBox('emailOption');
      userDetails['emailOption'] = 'No';

      clearAllCheckBox('dealerOption');
      setContactBy(!useContactBy);
      setReceivedEmail(false);

      document.querySelector(`#${e.target.id}`).checked = !useContactBy;
      userDetails['dealerOption'] = e.target.id ? 'Yes' : 'No';

      // GAEventsTracket('ContactByDealer:Choose', `${e.target.id}`);
    }
    if (e.target.id === 'contactTelephone') {
      clearAllCheckBox('emailContact');
      userDetails['emailContact'] = 'No';

      clearAllCheckBox('phoneContact');
      setTelephone(!useTelephone);
      setEmailAddres(false);
      document.querySelector(`#${e.target.id}`).checked = !useTelephone;

      userDetails['phoneContact'] = e.target.id ? 'Yes' : 'No';

      // GAEventsTracket('ContactTelephone', `${e.target.id}`);
    }
    if (e.target.id === 'contactEmailAddress') {
      clearAllCheckBox('phoneContact');
      userDetails['phoneContact'] = 'No';

      clearAllCheckBox('emailContact');
      setEmailAddres(!useEmailAddres);
      setTelephone(false);
      document.querySelector(`#${e.target.id}`).checked = !useEmailAddres;

      userDetails['emailContact'] = e.target.id ? 'Yes' : 'No';

      // GAEventsTracket('ContactEmailAddress', `${e.target.id}`);
    }
  };

  const clearAllCheckBox = (classname) => {
    document.querySelectorAll(`.${classname}`).forEach((el, i) => {
      el.checked = false;
    });
  };

  const renderSurvey = (option) => {
    switch (option) {
      case 1:
        return (
          <>
            <div className={style.ContainerHead}>
              <img
                src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Images/Survey/ba-toyota-logo.png"
                alt="static-logo"
              />
            </div>
            <div className={style.ContainerEmail}>
              <div className={style.ContainerEmailInput}>
                <form>
                  <label htmlFor="email">
                    Email Address <div className={style.required}>*</div>
                  </label>
                  <input
                    id="email"
                    type="text"
                    className="userForm"
                    name="email"
                    value={useUserInfo.email}
                    onChange={(e) => onInputChange('email', e.target.value)}
                    ref={userEmail}
                    pattern="[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+"
                    // pattern=".+@globex.com"
                    required
                    // onChange={(event) => handleChange(event)}
                  />
                  <select value={useEmail} onChange={(e) => handleDomainChange(e)}>
                    <option disabled value="">
                      @Email.com
                    </option>
                    <option value="@gmail.com">@gmail.com</option>
                    <option value="@yahoo.com">@yahoo.com</option>
                    <option value="@hotmail.com">@hotmail.com</option>
                    <option value="@aol.com">@aol.com</option>
                    <option value="@msn.com">@msn.com</option>
                    <option value="@comcast.net">@comcast.net</option>
                  </select>
                  <p>
                    Please be advised that all information collected will be held in strict
                    accordance with Toyota's{' '}
                    <a href="https://www.toyota.com/support/privacy-rights/" target="_blank">
                      privacy policy
                    </a>
                  </p>
                </form>
              </div>
              <div className={style.Next}>
                <button
                  className={style.NextButtonIcon}
                  onClick={() => {
                    GAEventsTracket('email', '###');
                    setNextQuestion(2);
                  }}
                >
                  <label>Next</label>
                </button>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className={style.ContainerHead}>
              <img
                src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Images/Survey/ba-toyota-logo.png"
                alt="static-logo"
              />
            </div>
            <div className={style.ContainerAgeRange}>
              <p>What is your age range ?</p>

              <div className={style.AgeBox}>
                {ageRange.map((age, i) => {
                  return (
                    <div
                      key={i}
                      className={`${style.red} ${style.customcb}`}
                      onClick={(e) => handleRadioCheckboxSelected(e, 'ageRange')}
                    >
                      <input
                        type="checkbox"
                        value={age.formValue}
                        id={`customcb${i}`}
                        className="ageRange"
                      />
                      <label className={style.inner} htmlFor={`customcb${i}`}></label>
                      <label className={style.outer} htmlFor={`customcb${i}`} ref={userAge}>
                        {age.item}
                      </label>
                    </div>
                  );
                })}
              </div>
              <div className={style.Next}>
                <button className={style.NextButtonIcon} onClick={() => setNextQuestion(3)}>
                  <label>Next</label>
                </button>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className={style.ContainerHead}>
              <img
                src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Images/Survey/ba-toyota-logo.png"
                alt="static-logo"
              />
            </div>
            <div className={style.ContainerForm}>
              <div className={style.ContainerFormInput}>
                <span>
                  <div className={style.required}>*</div> required fields
                </span>
                <form>
                  <div className={style.ContainerFormInputGeneral}>
                    <label htmlFor="name">
                      First Name <div className={style.required}>*</div>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      ref={userName}
                      className="userForm"
                      value={useUserInfo.userName}
                      onChange={(e) => onInputChange('userName', e.target.value)}
                    />

                    <label htmlFor="lastname">
                      Last Name <div className={style.required}>*</div>
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      name="lastname"
                      ref={lastName}
                      className="userForm"
                      value={useUserInfo.lastName}
                      onChange={(e) => onInputChange('lastName', e.target.value)}
                    />

                    <label htmlFor="zipcode">
                      Zip Code <div className={style.required}>*</div>
                    </label>
                    {/* <MaskedInput
                      style={{ width: '40%' }}
                      mask={[/\d/, /\d/, /\d/, /\d/, /\d/]}
                      placeholder="94303"
                      placeholderChar="\u2000"
                      className="userForm"
                      required
                      id="zipcode"
                      type="text"
                      name="zipcode"
                      ref={userZipcode}
                      value={useUserInfo.zipcode}
                      onChange={(e) => onInputChange('zipcode', e.target.value)}
                      // minLength="5"
                      // maxLength="5"
                    /> */}
                    <input
                      style={{ width: '40%' }}
                      pattern="\d{5}([\-]\d{4})?"
                      // pattern="\d{5}-?(\d{4})"
                      required
                      id="zipcode"
                      type="text"
                      name="zipcode"
                      ref={userZipcode}
                      value={useUserInfo.zipcode}
                      onChange={(e) => onInputChange('zipcode', e.target.value)}
                      className="userForm"
                      minLength="5"
                      maxLength="5"
                    />
                  </div>

                  <div className={style.ContainerFormInputEmail}>
                    <label htmlFor="email">
                      Email Address <div className={style.required}>*</div>
                    </label>
                    <input
                      disabled
                      id="email"
                      type="email"
                      value={useUserInfo.email}
                      name="email"
                      onChange={(event) => handleChange(event)}
                    />

                    <select disabled value={useUserEmail}>
                      <option value="@Email.com">@Email.com</option>
                      <option value="@gmail.com">@gmail.com</option>
                      <option value="@yahoo.com">@yahoo.com</option>
                      <option value="@hotmail.com">@hotmail.com</option>
                      <option value="@aol.com">@aol.com</option>
                      <option value="@msn.com">@msn.com</option>
                      <option value="@comcast.net">@comcast.net</option>
                    </select>
                  </div>

                  <p>
                    Please be advised that all information collected will be held in strict
                    accordance with Toyota's{' '}
                    <a href="https://www.toyota.com/support/privacy-rights/" target="_blank">
                      privacy policy
                    </a>
                  </p>
                </form>
              </div>
              <div className={style.Next}>
                <button className={style.NextButtonBack} onClick={() => setBeing(2)}>
                  <label>Back</label>
                </button>
                <button
                  className={style.NextButtonIcon}
                  onClick={() => {
                    GAEventsTracket('Form-UserDetails', '###');
                    setNextQuestion(4);
                  }}
                >
                  <label>Next</label>
                </button>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className={style.ContainerHead}>
              <img
                src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Images/Survey/ba-toyota-logo.png"
                alt="static-logo"
              />
            </div>
            <div className={style.ContainerVehicles}>
              <p>Which Toyota vehicle are you most interested in? Select up to 3 vehicles.</p>
              <div className={style.ContainerVehiclesAcordion}>
                <ul>
                  <li onClick={() => setMiniVan(!useMiniVan)}>
                    Car/Minivan
                    <div className={style.ContainerVehiclesAcordionExpand}>
                      <div className={style.ContainerVehiclesAcordionExpandText}>
                        <p>expand</p>
                        <img
                          src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Images/Survey/ba-toyota-dropDown.png"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </li>
                  {useMiniVan ? (
                    <>
                      <div className={style.gridContainer}>
                        {useConfigMiniVan.map((item, i) => {
                          return (
                            <div className={style.gridItem} key={i}>
                              <div className={style.InnerBox}>
                                <img
                                  src={item.image.activeUrl}
                                  alt={i}
                                  id={item.formValue}
                                  onClick={(e) => {
                                    GAEventsTracket('Car/Minivan', `${item.image.activeUrl}`);
                                    selectedVehicles(e);
                                  }}
                                />
                              </div>
                              <label>{item.name}</label>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    false
                  )}
                  <li onClick={() => setTruck(!useTruck)}>
                    Truck
                    <div className={style.ContainerVehiclesAcordionExpand}>
                      <div className={style.ContainerVehiclesAcordionExpandText}>
                        <p>expand</p>
                        <img
                          src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Images/Survey/ba-toyota-dropDown.png"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </li>
                  {useTruck ? (
                    <>
                      <div className={style.gridContainer}>
                        {useConfigTruck.map((item, i) => {
                          return (
                            <div className={style.gridItem} key={i}>
                              <div className={style.InnerBox}>
                                <img
                                  src={item.image.activeUrl}
                                  alt={i}
                                  style={{ width: `${item.size.width}%` }}
                                  id={item.formValue}
                                  onClick={(e) => {
                                    GAEventsTracket('Truck', `${item.image.activeUrl}`);
                                    selectedVehicles(e);
                                  }}
                                />
                              </div>
                              <label>{item.name}</label>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    false
                  )}
                  <li onClick={() => setCrossover(!useCrossover)}>
                    Crossover / SUV
                    <div className={style.ContainerVehiclesAcordionExpand}>
                      <div className={style.ContainerVehiclesAcordionExpandText}>
                        <p>expand</p>
                        <img
                          src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Images/Survey/ba-toyota-dropDown.png"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </li>
                  {useCrossover ? (
                    <>
                      <div className={style.gridContainer}>
                        {useConfigCrossOver.map((item, i) => {
                          return (
                            <div className={style.gridItem} key={i}>
                              <div className={style.InnerBox}>
                                <img
                                  src={item.image.activeUrl}
                                  alt={i}
                                  id={item.formValue}
                                  onClick={(e) => {
                                    GAEventsTracket('CrossOver/SUV', `${item.image.activeUrl}`);
                                    selectedVehicles(e);
                                  }}
                                />
                              </div>
                              <label>{item.name}</label>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    false
                  )}
                  <li onClick={() => setConceptVehicle(!useConceptVehicle)}>
                    Concept Vehicle
                    <div className={style.ContainerVehiclesAcordionExpand}>
                      <div className={style.ContainerVehiclesAcordionExpandText}>
                        <p>expand</p>
                        <img
                          src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Images/Survey/ba-toyota-dropDown.png"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </li>
                  {useConceptVehicle ? (
                    <>
                      <div className={style.gridContainer}>
                        {useConfigConceptVehicle.map((item, i) => {
                          return (
                            <div className={style.gridItem} key={i}>
                              <span
                                id={item}
                                onClick={(e) => {
                                  GAEventsTracket('Concept Vehicle', `${item}`);
                                  selectedVehicles(e);
                                }}
                              >
                                {item}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    false
                  )}
                </ul>
                <div className={style.ContainerVehiclesAcordionPrivacy}>
                  <p>
                    Please be advised that all information collected will be held in strict
                    accordance with Toyota's{' '}
                    <a href="https://www.toyota.com/support/privacy-rights/" target="_blank">
                      privacy policy
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className={style.Next}>
              <button className={style.NextButtonBack} onClick={() => setBeing(3)}>
                <label>Back</label>
              </button>
              <button className={style.NextButtonIcon} onClick={() => setNextQuestion(5)}>
                <label>Next</label>
              </button>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div className={style.ContainerHead}>
              <img
                src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Images/Survey/ba-toyota-logo.png"
                alt="static-logo"
              />
            </div>
            <div className={style.ContainerSubmitForm}>
              <div className={style.ContainerSubmitFormInput}>
                <label>Are you currently a Toyota owner?</label>
                <form onClick={(e) => handleRadioCheckboxSelected(e, 'currentOwner')}>
                  <div className={style.YesNoBox}>
                    <div className={`${style.Red} ${style.customcheck}`}>
                      <input
                        type="checkbox"
                        value="No"
                        id={`customcheck1`}
                        className="currentOwner"
                      />
                      <label className={style.inner} htmlFor={`customcheck1`}></label>
                      <label className={style.outer} htmlFor={`customcheck1`} ref={userOwner}>
                        No
                      </label>
                    </div>

                    <div className={`${style.Red} ${style.customcheck}`}>
                      <input
                        type="checkbox"
                        value="Yes"
                        id={`customcheck2`}
                        className="currentOwner"
                      />
                      <label className={style.inner} htmlFor={`customcheck2`}></label>
                      <label className={style.outer} htmlFor={`customcheck2`} ref={userOwner}>
                        Yes
                      </label>
                    </div>
                  </div>
                </form>
                <br />
                <label>When do you plan to purchase or lease your next new vehicle?</label>
                <form onClick={(e) => handleRadioCheckboxSelected(e, 'purchaseHorizon')}>
                  <div className={style.AgeBox}>
                    {purchaseOrLease.map((lease, i) => {
                      return (
                        <div key={i} className={`${style.red} ${style.customcb}`}>
                          <input
                            type="checkbox"
                            value={lease.formValue}
                            id={`customcb${i}`}
                            className="purchaseHorizon"
                          />
                          <label className={style.inner} htmlFor={`customcb${i}`}></label>
                          <label
                            className={style.outer}
                            htmlFor={`customcb${i}`}
                            ref={userPurChaseOrLease}
                          >
                            {lease.item}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </form>
                <br />

                {useChooseOnlyEmail ? <label>Choose one:</label> : false}

                <form onClick={(e) => handleChooseOneSection(e)}>
                  <div className={`${style.Redbox} ${style.customcheckbox}`}>
                    <input type="checkbox" value="1" id="receiveEmail" className="emailOption" />
                    <label className={style.inner} htmlFor="receiveEmail"></label>
                    <label className={style.outer} htmlFor="receiveEmail">
                      I would like to receive exciting product and event news from Toyota.
                    </label>
                  </div>
                  <br />
                  {useReceivedEmail ? (
                    <>
                      <div className={style.ContainerFormInputEmail}>
                        <input
                          id="email"
                          type="text"
                          name="email"
                          disabled
                          value={useUserInfo.email}
                          onChange={(e) => onInputChange('email', e.target.value)}
                        />

                        <select disabled value={useUserEmail}>
                          <option value="@Email.com">@Email.com</option>
                          <option value="@gmail.com">@gmail.com</option>
                          <option value="@yahoo.com">@yahoo.com</option>
                          <option value="@hotmail.com">@hotmail.com</option>
                          <option value="@aol.com">@aol.com</option>
                          <option value="@msn.com">@msn.com</option>
                          <option value="@comcast.net">@comcast.net</option>
                        </select>
                      </div>
                    </>
                  ) : (
                    false
                  )}
                  {useChooseOnlyEmail ? (
                    <div className={`${style.Redbox} ${style.customcheckbox}`}>
                      <input
                        type="checkbox"
                        value="2"
                        id="contactByDealer"
                        className="dealerOption"
                      />
                      <label className={style.inner} htmlFor="contactByDealer"></label>
                      <label className={style.outer} htmlFor="contactByDealer">
                        I would like to be contacted by my local Toyota dealer for a test drive and
                        more information about purchasing or leasing a new Toyota vehicle.
                      </label>
                    </div>
                  ) : (
                    false
                  )}

                  <br />
                  {useContactBy ? (
                    <div className={style.ContainerSubmitFormInputContact}>
                      <label>How should a dealership sales person contact you? Choose one.</label>

                      <div className={`${style.Redbox} ${style.customcheckbox}`}>
                        <input
                          type="checkbox"
                          value="1"
                          id="contactTelephone"
                          className="phoneContact"
                        />
                        <label className={style.inner} htmlFor="contactTelephone"></label>
                        <label className={style.outer} htmlFor="contactTelephone">
                          Telephone Number
                        </label>
                      </div>
                      <br />
                      {useTelephone ? (
                        <div className={style.ContainerSubmitFormInputContactTelephone}>
                          <input
                            id="name"
                            type="tel"
                            name="name"
                            ref={userTelephone}
                            onChange={(e) => setuseUserPhone(e.target.value)}
                            // onChange={(e) => console.log('====== setting phone', e.target.value)}
                            value={useUserPhone}
                          />
                          <p style={{ color: 'red' }}>{useValidate ? phoneWarning : false}</p>
                        </div>
                      ) : (
                        false
                      )}
                      <div className={`${style.Redbox} ${style.customcheckbox}`}>
                        <input
                          type="checkbox"
                          value="1"
                          id="contactEmailAddress"
                          className="emailContact"
                        />
                        <label className={style.inner} htmlFor="contactEmailAddress"></label>
                        <label className={style.outer} htmlFor="contactEmailAddress">
                          Email Address
                        </label>
                      </div>
                      <br />
                      {useEmailAddres ? (
                        <div className={style.ContainerSubmitFormInputContactEmail}>
                          <input
                            disabled
                            id="email"
                            type="text"
                            name="email"
                            value={useUserInfo.email}
                            onChange={(e) => onInputChange('email', e.target.value)}
                          />

                          <select disabled value={useUserEmail}>
                            <option value="@Email.com">@Email.com</option>
                            <option value="@gmail.com">@gmail.com</option>
                            <option value="@yahoo.com">@yahoo.com</option>
                            <option value="@hotmail.com">@hotmail.com</option>
                            <option value="@aol.com">@aol.com</option>
                            <option value="@msn.com">@msn.com</option>
                            <option value="@comcast.net">@comcast.net</option>
                          </select>
                        </div>
                      ) : (
                        false
                      )}
                    </div>
                  ) : (
                    false
                  )}
                </form>
              </div>
            </div>
            <div className={style.Next}>
              <button className={style.NextButtonBack} onClick={() => setBeing(4)}>
                <label>Back</label>
              </button>
              <button
                className={style.NextButtonIcon}
                onClick={() => {
                  SubmintUserDetails();
                  setNextQuestion(6);
                }}
              >
                <label>Submit</label>
              </button>
            </div>
          </>
        );
      case 6:
        return (
          <>
            <div className={style.ContainerHead}>
              <img
                src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Images/Survey/ba-toyota-logo.png"
                alt="static-logo"
              />
            </div>
            <div className={style.ContainerThankYou}>
              <h3>Thanks for joining us!</h3>
              <p>Redirecting to toyotaautoshow.com</p>
              {/* <Timer /> */}
            </div>
          </>
        );
      default:
        let count = 0; 
        setTimeout(() => {
          history.push('/overview')
        }, 5000)
        return (
          <>
            <div className={style.ContainerHead}>
              <img
                src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Images/Survey/ba-toyota-logo.png"
                alt="static-logo"
              />
            </div>
            <div className={style.ContainerThankYou}>
              <h3>Thanks for joining us! Redirecting...</h3>
              <p>
                You must be 18 years or older to register. Check out our activities and see a Toyota
                representative if you have any questions.
              </p>
            </div>
          </>
        );
    }
  };

  return (
    <div className={style.Container}>
      {useBegin === 0 ? (
        <div className={style.ContainerLanding}>
          <img
            src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Images/Survey/ba-toyota-startLogo.png"
            alt="landing"
          />
          {/* <img src={loader} alt='loading...'/> */}
          <div className={style.ContainerLandingButton}>
            <button
              onClick={() => {
                GAEventsTracket('Touch Begin', 'Survey');
                setNextQuestion(1);
              }}
            >
              Touch to Begin
            </button>
          </div>
        </div>
      ) : (
        renderSurvey(useBegin)
      )}
    </div>
  );
};

export default SurveyContainer;
