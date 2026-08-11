const cdnUrl = 'https://d28z8i57b3adv3.cloudfront.net';
//const extension = window.webp ? 'webp' : 'png'; 

const survey = {

    MiniVan:[
        {
            name:'Corolla',
            formValue: 'Corolla',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-corolla.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-corolla_down_state.png`
            }
        },
        {
            name:'Corolla Hybrid',
            formValue: 'Corolla Hybrid',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-corollaHybrid.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-corollaHybrid_down_state.png`
            }
        },
        {
            name:'Corolla Hatchback',
            formValue: 'Corolla HB',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-corollaHB.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-corollaHB_down_state.png`
            }
        },
        {
            name:'Camry',
            formValue: 'Camry',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-camry.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-camry_down_state.png`
            }
        },
        {
            name:'Camry Hybrid',
            formValue: 'Camry Hybrid',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-camry-hybrid.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-camry-hybrid_down_state.png`
            }
        },
        {
            name:'Prius',
            formValue:'Prius',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-prius.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-prius_down_state.png`
            }
        },
        {
            name:'Prius Prime',
            formValue:'Prius Prime',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-priusPrime.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-priusPrime_down_state.png`
            }
        },
        {
            name:'Avalon',
            formValue:'Avalon',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-avalon.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-avalon_down_state.png`
            }
        },
        {
            name:'Avalon Hybrid',
            formValue:'Avalon Hybrid',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-avalonHybrid.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-avalonHybrid_down_state.png`
            }
        },
        {
            name:'Mirai',
            formValue:'Mirai',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-mirai.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-mirai_down_state.png`
            }
        },
        {
            name:'86',
            formValue:'Toyota 86',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-toyota86.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-toyota86_down_state.png`
            }
        },
        {
            name:'GR Supra',
            formValue:'GR Supra',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-grsupra.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-grsupra_down_state.png`
            }
        },
        {
            name: 'Sienna',
            formValue: 'Sienna',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-sienna.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/MiniVan/ba-toyota-sienna_down_state.png`
            }
        }
    ],
    Truck:[
        {
            name:'Tacoma',
            formValue: 'Tacoma',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Truck/ba-toyota-tacoma.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Truck/ba-toyota-tacoma_down_state.png`
            },
            size:{
                width:65
            }
        },
        {
            name:'Tundra',
            formValue: 'Tundra',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Truck/ba-toyota-tundra.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Truck/ba-toyota-tundra_down_state.png`
            },
            size:{
               
            }
        }
    ],
    Crossover:[
        {
            name:'C-HR',
            formValue: 'C-HR',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Crossover/ba-toyota-chr.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Crossover/ba-toyota-chr_down_state.png`
            }
        },
        {
            name:'RAV4',
            formValue: 'RAV4',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Crossover/ba-toyota-rav4.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Crossover/ba-toyota-rav4_down_state.png`
            }
        },
        {
            name:'RAV4 Hybrid',
            formValue:'RAV4 Hybrid',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Crossover/ba-toyota-rav4hybrid.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Crossover/ba-toyota-rav4hybrid_down_state.png`
            }
        },
        {
            name:'RAV4 Prime',
            formValue:'RAV4 Prime',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Crossover/ba-toyota-2021rav4Prime.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Crossover/ba-toyota-2021rav4Prime_down_state.png`
            }
        },
        {
            name:'Venza',
            formValue:'Venza',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Crossover/ba-toyota-21venza.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Crossover/ba-toyota-21venza_down_state.png`
            }
        },
        {
            name:'Highlander',
            formValue:'Highlander',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Crossover/ba-toyota-highlander.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Crossover/ba-toyota-highlander_down_state.png`
            }
        },
        {
            name:'Highlander Hybrid',
            formValue:'Highlander Hybrid',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Crossover/ba-toyota-highlanderHybrid.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Crossover/ba-toyota-highlanderHybrid_down_state.png`
            }
        },
        {
            name:'4Runner',
            formValue:'4Runner',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Crossover/ba-toyota-fourRunner.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Crossover/ba-toyota-fourRunner_down_state.png`
            }
        },
        {
            name:'Sequoia',
            formValue:'Sequoia',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Crossover/ba-toyota-sequoia.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Crossover/ba-toyota-sequoia_down_state.png`
            }
        },
        {
            name:'Land Cruiser',
            formValue:'Land Cruiser',
            image:{
                activeUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Crossover/ba-toyota-land-cruiser.png`,
                downStateUrl:`${cdnUrl}/cdn/Toyota_VirtualShow_Assets/Images/Survey/Vehicles/Crossover/ba-toyota-land-cruiser_down_state.png`
            }
        }
    ],
    ConceptVehicles:['FT-4X', 'Fun Vi 2', 'i-ROAD', 'Human Support Robot', 'Walking Area BEV', 'Rhombus', 'Concept-i/LQ', 'Micro Palette', 'E-Palette']
   
}

export default survey;