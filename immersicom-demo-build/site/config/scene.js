const cdnUrl = window.location;//'https://d28z8i57b3adv3.cloudfront.net';

// const extension = window.webp ? 'webp' : 'png';
var extension;

(function () {
    // check for webp browser support
    extension = window.Modernizr.webp ? 'webp' : 'png';

    var appConfig = {
        Lobby: {
            webm: 'assets/Lobby/webm/Immersicom_Lobby_Loop.webm',
            mov: 'assets/Lobby/HEVC/Immersicom_Lobby_Loop.mov',
            mediaIntroTime: null,
            single:{
                webm:'assets/FullScreenVideos/webm/IMMERSICOM_OPEN_ProRes.webm',
                mov:'assets/FullScreenVideos/HEVC/IMMERSICOM_OPEN_ProRes.mov'
            }
        },
        Animation: {
            webm: 'assets/Animation/webm/Animaton_Camera_Move.webm',
            mov: 'assets/Animation/HEVC/Animaton_Camera_Move.mov',
            mediaIntroTime: 3,
            title:'Animation',
            textCard: 'Extensive capabilities and experience creating motion graphics, 3D animation, visual effects and video. Here are examples of our work from some of the industries that we serve: Aerospace, Energy, Automotive, Healthcare, Architectural, Technical and Industrial.',
            single:{
                webm:'assets/FullScreenVideos/webm/Immersicom_Animation_Reel.webm',
                mov:'assets/FullScreenVideos/HEVC/Immersicom_Animation_Reel.mov'
            }

        },
        Gamification: {
            webm: 'assets/Gamification/webm/Gamification_Camera_Move.webm',
            mov: 'assets/Gamification/HEVC/Gamification_Camera_Move.mov',
            mediaIntroTime: 2,
            title:'Gamification',
            textCard: 'Fun and serious games that provide branding as well as an explanation of the benefits of your products and services. Single or multiplayer games drive traffic to your booth or website. Immersicom games combine: lead capture, a live presentation, interactive learning and a memorable experience.',
            single:{
                webm:'assets/FullScreenVideos/webm/Immersicom_Gamification_Reel.webm',
                mov:'assets/FullScreenVideos/HEVC/Immersicom_Gamification_Reel.mov',
            }

        },
        VirtualProduct: {
            webm: 'assets/Virtual_Product/webm/Virtual_Product_Camera_Move2.webm',
            mov: 'assets/Virtual_Product/HEVC/Virtual_Product_Camera_Move2.mov',
            sequence: [],
            mediaIntroTime: 3,
            title:'Virtual Products',
            textCard: 'Explore virtual models of vehicles, equipment and machinery utilizing the latest in real-time 3D technology. Interactively rotate the model, zoom in, isolate parts and features. Configure and swap components to see new capabilities and results. Combine interactive info-graphic charts to quickly experience the benefits and differentiators of your products.',
            disclaimer:' * The models and associated information are for demonstration purposes only, some of the information may not be accurate representations of the actual products.'

        },
        Interactive: {
            webm: 'assets/Interactive_Touchless/webm/Interactive_Touchless_Camera_Move.webm',
            mov: 'assets/Interactive_Touchless/HEVC/Interactive_Touchless_Camera_Move.mov',
            mediaIntroTime: 4,
            title:'Interactive',
            textCard: 'A wide variety of interactive options available; interactive walls, transparent OLED, gesture recognition technologies, interactive floors and more. Over 25 years of experience creating interactive apps and content that far exceed what can be achieved with typical applications like PowerPoint.',
            single:{
                webm:'assets/FullScreenVideos/webm/Immersicom_Interactive_Reel.webm',
                mov:'assets/FullScreenVideos/HEVC/Immersicom_Interactive_Reel.mov'
            }
        },
        EngagementCenters: {
            webm: 'assets/Customer_Engagement/webm/Customer_Engagement_Camera_Move.webm',
            mov: 'assets/Customer_Engagement/HEVC/Customer_Engagement_Camera_Move.mov',
            mediaIntroTime: 3,
            title:'Customer Engagement Centers',
            textCard: 'We design digital experiences for customer engagement centers that combine purpose-built content and the latest in interactive display technologies. We explain your products and solutions in ways that are unique and engaging.  In addition to working with onsite facilities Immersicom has the ability to create a “digital twin” of your center so that visitors can virtually tour and explore your offerings online.',
            single:{
                webm:'assets/FullScreenVideos/webm/Immersicom_Customer_Engagement_Reel.webm',
                mov:'assets/FullScreenVideos/HEVC/Immersicom_Customer_Engagement_Reel.mov',
            }

        },
        VirtualExhibits: {
            webm: 'assets/Virtual_Booth/webm/Virtual_Booth_Camera_Move.webm',
            mov: 'assets/Virtual_Booth/HEVC/Virtual_Booth_Camera_Move.mov',
            mediaIntroTime: 3,
            title:'Virtual Exhibits',
            textCard: 'We provide a host of immersive web-based solutions which utilize the latest interactive tools for the Internet. Users can explore and become immersed in real-time 3D tradeshow booths, products and environments.',
            single:{
                webm:'assets/FullScreenVideos/webm/Immersicom_Interactive_Reel.webm',
                mov:'assets/FullScreenVideos/HEVC/Immersicom_Interactive_Reel.mov'
            }
        },
        VirtualReality: {
            webm: 'assets/Virtual_Reality/webm/Virtual_Reality_Camera_Move.webm',
            mov: 'assets/Virtual_Reality/HEVC/Virtual_Reality_Camera_Move.mov',
            mediaIntroTime: 3,
            title:'Virtual Reality',
            textCard: 'We have decades of experience creating virtual reality experiences for marketing and training applications. We take the “right tool for the job” approach when it comes to virtual reality. We learn what your objectives are, choose the right hardware and develop immersive content that meets those requirements. We’ve developed for phone based VR, HTC Vive, Oculus and other VR hardware systems.',
            single:{
                webm:'assets/FullScreenVideos/webm/Immersicom_Virtual_Reality_Reel.webm',
                mov:'assets/FullScreenVideos/HEVC/Immersicom_Virtual_Reality_Reel.mov'
            }
        },
        AugmentedReality: {
            webm: 'assets/Augmented Reallity/webm/Augmented_Reality_Camera_Move.webm',
            mov: 'assets/Augmented Reallity/HEVC/Augmented_Reality_Camera_Move.mov',
            mediaIntroTime: 4,
            title:'Augmented Reality',
            textCard: 'Our team has developed numerous augmented reality applications for marketing and training. From marker/image based AR, Hololens, Magic Leap, iPad, tablet and web-based AR, we have a multitude of solutions designed to meet your needs.',
            single:{
                webm:'assets/FullScreenVideos/webm/Immersicom_Augmented_Reality_Reel.webm',
                mov:'assets/FullScreenVideos/HEVC/Immersicom_Augmented_Reality_Reel.mov'
            }
        },
        Contact:{
            webm:'assets/Contact/webm/Info.webm',
            mov:'assets/Contact/HEVC/Info.mov',
        },
        scenarios:['Lobby','Animation','Gamification','VirtualProduct','Interactive','EngagementCenters','VirtualExhibits','VirtualReality','AugmentedReality','Contact'],
        intersection: {       
            webm:'assets/SectionBySection/webm/Animation_to_Interactive_Move.webm',
            mov:'assets/SectionBySection/HEVC/Animation_to_Interactive_Move.mov',
        }
    };

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
        module.exports = appConfig;
    else
        window.appConfig = appConfig;
})();