import {check} from "../assets";
import {collabContent} from "../constants";
import Button from "./Button";
import Section from "./Section";
import {LeftCurve, RightCurve} from "./design/Collaboration";
import ImageSlider from "./ImageSlider.jsx";

const Collaboration = () => {
    return (
        <Section crosses>
            <div className="container lg:flex">
                <div className="max-w-[25rem]">
                    <h2 className="h2 mb-4 md:mb-8">
                        Clothes Try On for seamless collaboration
                    </h2>

                    <ul className="max-w-[22rem] mb-10 md:mb-14">
                        {collabContent.map((item) => (
                            <li className="mb-3 py-3" key={item.id}>
                                <div className="flex items-center">
                                    <img src={check} width={24} height={24} alt="check"/>
                                    <h6 className="body-2 ml-5">{item.title}</h6>
                                </div>
                                {item.text && (
                                    <p className="body-2 mt-3 text-n-4">{item.text}</p>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lg:ml-auto xl:w-[38rem] mt-4">
                    <div className="w-[24.5rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-[1.5rem]">
                        <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                            <ImageSlider/>
                        </div>
                    </div>
                    <LeftCurve/>
                    <RightCurve/>
                </div>
            </div>
        </Section>
    );
};

export default Collaboration;
