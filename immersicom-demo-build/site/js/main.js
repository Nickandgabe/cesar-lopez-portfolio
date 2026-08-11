/*
* Original author:
* Latest contributor: 
* Client name: Immersicom
* Project name: website
* Project number: 01
* Main purpose: Maint listener html events controller.
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


const scene = appConfig;
var currentScene = 'Lobby';

var menu = document.getElementById("header");
var lobby = document.getElementById("lobby")

//landing looby video
var video = document.getElementById("vidLobby");
var video2 = document.getElementById("vidLoop");

//scene videos
var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");
var btnPlay = document.getElementById("btnPlay");

//single video
var singleVideo = document.getElementById('single-video');

var newsection = document.getElementById('news');
var copyRightText = document.getElementById('copyImmersicom');


document.getElementById('btnEnter').addEventListener('click', enterToTheSite);

//can play video lisntener
video.addEventListener('canplay', canPlayVideo);
isMobileDevice ? video.addEventListener('loadedmetadata', loadedMetaDataVideo) : false;


//can play video lisntener
myVideo.addEventListener('canplay', canPlayVideo);
isMobileDevice ? myVideo.addEventListener('loadedmetadata', loadedMetaDataVideo) : false;

myVideo.addEventListener('ended', hideOrShowPlayVideoButton);

/**
 * @function init
 * @description Initilization to redirec to specific section.
 */
function init() {
  //console.log('send', window.location.hash.substr(1));
  if (window.location.hash.substr(1)) {
    console.log('[SECTION]', window.location.hash.substr(1));
    $(lobby).fadeOut(50);
    $('#Wrap').fadeOut(50);
    $(menu).fadeIn(1000);
    playVideo(window.location.hash.substr(1))
  }
}
init();


/* ========================================================================= */
/*	Landscape Orientation device
/* ========================================================================= */

if (window.matchMedia("(orientation: portrait)").matches) {
  // you're in LANDSCAPE mode
  if (isMobileDevice) {
    document.getElementById('wrapper').style.display = 'none';
    document.getElementById('warning-message').style.display = 'block';
    if (document.getElementById('icon').classList.contains('fa-volume-up')) {
      document.getElementById('icon').click();
    }

  }
} else {
  document.getElementById('warning-message').style.display = 'none';
  document.getElementById('wrapper').style.display = 'block';
}

window.onresize = function (event) {
  if (window.innerHeight > window.innerWidth) {
    //alert("You are now in portrait");
    if (isMobileDevice) {
      document.getElementById('wrapper').style.display = 'none';
      document.getElementById('warning-message').style.display = 'block';
      if (document.getElementById('icon').classList.contains('fa-volume-up')) {
        document.getElementById('icon').click();
      }
    }

  } else {
    //alert("You are now in landscape");
    document.getElementById('warning-message').style.display = 'none';
    document.getElementById('wrapper').style.display = 'block';
  }
}



/* ========================================================================= */
/*	Page Preloader
/* ========================================================================= */

// window.onload = function () {
//   //document.getElementById('preloader').style.display = 'none';
// }

/* ========================================================================= */
/*	Mute Video
/* ========================================================================= */

$("video").prop('muted', false);

$("#icon").click(function () {
  if ($("video").prop('muted')) {
    $("video").prop('muted', false);
  } else {
    $("video").prop('muted', true);
  }
});

// document.getElementById('icon').addEventListener('click', function () {
//   var icon = document.getElementById('icon');
//   icon.classList.toggle('fa-volume-off');
//   icon.classList.toggle('fa-volume-up');
// });

/**
 * @fuction toggleSound
 * @description Set mute or unmute toggle for videos.
 */
function toggleSound() {
  if ($("video").prop('muted')) {
    $("video").prop('muted', false);
    document.getElementById('sound-icon').src = `assets/Icons/screenSections/AUDIO_ON.svg`;
  } else {
    $("video").prop('muted', true);
    document.getElementById('sound-icon').src = `assets/Icons/screenSections/AUDIO_OFF.svg`;
  }
}
/* ========================================================================= */
/*	DropDown Button Navigation Only for Mobile experience
/* ========================================================================= */


/**
 * @function dropDownMenu
 * @description onClick listnerter on charge of dismiss nav
 * on Mobile patform
 */
function dropDownMenu() {
  if (!isMobileDevice) return;
  if (document.getElementById("myDropdown").classList.contains('noActive')) {
    document.getElementById("myDropdown").classList.remove("noActive");
  }
  document.getElementById("myDropdown").classList.add("active");
}
//on screen event and dismiss drowpdonwn if its shown.
window.onclick = function (event) {

  if (!event.target.matches('.dropbtn')) {
    if (!isMobileDevice) return;

    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (event.target.id !== 'dropbtn') {
        if (openDropdown.classList.contains('active')) {
          //console.log('Dropdown open.');
          openDropdown.classList.remove('active');
          openDropdown.classList.add('noActive');
        }
      }
    }
  }
}



/* ========================================================================= */
/*	Video Listeners
/* ========================================================================= */

/**
 * @function enterToTheSite
 * @description Enter to the side event.
 */
function enterToTheSite() {
  video.load();
  video.pause();
  video.play();
  $(lobby).fadeOut(1000);
}
video.addEventListener('ended', (event) => {
  video2.play();
  $(menu).fadeIn(1000);
  $(video).fadeOut(400);

  $('.backOrNext').fadeIn(1000);
  $('.btnNext').fadeIn(1000);
  $('.btnBack').hide();

  $('#sound-section').fadeIn(2000);
  document.getElementById('sound-section').className = `Lobby`;

});


/**
 * @function playVideo
 * @param {*} section 
 * @description Dynamicly load video source.
 */
function playVideo(section) {
  document.getElementById('preloader').style.display = 'block';

  //news section hidden as default for each section
  newsection.style.display === 'block' ? newsection.style.display = 'none' : false;
  copyRightText.style.display === 'none' ? copyRightText.style.display = 'block' : false;

  //document.getElementById('play').className = `${section} btnPlay`;
  document.getElementById('contact').style.visibility = 'hidden'
  document.getElementById('play').style.display = 'none';

  //set landing video to 0 and clear card content
  $('#sound-section-Lobby').fadeOut(50);
  $('#card').fadeOut(50);
  $('.backOrNext').fadeOut(50);
  $('#sound-section').fadeOut(50);
  document.getElementById('card-section').style.display = 'none';

  video2.pause();
  video2.currentTime = 0;
  $(video2).fadeOut(50);



  //console.log('scene: ', scene[section]);
  currentScene = section;
  let sources = myVideo.getElementsByTagName('source');
  sources[0].src = scene[section].webm;
  sources[1].src = scene[section].mov;

  myVideo.load();
  myVideo.pause();
  myVideo.currentTime = 0;

  myVideo.play().then(() => {
    //console.log('Autoplay started');
  }).catch((e) => {
    // console.log('Autoplay was prevented');
    myVideo.pause();
    myVideo.currentTime = 0;
    myVideo.muted = true;
    myVideo.play();

    // set sound off for browser interaction violation.
    document.getElementById('icon').classList.toggle('fa-volume-up');
    document.getElementById('icon').classList.toggle('fa-volume-off');

    //trigger video icon button
    $("video").prop('muted', true);

  })

  $(myVideo).fadeIn(500);
  myVideo.ontimeupdate = () => setCardContent(scene[section]);
}


/***
 * @function setCardContent
 * @description Set content for specific section
 */
function setCardContent(option) {

  if (parseInt(myVideo.currentTime.toFixed(0)) === option.mediaIntroTime) {
    // set card content dynamicly
    document.getElementById('card-section').className = `${currentScene}`;
    document.getElementById('cardTitle').innerHTML = `${option.title}`;
    document.getElementById('card').innerHTML = `${option.textCard} ${option.disclaimer ? `<br/><span id="disclaimer">${option.disclaimer}</span>` : ''} `;

    //show div with fadein
    document.getElementById('card-section').style.display = 'block';
    $('#card').fadeIn(2000);

    //show sound or fullscreen videos
    document.getElementById('sound-section').className = `${currentScene}`;
    currentScene !== 'VirtualExhibits' ? $('#sound-section').fadeIn(2000) : false;


    $('.backOrNext').fadeIn(2000);
    $('.btnNext').fadeIn(1000);
    $('.btnBack').fadeIn(1000);
  }

  //only show next button when is in lobbby
  if (currentScene === 'Lobby') {
    document.getElementById('sound-section').className = `${currentScene}`;
    $('.backOrNext').fadeIn(2000);
    $('.btnNext').fadeIn(1000);
    $('#sound-section').fadeIn(2000);
    $('.btnBack').hide();
  }
  if (currentScene === 'Contact' && myVideo.ended) {
    $('.backOrNext').fadeIn(2000);
    $('.btnNext').hide();
    $('.btnBack').fadeIn(1000);
  }

}

/**
 * @function playCurrentVideo
 * @description Re-play video when button is visible.
 */
function playCurrentVideo() {
  try {
    myVideo.pause();
    myVideo.currentTime = 0;

    //reset
    myVideo.currentTime = scene[currentScene].mediaIntroTime;

    myVideo.play()
      .then(() => {
        console.log('Autoplay started');
        document.getElementById('play').style.display = 'none';
      })
      .catch((e) => {
        console.log('Autoplay was prevented');
        document.getElementById('play').style.display = 'block';
      })

  } catch (e) {
    console.log('[Error]:', e);
  }

}

/**
 * @function canPlayVideo
 * @description can play listener where it will dismiss loader if video is read to play.
 */
function canPlayVideo() {
  console.log('[video ready canPlay Desktop], you can play video now');
  document.getElementById('preloader').style.display = 'none';
}

/**
 * @function loadedMetaDataVideo
 * @description laoded meata data lisneter will dismiss loader if video is ready to play,
 * call back fuction is use only for mobile platform.
 */
function loadedMetaDataVideo() {
  console.log('[video ready canPlay Mobile], you can play video now');
  document.getElementById('preloader').style.display = 'none';
}

/**
 * @function hideOrShowPlayVideoButton
 * @description Display or hide play button after endeds for the first time.
 */
function hideOrShowPlayVideoButton() {
  console.log('current location:', currentScene)
  if (currentScene === 'VirtualProduct' || currentScene === 'VirtualExhibits') return;
  if (currentScene === 'Lobby') { myVideo.autoplay = true; myVideo.load(); return };
  if (currentScene === 'Contact') {
    document.getElementById('contact').style.visibility = 'visible';
    $('#myModal').modal('show');
    return;
  }

  // console.log('Video stopped either because 1) is time to show video #2', event.target.id);
  document.getElementById('play').className = `${currentScene} btnPlay`;
  document.getElementById('play').style.display = 'block';

}


/* ========================================================================= */
/*	News Listener
/* ========================================================================= */

function showNews() {
  $('#copyImmersicom').fadeToggle();
  $('#news').fadeToggle()
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
  // dots[slideIndex-1].className += " active";
  // captionText.innerHTML = dots[slideIndex-1].alt;
}


/* ========================================================================= */
/*	FullSingle Video  Modal 
/* ========================================================================= */

var modalSingleVideo = document.getElementById("myModalVideo");

function openFullSingleVideo() {
  console.log('current : ', currentScene);
  //synchronize time between running main video with single video
  let alineVideoTime = (myVideo.currentTime - scene[currentScene].mediaIntroTime);

  //stop main video to save memory leack
  myVideo.pause();
  video2.pause();

  //toggleSound();
  modalSingleVideo.style.display = "block";
  let _src = scene[currentScene].single;
  let source = singleVideo.getElementsByTagName('source');
  source[0].src = scene[currentScene].single.webm;
  source[1].src = scene[currentScene].single.mov;

  singleVideo.load();
  singleVideo.pause();
  singleVideo.currentTime = alineVideoTime;
  // singleVideo.muted = false;
  singleVideo.play();

}
function closeFullSingleVideo() {
  //synchronize time between running main video with single video
  let alineMainVideoTime = (myVideo.currentTime + scene[currentScene].mediaIntroTime) + singleVideo.currentTime;

  // toggleSound();

  document.getElementById("myModalVideo").style.display = "none";

  //replay main video to save memory leack on current time.
  myVideo.currentScene = alineMainVideoTime;
  // myVideo.play();

  //Note: video2 == vidLoop
  if (video2.style.display !== 'none') {
    video2.play();
  } else {
    myVideo.play();
  }


  singleVideo.load();
  singleVideo.pause();
  singleVideo.currentTime = 0;

}

/* ========================================================================= */
/*	Back Or Next Scenario Listener
/* ========================================================================= */

/**
 * @function backScenario
 * @description Move backward to previews section function.
 */
function backScenario() {
  let goTo = scene['scenarios'].indexOf(currentScene) - 1;
  console.log('[Previews scenario to Play: ]', scene['scenarios'][goTo]);

  if (scene['scenarios'][goTo] === 'VirtualProduct') {
    window.location.href = '/product.html';
    return
  }

  window.history.pushState({}, null, `#${scene['scenarios'][goTo]}`);
  playVideo(scene['scenarios'][goTo]);

}

/**
 * @function nextScenario
 * @description Move forward to next section function.
 */
function nextScenario() {
  let goTo = scene['scenarios'].indexOf(currentScene) + 1;
  goTo = scene['scenarios'][goTo] === 'Lobby' ? scene['scenarios'].indexOf(currentScene) + 2 : goTo;

  console.log('[Next scenario to Play: ]', scene['scenarios'][goTo]);
  if (scene['scenarios'][goTo] === 'VirtualProduct') {
    window.location.href = '/product.html';
    return
  }

  window.history.pushState({}, null, `#${scene['scenarios'][goTo]}`);

  playVideo(scene['scenarios'][goTo]);
}
