const cdnUrl = 'https://d28z8i57b3adv3.cloudfront.net';
const extension = window.webp ? 'webp' : 'png';

const toyota = {
  FeatureVehicles: [
    {
      name: 'Sienna',
      learnMore: 'https://www.toyota.com/sienna/',
      buildYourOwn: 'https://www.toyota.com/configurator/build/step/model/year/2021/series/sienna',
      accessories: 'https://www.toyota.com/sienna/accessories/exterior',
      url: '/sienna',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/Sienna/Sienna_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/Sienna/Sienna_ProdSpec.webm`,
      },
      LED: {
        mp4: `${cdnUrl}/assets/HeroCars/Sienna/Assets/Videos/Sienna_LED.mp4`,
        webm: `${cdnUrl}/assets/HeroCars/Sienna/Assets/Videos/Sienna_LED.webm`,
      },
      disclaimer: `EPA-estimated 36 city/36 hwy/36 combined mpg for 2021 Sienna FWD models; 35 city/36 hwy/35 combined mpg for 2021 Sienna AWD models. use for comparison purposes only. Your mileage will vary for many reasons, including your vehicle's condition and how/where you drive. See www.fueleconomy.gov.  Do not use the lounge chair with ottoman when vehicle is in motion. If the ottoman is in use during an accident, the lap belt may slide past the hips. This could result in restraint forces being applied directly to the abdomen, or your neck may contact the shoulder belt, increasing the risk of death or serious injury. See Owner’s Manual for additional limitations and details.  Kick sensor is not compatible with tow hitch and other accessories that mount to or near the rear bumper.  Installation of a tow hitch receiver or other accessories located near the rear bumper or side-door kick sensors may require disabling or removing the kick sensor, and the sensor operation setting in your vehicle should be turned Off. Water, weather, dirt, and other conditions also may cause the sensor to not operate properly or to operate unintentionally. See Owner's Manual for limitations.  Toyota Safety Sense™ effectiveness is dependent on many factors including road, weather and vehicle conditions. Drivers are responsible for their own safe driving. Always pay attention to your surroundings and drive safely. See Owner's Manual for additional Limitations and details.`,
    },
    {
      name: 'Camry Hybrid',
      prefix: 'Camryhybrid',
      learnMore: 'https://www.toyota.com/camryhybrid/',
      buildYourOwn: 'https://www.toyota.com/configurator/build/step/model/year/2021/series/camry',
      accessories: 'https://www.toyota.com/camry/accessories/exterior',
      url: '/camryhybrid',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/CamryHybrid/CamryHybrid_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/CamryHybrid/CamryHybrid_ProdSpec.webm`,
      },
      disclaimer: `EPA-estimated 28 city/39 hwy/32 combined mpg for 2021 Camry LE, SE and SE Nightshade Edition; 27 city/38 hwy/31 combined mpg for 2021 Camry XLE 4-Cylinder and XSE 4-Cylinder; 22 city/33 hwy/26 combined mpg for 2021 Camry XLE V6; 22 city/32 hwy/26 combined mpg for 2021 Camry XSE V6; 21 city/31 hwy/25 combined mpg for 2021 Camry TRD; 51 city/53 hwy/52 combined mpg for 2021 Camry LE Hybrid; and 44 city/47 hwy/46 combined mpg for 2021 Camry SE Hybrid, XLE Hybrid and XSE Hybrid. Use for comparison purposes only. Your mileage will vary for many reasons, including your vehicle's condition and how/where you drive. See www.fueleconomy.gov.  Eligible vehicle and wireless service required. Coverage and service not available everywhere. Valid in the contiguous U.S. and Alaska. Do not drive distracted. Go to att.com/toyota for terms and conditions. Data usage and charges apply. Up to 5 devices can be supported using in-vehicle connectivity. Apps and services subject to change at any time without notice.  Qi wireless charging may not be compatible with all mobile phones, MP3/WMA players and like models. When using the wireless charging system, avoid placing metal objects between the wireless charger and the mobile device when charging is active. Doing so may cause metal objects to become hot and could cause burns.  Toyota Safety Sense™ effectiveness is dependent on many factors including road, weather and vehicle conditions. Drivers are responsible for their own safe driving. Always pay attention to your surroundings and drive safely. See Owner's Manual for additional Limitations and details.  For Toyota hybrid, plug-in hybrid, and fuel cell and battery electric vehicles beginning with model year 2020, the hybrid (HV) battery is covered for 10 years from original date of first use or 150,000 miles, whichever comes first. Coverage is subject to the terms and conditions of your New Vehicle Limited Warranty. See Owner's Warranty and Maintenance Guide for details.`,
    },
    {
      name: 'Mirai',
      learnMore: 'https://www.toyota.com/mirai/',
      buildYourOwn: 'https://www.toyota.com/configurator/build/step/model/year/2021/series/mirai',
      accessories: 'https://www.toyota.com/mirai/accessories/exterior',
      url: '/mirai',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/Mirai/Mirai_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/Mirai/Mirai_ProdSpec.webm`,
      },
      disclaimer: `402 EPA-estimated total range rating on 2021 Mirai XLE. For comparison purposes only. Your mileage will vary for many reasons, including refueling practices, your vehicle's condition and how/where you drive. See www.fueleconomy.gov.  Fueling time varies with hydrogen fueling pressure and ambient temperature.`,
    },
    {
      name: 'Venza',
      learnMore: 'https://www.toyota.com/venza/',
      buildYourOwn: 'https://www.toyota.com/configurator/build/step/model/year/2021/series/venza',
      accessories: 'https://www.toyota.com/venza/accessories/exterior',
      url: '/venza',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/Venza/Venza_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/Venza/Venza_ProdSpec.webm`,
      },
      LED: {
        mp4: `${cdnUrl}/assets/HeroCars/Venza/Assets/Videos/Venza_LED.mp4`,
        webm: `${cdnUrl}/assets/HeroCars/Venza/Assets/Videos/Venza_LED.webm`,
      },
      disclaimer: `EPA-estimated 40 city/37 hwy/39 combined mpg for 2021 Venza. Use for comparison purposes only. Your mileage will vary for many reasons, including your vehicle's condition and how/where you drive. See www.fueleconomy.gov.  Concentrating on the road should always be your first priority while driving.  SofTex® is a registered trademark of Toyota Motor Sales, U.S.A., Inc.`,
    },
    {
      name: 'Highlander',
      learnMore: 'https://www.toyota.com/highlander/',
      buildYourOwn:
        'https://www.toyota.com/configurator/build/step/model/year/2021/series/highlander',
      accessories: 'https://www.toyota.com/highlander/accessories/exterior',
      url: '/highlander',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/Highlander/Highlander_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/Highlander/Highlander_ProdSpec.webm`,
      },
      disclaimer: `Toyota Safety Sense™ effectiveness is dependent on many factors including road, weather and vehicle conditions. Drivers are responsible for their own safe driving. Always pay attention to your surroundings and drive safely. See Owner's Manual for additional Limitations and details.`,
    },
    {},
    {
      name: 'RAV4 Hybrid',
      prefix: 'Rav4hybrid',
      learnMore: 'https://www.toyota.com/rav4hybrid/',
      buildYourOwn:
        'https://www.toyota.com/configurator/build/step/model/year/2021/series/rav4hybrid',
      accessories: 'https://www.toyota.com/rav4/accessories/exterior',
      url: '/rav4hybrid',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/RAV4Hybrid/RAV4Hybrid_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/RAV4Hybrid/RAV4Hybrid_ProdSpec.webm`,
      },
      disclaimer: `Based on competitors’ CY 2017-2020 sales data.  EPA-estimated 27 city/35 hwy/30 combined mpg for 2021 RAV4 LE FWD and Limited FWD; 27 city/34 hwy/30 combined mpg for 2021 RAV4 LE AWD; 28 city/35 hwy/30 combined mpg for 2021 RAV4 XLE FWD and XLE Premium FWD; 27 city/33 hwy/29 combined mpg for 2021 RAV4 XLE AWD and XLE Premium AWD; 25 city/33 hwy/28 combined mpg for 2021 RAV4 Adventure and Limited AWD; 25 city/32 hwy/28 combined mpg for 2021 RAV4 TRD Off-Road; and 41 city/38 hwy/40 combined mpg for 2021 RAV4 LE Hybrid, XLE Hybrid, XLE Premium Hybrid, XSE Hybrid and Limited Hybrid. use for comparison purposes only. Your mileage will vary for many reasons, including your vehicle's condition and how/where you drive. See www.fueleconomy.gov.  HomeLink® and the HomeLink® house icon are registered trademarks of Gentex Corporation.  Toyota Safety Sense™ effectiveness is dependent on many factors including road, weather and vehicle conditions. Drivers are responsible for their own safe driving. Always pay attention to your surroundings and drive safely. See Owner's Manual for additional Limitations and details.  For Toyota hybrid, plug-in hybrid, and fuel cell and battery electric vehicles beginning with model year 2020, the hybrid (HV) battery is covered for 10 years from original date of first use or 150,000 miles, whichever comes first. Coverage is subject to the terms and conditions of your New Vehicle Limited Warranty. See Owner's Warranty and Maintenance Guide for details.`,
    },
    {
      name: 'GR Supra',
      prefix: 'Supra',
      learnMore: 'https://www.toyota.com/gr-supra/',
      buildYourOwn:
        'https://www.toyota.com/configurator/build/step/model/year/2021/series/gr-supra',
      accessories: 'https://www.toyota.com/gr-supra/accessories/exterior',
      url: '/supra',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/Supra/GR_Supra_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/Supra/GR_Supra_ProdSpec.webm`,
      },
      disclaimer: `Performance figures are for comparison only and were obtained with prototype vehicles by professional drivers using special safety equipment and procedures. Do not attempt.`,
    },
    {},
  ],
  ExploreMoreVehicles: [
    {
      name: 'Camry',
      learnMore: 'https://www.toyota.com/camry/',
      buildYourOwn: 'https://www.toyota.com/configurator/build/step/model/year/2021/series/camry',
      accessories: 'https://www.toyota.com/camry/accessories/exterior',
      url: '/camry/walk-around',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/Camry/Camry_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/Camry/Camry_ProdSpec.webm`,
      },
      disclaimer: `Based on manufacturers’ CY 2002-2020 sales, includes Camry Solara.  https://pressroom.toyota.com/toyota-motor-north-america-reports-december-2020-year-end-sales/.  Toyota Safety Sense™ effectiveness is dependent on many factors including road, weather and vehicle conditions. Drivers are responsible for their own safe driving. Always pay attention to your surroundings and drive safely. See Owner's Manual for additional Limitations and details.  Eligible vehicle and wireless service required. Coverage and service not available everywhere. Valid in the contiguous U.S. and Alaska. Do not drive distracted.  Go to att.com/toyota for terms and conditions. Data usage and charges apply.  Up to 5 devices can be supported using in-vehicle connectivity. Apps and services subject to change at any time without notice. The Wi-Fi Connect trial begins at the time of activation and expires when 2GB  of data is used or when the 3-month period ends. Subscription required after trial. Terms and conditions apply.`,
    },
    {
      name: 'Avalon',
      learnMore: 'https://www.toyota.com/avalon/',
      buildYourOwn: 'https://www.toyota.com/configurator/build/step/model/year/2021/series/avalon',
      accessories: 'https://www.toyota.com/avalon/accessories/exterior',
      url: '/avalon/walk-around',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/Avalon/Avalon_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/Avalon/Avalon_ProdSpec.webm`,
      },
      disclaimer: ``,
    },
    {
      name: 'RAV4',
      prefix:'Rav4',
      learnMore: 'https://www.toyota.com/rav4/',
      buildYourOwn: 'https://www.toyota.com/configurator/build/step/model/year/2021/series/rav4',
      accessories: 'https://www.toyota.com/rav4/accessories/exterior',
      url: '/rav4/walk-around',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/RAV4/RAV4_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/RAV4/RAV4_ProdSpec.webm`,
      },
      disclaimer: `Based on competitors’ CY 2017-2020 sales data.   The Toyota model or models shown are designed to meet most off-road driving requirements, but off-roading is inherently dangerous and may result in vehicle damage. Toyota encourages responsible operation to help protect you, your vehicle and the environment. Seatbelts should be worn at all times. Do not allow passengers to ride in cargo area.  The Smart Key System may interfere with some pacemakers or cardiac defibrillators. If you have one of these medical devices, please talk to your doctor to see if you should deactivate this system.  Installation of a tow hitch receiver or other accessories located near the rear bumper or side-door kick sensors may require disabling or removing the kick sensor, and the sensor operation setting in your vehicle should be turned off. Water, weather, dirt, and other conditions also may cause the sensor to not operate properly or to operate unintentionally. See Owner's Manual for limitations.`,
    },
    {
      name: 'Prius Prime',
      prefix:'Priusprime',
      learnMore: 'https://www.toyota.com/priusprime/',
      buildYourOwn:
        'https://www.toyota.com/configurator/build/step/model/year/2021/series/priusprime',
      accessories: 'https://www.toyota.com/priusprime/accessories/exterior',
      url: '/priusprime/walk-around',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/PriusPrime/PriusPrime_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/PriusPrime/PriusPrime_ProdSpec.webm`,
      },
      disclaimer: `For Toyota hybrid, plug-in hybrid, and fuel cell and battery electric vehicles beginning with model year 2020, the hybrid (HV) battery is covered for 10 years from original date of first use or 150,000 miles, whichever comes first. Coverage is subject to the terms and conditions of your New Vehicle Limited Warranty. See Owner's Warranty and Maintenance Guide for details.  EPA-estimated 25 mile all electric driving range when fully charged for 2021 Prius Prime. Use for comparison purposes only. Your mileage will vary for many reasons, including your vehicle’s condition and how/where you drive.  See www.fueleconomy.gov.`,
    },
    {
      name: 'Avalon Hybrid',
      prefix:'Avalonhybrid',
      learnMore: 'https://www.toyota.com/avalonhybrid/',
      buildYourOwn: 'https://www.toyota.com/configurator/build/step/model/year/2021/series/avalon',
      accessories: 'https://www.toyota.com/avalon/accessories/exterior',
      url: '/avalonhybrid/walk-around',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/AvalonHybrid/AvalonHybrid_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/AvalonHybrid/AvalonHybrid_ProdSpec.webm`,
      },
      disclaimer: `EPA-estimated 43 city/44 highway/44 combined mpg for 2021 Avalon Hybrid XLE. Use for comparison purposes only. Your mileage will vary for many reasons, including your vehicle's condition and how/where you drive. See www.fueleconomy.gov.  For Toyota hybrid, plug-in hybrid, and fuel cell and battery electric vehicles beginning with model year 2020, the hybrid (HV) battery is covered for 10 years from original date of first use or 150,000 miles, whichever comes first. Coverage is subject to the terms and conditions of your New Vehicle Limited Warranty. See Owner's Warranty and Maintenance Guide for details.`,
    },
    {
      name: 'RAV4 Prime',
      prefix:'Rav4prime',
      learnMore: 'https://www.toyota.com/rav4prime/',
      buildYourOwn:
        'https://www.toyota.com/configurator/build/step/model/year/2021/series/rav4prime',
      accessories: 'https://www.toyota.com/rav4prime/accessories/exterior',
      url: '/rav4prime/walk-around',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/RAV4Prime/RAV4Prime_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/RAV4Prime/RAV4Prime_ProdSpec.webm`,
      },
      disclaimer: `Based on competitors’ CY 2017-2020 sales data.  Performance figures are for comparison only and were obtained with prototype vehicles by professional drivers using special safety equipment and procedures. Do not attempt.
            EPA-estimated 42-mile all-electric driving range when fully charged for 2021 RAV4 Prime. Use for comparison purposes only. Your mileage will vary for many reasons, including your vehicle's condition and how/where you drive. See www.fueleconomy.gov.  EPA-estimated 94 combined MPGe for 2021 RAV4 Prime. MPGe is the EPA-equivalent of gasoline fuel efficiency for electric operation. EPA-estimated 40 city/36 hwy/38 combined mpg. Use for comparison purposes only. Your MPGe/MPG will vary for many reasons, including your vehicle's condition and how/where you drive. See www.fueleconomy.gov.`,
    },
    {
      name: 'Prius',
      learnMore: 'https://www.toyota.com/prius/',
      buildYourOwn: 'https://www.toyota.com/configurator/build/step/model/year/2021/series/prius',
      accessories: 'https://www.toyota.com/prius/accessories/exterior',
      url: '/prius/walk-around',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/Prius/Prius_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/Prius/Prius_ProdSpec.webm`,
      },
      disclaimer: `EPA-estimated 54 city/50 hwy/52 combined mpg for 2021 Prius LE, XLE, 2020 Edition and Limited. Use for comparison purposes only. Your mileage will vary for many reasons, including your vehicle's condition and how/where you drive. See www.fueleconomy.gov.  For Toyota hybrid, plug-in hybrid, and fuel cell and battery electric vehicles beginning with model year 2020, the hybrid (HV) battery is covered for 10 years from original date of first use or 150,000 miles, whichever comes first. Coverage is subject to the terms and conditions of your New Vehicle Limited Warranty. See Owner's Warranty and Maintenance Guide for details.`,
    },
    {
      name: 'Tacoma',
      learnMore: 'https://www.toyota.com/tacoma/',
      buildYourOwn: 'https://www.toyota.com/configurator/build/step/model/year/2021/series/tacoma',
      accessories: 'https://www.toyota.com/tacoma/accessories/exterior',
      url: '/tacoma/walk-around',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/Tacoma/Tacoma_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/Tacoma/Tacoma_ProdSpec.webm`,
      },
      disclaimer: `Based on manufacturers’ sales data from CY 2005-2020. https://pressroom.toyota.com/toyota-motor-north-america-reports-december-2020-year-end-sales/.  Crawl Control is designed for driving on difficult terrain at low speeds and assists the driver by controlling acceleration and braking, allowing the driver to focus on steering. See Owner's Manual for additional limitations and details.  The Toyota Tacoma is designed to meet most off-road driving requirements, but off-roading is inherently dangerous and may result in vehicle damage. Toyota encourages responsible operation to help protect you, your vehicle and the environment. Seatbelts should be worn at all times. Do not allow passengers to ride in cargo area.  Hill Start Assist Control is designed to help minimize backward rolling on steep ascents. It is not a substitute for safe driving judgment and practices. Factors including speed, grade, surface conditions and driver input can all affect whether HAC will be effective in preventing a loss of control. See Owner's Manual for additional Limitations and details.  The Multi-Terrain Monitor view is limited and can be affected by environmental conditions. See Owner's Manual for additional limitations and details.`,
    },
    {
      name: '4Runner',
      prefix:'4runner',
      learnMore: 'https://www.toyota.com/4runner/',
      buildYourOwn: 'https://www.toyota.com/configurator/build/step/model/year/2021/series/4runner',
      accessories: 'https://www.toyota.com/4runner/accessories/exterior',
      url: '/4runner/walk-around',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/4Runner/4Runner_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/4Runner/4Runner_ProdSpec.webm`,
      },
      disclaimer: `The Toyota model or models shown are designed to meet most off-road driving requirements, but off-roading is inherently dangerous and may result in vehicle damage. Toyota encourages responsible operation to help protect you, your vehicle and the environment. Seatbelts should be worn at all times. Do not allow passengers to ride in cargo area.  Crawl Control is designed for driving on difficult terrain at low speeds and assists the driver by controlling acceleration and braking, allowing the driver to focus on steering. See Owner's Manual for additional limitations and details.  Downhill Assist Control is designed to help driver maintain vehicle control and speed on steep, downhill descents and is not a substitute for safe driving judgment and practices. Factors including speed, grade, surface conditions and driver input can affect the DACs ability to prevent loss of control. See Owner's Manual for additional limitations and details.`,
    },
    {
      name: 'Corolla',
      learnMore: 'https://www.toyota.com/corolla/',
      buildYourOwn: 'https://www.toyota.com/configurator/build/step/model/year/2021/series/corolla',
      accessories: 'https://www.toyota.com/corolla/accessories/exterior',
      url: '/corolla/walk-around',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/Corolla/Corolla_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/Corolla/Corolla_ProdSpec.webm`,
      },
      disclaimer: `Toyota Safety Sense™ effectiveness is dependent on many factors including road, weather and vehicle conditions. Drivers are responsible for their own safe driving. Always pay attention to your surroundings and drive safely. See Owner's Manual for additional Limitations and details. `,
    },
    {
      name: 'Tundra',
      learnMore: 'https://www.toyota.com/tundra/',
      buildYourOwn: 'https://www.toyota.com/configurator/build/step/model/year/2021/series/tundra',
      accessories: 'https://www.toyota.com/tundra/accessories/exterior',
      url: '/tundra/walk-around',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/Tundra/Tundra_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/Tundra/Tundra_ProdSpec.webm`,
      },
      disclaimer: `Before towing, confirm your vehicle and trailer are compatible, hooked up and loaded properly and that you have any necessary additional equipment. Do not exceed any Weight Ratings and follow all instructions in your Owner’s Manual. The maximum you can tow depends on base curb weight plus the total weight of any cargo, occupants, and added vehicle equipment. "Added vehicle equipment" includes additional standard/optional equipment and accessories added by the manufacturer, dealers, and/or vehicle owners. The only way to be certain of your vehicle's exact curb weight is to weigh your vehicle without passengers or cargo. [Calculated with the new SAE J2807 method.] Installation of a tow hitch receiver or other accessories located near the rear bumper or side-door kick sensors may require disabling or removing the kick sensor, and the sensor operation setting in your vehicle should be turned off. See Owner’s Manual for limitations.`,
    },
    {
      name: 'Sequoia',
      learnMore: 'https://www.toyota.com/sequoia/',
      buildYourOwn: 'https://www.toyota.com/configurator/build/step/model/year/2021/series/sequoia',
      accessories: 'https://www.toyota.com/sequoia/accessories/exterior',
      url: '/sequoia/walk-around',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/Sequoia/Sequoia_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/Sequoia/Sequoia_ProdSpec.webm`,
      },
      disclaimer: `iPhone® is a registered trademark of Apple Inc. All rights reserved.  Before towing, confirm your vehicle and trailer are compatible, hooked up and loaded properly and that you have any necessary additional equipment. Do not exceed any Weight Ratings and follow all instructions in your Owner’s Manual. The maximum you can tow depends on base curb weight plus the total weight of any cargo, occupants, and added vehicle equipment. “Added vehicle equipment” includes additional standard/optional equipment and accessories added by the manufacturer, dealers, and /or vehicle owners. The only way to be certain of your vehicle’s exact curb weight is to weigh your vehicle without passengers or cargo. [Calculated with the new SAE J2807 method.] Installation of a tow hitch receiver or other accessories located near the rear bumper or side-door kick sensors may require disabling or removing the kick sensor, and the senor operation setting in your vehicle should be turned off. See Owner’s Manual for limitations.  Apps and services are subject to change at any time without notice. Data charges may apply. Apple CarPlay® functionality requires a compatible iPhone® connected with an approved data cable into the USB media port. Apply CarPlay® is a registered trademark of Apple Inc.  Vehicle user interface is a product of Google and its terms and privacy statement apply. To use Android Auto on your audio display, you'll need an Android Auto compatible vehicle and Android phone. For phone compatibility visit: https://www.android.com/auto/. Requires compatible smartphone connected with an approved data cable into the USB media port. and data plan rates apply. Apps and services vary by phone carrier and are subject to change at any time without notice. Android, Android Auto and Waze are trademarks of Google.`,
    },
    {
      name: 'Corolla Hybrid',
      prefix:'Corollahybrid',
      learnMore: 'https://www.toyota.com/corollahybrid/',
      buildYourOwn:
        'https://www.toyota.com/configurator/build/step/model/year/2021/series/corollahybrid',
      accessories: 'https://www.toyota.com/corolla/accessories/exterior',
      url: '/corollahybrid/walk-around',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/CorollaHybrid/CorollaHybrid_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/CorollaHybrid/CorollaHybrid_ProdSpec.webm`,
      },
      disclaimer: `EPA-estimated 30 city/38 hwy/33 combined mpg for 2021 Corolla LE, SE Apex CVT and XSE Apex; EPA-estimated 29 city/37 hwy/32 combined mpg for 2021 Corolla XLE; EPA-estimated 29 city/36 hwy/32 combined mpg for 2021 Corolla SE 6MT; EPA-estimated 31 city/40 hwy/34 combined mpg for 2021 Corolla SE CVT and SE Nightshade; EPA-estimated 28 city/35 hwy/31 combined mpg for 2021 Corolla SE Apex 6MT; EPA-estimated 31 city/38 hwy/34 combined mpg for 2021 Corolla XSE; EPA-estimated 53 city/52 hwy/52 combined mpg for 2021 Corolla Hybrid LE. use for comparison purposes only. Your mileage Will vary for many reasons, including your vehicle's condition and how/where you drive. See www.fueleconomy.gov.  For Toyota hybrid, plug-in hybrid, and fuel cell and battery electric vehicles beginning with model year 2020, the hybrid (HV) battery is covered for 10 years from original date of first use or 150,000 miles, whichever comes first. Coverage is subject to the terms and conditions of your New Vehicle Limited Warranty. See Owner's Warranty and Maintenance Guide for details.  Named Green Car Journal’s 2020 Green Car of the Year®, greencarjournal.com, November 21, 2019.`,
    },
    {
      name: 'Highlander Hybrid',
      prefix:'Highlanderhybrid',
      learnMore: 'https://www.toyota.com/highlanderhybrid/',
      buildYourOwn:
        'https://www.toyota.com/configurator/build/step/model/year/2021/series/highlander',
      accessories: 'https://www.toyota.com/highlander/accessories/exterior',
      url: '/highlanderhybrid/walk-around',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/HighlanderHybrid/HighlanderHybrid_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/HighlanderHybrid/HighlanderHybrid_ProdSpec.webm`,
      },
    },
    {
      name: 'Land Cruiser',
      prefix:'Landcruiser',
      learnMore: 'https://www.toyota.com/landcruiser/',
      buildYourOwn:
        'https://www.toyota.com/configurator/build/step/model/year/2021/series/landcruiser',
      accessories: 'https://www.toyota.com/landcruiser/accessories/exterior',
      url: '/landcruiser/walk-around',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/LandCruiser/LandCruiser _ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/LandCruiser/LandCruiser _ProdSpec.webm`,
      },
      disclaimer: `The Toyota model or models shown are designed to meet most off-road driving requirements, but off-roading is inherently dangerous and may result in vehicle damage. Toyota encourages responsible operation to help protect you, your vehicle and the environment. Seatbelts should be worn at all times. Do not allow passengers to ride in cargo area.  Heritage Edition shown with Yakima MegaWarrior cargo basket.`,
    },
    {
      name: 'Corolla Hatchback',
      prefix:'Corollahatchback',
      learnMore: 'https://www.toyota.com/corollahatchback/',
      buildYourOwn:
        'https://www.toyota.com/configurator/build/step/model/year/2021/series/corollahatchback',
      accessories: 'https://www.toyota.com/corollahatchback/accessories/exterior',
      url: '/corollahatchback/walk-around',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/CorollaHatchback/CorollaHatchback_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/CorollaHatchback/CorollaHatchback_ProdSpec.webm`,
      },
      disclaimer: ``,
    },
    {
      name: 'C-HR',
      prefix: 'C-hr',
      learnMore: 'https://www.toyota.com/c-hr/',
      buildYourOwn: 'https://www.toyota.com/configurator/build/step/model/year/2021/series/c-hr',
      accessories: 'https://www.toyota.com/c-hr/accessories/exterior',
      url: '/c-hr/walk-around',
      media: {
        mp4: `${cdnUrl}/assets/Videos/HeroVehicle/C-HR/C-HR_ProdSpec.mov`,
        webm: `${cdnUrl}/assets/Videos/HeroVehicle/C-HR/C-HR_ProdSpec.webm`,
      },
      disclaimer: `Extra-cost color.  Screen depiction accurate at time of posting.  Concentrating on the road should always be your first priority while driving.  iPhone® is a registered trademark of Apple Inc. All rights reserved.  Apps and services are subject to change at any time without notice. Data charges may apply. Apple CarPlay® functionality requires a compatible iPhone® connected with an approved data cable into the USB media port. Apple CarPlay® is a registered trademark of Apple Inc.  Android is a trademark of Google, LLC.  Vehicle user interface is a product of Google and its terms and privacy statement apply. To use Android Auto on your audio display, you'll need an Android Auto compatible vehicle and Android phone. For phone compatibility visit: https://www.android.com/auto/. Requires compatible smartphone connected with an approved data cable into the USB media port, and data plan rates apply. Apps and services vary by phone carrier and are subject to change at any time without notice. Android, Android Auto and Waze are trademarks of Google.  SiriusXM All Access trial length and service availability may vary by model, model year or trim.  SiriusXM© audio services require a subscription sold separately by Sirius XM Radio Inc. If you decide to continue service after your trial, the subscription plan you choose Will automatically renew thereafter and you Will be charged according to your chosen payment method at then- current rates. Fees and taxes apply. To cancel, you must call SiriusXM at 1-866-635-2349. See SiriusXM Customer Agreement for complete terms at www.siriusxm.com.  All fees and programming subject to change. Not all vehicles or devices are capable of receiving all services offered by SiriusXM. Current information and features may not be available in all locations, or on all receivers. © 2021 Sirius XM Radio Inc. SiriusXM and all related marks and Logos are trademarks of Sirius XM Radio Inc.`,
    },
    {},
  ],
  PartnerOptions: [
    {
      name: 'Sirius XM',
      href: 'https://www.siriusxm.com',
    },
    {
      name: 'Outfitters',
      href: 'https://www1.toyotaoutfitters.com/ecommerce/',
    },
    {
      name: 'Toyota Financial Services',
      href: 'https://www.toyotafinancial.com/us/en.html',
    },
  ],
  DealershipLocator: {
    name: 'Find Dealership',
    href: 'https://www.toyota.com/dealers/',
  },
  ExperienceOptions: [
    {
      name: 'T360° Theater',
      href: '/t360-theater',
    },
    {
      name: 'TRD Pro',
      href: '/trd-pro',
    },
    {
      name: 'Toyota Racing',
      href: '/toyota-racing',
    },
    {
      name: 'Mobility',
      href: '/mobility',
    },
    {
      name: 'Team USA',
      href: '/team-toyota',
    },
  ],
  Drivers: [
    //NASCAR CUP SERIES
    {
      name: 'Denny Hamlin #11',
      categorie: 'NASCAR CUP SERIES',
      href: 'https://www.toyota.com/racing/nascar-cup/drivers/denny-hamlin',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/denny-hamlin.${extension}`,
    },
    {
      name: 'Kyle Busch #18',
      categorie: 'NASCAR CUP SERIES',
      href: 'https://www.toyota.com/racing/nascar-cup/drivers/kyle-busch',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/kyle-busch.${extension}`,
    },
    {
      name: 'Martin Truex Jr. #19',
      categorie: 'NASCAR CUP SERIES',
      href: 'https://www.toyota.com/racing/nascar-cup/drivers/martin-truex-jr-',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/martin-truexjr.${extension}`,
    },
    {
      name: 'Christopher Bell #20',
      categorie: 'NASCAR CUP SERIES',
      href: 'https://www.toyota.com/racing/nascar-cup/drivers/christopher-bell',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/chris-bell.${extension}`,
    },
    {
      name: 'Bubba Wallace #23',
      categorie: 'NASCAR CUP SERIES',
      href: 'https://www.toyota.com/racing/nascar-cup/drivers/bubba-wallace',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/bubba-wallace.${extension}`,
    },
    //NASCAR XFINITY SERIES
    {
      name: 'Harrison Burton',
      categorie: 'NASCAR XFINITY SERIES',
      href: 'https://www.toyota.com/racing/nascar-stock/drivers/harrison-burton',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/harrison-burton.${extension}`,
    },
    {
      name: 'Santino Ferrucci',
      categorie: 'NASCAR XFINITY SERIES',
      href: 'https://www.toyota.com/racing/nascar-stock/drivers/santino-ferrucci-',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/santino-ferrucci.${extension}`,
    },
    {
      name: 'Brandon Gdovic',
      categorie: 'NASCAR XFINITY SERIES',
      href: 'https://www.toyota.com/racing/nascar-stock/drivers/brandon-gdovic',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/brandon-gdovic.${extension}`,
    },
    {
      name: 'Daniel Hemric',
      categorie: 'NASCAR XFINITY SERIES',
      href: 'https://www.toyota.com/racing/nascar-stock/drivers/daniel-hemric',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/daniel-hemric.${extension}`,
    },
    {
      name: 'Brandon Jones',
      categorie: 'NASCAR XFINITY SERIES',
      href: 'https://www.toyota.com/racing/nascar-stock/drivers/brandon-jones',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/brandon-jones.${extension}`,
    },
    //NASCAR CAMPING WORLD TRUCK SERIES
    {
      name: 'Matt Crafton',
      categorie: 'NASCAR CAMPING WORLD TRUCK SERIES',
      href: 'https://www.toyota.com/racing/nascar-truck/drivers/matt-crafton',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/matt-crafton.${extension}`,
    },
    {
      name: 'Christian Eckes',
      categorie: 'NASCAR CAMPING WORLD TRUCK SERIES',
      href: 'https://www.toyota.com/racing/nascar-truck/drivers/christian-eckes',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/christian-eckes.${extension}`,
    },
    {
      name: 'Grant Enfinger',
      categorie: 'NASCAR CAMPING WORLD TRUCK SERIES',
      href: 'https://www.toyota.com/racing/nascar-truck/drivers/grant-enfinger',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/grant-enfinger.${extension}`,
    },
    {
      name: 'Stewart Friesen',
      categorie: 'NASCAR CAMPING WORLD TRUCK SERIES',
      href: 'https://www.toyota.com/racing/nascar-truck/drivers/stewart-friesen',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/stewart-friesen.${extension}`,
    },
    {
      name: 'Austin Hill',
      categorie: 'NASCAR CAMPING WORLD TRUCK SERIES',
      href: 'https://www.toyota.com/racing/nascar-truck/drivers/austin-hill',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/austin-hill.${extension}`,
    },
    {
      name: 'Derek Kraus',
      categorie: 'NASCAR CAMPING WORLD TRUCK SERIES',
      href: 'https://www.toyota.com/racing/nascar-truck/drivers/derek-kraus',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/derek-kraus.${extension}`,
    },
    {
      name: 'John Hunter Nemechek',
      categorie: 'NASCAR CAMPING WORLD TRUCK SERIES',
      href: 'https://www.toyota.com/racing/nascar-truck/drivers/john-hunter-nemechek',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/johnhunter-nemechek.${extension}`,
    },
    {
      name: 'Ben Rhodes',
      categorie: 'NASCAR CAMPING WORLD TRUCK SERIES',
      href: 'https://www.toyota.com/racing/nascar-truck/drivers/ben-rhodes',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/ben-rhodes.${extension}`,
    },
    {
      name: 'Johnny Sauter',
      categorie: 'NASCAR CAMPING WORLD TRUCK SERIES',
      href: 'https://www.toyota.com/racing/nascar-truck/drivers/johnny-sauter',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/johnny-sauter.${extension}`,
    },
    {
      name: 'Chandler Smith',
      categorie: 'NASCAR CAMPING WORLD TRUCK SERIES',
      href: 'https://www.toyota.com/racing/nascar-truck/drivers/chandler-smith',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/chandler-smith.${extension}`,
    },
    //NHRA Top Fuel
    {
      name: 'Atron Brown',
      categorie: 'NHRA Top Fuel',
      href: 'https://www.toyota.com/racing/nhra/drivers/antron-brown',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/antron-brown.${extension}`,
    },
    {
      name: 'Doug Kalitta',
      categorie: 'NHRA Top Fuel',
      href: 'https://www.toyota.com/racing/nhra/drivers/doug-kalitta',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/doug-kalitta.${extension}`,
    },
    {
      name: 'Shawn Langdon',
      categorie: 'NHRA Top Fuel',
      href: 'https://www.toyota.com/racing/nhra/drivers/shawn-langdon',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/shawn-langdon.${extension}`,
    },
    //NHRA Funny Car
    {
      name: 'Alexis Dejoria',
      categorie: 'NHRA Funny Car',
      href: 'https://www.toyota.com/racing/nhra/drivers/alexis-dejoria',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/alexis-dejoria.${extension}`,
    },
    {
      name: 'J.R. Todd',
      categorie: 'NHRA Funny Car',
      href: 'https://www.toyota.com/racing/nhra/drivers/j-r--todd',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/jr-todd.${extension}`,
    },
    //FORMULA DRIFT
    {
      name: 'Fredric Aasbo',
      categorie: 'FORMULA DRIFT',
      href: 'https://www.toyota.com/racing/formula-drift/drivers/fredric-aasbo',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/fredric-aasbo.${extension}`,
    },
    {
      name: 'Jhonattan Castro',
      categorie: 'FORMULA DRIFT',
      href: 'https://www.toyota.com/racing/formula-drift/drivers/jhonnattan-castro',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/jhonnattan-castro.${extension}`,
    },
    {
      name: 'Ken Gushi',
      categorie: 'FORMULA DRIFT',
      href: 'https://www.toyota.com/racing/formula-drift/drivers/ken-gushi',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/ken-gushi.${extension}`,
    },
    {
      name: 'Ryan Tuerck',
      categorie: 'FORMULA DRIFT',
      href: 'https://www.toyota.com/racing/formula-drift/drivers/ryan-tuerck',
      thumbnail: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Racing/Racing Drivers/${extension}/ryan-tuerck.${extension}`,
    },
  ],
  Sound: {
    ToggleSwitchLetsGo: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Sounds/toogle-switch-letsGo.wav`,
    RobotMechanismAnimation: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Sounds/robot-mechanish-animation.wav`,
    RobotMechanismAnimationTRD: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Sounds/robot-mechanism-animationTRD.wav`,
    BackToOverView: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Sounds/backToOverview.wav`,
    ButtonTitleFlyOut: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Sounds/buttonTitleFlyOut.wav`,
    PrizeWheel: `${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Sounds/prize_wheel.wav`
  },
  prefixUrlNames:[
    {url:'toyota-racing', car:'Toyota_Racing'},
    {url:'supra', car:'Supra'},
    {url:'highlander', car:'Highlander'},
    {url:'trd-pro', car:'TRD_Pro'},
    {url:'rav4hybrid', car:'RAV4_Hybrid'},
    {url:'sienna', car:'Sienna'},
    {url:'venza', car:'Venza'},
    {url:'mobility', car:'Mobility'},
    {url:'mirai', car:'Mirai'},
    {url:'camryhybrid', car:'CamryHybrid'},
    {url:'team-toyota', car:'Team_Toyota'}
  ]
};

export default toyota;
