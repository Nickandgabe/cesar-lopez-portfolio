const cdnUrl = 'https://d28z8i57b3adv3.cloudfront.net';
// const cdnUrl = 'https://toyota-static-assets.s3.amazonaws.com';
// const cdnUrl =
//   'Z:/Shared/Clients/Czarnowski/2021-0001_Czarnowski_Toyota_VAS/01_Project_Content/04_Programming/AssetsForProgramming';
const extension = window.webp ? 'webp' : 'png';

const cars = {
  Toyota_Racing: {
    share: `${cdnUrl}/assets/HeroCars/Racing/Assets/Social_Img/${extension}/LS_Racing_Social_240.${extension}`,
    assetsPath360: null,
    logo: {
      white: `${cdnUrl}/assets/HeroCars/Racing/Assets/TOY_VIRTUAL_Racing_white.svg`,
      black: null,
    },
    background: {
      size: {
        350: '1655px',
        550: '2601px',
        720: '3404px',
        940: '4444px',
        1080: '5106px',
      },
      set1: {
        layer1: {
          1080: `${cdnUrl}/assets/HeroCars/Racing/backgroundImages/1080/${extension}/1/Layer_1.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Racing/backgroundImages/940/${extension}/1/Layer_1.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Racing/backgroundImages/720/${extension}/1/Layer_1.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Racing/backgroundImages/550/${extension}/1/Layer_1.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Racing/backgroundImages/350/${extension}/1/Layer_1.${extension}`,
        },
        layer2: {
          1080: `${cdnUrl}/assets/HeroCars/Racing/backgroundImages/1080/${extension}/1/Layer_2.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Racing/backgroundImages/940/${extension}/1/Layer_2.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Racing/backgroundImages/720/${extension}/1/Layer_2.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Racing/backgroundImages/550/${extension}/1/Layer_2.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Racing/backgroundImages/350/${extension}/1/Layer_2.${extension}`,
        },
      },
      set2: {
        layer1: {
          1080: `${cdnUrl}/assets/HeroCars/Racing/backgroundImages/1080/${extension}/2/Layer_1.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Racing/backgroundImages/940/${extension}/2/Layer_1.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Racing/backgroundImages/720/${extension}/2/Layer_1.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Racing/backgroundImages/550/${extension}/2/Layer_1.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Racing/backgroundImages/350/${extension}/2/Layer_1.${extension}`,
        },
        layer2: {
          1080: `${cdnUrl}/assets/HeroCars/Racing/backgroundImages/1080/${extension}/2/Layer_2.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Racing/backgroundImages/940/${extension}/2/Layer_2.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Racing/backgroundImages/720/${extension}/2/Layer_2.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Racing/backgroundImages/550/${extension}/2/Layer_2.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Racing/backgroundImages/350/${extension}/2/Layer_2.${extension}`,
        },
        layer3: {
          1080: null,
          940: null,
        },
      },
    },
    mainCarSceneLocation: {
      l: '11%',
      r: 0,
      t: '12%',
      b: 0,
    },
    groundImage: {
      1080: null,
      940: null,
      720: null,
      550: null,
      350: null,
    },
  },
  Supra: {
    share: `${cdnUrl}/assets/HeroCars/Supra/Assets/Social_Img/${extension}/LS_Supra_Social_240.${extension}`,
    turnable: false,
    specVideo: {
      mp4: `${cdnUrl}/assets/Videos/HeroVehicle/Supra/GR_Supra_ProdSpec.mp4`,
      webm: `${cdnUrl}/assets/Videos/HeroVehicle/Supra/GR_Supra_ProdSpec.webm`,
    },
    assetsPath360: null,
    logo: {
      white: `${cdnUrl}/assets/HeroCars/Supra/Assets/TOY_VIRTUAL_Supra_White.svg`,
      black: null,
    },
    videoBackground: {
      day: {
        mp4: `${cdnUrl}/assets/HeroCars/Supra/Assets/Videos/LGP/HEVC/Supra_LGP_To_Landing.mov`,
        webm: `${cdnUrl}/assets/HeroCars/Supra/Assets/Videos/LGP/webm/Supra_LGP_To_Landing.webm`,
      },
      init: {
        mp4: `${cdnUrl}/assets/HeroCars/Supra/Assets/Videos/LGP/HEVC/Supra_Landing_To_LGP.mov`,
        webm: `${cdnUrl}/assets/HeroCars/Supra/Assets/Videos/LGP/webm/Supra_Landing_to_LGP_1.webm`,
      },
      loop: {
        mp4: null,
        webm: null,
      },
      night: {
        mp4: `${cdnUrl}/assets/HeroCars/Supra/Assets/Videos/LGP/HEVC/Supra_Landing_To_LGP.mov`,
        webm: `${cdnUrl}/assets/HeroCars/Supra/Assets/Videos/LGP/webm/Supra_Landing_To_LGP.webm`,
      },
    },
    background: {
      size: {
        1080: '5111px',
        940: '4448px',
        720: '3407px',
        550: '2602px',
        350: '1656px',
      },
      set1: {
        layer1: {
          1080: `${cdnUrl}/assets/HeroCars/Supra/backgroundImages/1080/${extension}/1/Layer_1.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Supra/backgroundImages/940/${extension}/1/Layer_1.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Supra/backgroundImages/720/${extension}/1/Layer_1.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Supra/backgroundImages/550/${extension}/1/Layer_1.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Supra/backgroundImages/350/${extension}/1/Layer_1.${extension}`,
        },
        layer2: {
          1080: `${cdnUrl}/assets/HeroCars/Supra/backgroundImages/1080/${extension}/1/Layer_2.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Supra/backgroundImages/940/${extension}/1/Layer_2.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Supra/backgroundImages/720/${extension}/1/Layer_2.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Supra/backgroundImages/550/${extension}/1/Layer_2.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Supra/backgroundImages/350/${extension}/1/Layer_2.${extension}`,
          // 1080: 'https://toyota-static-assets.s3.amazonaws.com/assets/Reference/Supra+ReferenceDay-1080.webp',
          // 940: 'https://toyota-static-assets.s3.amazonaws.com/assets/Reference/Supra+ReferenceDay-940.webp',
          // 720: 'https://toyota-static-assets.s3.amazonaws.com/assets/Reference/Supra+ReferenceDay-720.webp',
        },
      },
      set2: {
        layer1: {
          1080: `${cdnUrl}/assets/HeroCars/Supra/backgroundImages/1080/${extension}/2/Layer_1.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Supra/backgroundImages/940/${extension}/2/Layer_1.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Supra/backgroundImages/720/${extension}/2/Layer_1.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Supra/backgroundImages/550/${extension}/2/Layer_1.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Supra/backgroundImages/350/${extension}/2/Layer_1.${extension}`,
        },
        layer2: {
          1080: `${cdnUrl}/assets/HeroCars/Supra/backgroundImages/1080/${extension}/2/Layer_2.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Supra/backgroundImages/940/${extension}/2/Layer_2.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Supra/backgroundImages/720/${extension}/2/Layer_2.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Supra/backgroundImages/550/${extension}/2/Layer_2.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Supra/backgroundImages/350/${extension}/2/Layer_2.${extension}`,
        },
      },
    },
    mainCarSceneLocation: {
      l: '12%',
      r: 0,
      t: '25%',
      b: 0,
    },
    groundImage: {
      1080: null,
      940: null,
      720: null,
      550: null,
      350: null,
    },
  },
  Highlander: {
    share: `${cdnUrl}/assets/HeroCars/Highlander/Assets/Social_Img/${extension}/LS_Highlander_Social_240.${extension}`,
    assetsPath360: `${cdnUrl}/assets/HeroCars/Highlander/360/1080/${extension}/LS_HighlanderTurntable_{frame}.${extension}`,
    specVideo: {
      mp4: `${cdnUrl}/assets/Videos/HeroVehicle/Highlander/Highlander_ProdSpec.mp4`,
      webm: `${cdnUrl}/assets/Videos/HeroVehicle/Highlander/Highlander_ProdSpec.webm`,
    },
    logo: {
      white: `${cdnUrl}/assets/HeroCars/Highlander/Assets/TOY_VIRTUAL_Highlander_white.svg`,
      black: `${cdnUrl}/assets/HeroCars/Highlander/Assets/TOY_VIRTUAL_Highlander_white.svg`, // needs black version?
    },
    background: {
      size: {
        1080: '5052px',
        940: '4397px',
        720: '3368px',
        550: '2573px',
        350: '1637px',
      },
      set1: {
        layer1: {
          1080: `${cdnUrl}/assets/HeroCars/Highlander/backgroundImages/1080/${extension}/1/Layer_1.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Highlander/backgroundImages/940/${extension}/1/Layer_1.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Highlander/backgroundImages/720/${extension}/1/Layer_1.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Highlander/backgroundImages/550/${extension}/1/Layer_1.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Highlander/backgroundImages/350/${extension}/1/Layer_1.${extension}`,
        },
        layer2: {
          // 1080: 'https://toyota-static-assets.s3.amazonaws.com/assets/Reference/LS_Highlander-1080.jpg',
          // 940: 'https://toyota-static-assets.s3.amazonaws.com/assets/Reference/LS_Highlander-940.jpg',
          // 720: 'https://toyota-static-assets.s3.amazonaws.com/assets/Reference/LS_Highlander-720.jpg',
          1080: `${cdnUrl}/assets/HeroCars/Highlander/backgroundImages/1080/${extension}/1/Layer_2.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Highlander/backgroundImages/940/${extension}/1/Layer_2.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Highlander/backgroundImages/720/${extension}/1/Layer_2.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Highlander/backgroundImages/550/${extension}/1/Layer_2.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Highlander/backgroundImages/350/${extension}/1/Layer_2.${extension}`,
        },
      },
      set2: {
        layer1: {
          1080: `${cdnUrl}/assets/HeroCars/Highlander/backgroundImages/1080/${extension}/2/Layer_1.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Highlander/backgroundImages/940/${extension}/2/Layer_1.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Highlander/backgroundImages/720/${extension}/2/Layer_1.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Highlander/backgroundImages/550/${extension}/2/Layer_1.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Highlander/backgroundImages/350/${extension}/2/Layer_1.${extension}`,
        },
        layer2: {
          1080: `${cdnUrl}/assets/HeroCars/Highlander/backgroundImages/1080/${extension}/2/Layer_2.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Highlander/backgroundImages/940/${extension}/2/Layer_2.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Highlander/backgroundImages/720/${extension}/2/Layer_2.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Highlander/backgroundImages/550/${extension}/2/Layer_2.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Highlander/backgroundImages/350/${extension}/2/Layer_2.${extension}`,
        },
      },
    },
    mainCarSceneLocation: {
      l: '17%',
      r: 0,
      t: '39%',
      b: 0,
    },
    groundImage: {
      1080: null,
      940: null,
      720: null,
      550: null,
      350: null,
      // 1080: `${cdnUrl}/assets/HeroCars/Highlander/GroundImages/1080/${extension}/LS_Highlander_Showfloor_1080_Fade.${extension}`,
      // 940: `${cdnUrl}/assets/HeroCars/Highlander/GroundImages/940/${extension}/LS_Highlander_Showfloor_940_Fade.${extension}`,
      // 720: `${cdnUrl}/assets/HeroCars/Highlander/GroundImages/720/${extension}/LS_Highlander_Showfloor_720_Fade.${extension}`,
    },
  },
  TRD_Pro: {
    share: `${cdnUrl}/assets/HeroCars/TRD/Assets/Social_Img/${extension}/LS_TRD_Social_240.${extension}`,
    assetsPath360: null,
    logo: {
      white: `${cdnUrl}/assets/HeroCars/TRD/Assets/TOY_VIRTUAL_logo_TRD_Pro_White.svg`,
      black: `${cdnUrl}/assets/HeroCars/TRD/Assets/TOY_VIRTUAL_logo_TRD_Pro_White.svg`, // needs black version?
    },
    videoBackground: {
      day: {
        mp4: `${cdnUrl}/assets/HeroCars/TRD/Assets/Videos/LGP/HEVC/TRD_LGP_To_Landing.mov`,
        webm: `${cdnUrl}/assets/HeroCars/TRD/Assets/Videos/LGP/webm/TRD_LGP_To_Landing.webm`,
      },
      init: {
        mp4: `${cdnUrl}/assets/HeroCars/TRD/Assets/Videos/LGP/HEVC/TRD_Landing_To_LGP_1.mov`,
        webm: `${cdnUrl}/assets/HeroCars/TRD/Assets/Videos/LGP/webm/TRD_Landing_To_LGP_1.webm`,
      },
      loop: {
        mp4: null,
        webm: null,
      },
      night: {
        mp4: `${cdnUrl}/assets/HeroCars/TRD/Assets/Videos/LGP/HEVC/TRD_Landing_To_LGP.mov`,
        webm: `${cdnUrl}/assets/HeroCars/TRD/Assets/Videos/LGP/webm/TRD_Landing_To_LGP.webm`,
      },
    },
    background: {
      size: {
        350: '1654px',
        550: '2599px',
        720: '3402px',
        940: '4442px',
        1080: '5104px',
      },
      set1: {
        layer1: {
          1080: `${cdnUrl}/assets/HeroCars/TRD/backgroundImages/1080/${extension}/1/Layer_1.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/TRD/backgroundImages/940/${extension}/1/Layer_1.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/TRD/backgroundImages/720/${extension}/1/Layer_1.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/TRD/backgroundImages/550/${extension}/1/Layer_1.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/TRD/backgroundImages/350/${extension}/1/Layer_1.${extension}`,
        },
        layer2: {
          1080: `${cdnUrl}/assets/HeroCars/TRD/backgroundImages/1080/${extension}/1/Layer_2.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/TRD/backgroundImages/940/${extension}/1/Layer_2.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/TRD/backgroundImages/720/${extension}/1/Layer_2.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/TRD/backgroundImages/550/${extension}/1/Layer_2.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/TRD/backgroundImages/350/${extension}/1/Layer_2.${extension}`,
        },
      },
      set2: {
        layer1: {
          1080: `${cdnUrl}/assets/HeroCars/TRD/backgroundImages/1080/${extension}/2/Layer_1.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/TRD/backgroundImages/940/${extension}/2/Layer_1.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/TRD/backgroundImages/720/${extension}/2/Layer_1.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/TRD/backgroundImages/550/${extension}/2/Layer_1.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/TRD/backgroundImages/350/${extension}/2/Layer_1.${extension}`,
        },
        layer2: {
          1080: `${cdnUrl}/assets/HeroCars/TRD/backgroundImages/1080/${extension}/2/Layer_2.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/TRD/backgroundImages/940/${extension}/2/Layer_2.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/TRD/backgroundImages/720/${extension}/2/Layer_2.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/TRD/backgroundImages/550/${extension}/2/Layer_2.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/TRD/backgroundImages/350/${extension}/2/Layer_2.${extension}`,
        },
      },
    },
    mainCarSceneLocation: {
      l: '19%',
      r: 0,
      t: '50%',
      b: 0,
    },
    groundImage: {
      1080: null,
      940: null,
      720: null,
      550: null,
      350: null,
      // 1080: `${cdnUrl}/assets/HeroCars/TRD/GroundImages/1080/${extension}/LS_TRD_ShowFloor_1080_Fade.${extension}`,
      // 940: `${cdnUrl}/assets/HeroCars/TRD/GroundImages/940/${extension}/LS_TRD_ShowFloor_940_Fade.${extension}`,
      // 720: `${cdnUrl}/assets/HeroCars/TRD/GroundImages/720/${extension}/LS_TRD_ShowFloor_720_Fade.${extension}`,
    },
  },
  RAV4_Hybrid: {
    share: `${cdnUrl}/assets/HeroCars/Rav4/Assets/Social_Img/${extension}/LS_Rav4_Social_240.${extension}`,
    assetsPath360: `${cdnUrl}/assets/HeroCars/Rav4/360/1080/${extension}/LS_Rav4Turntable_{frame}.${extension}`,
    logo: {
      white: `${cdnUrl}/assets/HeroCars/Rav4/Assets/TOY_VIRTUAL_Rav4_Hibrid_White.svg`,
      black: `${cdnUrl}/assets/HeroCars/Rav4/Assets/TOY_VIRTUAL_Rav4_Hibrid_White.svg`, // needs black version?
    },
    specVideo: {
      mp4: `${cdnUrl}/assets/Videos/HeroVehicle/RAV4/RAV4_ProdSpec.mp4`,
      webm: `${cdnUrl}/assets/Videos/HeroVehicle/RAV4/RAV4_ProdSpec.webm`,
    },
    background: {
      size: {
        350: '1656px',
        550: '2603px',
        720: '3407px',
        940: '4448px',
        1080: '5111px',
      },
      set1: {
        layer1: {
          1080: `${cdnUrl}/assets/HeroCars/Rav4/backgroundImages/1080/${extension}/1/Layer_1.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Rav4/backgroundImages/940/${extension}/1/Layer_1.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Rav4/backgroundImages/720/${extension}/1/Layer_1.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Rav4/backgroundImages/550/${extension}/1/Layer_1.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Rav4/backgroundImages/350/${extension}/1/Layer_1.${extension}`,
        },
        layer2: {
          // 1080: 'https://toyota-static-assets.s3.amazonaws.com/assets/Reference/LS_Rav4-1080.jpg',
          // 940: 'https://toyota-static-assets.s3.amazonaws.com/assets/Reference/LS_Rav4-940.jpg',
          // 720: 'https://toyota-static-assets.s3.amazonaws.com/assets/Reference/LS_Rav4-720.jpg',
          1080: `${cdnUrl}/assets/HeroCars/Rav4/backgroundImages/1080/${extension}/1/Layer_2.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Rav4/backgroundImages/940/${extension}/1/Layer_2.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Rav4/backgroundImages/720/${extension}/1/Layer_2.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Rav4/backgroundImages/550/${extension}/1/Layer_2.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Rav4/backgroundImages/350/${extension}/1/Layer_2.${extension}`,
        },
      },
      set2: {
        layer1: {
          1080: `${cdnUrl}/assets/HeroCars/Rav4/backgroundImages/1080/${extension}/2/Layer_1.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Rav4/backgroundImages/940/${extension}/2/Layer_1.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Rav4/backgroundImages/720/${extension}/2/Layer_1.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Rav4/backgroundImages/550/${extension}/2/Layer_1.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Rav4/backgroundImages/350/${extension}/2/Layer_1.${extension}`,
        },
        layer2: {
          1080: `${cdnUrl}/assets/HeroCars/Rav4/backgroundImages/1080/${extension}/2/Layer_2.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Rav4/backgroundImages/940/${extension}/2/Layer_2.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Rav4/backgroundImages/720/${extension}/2/Layer_2.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Rav4/backgroundImages/550/${extension}/2/Layer_2.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Rav4/backgroundImages/350/${extension}/2/Layer_2.${extension}`,
        },
      },
    },
    mainCarSceneLocation: {
      l: '33%',
      r: 0,
      t: '64%',
      b: 0,
    },
    groundImage: {
      1080: null,
      940: null,
      720: null,
      550: null,
      350: null,
      // 1080: `${cdnUrl}/assets/HeroCars/Rav4/GroundImages/1080/${extension}/LS_Rav4_ShowFloor_1080_Fade.${extension}`,
      // 940: `${cdnUrl}/assets/HeroCars/Rav4/GroundImages/940/${extension}/LS_Rav4_ShowFloor_940_Fade.${extension}`,
      // 720: `${cdnUrl}/assets/HeroCars/Rav4/GroundImages/720/${extension}/LS_Rav4_ShowFloor_720_Fade.${extension}`,
    },
  },
  Sienna: {
    share: `${cdnUrl}/assets/HeroCars/Sienna/Assets/Social_Img/${extension}/LS_Sienna_Social_240.${extension}`,
    assetsPath360: `${cdnUrl}/assets/HeroCars/Sienna/360/1080/${extension}/LS_SiennaTurntable_{frame}.${extension}`,
    assetsPath3602: `${cdnUrl}/assets/HeroCars/Sienna/360_LGP/1080/${extension}/LS_SiennaTurntable_LGP_{frame}.${extension}`,
    logo: {
      white: `${cdnUrl}/assets/HeroCars/Sienna/Assets/TOY_VIRTUAL_logo_sienna_white.svg`,
      black: `${cdnUrl}/assets/HeroCars/Sienna/Assets/TOY_VIRTUAL_logo_360.svg`,
    },
    specVideo: {
      mp4: `${cdnUrl}/assets/Videos/HeroVehicle/Sienna/Sienna_ProdSpec.mp4`,
      webm: `${cdnUrl}/assets/Videos/HeroVehicle/Sienna/Sienna_ProdSpec.webm`,
    },
    videoBackground: {
      day: {
        mp4: `${cdnUrl}/assets/HeroCars/Sienna/Assets/Videos/LGP/HEVC/Sienna_LGP_To_Landing.mov`,
        webm: `${cdnUrl}/assets/HeroCars/Sienna/Assets/Videos/LGP/webm/Sienna_LGP_To_Landing.webm`,
      },
      init: {
        mp4: null,
        webm: null,
      },
      loop: {
        mp4: null,
        webm: null,
      },
      night: {
        mp4: `${cdnUrl}/assets/HeroCars/Sienna/Assets/Videos/LGP/HEVC/Sienna_Landing_To_LGP.mov`,
        webm: `${cdnUrl}/assets/HeroCars/Sienna/Assets/Videos/LGP/webm/Sienna_Landing_To_LGP.webm`,
      },
    },
    background: {
      size: {
        350: '1716px',
        550: '2696px',
        720: '3530px',
        940: '4608px',
        1080: '5294px',
      },
      set1: {
        layer1: {
          1080: `${cdnUrl}/assets/HeroCars/Sienna/backgroundImages/1080/${extension}/1/Layer_1.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Sienna/backgroundImages/940/${extension}/1/Layer_1.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Sienna/backgroundImages/720/${extension}/1/Layer_1.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Sienna/backgroundImages/550/${extension}/1/Layer_1.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Sienna/backgroundImages/350/${extension}/1/Layer_1.${extension}`,
        },
        layer2: {
          1080: `${cdnUrl}/assets/HeroCars/Sienna/backgroundImages/1080/${extension}/1/Layer_2.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Sienna/backgroundImages/940/${extension}/1/Layer_2.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Sienna/backgroundImages/720/${extension}/1/Layer_2.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Sienna/backgroundImages/550/${extension}/1/Layer_2.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Sienna/backgroundImages/350/${extension}/1/Layer_2.${extension}`,
        },
      },
      set2: {
        layer1: {
          1080: `${cdnUrl}/assets/HeroCars/Sienna/backgroundImages/1080/${extension}/2/Layer_1.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Sienna/backgroundImages/940/${extension}/2/Layer_1.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Sienna/backgroundImages/720/${extension}/2/Layer_1.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Sienna/backgroundImages/550/${extension}/2/Layer_1.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Sienna/backgroundImages/350/${extension}/2/Layer_1.${extension}`,
        },
        layer2: {
          1080: `${cdnUrl}/assets/HeroCars/Sienna/backgroundImages/1080/${extension}/2/Layer_2.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Sienna/backgroundImages/940/${extension}/2/Layer_2.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Sienna/backgroundImages/720/${extension}/2/Layer_2.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Sienna/backgroundImages/550/${extension}/2/Layer_2.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Sienna/backgroundImages/350/${extension}/2/Layer_2.${extension}`,
        },
      },
    },
    mainCarSceneLocation: {
      l: '45%',
      r: 0,
      t: '64%',
      b: 0,
    },
    groundImage: {
      1080: null,
      940: null,
      720: null,
      550: null,
      350: null,
      // 1080: `${cdnUrl}/assets/HeroCars/Sienna/GroundImages/1080/${extension}/LS_Sienna_ShowFLoor_1080_Fade.${extension}`,
      // 940: `${cdnUrl}/assets/HeroCars/Sienna/GroundImages/720/${extension}/LS_Sienna_ShowFLoor_720_Fade.${extension}`,
    },
  },
  Venza: {
    share: `${cdnUrl}/assets/HeroCars/Venza/Assets/Social_Img/${extension}/LS_Venza_Social_240.${extension}`,
    assetsPath360: `${cdnUrl}/assets/HeroCars/Venza/360/1080/${extension}/LS_VenzaTurntable_{frame}.${extension}`,
    assetsPath3602: `${cdnUrl}/assets/HeroCars/Venza/360_LGP/1080/${extension}/LS_VenzaTurntable_LGP_{frame}.${extension}`,
    logo: {
      white: `${cdnUrl}/assets/HeroCars/Venza/Assets/TOY_VIRTUAL_VENZA_White.svg`,
      black: `${cdnUrl}/assets/HeroCars/Venza/Assets/TOY_VIRTUAL_VENZA_White.svg`, // needs black version?
    },
    specVideo: {
      mp4: `${cdnUrl}/assets/Videos/HeroVehicle/Venza/Venza_ProdSpec.mp4`,
      webm: `${cdnUrl}/assets/Videos/HeroVehicle/Venza/Venza_ProdSpec.webm`,
    },
    videoBackground: {
      day: {
        mp4: `${cdnUrl}/assets/HeroCars/Venza/Assets/Videos/LGP/HEVC/Venza_LGP_To_Landing.mov`,
        webm: `${cdnUrl}/assets/HeroCars/Venza/Assets/Videos/LGP/webm/Venza_LGP_To_Landing.webm`,
      },
      init: {
        mp4: null,
        webm: null,
      },
      loop: {
        mp4: null,
        webm: null,
      },
      night: {
        mp4: `${cdnUrl}/assets/HeroCars/Venza/Assets/Videos/LGP/HEVC/Venza_Landing_To_LGP.mov`,
        webm: `${cdnUrl}/assets/HeroCars/Venza/Assets/Videos/LGP/webm/Venza_Landing_To_LGP.webm`,
      },
    },
    background: {
      size: {
        350: '1669px',
        550: '2623px',
        720: '3433px',
        940: '4482px',
        1080: '5150px',
      },
      set1: {
        layer1: {
          1080: `${cdnUrl}/assets/HeroCars/Venza/backgroundImages/1080/${extension}/1/Layer_1.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Venza/backgroundImages/940/${extension}/1/Layer_1.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Venza/backgroundImages/720/${extension}/1/Layer_1.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Venza/backgroundImages/550/${extension}/1/Layer_1.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Venza/backgroundImages/350/${extension}/1/Layer_1.${extension}`,
        },
        layer2: {
          1080: `${cdnUrl}/assets/HeroCars/Venza/backgroundImages/1080/${extension}/1/Layer_2.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Venza/backgroundImages/940/${extension}/1/Layer_2.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Venza/backgroundImages/720/${extension}/1/Layer_2.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Venza/backgroundImages/550/${extension}/1/Layer_2.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Venza/backgroundImages/350/${extension}/1/Layer_2.${extension}`,

          // 1080: `${cdnUrl}/assets/Reference/LS_Venza-1080.jpg`,
          // 940: `${cdnUrl}/assets/Reference/LS_Venza-940.jpg`,
          // 720: `${cdnUrl}/assets/Reference/LS_Venza-720.jpg`,
        },
      },
      set2: {
        layer1: {
          1080: `${cdnUrl}/assets/HeroCars/Venza/backgroundImages/1080/${extension}/2/Layer_1.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Venza/backgroundImages/940/${extension}/2/Layer_1.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Venza/backgroundImages/720/${extension}/2/Layer_1.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Venza/backgroundImages/550/${extension}/2/Layer_1.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Venza/backgroundImages/350/${extension}/2/Layer_1.${extension}`,
        },
        layer2: {
          1080: `${cdnUrl}/assets/HeroCars/Venza/backgroundImages/1080/${extension}/2/Layer_2.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Venza/backgroundImages/940/${extension}/2/Layer_2.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Venza/backgroundImages/720/${extension}/2/Layer_2.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Venza/backgroundImages/550/${extension}/2/Layer_2.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Venza/backgroundImages/350/${extension}/2/Layer_2.${extension}`,
        },
      },
    },
    mainCarSceneLocation: {
      l: '57%',
      r: 0,
      t: '68%',
      b: 0,
    },
    groundImage: {
      1080: null,
      940: null,
      720: null,
      550: null,
      350: null,
      // 1080: `${cdnUrl}/assets/HeroCars/Venza/GroundImages/1080/${extension}/LS_Venza_ShowFloor_1080_Fade.${extension}`,
      // 940: `${cdnUrl}/assets/HeroCars/Venza/GroundImages/720/${extension}/LS_Venza_ShowFloor_720_Fade.${extension}`,
    },
  },
  Mobility: {
    share: `${cdnUrl}/assets/HeroCars/Mobility/Assets/Social_Img/${extension}/LS_Mobility_Social_240.${extension}`,
    // assetsPath360: `${cdnUrl}/assets/HeroCars/Mobility/Car/1080/${extension}/LS_CarMobility.${extension}`,
    assetsPath360: null,
    logo: {
      white: `${cdnUrl}/assets/HeroCars/Mobility/Assets/TOY_VIRTUAL_Mobility_white.svg`,
      black: `${cdnUrl}/assets/HeroCars/Mobility/Assets/TOY_VIRTUAL_Mobility_white.svg`, // needs black version?
    },
    videoBackground: {
      day: {
        mp4: `${cdnUrl}/assets/HeroCars/Mobility/Assets/Videos/POD/HEVC/NightToDay_Led.mov`,
        webm: `${cdnUrl}/assets/HeroCars/Mobility/Assets/Videos/POD/webm/NightToDay_Led.webm`,
      },
      init: {
        mp4: `${cdnUrl}/assets/HeroCars/Mobility/Assets/Videos/POD/HEVC/DayToNight_Led_1.mov`,
        webm: `${cdnUrl}/assets/HeroCars/Mobility/Assets/Videos/POD/webm/DayToNight_Led_1.webm`,
      },
      loop: {
        mp4: `${cdnUrl}/assets/HeroCars/Mobility/Assets/Videos/POD/HEVC/SphereLoop_Led.mov`,
        webm: `${cdnUrl}/assets/HeroCars/Mobility/Assets/Videos/POD/webm/SphereLoop_Led.webm`,
      },
      night: {
        mp4: `${cdnUrl}/assets/HeroCars/Mobility/Assets/Videos/POD/HEVC/DayToNight_Led.mov`,
        webm: `${cdnUrl}/assets/HeroCars/Mobility/Assets/Videos/POD/webm/DayToNight_Led.webm`,
      },
    },
    background: {
      size: {
        350: '1767px',
        550: '2776px',
        720: '3635px',
        940: '4745px',
        1080: '5452px',
      },
      set1: {
        layer1: {
          // 1080: null,
          // 940: null,
          // 720: null,
          1080: `${cdnUrl}/assets/HeroCars/Mobility/backgroundImages/1080/${extension}/1/Layer_1.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Mobility/backgroundImages/940/${extension}/1/Layer_1.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Mobility/backgroundImages/720/${extension}/1/Layer_1.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Mobility/backgroundImages/550/${extension}/1/Layer_1.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Mobility/backgroundImages/350/${extension}/1/Layer_1.${extension}`,
        },
        layer2: {
          // 1080: null,
          // 940: null,
          // 720: null,
          1080: `${cdnUrl}/assets/HeroCars/Mobility/backgroundImages/1080/${extension}/1/Layer_2.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Mobility/backgroundImages/940/${extension}/1/Layer_2.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Mobility/backgroundImages/720/${extension}/1/Layer_2.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Mobility/backgroundImages/550/${extension}/1/Layer_2.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Mobility/backgroundImages/350/${extension}/1/Layer_2.${extension}`,
        },
      },
      set2: {
        layer1: {
          // 1080: null,
          // 940: null,
          // 720: null,
          1080: `${cdnUrl}/assets/HeroCars/Mobility/backgroundImages/1080/${extension}/2/Layer_1.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Mobility/backgroundImages/940/${extension}/2/Layer_1.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Mobility/backgroundImages/720/${extension}/2/Layer_1.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Mobility/backgroundImages/550/${extension}/2/Layer_1.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Mobility/backgroundImages/350/${extension}/2/Layer_1.${extension}`,
        },
        layer2: {
          // 1080: null,
          // 940: null,
          // 720: null,
          1080: `${cdnUrl}/assets/HeroCars/Mobility/backgroundImages/1080/${extension}/2/Layer_2.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Mobility/backgroundImages/940/${extension}/2/Layer_2.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Mobility/backgroundImages/720/${extension}/2/Layer_2.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Mobility/backgroundImages/550/${extension}/2/Layer_2.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Mobility/backgroundImages/350/${extension}/2/Layer_2.${extension}`,
        },
      },
    },
    mainCarSceneLocation: {
      l: '64.5%',
      r: 0,
      t: '52%',
      b: 0,
    },
    groundImage: {
      1080: null,
      940: null,
      720: null,
      550: null,
      350: null,
      // 1080: `${cdnUrl}/assets/HeroCars/Mobility/GroundImages/1080/${extension}/LS_Mobility_ShowFLoor_1080_Fade.${extension}`,
      // 940: `${cdnUrl}/assets/HeroCars/Mobility/GroundImages/720/${extension}/LS_Mobility_ShowFLoor_720_Fade.${extension}`,
    },
  },
  Mirai: {
    share: `${cdnUrl}/assets/HeroCars/Mirai/Assets/Social_Img/${extension}/LS_Mirai_Social_240.${extension}`,
    assetsPath360: null,
    logo: {
      white: `${cdnUrl}/assets/HeroCars/Mirai/Assets/TOY_VIRTUAL_Mirai _White .svg`,
      black: `${cdnUrl}/assets/HeroCars/Mirai/Assets/TOY_VIRTUAL_Mirai _White .svg`, // needs black version?
    },
    specVideo: {
      mp4: `${cdnUrl}/assets/Videos/HeroVehicle/Mirai/Mirai_ProdSpec.mp4`,
      webm: `${cdnUrl}/assets/Videos/HeroVehicle/Mirai/Mirai_ProdSpec.webm`,
    },
    videoBackground: {
      day: {
        mp4: `${cdnUrl}/assets/HeroCars/Mirai/Assets/Videos/LGP/HEVC/Mirai_LGP_To_Landing.mov`,
        webm: `${cdnUrl}/assets/HeroCars/Mirai/Assets/Videos/LGP/webm/Mirai_LGP_To_Landing.webm`,
      },
      init: {
        mp4: `${cdnUrl}/assets/HeroCars/Mirai/Assets/Videos/LGP/HEVC/Mirai_Landing_To_LGP_1.mov`,
        webm: `${cdnUrl}/assets/HeroCars/Mirai/Assets/Videos/LGP/webm/Mirai_Landing_To_LGP_1.webm`,
      },
      loop: {
        mp4: `${cdnUrl}/assets/HeroCars/Mirai/Assets/Videos/LGP/HEVC/Mirai_Loop.mov`,
        webm: `${cdnUrl}/assets/HeroCars/Mirai/Assets/Videos/LGP/webm/Mirai_Loop.webm`,
      },
      night: {
        mp4: `${cdnUrl}/assets/HeroCars/Mirai/Assets/Videos/LGP/HEVC/Mirai_Landing_To_LGP.mov`,
        webm: `${cdnUrl}/assets/HeroCars/Mirai/Assets/Videos/LGP/webm/Mirai_Landing_To_LGP.webm`,
      },
    },
    background: {
      size: {
        350: '1657px',
        550: '2603px',
        720: '3408px',
        940: '4449px',
        1080: '5112px',
      },
      set1: {
        layer1: {
          1080: `${cdnUrl}/assets/HeroCars/Mirai/backgroundImages/1080/${extension}/1/Layer_1.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Mirai/backgroundImages/940/${extension}/1/Layer_1.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Mirai/backgroundImages/720/${extension}/1/Layer_1.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Mirai/backgroundImages/550/${extension}/1/Layer_1.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Mirai/backgroundImages/350/${extension}/1/Layer_1.${extension}`,
        },
        layer2: {
          1080: `${cdnUrl}/assets/HeroCars/Mirai/backgroundImages/1080/${extension}/1/Layer_2.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Mirai/backgroundImages/940/${extension}/1/Layer_2.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Mirai/backgroundImages/720/${extension}/1/Layer_2.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Mirai/backgroundImages/550/${extension}/1/Layer_2.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Mirai/backgroundImages/350/${extension}/1/Layer_2.${extension}`,
          // 1080: 'https://toyota-static-assets.s3.amazonaws.com/assets/Reference/LS_Mirai_1080_Ref.webp',
          // 940: 'https://toyota-static-assets.s3.amazonaws.com/assets/Reference/LS_Mirai_940_Ref.webp',
          // 720: 'https://toyota-static-assets.s3.amazonaws.com/assets/Reference/LS_Mirai_720_Ref.webp',
        },
      },
      set2: {
        layer1: {
          1080: `${cdnUrl}/assets/HeroCars/Mirai/backgroundImages/1080/${extension}/2/Layer_1.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Mirai/backgroundImages/940/${extension}/2/Layer_1.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Mirai/backgroundImages/720/${extension}/2/Layer_1.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Mirai/backgroundImages/550/${extension}/2/Layer_1.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Mirai/backgroundImages/350/${extension}/2/Layer_1.${extension}`,
        },
        layer2: {
          1080: `${cdnUrl}/assets/HeroCars/Mirai/backgroundImages/1080/${extension}/2/Layer_2.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Mirai/backgroundImages/940/${extension}/2/Layer_2.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Mirai/backgroundImages/720/${extension}/2/Layer_2.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Mirai/backgroundImages/550/${extension}/2/Layer_2.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Mirai/backgroundImages/350/${extension}/2/Layer_2.${extension}`,
        },
      },
    },
    mainCarSceneLocation: {
      l: '76.5%',
      r: 0,
      t: '35%',
      b: 0,
    },
    groundImage: {
      1080: null,
      940: null,
      720: null,
      550: null,
      350: null,
      // 1080: `${cdnUrl}/assets/HeroCars/Mirai/GroundImages/1080/${extension}/LS_Mirai_ShowFLoor_1080_Fade.${extension}`,
      // 940: `${cdnUrl}/assets/HeroCars/Mirai/GroundImages/720/${extension}/LS_Mirai_ShowFLoor_720_Fade.${extension}`,
    },
  },
  CamryHybrid: {
    share: `${cdnUrl}/assets/HeroCars/Camry/Assets/Social_Img/${extension}/LS_Camry_Social_240.${extension}`,
    assetsPath360: `${cdnUrl}/assets/HeroCars/Camry/360/1080/${extension}/LS_CamryTurntable_{frame}.${extension}`,
    logo: {
      white: `${cdnUrl}/assets/HeroCars/Camry/Assets/TOY_VIRTUAL_Camry_Hibrid_White.svg`,
      black: `${cdnUrl}/assets/HeroCars/Camry/Assets/TOY_VIRTUAL_Camry_Hibrid_White.svg`, // needs black version?
    },
    specVideo: {
      mp4: `${cdnUrl}/assets/Videos/HeroVehicle/CamryHybrid/CamryHybrid_ProdSpec.mp4`,
      webm: `${cdnUrl}/assets/Videos/HeroVehicle/CamryHybrid/CamryHybrid_ProdSpec.webm`,
    },
    background: {
      size: {
        350: '1657px',
        550: '2603px',
        720: '3408px',
        940: '4449px',
        1080: '5112px',
      },
      set1: {
        layer1: {
          1080: `${cdnUrl}/assets/HeroCars/Camry/backgroundImages/1080/${extension}/1/Layer_1.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Camry/backgroundImages/940/${extension}/1/Layer_1.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Camry/backgroundImages/720/${extension}/1/Layer_1.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Camry/backgroundImages/550/${extension}/1/Layer_1.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Camry/backgroundImages/350/${extension}/1/Layer_1.${extension}`,
        },
        layer2: {
          1080: `${cdnUrl}/assets/HeroCars/Camry/backgroundImages/1080/${extension}/1/Layer_2.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Camry/backgroundImages/940/${extension}/1/Layer_2.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Camry/backgroundImages/720/${extension}/1/Layer_2.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Camry/backgroundImages/550/${extension}/1/Layer_2.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Camry/backgroundImages/350/${extension}/1/Layer_2.${extension}`,
          // 1080: 'https://toyota-static-assets.s3.amazonaws.com/assets/Reference/LS_CamryH-1080.jpg',
          // 940: 'https://toyota-static-assets.s3.amazonaws.com/assets/Reference/LS_CamryH-940.jpg',
          // 720: 'https://toyota-static-assets.s3.amazonaws.com/assets/Reference/LS_CamryH-720.jpg',
        },
      },
      set2: {
        layer1: {
          1080: `${cdnUrl}/assets/HeroCars/Camry/backgroundImages/1080/${extension}/2/Layer_1.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Camry/backgroundImages/940/${extension}/2/Layer_1.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Camry/backgroundImages/720/${extension}/2/Layer_1.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Camry/backgroundImages/550/${extension}/2/Layer_1.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Camry/backgroundImages/350/${extension}/2/Layer_1.${extension}`,
        },
        layer2: {
          1080: `${cdnUrl}/assets/HeroCars/Camry/backgroundImages/1080/${extension}/2/Layer_2.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Camry/backgroundImages/940/${extension}/2/Layer_2.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Camry/backgroundImages/720/${extension}/2/Layer_2.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Camry/backgroundImages/550/${extension}/2/Layer_2.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Camry/backgroundImages/350/${extension}/2/Layer_2.${extension}`,
        },
        layer3: {
          1080: null,
          940: null,
        },
      },
    },
    mainCarSceneLocation: {
      l: '77.5%',
      r: 0,
      t: '24%',
      b: 0,
    },
    groundImage: {
      1080: null,
      940: null,
      720: null,
      550: null,
      350: null,
      // 1080: `${cdnUrl}/assets/HeroCars/Camry/GroundImages/1080/${extension}/LS_CamryH_ShowFloor_1080_Fade.${extension}`,
      // 940: `${cdnUrl}/assets/HeroCars/Camry/GroundImages/720/${extension}/LS_CamryH_ShowFloor_720_Fade.${extension}`,
    },
  },
  Team_Toyota: {
    share: `${cdnUrl}/assets/HeroCars/Team/Assets/Social_Img/${extension}/LS_Team_Social_240.${extension}`,
    assetsPath360: null,
    logo: {
      white: `${cdnUrl}/assets/HeroCars/Team/Assets/TOY_VIRTUAL_Team_Logo_Black.svg`,
      black: `${cdnUrl}/assets/HeroCars/Team/Assets/TOY_VIRTUAL_Team_Logo_Black.svg`,
    },
    background: {
      size: {
        350: '1643px',
        550: '2582px',
        720: '3380px',//'3435px',
        940: '4413px',
        1080: '5070px',
      },
      set1: {
        layer1: {
          1080: `${cdnUrl}/assets/HeroCars/Team/backgroundImages/1080/${extension}/2/Layer_1.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Team/backgroundImages/940/${extension}/2/Layer_1.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Team/backgroundImages/720/${extension}/2/Layer_1.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Team/backgroundImages/550/${extension}/2/Layer_1.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Team/backgroundImages/350/${extension}/2/Layer_1.${extension}`,
        },
        layer2: {
          1080: `${cdnUrl}/assets/HeroCars/Team/backgroundImages/1080/${extension}/2/Layer_2.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Team/backgroundImages/940/${extension}/2/Layer_2.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Team/backgroundImages/720/${extension}/2/Layer_2.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Team/backgroundImages/550/${extension}/2/Layer_2.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Team/backgroundImages/350/${extension}/2/Layer_2.${extension}`,
        },
      },
      set2: {
        layer1: {
          1080: `${cdnUrl}/assets/HeroCars/Team/backgroundImages/1080/${extension}/1/Layer_1.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Team/backgroundImages/940/${extension}/1/Layer_1.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Team/backgroundImages/720/${extension}/1/Layer_1.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Team/backgroundImages/550/${extension}/1/Layer_1.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Team/backgroundImages/350/${extension}/1/Layer_1.${extension}`,
        },
        layer2: {
          1080: `${cdnUrl}/assets/HeroCars/Team/backgroundImages/1080/${extension}/1/Layer_2.${extension}`,
          940: `${cdnUrl}/assets/HeroCars/Team/backgroundImages/940/${extension}/1/Layer_2.${extension}`,
          720: `${cdnUrl}/assets/HeroCars/Team/backgroundImages/720/${extension}/1/Layer_2.${extension}`,
          550: `${cdnUrl}/assets/HeroCars/Team/backgroundImages/550/${extension}/1/Layer_2.${extension}`,
          350: `${cdnUrl}/assets/HeroCars/Team/backgroundImages/350/${extension}/1/Layer_2.${extension}`,
        },
        layer3: {
          1080: null,
          940: null,
        },
      },
    },
    mainCarSceneLocation: {
      l: '74%',
      r: 0,
      t: '5%',
      b: 0,
    },
    groundImage: {
      1080: null,
      940: null,
      720: null,
      550: null,
      350: null,
      // 1080: `${cdnUrl}/assets/HeroCars/Team/GroundImages/1080/${extension}/LS_TeamToyota_ShowFloor_1080_Fade.${extension}`,
      // 940: `${cdnUrl}/assets/HeroCars/Team/GroundImages/940/${extension}/LS_TeamToyota_ShowFloor_940_Fade.${extension}`,
      // 720: `${cdnUrl}/assets/HeroCars/Team/GroundImages/720/${extension}/LS_TeamToyota_ShowFloor_720_Fade.${extension}`,
    },
  },
  Theater: {
    share: `${cdnUrl}/assets/HeroCars/T360/Assets/Social_Img/${extension}/LS_T360_Social_240.${extension}`,
    Theater: {
      mp4: `${cdnUrl}/assets/T360/T360Theater_Intro/t360_intro.mov`,
      webm: `${cdnUrl}/assets/T360/T360Theater_Intro/t360_intro.webm`,
    },
    LandingFirstTime:[
      {
        mp4: `${cdnUrl}/assets/T360/T360TheaterLandingPage/Blank_BG/t360game_show_First_Go.mov`,
        webm: `${cdnUrl}/assets/T360/T360TheaterLandingPage/Blank_BG/t360game_show_First_Go.webm`,
      }
    ],
    Landing: [
      // mp4: `${cdnUrl}/assets/T360/T360TheaterLandingPage/Blank_BG/t360game_show_Ready_To_Explore.mp4`,
      // webm: `${cdnUrl}/assets/T360/T360TheaterLandingPage/Blank_BG/t360game_show_Ready_To_Explore.webm`,
      {
        mp4: `${cdnUrl}/assets/T360/T360TheaterLandingPage/Blank_BG/t360game_show_Lets_Go.mov`,
        webm: `${cdnUrl}/assets/T360/T360TheaterLandingPage/Blank_BG/t360game_show_Lets_Go.webm`,
      },
      {
        mp4: `${cdnUrl}/assets/T360/T360TheaterLandingPage/Blank_BG/t360game_show_Eenie_Meenie_Mo.mov`,
        webm: `${cdnUrl}/assets/T360/T360TheaterLandingPage/Blank_BG/t360game_show_Eenie_Meenie_Mo.webm`,
      },
      {
        mp4: `${cdnUrl}/assets/T360/T360TheaterLandingPage/Blank_BG/t360game_show_Ready_To_Explore.mov`,
        webm: `${cdnUrl}/assets/T360/T360TheaterLandingPage/Blank_BG/t360game_show_Ready_To_Explore.webm`,
      },
      {
        mp4: `${cdnUrl}/assets/T360/T360TheaterLandingPage/Blank_BG/t360game_show_Epic_Adventure_Awaits.mov`,
        webm: `${cdnUrl}/assets/T360/T360TheaterLandingPage/Blank_BG/t360game_show_Epic_Adventure_Awaits.webm`,
      },
      {
        mp4: `${cdnUrl}/assets/T360/T360TheaterLandingPage/Blank_BG/t360game_show_Epic_Adventure_Awaits.mov`,
        webm: `${cdnUrl}/assets/T360/T360TheaterLandingPage/Blank_BG/t360game_show_Epic_Adventure_Awaits.webm`,
      },
    ],
    Brand: {
      mp4: `${cdnUrl}/assets/T360/BrandVideo/t360game_show_Brand_Video.mov`,
      webm: `${cdnUrl}/assets/T360/BrandVideo/t360game_show_Brand_Video.webm`,
    },
    Sienna: {
      mp4: `${cdnUrl}/assets/T360/SiennaReveal/t360game_show_Sienna_reveal.mov`,
      webm: `${cdnUrl}/assets/T360/SiennaReveal/t360game_show_Sienna_reveal.webm`,
    },
    Venza: {
      mp4: `${cdnUrl}/assets/T360/VenzaReveal/t360game_show_Venza_reveal.mov`,
      webm: `${cdnUrl}/assets/T360/VenzaReveal/t360game_show_Venza_reveal.webm`,
    },
    Thumbnail: [
      {
        name: '2021 Sienna',
        href: '/t360-theater/sienna',
        img: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/Group 1739.${extension}`,
      },
      {
        name: '2021 Venza',
        href: '/t360-theater/venza',
        img: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/Group 1735.${extension}`,
      },
      {
        name: 'Take Quiz',
        href: '/t360-theater/quiz',
        img: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/Group 1746.${extension}`,
      },
      {
        name: 'Watch Video',
        href: '/t360-theater/brand',
        img: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/T360-Theatre/${extension}/Group 1748.${extension}`,
      },
    ],

    assetsPath360: null,
    logo: {
      white: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Icons/T-360/TOY_VIRTUAL_Toyota_T360.svg`,
      //black: `${cdnUrl}/assets/HeroCars/Team/Assets/TOY_VIRTUAL_Team_Logo_Black.svg`,
    },
    background: {},
    mainCarSceneLocation: {
      l: '44.2%',
      r: 0,
      t: '11%',
      b: 0,
    },
    groundImage: {},
  },
  Explore_More_Vehicles: {
    assetsPath360: null,
    logo: {},
    background: {},
    mainCarSceneLocation: {
      l: '49%',
      r: 0,
      t: '42%',
      b: 0,
    },
    groundImage: {},
  },
};

export default cars;
