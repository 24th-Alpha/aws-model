import {curve, heroBackground} from "../assets";
import Button from "./Button";
import Section from "./Section";
import {BackgroundCircles, BottomLine, Gradient} from "./design/Hero";
import {ScrollParallax} from "react-just-parallax";
import {useRef, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import loading from '../assets/loading.png';

const Hero = () => {
    const parallaxRef = useRef(null);
    const [files, setFiles] = useState([null, null, null]);
    const [selectedOption, setSelectedOption] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('');

    const imageSets = [
        [
            '../../img1.jpeg',
            '../../img2.jpeg',
            '../../img3.jpeg'
        ],
        [
            '../../img5.jpeg',
            '../../example_img1.jpeg',
            '../../img4.jpeg',

        ],
        [
            '../../1_e.jpg',
            '../../closed_hands.jpeg',
            '../../img6.jpg'
        ]
    ];

    // Randomly select an image set when the component mounts
    useEffect(() => {
        const randomSet = imageSets[Math.floor(Math.random() * imageSets.length)];
        setFiles(randomSet);
    }, []); // Runs only on initial render

    const handleChang = (index) => (event) => {
        const file = event.target.files[0];
        if (file) {
            const newFiles = [...files];
            newFiles[index] = URL.createObjectURL(file);
            setFiles(newFiles);
        }
    };

    const toBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleChange = (index) => async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                const base64 = await toBase64(file);
                const newFiles = [...files];
                newFiles[index] = base64;
                setFiles(newFiles);
                console.log(`File at index ${index} updated`, newFiles);
            } catch (error) {
                console.error('Error converting file to Base64:', error);
            }
        }
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const uploadImages = async () => {
        setIsLoading(true);
        setLoadingMessage('Please wait for 2 minutes...');
        const apiKey = '!!SZPM1HKGc0462f85-7333-4cd8-80c4-12ee7e63b80f'; // API key

        const personImageBase64 = files[0];
        const clothImageBase64 = files[1];

        try {
            const response = await fetch('http://localhost:8000/api/tryon/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    api_key: apiKey,
                    cloth_image: clothImageBase64,
                    person_image: personImageBase64,
                    category: selectedOption.toLowerCase(),
                }),
            });

            const responseData = await response.json();
            console.log('Try-On Result:', responseData);

            const newFiles = [...files];
            newFiles[2] = responseData.result_image;
            setFiles(newFiles); // Update the third image with the result from the backend

        } catch (error) {
            console.error('Error uploading images:', error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
                setLoadingMessage('');
            }, 120000); // Set to hide the loading state after 2 minutes
        }
    };

    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="hero"
        >
            <div className="container relative" ref={parallaxRef}>
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                    <h1 className="h1 mb-6">
                        See Clothes ON You &nbsp;Instantly!&nbsp;with {` `}
                        <span className="inline-block relative">
                            Revachi{" "}
                            <img
                                src={curve}
                                className="absolute top-full left-0 w-full xl:-mt-2"
                                width={624}
                                height={28}
                                alt="Curve"
                            />
                        </span>
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        How to use: 1st box upload your image, 2nd box upload cloth image, select category. It’s that simple, For MAN & WOMEN both.
                    </p>
                    <a href="/#how-to-use">
                        <Button>
                            Get API
                        </Button>
                    </a>
                </div>
                <div className="relative">
                    <div className="relative z-4 p-0.5 rounded-2xl bg-conic-gradient overflow-hidden">
                        <div className="relative bg-n-8 rounded-[1rem] p-4">
                            <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-1 md:gap-4 md:items-start md:relative">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:grid-cols-1">
                                    {[0, 1, 2].map((index) => (
                                        <div
                                            key={index}
                                            className={`relative border-2 border-dashed border-gray-300 rounded-md overflow-hidden m-2 ${
                                                index === 2 ? 'flex items-center justify-center' : ''
                                            } ${index === 2 ? 'w-full h-auto' : 'w-[370px] h-[512px]'} max-w-full`}
                                        >
                                            {files[index] ? (
                                                <img
                                                    src={files[index]}
                                                    alt={`Uploaded Preview ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="flex items-center justify-center h-full text-gray-400">
                                                    <span>Upload Image</span>
                                                </div>
                                            )}
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleChange(index)}
                                                className="absolute inset-0 opacity-0 cursor-pointer"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Dropdown menu and button container */}
                                <div className="flex flex-col items-center mt-4 mb-4">
                                    <select
                                        value={selectedOption}
                                        onChange={handleOptionChange}
                                        className="py-2 px-3 border text-black border-gray-300 rounded-md bg-white w-full max-w-[250px] mb-4 md:mb-0"
                                    >
                                        <option value="" disabled>Select an option</option>
                                        <option value="shirt">Shirt</option>
                                        <option value="hoodie">Hoodie</option>
                                        <option value="sweater">Sweater</option>
                                        <option value="jacket">Jacket</option>
                                        <option value="T-Shirt">T-Shirt</option>
                                        <option value="Pants">Pants</option>
                                        <option value="Shorts">Shorts</option>
                                        <option value="Dress">Dress</option>
                                        <option value="crop-top">Crop Top</option>
                                    </select>

                                    <button
                                        className="px-4 py-2 bg-white text-black rounded flex justify-center items-center w-full max-w-[200px]"
                                        onClick={uploadImages}
                                    >
                                        {isLoading ? (
                                            <>
                                                <img src={loading} alt="Loading" className="w-6 h-6 animate-spin"/>
                                                <p className="ml-2">Please wait for 2 minutes...</p>
                                            </>
                                        ) : (
                                            'Upload and Try On'
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Gradient/>
                    </div>

                    <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                        <img
                            src={heroBackground}
                            className="w-full"
                            width={1440}
                            height={1800}
                            alt="hero"
                        />
                    </div>

                    <BackgroundCircles/>
                </div>
            </div>

            <BottomLine/>
        </Section>
    );
};

export default Hero;
