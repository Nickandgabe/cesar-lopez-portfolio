
const cdnUrl = window.origin;
// const cdnUrl = 'https://bebraingroup.com';
//const ext = window.Modernizr.webp ? 'webp' : 'png';
var ext = null;

    (function () {
        console.log(window.origin);
        // check for webp browser support
        ext = window.Modernizr.webp ? 'webp' : 'png';

        var productConfig = {
            Automotive: {
                webm: 'assets/Virtual_Product/Products/Supra_Dissolve/webm/Supra_Dissolve.webm',
                mov: 'assets/Virtual_Product/Products/Supra_Dissolve/HEVC/Supra_Dissolve.mov',
                assetsPath360: `${cdnUrl}/assets/Virtual_Product/Products/Supra_360/${ext}/Supra_360_{frame}.${ext}`,
                mediaIntroTime: 3,
                title:'Virtual Products',
                textCard: 'Explore virtual models of vehicles, equipment and machinery utilizing the latest in real-time 3D technology. Interactively rotate the model, zoom in, isolate parts and features. Configure and swap components to see new capabilities and results. Combine interactive info-graphic charts to quickly experience the benefits and differentiators of your products.',
                disclaimer: ' *The models and associated information are for demonstration purposes only, some of the information may not be accurate representations of the actual products.'
            },
            Healthcare: {
                webm: 'assets/Virtual_Product/Products/MRI_Dissolve/webm/MRI_Dissolve.webm',
                mov: 'assets/Virtual_Product/Products/MRI_Dissolve/HEVC/MRI_Dissolve.mov',
                assetsPath360: `${cdnUrl}/assets/Virtual_Product/Products/MRI_360/${ext}/MRI_360_{frame}.${ext}`
            },
            Defense: {
                webm: 'assets/Virtual_Product/Products/Blackhawk_Dissolve/webm/Blackhawk_Dissolve.webm',
                mov: 'assets/Virtual_Product/Products/Blackhawk_Dissolve/HEVC/Virtual_Product_Blackhawk_Dissolve.mov',
                assetsPath360: `${cdnUrl}/assets/Virtual_Product/Products/Blackhawk_360/${ext}/blackHawk_{frame}.${ext}`
            }
        };

        if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
            module.exports = productConfig;
        else
            window.productConfig = productConfig;
    })();

  