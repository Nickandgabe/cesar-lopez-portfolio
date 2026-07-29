/*
* Original author:
* Latest contributor: 
* Client name: Immersicom
* Project name: website
* Project number: 01
* Main purpose: Product listener html events controller.
**/

var isMobileDevice = false;
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobileDevice = true;
}

//Check for webp browser support
Modernizr.on('webp', function (result) {
    if (result) {
        window.webp = true;
    } else {
        window.webp = false;
    }
});


const scene = productConfig;
var currentScene = 'Automotive';

var Api360 = {
    Automotive: { active: false, loaded: false, videoLoaded: false },
    Healthcare: { active: false, loaded: false, videoLoaded: false },
    Defense: { active: false, loaded: false, videoLoaded: false },
}

var menu = document.getElementById("headerTwo");

var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");
var videoPlayerDos = document.getElementById("videoPlayerDos");
var myVideoDos = document.getElementById("myVideoDos");
var spinOne = document.getElementById("spinOne");
var spinTwo = document.getElementById("spinTwo");
var spinThree = document.getElementById("spinThree");
var buttons = document.getElementById("buttons");

var dotOne = document.getElementById("dotDescriptionOne")
var dotTwo = document.getElementById("dotDescriptionTwo")
var dotThree = document.getElementById("dotDescriptionThree")
var dotFour = document.getElementById("dotDescriptionFour")

var turnIcon = document.getElementById("turnIcon");


var modalFour = document.getElementById("ModalGallery");

var priceCard = document.getElementById("card_Price");
var cardSpecs = document.getElementById("card_Specs");
var cardDesc = document.getElementById("card-section");

var span = document.getElementsByClassName("close")[0];

var btnOne = document.getElementById("mOne");
var btnTwo = document.getElementById("mTwo");
var btnThree = document.getElementById("mFour");


var btnOneMRI = document.getElementById("mOneMRI");
var btnTwoMRI = document.getElementById("mTwoMRI");
var btnThreeMRI = document.getElementById("mFourMRI");
var btnFourMRI = document.getElementById("mThreeMRI");



var closeCard = document.getElementById("btnClose");
var cardInfo = document.getElementById("card_Info");
var cardMRI = document.getElementById("card_MRI");
var cardSpecsMRI = document.getElementById("card_SpecsMRI");


/* Product Section */
var MRIsection = document.getElementById("controlsMRI");
var supraSection = document.getElementById("controlsProduct");
var defSection = document.getElementById("controlsDefense");


var dotOneMRI = document.getElementById("dotDescriptionOneMRI");
var dotTwoMRI = document.getElementById("dotDescriptionTwoMRI");
var dotThreeMRI = document.getElementById("dotDescriptionFourMRI");
var dotFourMRI = document.getElementById("dotDescriptionThreeMRI")
var turnIconMRI = document.getElementById("turnIconMRI");


var btnOneDef = document.getElementById("mOneDef");
var btnTwoDef = document.getElementById("mTwoDef");
var btnThreeDef = document.getElementById("mFourDef");
var btnFourDef = document.getElementById("mThreeDef");

var dotOneDef = document.getElementById("dotDescriptionOneDef");
var dotTwoDef = document.getElementById("dotDescriptionTwoDef");
var dotThreeDef = document.getElementById("dotDescriptionFourDef");
var dotFourDef = document.getElementById("dotDescriptionThreeDef");

var turnIconDef = document.getElementById("turnIconDef");

var cardCapa = document.getElementById("card_Capa");
var card_HawkSpec = document.getElementById("card_HawkSpec");
var card_Performance = document.getElementById("card_Performance");



// myVideo.autoplay = false;
// spritespinCar();

/**
 * @function init
 * @description Initilization to redirec to specific section.
 */
function init() {
    myVideo.load();
    myVideo.autoplay = false;
    myVideo.pause();
    myVideo.currentTime = 0;


    spritespinCar();
    $(menu).fadeIn(400);
}
init();


//can play video lisntener
myVideo.addEventListener('canplay', canPlayVideo);
isMobileDevice ? myVideo.addEventListener('loadedmetadata', loadedMetaDataVideo) : false;

//can play video lisntener
myVideoDos.addEventListener('canplay', canPlayVideo);
isMobileDevice ? myVideoDos.addEventListener('loadedmetadata', loadedMetaDataVideo) : false;


//can play videoPlayerDos lisntener
videoPlayerDos.addEventListener('canplay', canPlayVideo);
isMobileDevice ? videoPlayerDos.addEventListener('loadedmetadata', loadedMetaDataVideo) : false;


/**
 * @function  onResetInitialScene
 * @description Hide all elements and re play initial video. 
 */
function onResetInitialScene() {
    myVideo.currentTime = 0;

    document.getElementById('card-section').style.display = 'none';
    $(spinOne).hide();
    $(spinTwo).hide();
    $(spinThree).hide();

    $(myVideoDos).hide();
    $(buttons).hide();
    $(turnIcon).hide();
    $(dotOne).hide();
    $(dotTwo).hide();
    $(dotThree).hide();
    $(dotFour).hide();

    $('.backOrNext').hide();
    $('.btnNext').hide();
    $('.btnBack').hide();

    myVideo.load();
    myVideo.autoplay = false;
    myVideo.pause();
    myVideo.currentTime = 0;

    myVideo.play();
}

/* ========================================================================= */
/*	Landscape Orientation device
/* ========================================================================= */

if (window.matchMedia("(orientation: portrait)").matches) {
    if (isMobileDevice) {
        //onResetInitialScene()
        document.getElementById('warning-message').style.display = 'block';
        document.getElementById('wrapper').style.display = 'none';

    }
} else {

    document.getElementById('warning-message').style.display = 'none';
    document.getElementById('wrapper').style.display = 'block';
}

window.onresize = function (event) {
    if (window.innerHeight > window.innerWidth) {
        if (isMobileDevice) {
            //onResetInitialScene()
            document.getElementById('warning-message').style.display = 'block';
            document.getElementById('wrapper').style.display = 'none';
        }

    } else {
        document.getElementById('warning-message').style.display = 'none';
        document.getElementById('wrapper').style.display = 'block';
    }
}



/* ========================================================================= */
/*	Page Preloader
/* ========================================================================= */

window.onload = function () {
    //document.getElementById('preloader').style.display = 'block';
    console.log('[Scene Loaded, saved to show it!]')
    if (Api360[currentScene].active && Api360[currentScene].loaded) {
        document.getElementById('preloader').style.display = 'none';
        myVideo.load();
        myVideo.currentTime = 0;
        myVideo.play();
    }
}


myVideo.ontimeupdate = (e) => {

    if (parseInt(myVideo.currentTime.toFixed(0)) === 2) {
        $(myVideoDos).show();
        $(buttons).fadeIn(2000);
        $(turnIcon).fadeIn(2000);
        $(dotOne).fadeIn(2000);
        $(dotTwo).fadeIn(2000);
        $(dotThree).fadeIn(2000);
        $(dotFour).fadeIn(2000);


        let lazyVideo = setTimeout(function () {
            $(spinOne).show();
            $(myVideoDos).hide();
            clearTimeout(lazyVideo);
        }, 2000);

        // myVideoDos.ontimeupdate = () => setCardContent(scene['Automotive']);
        setCardContent(scene['Automotive'])
    }
};


function playVideoDos(section) {
    reseDefaultApi360Values();

    currentScene = section;
    let sources = myVideoDos.getElementsByTagName('source');
    sources[0].src = scene[section].webm;
    sources[1].src = scene[section].mov;
    myVideoDos.load();
    myVideoDos.pause();
    myVideoDos.currentTime = 0;
}

var buttonCar = document.getElementById("buttonCar")
var buttonHealth = document.getElementById("buttonHealth")
var buttonDef = document.getElementById("buttonDef")


buttonCar.addEventListener('click', function (event) {
    //reset default values :
    reseDefaultApi360Values();
    spritespinCar();

    $(myVideoDos).show();
    $(spinOne).fadeIn(2000);
    $(supraSection).fadeIn(2000);
    $(spinTwo).hide();
    $(spinThree).hide();
    $(MRIsection).hide();
    $(turnIcon).fadeIn(2000);
    $(defSection).hide();
    $(myVideoDos).on('ended', function () { $(this).fadeOut(500) });
});

buttonHealth.addEventListener('click', function (event) {
    //reset default values :
    reseDefaultApi360Values();
    spritespinHealth();

    $(myVideoDos).show();
    $(spinOne).hide();
    $(spinTwo).fadeIn(2000);
    $(dotOneMRI).fadeIn(2000);
    $(dotTwoMRI).fadeIn(2000);
    $(dotThreeMRI).fadeIn(2000);
    $(dotFourMRI).fadeIn(2000);
    $(MRIsection).fadeIn(2000);
    $(supraSection).hide();
    $(defSection).hide();
    $(spinThree).hide();
    $(turnIconMRI).fadeIn(2000);

    $(myVideoDos).on('ended', function () { $(this).fadeOut(500) });
});

buttonDef.addEventListener('click', function (event) {
    //reset default values :
    reseDefaultApi360Values();
    spritespinDef();

    $(myVideoDos).show();
    $(spinOne).hide();
    $(spinTwo).hide();
    $(spinThree).fadeIn(2000);
    $(turnIconDef).fadeIn(2000);
    $(dotOneDef).fadeIn(2000);
    $(dotTwoDef).fadeIn(2000);
    $(dotThreeDef).fadeIn(2000);
    $(dotFourDef).fadeIn(2000);
    $(defSection).fadeIn(2000);
    $(MRIsection).hide();
    $(supraSection).hide();
    $(myVideoDos).on('ended', function () { $(this).fadeOut(500) });
});

/***
 * @function setCardContent
 * @description Set content for specific section
 */
function setCardContent(option) {
    if (parseInt(myVideo.currentTime.toFixed(0)) === 2) {
        // set card content dynamicly
        document.getElementById('card-section').className = `VirtualProduct`;
        // document.getElementById('card').innerHTML = option.textCard;
        document.getElementById('cardTitle').innerHTML = `${option.title}`;
        document.getElementById('card').innerHTML = `${option.textCard} ${option.disclaimer ? `<br/><br/><span id="disclaimer">${option.disclaimer}</span>` : ''} `;

        //show div with fadein
        document.getElementById('card-section').style.display = 'block';
        $('#card').fadeIn(2000);

        $('.backOrNext').fadeIn(2000);
        $('.btnNext').fadeIn(1000);
        $('.btnBack').fadeIn(1000);
    }
}

/**
 * @function canPlayVideo
 * @description can play listener where it will dismiss loader if video is read to play.
 */
function canPlayVideo() {
    Api360[currentScene].videoLoaded = true;
    console.log('Ready video State [Desktop]: ', Api360);
    console.log('Scene [Desktop]: ', currentScene);

    if (Api360[currentScene].loaded) {
        document.getElementById('preloader').style.display = 'none';
    }
    // document.getElementById('preloader').style.display = 'none';
}

/**
 * @function loadedMetaDataVideo
 * @description laoded meata data lisneter will dismiss loader if video is ready to play,
 * call back fuction is use only for mobile platform.
 */
function loadedMetaDataVideo() {
    Api360[currentScene].videoLoaded = true;
    console.log('Ready video State [Mobile]: ', Api360);

    if (Api360[currentScene].loaded) {
        document.getElementById('preloader').style.display = 'none';
    }
    //document.getElementById('preloader').style.display = 'none';
}

/**
 * @function onLoad360Assets
 * @param {@} asset 
 * @description Call back Loaded function to determ when ui to be shown
 * if 360 is selected or launch it for the first time.
 */
function onLoad360Assets(asset) {

    if (!Api360[asset].active) {
        Api360[asset].active = true;
        Api360[asset].loaded = true;
    }

    if (Api360[currentScene].active && Api360[currentScene].loaded && Api360[currentScene].videoLoaded) {
        document.getElementById('preloader').style.display = 'none';
    }
    console.log(`[Api360 Loaded Assets: ${currentScene}]:`, Api360[currentScene])

}

/**
 * @function reseDefaultApi360Values
 * @description Set default values for Api360 state.
 */
function reseDefaultApi360Values() {
    //re-Load sprite from beginng frame
    $('.spritespinCar').spritespin('destroy');
    $('.spritespinHealth').spritespin('destroy');
    $('.spritespinDef').spritespin('destroy');

    Object.keys(Api360).forEach(function (key) {
        Api360[key].active = false;
        Api360[key].loaded = false;
        Api360[key].videoLoaded = false;
    })
}

/**
 * @function onDrag360
 * @param {*} icon360 
 * @description Hide 360 icon if user start dragin object.
 */
function onDrag360(icon360) {
    document.getElementById(`${icon360}`).style.display = 'none';
}

/* ========================================================================= */
/*	Sprite Spin
/* ========================================================================= */

function spritespinCar() {
    console.log(`[Car]: 360 Called`);
    document.getElementById('preloader').style.display = 'block';

    //re-Load sprite from beginng frame
    $('.spritespinCar').spritespin('destroy');
    $('.spritespinHealth').spritespin('destroy');
    $('.spritespinDef').spritespin('destroy');


    $('.spritespinCar').spritespin({
        source: SpriteSpin.sourceArray(`${scene['Automotive'].assetsPath360}`, { frame: [1, 59], digits: 1 }),
        width: !isMobileDevice ? 1920 : 960,
        height: !isMobileDevice ? 1080 : 540,
        sense: -1,
        animate: false,
        reponsive: true,
        detectSubsampling: false,
        plugins: [
            '360',
            'drag'
        ],
        //frame : 10,
        onLoad: () => onLoad360Assets('Automotive'),
        onFrameChanged: (e) => onDrag360('turnIcon')
    })

}
function spritespinHealth() {
    console.log(`[Health]: 360 Called`);
    document.getElementById('preloader').style.display = 'block';

    //re-Load sprite from beginng frame
    $('.spritespinCar').spritespin('destroy');
    $('.spritespinHealth').spritespin('destroy');
    $('.spritespinDef').spritespin('destroy');

    $('.spritespinHealth').spritespin({
        source: SpriteSpin.sourceArray(`${scene['Healthcare'].assetsPath360}`, { frame: [1, 59], digits: 1 }),
        width: !isMobileDevice ? 1920 : 960,
        height: !isMobileDevice ? 1080 : 540,
        sense: -1,
        animate: false,
        reponsive: true,
        detectSubsampling: false,
        plugins: [
            '360',
            'drag'
        ],
        onLoad: () => onLoad360Assets('Healthcare'),
        onFrameChanged: () => onDrag360('turnIconMRI')
    })
}
function spritespinDef() {
    console.log(`[Defense]: 360 Called`);
    document.getElementById('preloader').style.display = 'block';

    //re-Load sprite from beginng frame
    $('.spritespinCar').spritespin('destroy');
    $('.spritespinHealth').spritespin('destroy');
    $('.spritespinDef').spritespin('destroy');

    $('.spritespinDef').spritespin({
        source: SpriteSpin.sourceArray(`${scene['Defense'].assetsPath360}`, { frame: [1, 59], digits: 1 }),
        width: !isMobileDevice ? 1920 : 960,
        height: !isMobileDevice ? 1080 : 540,
        sense: -1,
        animate: false,
        reponsive: true,
        detectSubsampling: false,
        plugins: [
            '360',
            'drag'
        ],
        onLoad: () => onLoad360Assets('Defense'),
        onFrameChanged: () => onDrag360('turnIconDef')
    })
}

/* ========================================================================= */
/*	Modal 
/* ========================================================================= */

var modalMRI = document.getElementById("ModalGalleryTwo");
var modalDef = document.getElementById("ModalGalleryThree");


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalFour) {
        modalFour.style.display = "none";
    }

}

btnOne.onclick = function () {
    priceCard.style.display = "block";
    cardDesc.style.display = "none";
    cardSpecs.style.display = "none";
};

btnTwo.onclick = function () {
    $(cardSpecs).show();
    cardDesc.style.display = "none";
    $(priceCard).hide();
    document.getElementById("card_Info").style.display = "none";
};

btnOneMRI.onclick = function () {
    cardInfo.style.display = "block";
    cardMRI.style.display = "none";
    cardDesc.style.display = "none";
    cardSpecsMRI.style.display = "none";

};


btnTwoMRI.onclick = function () {
    cardInfo.style.display = "none";
    cardMRI.style.display = "block";
    cardDesc.style.display = "none";
    cardSpecsMRI.style.display = "none";
};

btnFourMRI.onclick = function () {
    cardInfo.style.display = "none";
    cardMRI.style.display = "none";
    cardDesc.style.display = "none";
    cardSpecsMRI.style.display = "block";
};


btnOneDef.onclick = function () {
    cardCapa.style.display = "block";
    card_HawkSpec.style.display = "none";
    card_Performance.style.display = "none";
    cardDesc.style.display = "none";

};


btnTwoDef.onclick = function () {
    cardCapa.style.display = "none";
    card_HawkSpec.style.display = "block";
    card_Performance.style.display = "none";
    cardDesc.style.display = "none";
};


btnFourDef.onclick = function () {
    cardCapa.style.display = "none";
    card_HawkSpec.style.display = "none";
    cardDesc.style.display = "none";
    card_Performance.style.display = "block";
};







function closeCards() {
    document.getElementById("card_Price").style.display = "none";
    document.getElementById("card_Specs").style.display = "none";
    cardInfo.style.display = "none";
    cardMRI.style.display = "none";
    cardCapa.style.display = "none";
    card_HawkSpec.style.display = "none";
    cardSpecsMRI.style.display = "none";
    card_Performance.style.display = "none";
    cardDesc.style.display = "block";
}


// When the user clicks the button, open the modal 
btnThree.onclick = function () {
    modalFour.style.display = "block";
}

btnThreeMRI.onclick = function () {
    modalMRI.style.display = "block";

}

btnThreeDef.onclick = function () {
    modalDef.style.display = "block";

}

// Close the Modal
function closeModal() {
    document.getElementById("ModalGallery").style.display = "none";
    document.getElementById("ModalGalleryTwo").style.display = "none";
    document.getElementById("ModalGalleryThree").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var slides2 = document.getElementsByClassName("mySlidesMRI");
    var slides3 = document.getElementsByClassName("mySlidesDef");
    var dots = document.getElementsByClassName("demo");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";

    if (n > slides2.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides2.length }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides2[slideIndex - 1].style.display = "block";

    if (n > slides3.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides3.length }
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides3[slideIndex - 1].style.display = "block";

}

/* ========================================================================= */
/*	News Listener
/* ========================================================================= */

function showNews() {
    $('#buttons').fadeToggle();
    $('.backOrNext').fadeToggle()

    $('#copyImmersicom').fadeToggle();
    $('#news').fadeToggle();
}


/* ========================================================================= */
/*	News Modal 
/* ========================================================================= */

// Open the Modal
var newsThumbnails = document.getElementById("newsThumb");
var modalNews = document.getElementById("myModalNews");
function openModalNews() {
    modalNews.style.display = "block";
    newsThumbnails.style.display = "none";
}

// Close the Modal
function closeModalNews() {
    document.getElementById("myModalNews").style.display = "none";
    newsThumbnails.style.display = "block";
}

var slideIndex = 1;
showSlidesNews(slideIndex);

// Next/previous controls
function plusSlidesNews(n) {
    showSlidesNews(slideIndex += n);
}

// Thumbnail image controls
function currentSlideNews(n) {
    showSlidesNews(slideIndex = n);
}

function showSlidesNews(n) {

    var i;
    var slides = document.getElementsByClassName("mySlidesNews");
    var dots = document.getElementsByClassName("news");
    var captionText = document.getElementById("captionNews");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}


/* ========================================================================= */
/*	Back Or Next Scenario Listener
/* ========================================================================= */

/**
 * @function backScenario
 * @description Move backward to previews section function.
 */
function backScenario() {
    window.location.href = '/index.html#Gamification';
}

/**
* @function nextScenario
* @description Move forward to next section function.
*/
function nextScenario() {
    window.location.href = '/index.html#Interactive';
}