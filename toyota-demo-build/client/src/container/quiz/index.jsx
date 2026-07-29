import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from '../quiz/style/quiz.module.scss';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';

// import { ReactComponent as ButtonReplay } from '../../assets/Icons/Buttons/TOY_VIRTUAL_button_Replay.svg';
// import { ReactComponent as ButtonLearnMore } from '../../assets/Icons/Buttons/TOY_VIRTUAL_button_LearnMore.svg';


import { MainNavComponent, NavComponent, CardResultComponent } from '../../components/common';
import CustomHeader from '../headerLayout/customHeader';


import { setAssetLoader } from '../../store/gobal';
import quiz from './../../config/quiz';

import useGAEventsTracker from '../../useGAevnetsTracker';

const StartQuizWelcome = ({ setStartQuiz }) => {
    const GAEventsTracket = useGAEventsTracker('T-360 Quiz')
    return (
        <>
            <div className={style.BoxQuizStart}>
                <div className={style.BoxQuizStartLeftHoop}>
                    <div className={style.Circle}></div>
                </div>
                <div className={style.BoxQuizStartRightHoop}>
                    <div className={style.Circle}></div>
                </div>
                {/* <img src="https://d28z8i57b3adv3.cloudfront.net/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/png/T360 Theater- Game Show Start2.png" alt="start"/> */}
                <div className={style.BoxQuizStartBackground}></div>
                <div className={style.BoxQuizStartTitle}>
                    {quiz['Start'].title}
                </div>
                <div className={style.BoxQuizStartButton} onClick={() => { setStartQuiz(true); GAEventsTracket('Start Quiz', 'Landing') }}>
                    <button className="button">Start</button>
                </div>

            </div>
        </>
    )
}
var result = [];
var useSelectedAnswer = null;

const StartQuiz = ({ useQuestion, useIndexOrTitle, handleNextQuestion, setSynonym }) => {
    const GAEventsTracket = useGAEventsTracker('T-360 Quiz')

    var synonym;
    function handleAnswereSelected(option, find) {
        document.querySelectorAll('.buttonQuiz').forEach((element, i) => {
            element.classList.remove('active')
        })

        if (find) {
            useSelectedAnswer = option;
        }

        if (useSelectedAnswer !== null) {
            if (result.indexOf(useSelectedAnswer) === -1) {
                result.push(useSelectedAnswer)
            }
        }
        document.getElementById(`${option}`).classList.add('active')

    }
    function setAndCompareResults(next) {

        switch (next) {
            case 'Finish':
                quiz['Categories'].forEach((element, index) => {
                    if (getMatch(result, element.selection).length > 2) {
                        console.log('best-match: ', element.categorie)
                        synonym = element.synonym[Math.floor(Math.random() * element.synonym.length)];
                        // setSynonym(synonym)
                        console.log('best-synonym: ', synonym)
                    }
                });

                // set synonym best matches.
                if (synonym) {
                    console.log('we have a match');
                    setSynonym(synonym);
                } else {
                    console.log('we should randomly pick a match.')
                    quiz['Categories'].forEach((element, index) => {
                        //set random synonyms if there is not match...
                        synonym = element.synonym[Math.floor(Math.random() * element.synonym.length)];
                        setSynonym(synonym)
                    });
                }
                GAEventsTracket('Finish', synonym);
                break
            default:

                break

        }
        // console.log('result :', quiz['Result'][synonym])


    }
    function getMatch(a, b) {
        var matches = [];

        for (var i = 0; i < a.length; i++) {
            for (var e = 0; e < b.length; e++) {
                if (a[i] === b[e]) matches.push(a[i]);
            }
        }
        return matches;
    }

    return (
        <>
            <div className={style.LeftHoop}>
                <div className={style.Circle}></div>
            </div>


            <div className={style.BoxQuiz}>
                <div className={style.BoxQuizTitle}>
                    <b>QUESTION {useIndexOrTitle.index}/6 <br /> <span dangerouslySetInnerHTML={{ __html: useIndexOrTitle.title }}></span></b>
                </div>

                <div className={style.BoxQuizRow}>
                    {
                        useQuestion.map((item, i) => {
                            return (
                                <div key={i} className={style.BoxQuizColumn}>
                                    <div key={i} className={style.BoxQuizInnerBox}>
                                        <img src={item.image} alt={item.option.text} />
                                        <button id={item.option.text} onClick={() => handleAnswereSelected(item.option.text, useIndexOrTitle.categorie)} className={`${style[useIndexOrTitle.className]} buttonQuiz`} >{item.option.letter}. {item.option.text}</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={style.BoxQuizFooter}>
                    <div className={style.BoxQuizFooterBox}>
                        {
                            useIndexOrTitle.index > 1
                                ?
                                <>
                                    <div className={style.BoxQuizFooterBoxLeft}>
                                        <p onClick={() => handleNextQuestion('back')}>
                                            <i className={style.BoxQuizFooterArrowL} />
                                            Back
                                        </p>
                                    </div>
                                    <div className={style.BoxQuizFooterBoxRight}>
                                        <p style={{ float: "right" }} onClick={() => { handleNextQuestion('next'); setAndCompareResults(`${useIndexOrTitle.index === 6 ? 'Finish' : 'Next'}`) }}>
                                            {useIndexOrTitle.index === 6 ? 'Finish' : 'Next'}
                                            <i className={style.BoxQuizFooterArrowR} />
                                        </p>
                                    </div>
                                </>
                                :
                                <p style={{ margin: "auto 2vw" }} onClick={() => { handleNextQuestion('next'); setAndCompareResults(`${useIndexOrTitle.index === 6 ? 'Finish' : 'Next'}`) }}>
                                    Next
                                    <i className={style.BoxQuizFooterArrowR} />
                                </p>
                        }
                    </div>
                </div>
            </div>

            <div className={style.RightHoop}>
                <div className={style.Circle}></div>
            </div>
        </>
    )
}

/**
 * @function QuizContainer
 * @param {*} props {*} callback
 * @returns Render navigation component to main view displaying auto quiz game.
 */
var indexOf = 0;
const QuizContainer = () => {

    let isMobileDevice = useMediaQuery({ query: '(max-height: 440px)' }) ? '350' : '550';
    let isTablet = useMediaQuery({ query: '(min-height: 700px)' }) ? '720' : isMobileDevice;
    let isDekstop = useMediaQuery({ query: '(min-height: 1060px)' }) ? '1080' : '940';
    let screenHeight = useMediaQuery({ query: '(max-height: 920px)' }) ? isTablet : isDekstop;

    const [useSynonym, setSynonym] = useState(null);

    const [isStartQuiz, setStartQuiz] = useState(false);
    const [useQuestion, setQuestions] = useState([]);
    const [useIndexOrTitle, setIndexOrTitle] = useState({ index: 0, title: '', categorie: '', className: '' });

    const [useCardContent, setCardContent] = useState({});
    const [useResults, setResults] = useState({});

    const [isMobile, setisMobile] = useState(false);
    const [useSingUp, setSingUp] = useState(false);


    const dispatch = useDispatch();
    const GAEventsTracket = useGAEventsTracker('T-360 Quiz')


    useEffect(() => {
        clearAllStates();
        dispatch(setAssetLoader(false));

        setQuestions(quiz['Quiz'][indexOf]['thumbnail']);
        setIndexOrTitle({ index: quiz['Quiz'][indexOf].index, title: quiz['Quiz'][indexOf].title, categorie: quiz['Quiz'][indexOf].categorie, className: quiz['Quiz'][indexOf].className })

        setCardContent(quiz['ResultText']);
        setResults(quiz['Result'][`${useSynonym}`])

        //console.log('setSyno : ', useSynonym);


    }, [useSynonym, useResults]);


    useEffect(() => {
        if (Number(screenHeight) === 350) {
            setisMobile(true)
        } else {
            setisMobile(false);
        }
    }, [screenHeight]);

    function handleNextQuestion(nextOrBack) {
        if (nextOrBack === 'next') {
            if (indexOf < 5) {
                indexOf++
            }
        } else {
            indexOf--;
        }

        setQuestions(quiz['Quiz'][indexOf]['thumbnail']);
        setIndexOrTitle({ index: quiz['Quiz'][indexOf].index, title: quiz['Quiz'][indexOf].title, categorie: quiz['Quiz'][indexOf].categorie, className: quiz['Quiz'][indexOf].className })
    }
    //console.log('result :', useResults)

    function handleSignUp(status) {
        //console.log('check status', status);
        setSingUp(status)
    }

    function clearAllStates() {
        result = [];
        useSelectedAnswer = null;
        setQuestions([]);
        setIndexOrTitle({});
        setCardContent({});
        setResults({});
        indexOf = 0
    }

    /**
   * @function download
   * @param {*} url 
   * @param {*} filename 
   * @descrition Download any kind of file in local device.
   */
    function download(url, filename = 't360-image') {
        filename = url.substr(url.lastIndexOf('/') + 1);

        //seding event to GA
        GAEventsTracket('Dowload t-360 - Image', filename);

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
            {
                !useSynonym
                    ?
                    <div className={style.Box}>
                        <Link to="/t360-theater/choose-your-experience" onClick={() => clearAllStates()}>
                            <div className={style.CloseButton}>
                                <button
                                    className={`hamburger hamburger--slider-r is-active`}
                                    type="button">
                                    <span className="hamburger-box">
                                        <span className={`hamburger-inner-traditional`}></span>
                                    </span>
                                </button>
                            </div>
                        </Link>

                        <CustomHeader
                            Nav={
                                <NavComponent
                                    childComponent={<MainNavComponent />}
                                    width={100}
                                    height={100}
                                    zIndex={14}
                                />
                            }
                            innerNav="inner-traditional"
                            colorNavText="#747474"
                            classicNav={false}
                            headerWidth={40}
                            showOverview={true}
                            overViewColor="#747474"
                            gradientHeader={false}
                            classicFooter={false}
                        />


                        {
                            !isStartQuiz
                                ?
                                <StartQuizWelcome setStartQuiz={() => setStartQuiz(true)} />
                                :
                                <StartQuiz key={indexOf} useQuestion={useQuestion} useIndexOrTitle={useIndexOrTitle} handleNextQuestion={handleNextQuestion} setSynonym={setSynonym} />
                        }
                    </div>
                    :
                    <>

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
                            showOverview={!isMobile}
                            headerWidth={20}
                            childComponent={
                                <NavComponent
                                    childComponent={
                                        !useSingUp
                                            ?
                                            <CardResultComponent
                                                backTo="/t360-theater/choose-your-experience"
                                                textTitle={useCardContent.header} textBody={useCardContent['paragraphs']}
                                                singUp={useSingUp} callback={(status) => handleSignUp(status)}
                                                callback={() => download(quiz['Result'][`${useSynonym}`]?.download)}
                                            />
                                            :
                                            <>
                                                <div className={style.btnClose}>
                                                    <button
                                                        className={`hamburger hamburger--slider-r is-active`}
                                                        type="button"
                                                        onClick={() => { setSingUp(false) }}
                                                    >
                                                        <span className="hamburger-box">
                                                            <span className={`hamburger-inner-traditional`}></span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </>
                                    }
                                    width={!useSingUp ? 35 : 100} height={100} zIndex={13} backgroundColor={'#FFFFFF'} />
                            }
                            childName='giftphoto'
                        />
                        <div className={style.BoxResults}>
                            <div className={style.BoxResultsHead}>
                                <p>
                                    You are... <br />
                                    <span>
                                        {useSynonym}
                                    </span>
                                </p>
                            </div>

                            <img src={quiz['Result'][`${useSynonym}`]?.img} alt="result" />
                            {/* <img src="https://via.placeholder.com/1920x1080.png" alt="result"/> */}
                            <div className={style.BoxResultsFooter}>
                                <p>
                                    {
                                        quiz['Result'][`${useSynonym}`]?.descripton
                                    }
                                </p>
                                <Link to={quiz['Result'][`${useSynonym}`]?.url} onClick={() => { clearAllStates(); GAEventsTracket('External Links', `${quiz['Result'][`${useSynonym}`]?.url}`) }}>
                                    <button className={`${style.BoxResultsFooterButton} button`}>Learn More</button>
                                </Link>

                            </div>

                        </div>

                    </>
            }


        </>
    )
};

export default QuizContainer;
