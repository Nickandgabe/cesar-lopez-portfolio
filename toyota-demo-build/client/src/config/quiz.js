const cdnUrl = 'https://d28z8i57b3adv3.cloudfront.net';
const extension = window.webp ? 'webp' : 'png';

const quiz = {
  Start: {
    title: 'Which Toyota Would You Drive?',
    image: {
      url: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/T360 Theater- Game Show Start2.${extension}`,
    },
  },
  Quiz: {
    0: {
      index: 1,
      title: 'What is your favorite season?',
      categorie: false,
      thumbnail: [
        {
          image: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/timothy-eberly-yuiJO6bvHi4-unsplash copy.${extension}`,
          option: {
            letter: 'A',
            text: 'Fall',
          },
        },
        {
          image: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/alexandru-tudorache-JdjdIjzJl94-unsplash copy.${extension}`,
          option: {
            letter: 'B',
            text: 'Spring',
          },
        },
        {
          image: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/catherine-zaidova-0IZ-7XSceIs-unsplash copy.${extension}`,
          option: {
            letter: 'C',
            text: 'Winter-snow baby!',
          },
        },
      ],
      className: 'SmallButton',
    },
    1: {
      index: 2,
      // title:"Which of these animals would describe <br/> your kindred spirit?",
      title: 'Which of these animals is your kindred spirit?',
      categorie: false,
      thumbnail: [
        {
          image: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/cat.${extension}`,
          option: {
            letter: 'A',
            text: 'Cat',
          },
        },
        {
          image: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/bird.${extension}`,
          option: {
            letter: 'B',
            text: 'Bird',
          },
        },
        {
          image: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/dog.${extension}`,
          option: {
            letter: 'C',
            text: 'Dog',
          },
        },
      ],
      className: 'SmallButton',
    },
    2: {
      index: 3,
      title: 'Which is your favorite midnight snack?',
      categorie: false,
      thumbnail: [
        {
          image: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/cake.${extension}`,
          option: {
            letter: 'A',
            text: 'Cake',
          },
        },
        {
          image: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/sushi.${extension}`,
          option: {
            letter: 'B',
            text: 'Sushi',
          },
        },
        {
          image: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/chips.${extension}`,
          option: {
            letter: 'C',
            text: 'Chips',
          },
        },
      ],
      className: 'SmallButton',
    },
    3: {
      index: 4,
      title: 'What is your ideal accomodation?',
      categorie: true,
      thumbnail: [
        {
          image: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/glamping tent.${extension}`,
          option: {
            letter: 'A',
            text: 'Glamping Tent',
          },
        },
        {
          image: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/penthouse.${extension}`,
          option: {
            letter: 'B',
            text: 'Downtown Penthouse Suite',
          },
        },
        {
          image: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/beachfront.${extension}`,
          option: {
            letter: 'C',
            text: 'Beach Front Paradise',
          },
        },
      ],
      className: 'SmallButton',
    },
    4: {
      index: 5,
      title: 'What is your favorite car color?',
      categorie: false,
      thumbnail: [
        {
          image: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/283894_SUP_MY20_0114_V001.${extension}`,
          option: {
            letter: 'A',
            text: 'Renaissance Red',
          },
        },
        {
          image: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/246165_RHV_MY19_0001_V001.${extension}`,
          option: {
            letter: 'B',
            text: 'Blizzard Pearl',
          },
        },
        {
          image: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/298846_TAC_MY20_0028_V001.${extension}`,
          option: {
            letter: 'C',
            text: 'Blue Flame',
          },
        },
      ],
      className: 'SmallButton',
    },
    5: {
      index: 6,
      title: 'What best represents your typical Friday night?',
      categorie: true,
      thumbnail: [
        {
          image: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/iStock-1293456007.${extension}`,
          option: {
            letter: 'A',
            text: 'Going to the Drive-in Movie Theater',
          },
        },
        {
          image: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/smores.${extension}`,
          option: {
            letter: 'B',
            text: "Making Smores Under The Stars",
          },
        },
        {
          image: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/boardgames.${extension}`,
          option: {
            letter: 'C',
            text: 'Playing Board Game with Friends',
          },
        },
      ],
      className: 'LongButton',
    },
  },
  Categories: [
    {
      selection: [
        'Glamping Tent',
        `Making S'more Under the Starts`,
        'Beach Front Paradise',
        `Making S'more Under the Starts`,
      ],
      vehicle: 'Tacoma',
      synonym: ['Adventurous', 'Bold', 'Valiant', 'Audacious', 'Confident', 'Fearless'],
      categorie: 'adventurous',
    },
    {
      selection: [
        'Beach Front Paradise',
        'Going to the Drive-in Movie Theater',
        'Downtown Penthouse Suite',
        'Going to the Drive-in Movie Theater',
      ],
      vehicle: 'Supra',
      synonym: ['Dashing', 'Daring', 'Electric', 'Exhilarating', 'Exciting', 'Thrilling'],
      categorie: 'performance',
    },
    {
      selection: [
        'Downtown Penthouse Suite',
        'Playing Board Game with Friends',
        'Beach Front Paradise',
        'Playing Board Game with Friends',
      ],
      vehicle: 'RAV4',
      synonym: ['Animated', 'Lively', 'Entertaining', 'Spirited', 'Amusing', 'Charming'],
      categorie: 'nightLife',
    },
  ],
  Result: {
    Adventurous: {
      name: 'Tacoma TRD Pro',
      descripton:
        'A Tacoma would be your ideal vehicle for seeking out new adventures in any terrain.',
      img: `${cdnUrl}/assets/HeroCars/T360/Assets/T360-Results/${extension}/282826_MY20_Tacoma_US_7597_0040_001.${extension}`,
      url: '/tacoma/walk-around',
      download: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Results-360/png/adventurous-tacomaTRDPro.png`,
    },
    Bold: {
      name: 'Tacoma TRD Sport',
      descripton:
        'A Tacoma would be your ideal vehicle for seeking out new adventures in any terrain.',
      img: `${cdnUrl}/assets/HeroCars/T360/Assets/T360-Results/${extension}/282911_MY20_Tacoma_US_7542_04V6_001.${extension}`,
      url: '/tacoma/walk-around',
      download: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Results-360/png/bold-tacomaTRDSport.png`,
    },
    Valiant: {
      name: 'Tacoma TRD Pro',
      descripton:
        'A Tacoma would be your ideal vehicle for seeking out new adventures in any terrain.',
      img: `${cdnUrl}/assets/HeroCars/T360/Assets/T360-Results/${extension}/309684_MY21_Tacoma_US_7597_06X3_001.${extension}`,
      url: '/tacoma/walk-around',
      download:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Results-360/png/valiant-tacomaTRDSport.png`,
    },
    Audacious: {
      name: 'Tacoma TRD Sport',
      descripton:
        'A Tacoma would be your ideal vehicle for seeking out new adventures in any terrain.',
      img: `${cdnUrl}/assets/HeroCars/T360/Assets/T360-Results/${extension}/309688_MY21_Tacoma_US_7542_06V7_001.${extension}`,
      url: '/tacoma/walk-around',
      download: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Results-360/png/audacius-tacomaTRDSport.png`,
    },
    Confident: {
      name: 'Tacoma TRD Pro',
      descripton:
        'A Tacoma would be your ideal vehicle for seeking out new adventures in any terrain.',
      img: `${cdnUrl}/assets/HeroCars/T360/Assets/T360-Results/${extension}/282822_MY20_Tacoma_US_7597_0218_001.${extension}`,
      url: '/tacoma/walk-around',
      download: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Results-360/png/confident-tacomaTRDPro.png`,
    },
    Fearless: {
      name: 'Tacoma TRD Sport',
      descripton:
        'A Tacoma would be your ideal vehicle for seeking out new adventures in any terrain.',
      img: `${cdnUrl}/assets/HeroCars/T360/Assets/T360-Results/${extension}/309692_MY21_Tacoma_US_7542_0089_001.${extension}`,
      url: '/tacoma/walk-around',
      download: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Results-360/png/fearless-tacomaTRDSport.png`,
    },
    Dashing: {
      name: 'Supra A91',
      descripton:
        'A Supra would be your ideal vehicle for a premium driving experience no matter the day of the week.',
      img: `${cdnUrl}/assets/HeroCars/T360/Assets/T360-Results/${extension}/306472_MY21_Supra_US_3.0_Special_Edition_Refraction_Blue_DS_Front_7_8.${extension}`,
      url: '/supra',
      download: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Results-360/png/dashing-supraA91.png`,
    },
    Daring: {
      name: 'Supra 3.0 Premium',
      descripton:
        'A Supra would be your ideal vehicle for a premium driving experience no matter the day of the week.',
      img: `${cdnUrl}/assets/HeroCars/T360/Assets/T360-Results/${extension}/306456_MY21_Supra_US_3.0_Premium_Renaissance_Red_2.0_DS_Front_7_8.${extension}`,
      url: '/supra',
      download: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Results-360/png/daring-supra3Premium.png`,
    },
    Electric: {
      name: 'Supra A91',
      descripton:
        'A Supra would be your ideal vehicle for a premium driving experience no matter the day of the week.',
      img: `${cdnUrl}/assets/HeroCars/T360/Assets/T360-Results/${extension}/306468_MY21_Supra_US_3.0_Special_Edition_Nocturnal_DS_Front_7_8.${extension}`,
      url: '/supra',
      download: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Results-360/png/electric-supraA91.png`,
    },
    Exhilarating: {
      name: 'Supra 3.0 Premium',
      descripton:
        'A Supra would be your ideal vehicle for a premium driving experience no matter the day of the week.',
      img: `${cdnUrl}/assets/HeroCars/T360/Assets/T360-Results/${extension}/306444_MY21_Supra_US_3.0_Premium_Nitro_Yellow_DS_Front_7_8.${extension}`,
      url: '/supra',
      download: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Results-360/png/exhilarating-supra3Primium.png`,
    },
    Exciting: {
      name: 'Supra A91',
      descripton:
        'A Supra would be your ideal vehicle for a premium driving experience no matter the day of the week.',
      img: `${cdnUrl}/assets/HeroCars/T360/Assets/T360-Results/${extension}/306472_MY21_Supra_US_3.0_Special_Edition_Refraction_Blue_DS_Front_7_8.${extension}`,
      url: '/supra',
      download: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Results-360/png/exciting-supraA91.png`,
    },
    Thrilling: {
      name: 'Supra 3.0 Premium',
      descripton:
        'A Supra would be your ideal vehicle for a premium driving experience no matter the day of the week.',
      img: `${cdnUrl}/assets/HeroCars/T360/Assets/T360-Results/${extension}/306460_MY21_Supra_US_3.0_Premium_Tungsten_DS_Front_7_8.${extension}`,
      url: '/supra',
      download: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Results-360/png/daring-supra3Premium.png`,
    },
    Animated: {
      name: 'RAV4 Hybrid XSE',
      descripton:
        'A RAV4 would be your ideal vehicle for comfort and style while making lasting memories with friends.',
      img: `${cdnUrl}/assets/HeroCars/T360/Assets/T360-Results/${extension}/309312_2020_Rav4_US_XSE-AWD-Hybrid_08X8_001.${extension}`,
      url: '/rav4hybrid',
      download: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Results-360/png/animated-rav4hybridXSE.png`,
    },
    Lively: {
      name: 'RAV4 XLE',
      descripton:
        'A RAV4 would be your ideal vehicle for comfort and style while making lasting memories with friends.',
      img: `${cdnUrl}/assets/HeroCars/T360/Assets/T360-Results/${extension}/285125_2020_Rav4_US_XLE-Premium-FWD_03T3_001.${extension}`,
      url: '/rav4/walk-around',
      download:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Results-360/png/lively-rav4XLE.png`,
    },
    Entertaining: {
      name: 'RAV4 Hybrid XSE',
      descripton:
        'A RAV4 would be your ideal vehicle for comfort and style while making lasting memories with friends.',
      img: `${cdnUrl}/assets/HeroCars/T360/Assets/T360-Results/${extension}/309304_2020_Rav4_US_XSE-AWD-Hybrid_01D6_001.${extension}`,
      url: '/rav4/walk-around',
      download:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Results-360/png/entertaining-rav4hybridXSE.png`,
    },
    Spirited: {
      name: 'RAV4 XLE',
      descripton:
        'A RAV4 would be your ideal vehicle for comfort and style while making lasting memories with friends.',
      img: `${cdnUrl}/assets/HeroCars/T360/Assets/T360-Results/${extension}/285117_2020_Rav4_US_XLE-Premium-FWD_08W9_001.${extension}`,
      url: '/rav4/walk-around',
      download: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Results-360/png/spirited-rav4XLE.png`,
    },
    Amusing: {
      name: 'RAV4 Hybrid XSE',
      descripton:
        'A RAV4 would be your ideal vehicle for comfort and style while making lasting memories with friends.',
      img: `${cdnUrl}/assets/HeroCars/T360/Assets/T360-Results/${extension}/309316_2020_Rav4_US_XSE-AWD-Hybrid_0070_001.${extension}`,
      url: '/rav4hybrid',
      download: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Results-360/png/amusing-rav4hybridXSE.png`,
    },
    Charming: {
      name: 'RAV4 XLE',
      descripton:
        'A RAV4 would be your ideal vehicle for comfort and style while making lasting memories with friends.',
      img: `${cdnUrl}/assets/HeroCars/T360/Assets/T360-Results/${extension}/285105_2020_Rav4_US_XLE-Premium-FWD_0218_001.${extension}`,
      url: '/rav4/walk-around',
      download: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Results-360/png/charming-rav4XLE.png`,
    },
  },
  ResultText: {
    header: 'Thanks for Playing!',
    paragraphs: [
      {
        text:
          'Share the results of Which Toyota Would Your Drive? with friends and family on social media with the hashtag #LetsGoPlaces.',
      },
      {
        text:
          'Sign up to receive email communications about Toyota vehicles, services, special offers and more.',
      },
    ],
  },
};
export default quiz;
