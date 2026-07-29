import photoFencing from './assets/photobooth/fencing.base64'
import photoStakeBoarding from './assets/photobooth/skateboarding.base64'
import photoSurfing from './assets/photobooth/surfing.base64'
import photoSwimming from './assets/photobooth/swimming.base64'
import photoField from './assets/photobooth/field.base64'
import photoRacing from './assets/photobooth/racing.base64'

const cdnUrl = 'https://d28z8i57b3adv3.cloudfront.net';
const localUrl = window.location.origin;
const extension = window.webp ? 'webp' : 'png';


const photo = {
  TeamToyota: {
    backTo: '/team-toyota',
    logo: {
      url: `${cdnUrl}/assets/HeroCars/Team/Assets/TOY_VIRTUAL_Team_Logo_Black.svg`,
      href: 'https://www.toyota.com/team-toyota/',
    },
    background: photoFencing,
    thumbnail: [
      {
        src: photoFencing,
        name: 'fancing',
      },
      {
        src: photoSurfing,
        name: 'surfing',
      },
      {
        src: photoStakeBoarding,
        name: 'skatebording',
      },
      {
        src: photoSwimming,
        name: 'swimming',
      },
      {
        src: photoField,
        name: 'track and field',
      },
    ],
    content: {
      Title: 'Show your Support for #TeamToyota!',
      Text:
        '<p>Select your background and create your customized Olympic and Paralympic-inspired photo strip.</p> <br/> <p>Click below to visit Toyota.com and learn more about Team Toyota and our commitment to Olympic and Paralympic athletes.</p>',
    },
    moreInfo: {
      href: 'https://www.toyota.com/team-toyota/',
    },
    ResultText: {
      header: 'Share with Friends and Family!',
      paragraphs: [
        {
          text:
            'Share your Olympic and Paralympic-inspired photo strip with friends and family on social media with the hashtag #TeamToyota.',
        },
        {
          text:
            'Sign up to receive email communications about Toyota vehicles, services, special offers and more.',
        },
      ],
    }
  },
  ToyotaRacing: {
    backTo: '/toyota-racing',
    logo: {
      url: `${cdnUrl}/assets/HeroCars/Racing/Assets/TOY_VIRTUAL_Racing_Black.svg`,
      href: 'https://www.toyota.com/racing/other-series',
    },
    background: photoRacing,
    content: {
      Title: "Welcome to the Winner's Circle",
      Text:
        "<p>Show us your best pose as you create a celebratory photo in the Winner's Circle.</p> <br/> <p>Click below to visit Toyota.com and learn more about Toyota Racing.</p>",
    },
    moreInfo: {
      href: 'https://www.toyota.com/racing',
    },
    ResultText: {
      header: 'Share with Friends and Family!',
      paragraphs: [
        {
          text:
            'Share your celebratory win with friends and family on social media with the hashtag #ToyotaRacing & #TeamToyota',
        },
        {
          text:
            'Sign up to receive email communications about Toyota vehicles, services, special offers and more.',
        },
      ],
    }
  },
 
};

export default photo;
