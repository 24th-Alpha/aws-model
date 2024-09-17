import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
} from "../assets";

export const navigation = [
    {
        id: "0",
        title: "Features",
        url: "#features",
    },
    {
        id: "1",
        title: "How to use",
        url: "#how-to-use",
    },
    {
        id: "2",
        title: "Pricing",
        url: "#pricing",
    },
    {
        id: "3",
        title: "Roadmap",
        url: "#roadmap",
    },
    {
        id: "4",
        title: "New account",
        url: "#signup",
        onlyMobile: true,
    },
    {
        id: "5",
        title: "Sign in",
        url: "#login",
        onlyMobile: true,
    },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
    "Upload Your photo wearing t-shirt and full pants ",
    "Upload  cloth photo",
    "Select category and submit",
];

export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
];

export const roadmap = [
    {
        id: "0",
        title: "Voice recognition",
        text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
        date: "May 2023",
        status: "done",
        imageUrl: roadmap1,
        colorful: true,
    },
    {
        id: "1",
        title: "Gamification",
        text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
        date: "May 2023",
        status: "progress",
        imageUrl: roadmap2,
    },
    {
        id: "2",
        title: "Chatbot customization",
        text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
        date: "May 2023",
        status: "done",
        imageUrl: roadmap3,
    },
    {
        id: "3",
        title: "Integration with APIs",
        text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
        date: "May 2023",
        status: "progress",
        imageUrl: roadmap4,
    },
];

export const collabText =
    "Integrate our API to add virtual try-on functionality to your website. Let your customers see how clothes will look on them before they buy.";

export const collabContent = [
    {
        id: "0",
        title: "Seamless Integration",
        text: collabText,
    },
    {
        id: "2",
        title: "Top-notch Security",
    },
    {
        id: "3",
        title: "Never share People's photos with Third Party",

    }
];

export const guide = [
    {
        id: "0",
        title: "Upload Photo in t-shirt and full pants (Don't upload photo in oversized t-shirt) ",

    },
    {
        id: "1",
        title: "Upload photo in shorts for short pant try on",
    },
    {
        id: "2",
        title: "Upload the photo of cloth",
    },
    {
        id: "3",
        title: "Photo should be clear and not blurry",
    },
];

export const collabApps = [
    {
        id: "0",
        title: "Figma",
        icon: figma,
        width: 26,
        height: 36,
    },
    {
        id: "1",
        title: "Notion",
        icon: notion,
        width: 34,
        height: 36,
    },
    {
        id: "2",
        title: "Discord",
        icon: discord,
        width: 36,
        height: 28,
    },
    {
        id: "3",
        title: "Slack",
        icon: slack,
        width: 34,
        height: 35,
    },
    {
        id: "4",
        title: "Photoshop",
        icon: photoshop,
        width: 34,
        height: 34,
    },
    {
        id: "5",
        title: "Protopie",
        icon: protopie,
        width: 34,
        height: 34,
    },
    {
        id: "6",
        title: "Framer",
        icon: framer,
        width: 26,
        height: 34,
    },
    {
        id: "7",
        title: "Raindrop",
        icon: raindrop,
        width: 38,
        height: 32,
    },
];

export const pricing = [
    {
        id: "0",
        title: "Freemium",
        description: "We change for verification only once.",
        price: "70",
        features: [
            "No Restriction on Tryon Usage for API",
        ],
    },

];

export const benefits = [
    {
        id: "0",
        title: "Enhanced Shopping Experience",
        text: "Allows users to virtually try on clothes, giving them a better idea of how items will look on them before purchasing.",
        backgroundUrl: "./src/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,

    },
    {
        id: "1",
        title: "Increased Conversion Rates",
        text: "By reducing uncertainty, customers are more likely to make a purchase, leading to higher conversion rates.",
        backgroundUrl: "./src/assets/benefits/card-2.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        id: "2",
        title: "Time-Saving",
        text: "Eliminates the need for customers to visit physical stores, saving time by trying on clothes virtually from anywhere.",
        backgroundUrl: "./src/assets/benefits/card-3.svg",
        iconUrl: benefitIcon3,
        imageUrl: benefitImage2,
    },
    {
        id: "3",
        title: "Selecting best Clothes",
        text: "Helps users select Best looking clothes on them from the huge Variety of clothes. ",
        backgroundUrl: "./src/assets/benefits/card-4.svg",
        iconUrl: benefitIcon4,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        id: "4",
        title: "Reduced Return Rates",
        text: "Helps customers make more informed purchase decisions, leading to fewer returns and exchanges.",
        backgroundUrl: "./src/assets/benefits/card-5.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        
    },
    {
        id: "5",
        title: "Cuts Photoshoot Cost",
        text: "Allow customers to see how clothes look on them virtually, reducing the need for expensive photoshoots with models.",
        backgroundUrl: "./src/assets/benefits/card-6.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
    },
];

export const socials = [
    {
        id: "0",
        title: "Discord",
        iconUrl: discordBlack,
        url: "#",
    },
    {
        id: "1",
        title: "Twitter",
        iconUrl: twitter,
        url: "#",
    },
    {
        id: "2",
        title: "Instagram",
        iconUrl: instagram,
        url: "#",
    },
    {
        id: "3",
        title: "Telegram",
        iconUrl: telegram,
        url: "#",
    },
    {
        id: "4",
        title: "Facebook",
        iconUrl: facebook,
        url: "#",
    },
];

export const reactCode = `
import React, { useState } from 'react';

const App = () => {
  const [clothImageBase64, setClothImageBase64] = useState('');
  const [personImageBase64, setPersonImageBase64] = useState('');

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImageChange = async (event, setImageBase64) => {
    const file = event.target.files[0];
    const base64 = await toBase64(file);
    setImageBase64(base64);
  };
 {/* CLOTH CATEGORY should be any one of the following :
   shirt
   hoodie
   sweater
   jacket
    Pants
    Shorts
    T-Shirt
    Dress
    crop-top
 */}
 
  const uploadImages = async () => {
    const apiKey = 'YOUR  API KEY';
    const category = 'CLOTH CATEGORY';

    const response = await fetch('http://localhost:8000/api/tryon/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: apiKey,
        cloth_image: clothImageBase64,
        person_image: personImageBase64,
        category: category,
      }),
    });

    const responseData = await response.json();
    console.log('Try-On Result:', responseData);
  };

  return (
      <div>
        <h1>Convert Image to Base64</h1>
        <input
            type="file"
            accept="image/*"
            onChange={(event) => handleImageChange(event, setClothImageBase64)}
        />
        <input
            type="file"
            accept="image/*"
            onChange={(event) => handleImageChange(event, setPersonImageBase64)}
        />
        <button onClick={uploadImages}>Upload Images</button>
      </div>
  );
};

export default App;

`;

export const angularCode = `
<!DOCTYPE html>
<html lang="en" ng-app="myApp">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image to Base64 Converter</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>
<body ng-controller="MainController">
 {/* CLOTH CATEGORY should be any one of the following :
   shirt
   hoodie
   sweater
   jacket
    Pants
    Shorts
    T-Shirt
    Dress
    crop-top
 */}
    <h1>Convert Image to Base64</h1>
    <input type="file" accept="image/*" ng-change="handleImageChange($event, 'cloth')">
    <input type="file" accept="image/*" ng-change="handleImageChange($event, 'person')">
    <button ng-click="uploadImages()">Upload Images</button>

    <script>
        angular.module('myApp', [])
            .controller('MainController', ['$scope', '$http', function($scope, $http) {
                $scope.clothImageBase64 = '';
                $scope.personImageBase64 = '';

                $scope.toBase64 = function(file) {
                    return new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => resolve(reader.result);
                        reader.onerror = (error) => reject(error);
                    });
                };

                $scope.handleImageChange = async function(event, type) {
                    const file = event.target.files[0];
                    const base64 = await $scope.toBase64(file);
                    if (type === 'cloth') {
                        $scope.clothImageBase64 = base64;
                    } else if (type === 'person') {
                        $scope.personImageBase64 = base64;
                    }
                };

                
                $scope.uploadImages = async function() {
                    const apiKey = 'YOUR API KEY';
                    const category = 'CLOTH CATEGORY';

                    const response = await $http.post('http://localhost:8000/api/tryon/', {
                        api_key: apiKey,
                        cloth_image: $scope.clothImageBase64,
                        person_image: $scope.personImageBase64,
                        category: category,
                    });

                    console.log('Try-On Result:', response.data);
                };
            }]);
    </script>
</body>
</html>
`

export const vueCode = `
<template>
 {/* CLOTH CATEGORY should be any one of the following :
   shirt
   hoodie
   sweater
   jacket
    Pants
    Shorts
    T-Shirt
    Dress
    crop-top
 */}
  <div>
    <h1>Convert Image to Base64</h1>
    <input
      type="file"
      accept="image/*"
      @change="handleImageChange($event, 'clothImageBase64')"
    />
    <input
      type="file"
      accept="image/*"
      @change="handleImageChange($event, 'personImageBase64')"
    />
    <button @click="uploadImages">Upload Images</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clothImageBase64: '',
      personImageBase64: '',
    };
  },
  methods: {
    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },
    async handleImageChange(event, imageType) {
      const file = event.target.files[0];
      const base64 = await this.toBase64(file);
      this[imageType] = base64;
    },
    async uploadImages() {
      const apiKey = 'YOUR API KEY';
      const category = 'CLOTH CATEGORY';

      const response = await fetch('http://localhost:8000/api/tryon/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: apiKey,
          cloth_image: this.clothImageBase64,
          person_image: this.personImageBase64,
          category: category,
        }),
      });

      const responseData = await response.json();
      console.log('Try-On Result:', responseData);
    },
  },
};
</script>
`