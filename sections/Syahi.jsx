import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ComingSoon from "./ComingSoon";

export default function Syahi(props) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: document.querySelector("#scrollable-div"),
                threshold: 0.5,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return (
        <section
            className={`flex flex-col justify-start items-center h-auto max-[850px]:gap-10 ${props?.className} py-10 md:py-0`}
            id="syahi"
            ref={sectionRef}
        >
            <div className="h-screen border-white border-2- flex justify-center items-center w-[70%] gap-16 max-[1024px]:w-[70%] max-[850px]:w-[60%] max-[720px]:w-[80%] max-[530px]:w-[90%] max-[280px]:w-[95%] max-[850px]:h-max lg:mt-28">
                <div
                    className="flex w-full justify-center items-center relative translate-y-5 max-[850px]:flex-col max-[850px]:w-[90%] max-[850px]:gap-5 max-[850px]:h-max"
                    onMouseMove={handleMouseMove}
                >
                    <div className="absolute min-[850px]:-top-[28%] w-[80%] left-1/2 -translate-x-1/2 max-[850px]:relative max-[850px]:translate-x-0 max-[850px]:left-0 max-[850px]:w-full">
                        <h1 className="text-6xl uppercase pb-2 max-[1175px]:text-5xl max-[850px]:text-4xl max-[530px]:text-3xl max-[280px]:text-2xl">
                            Syahi in
                        </h1>
                        <h1 className="text-7xl uppercase w-full text-center max-[1175px]:text-6xl max-[850px]:text-5xl max-[530px]:text-left max-[530px]:text-4xl max-[280px]:text-3xl">
                            symphony 2023
                        </h1>
                    </div>
                    <p className="text-justify text-lg flex-[0.3] max-[1175px]:text-md max-[1175px]:leading-5 max-[850px]:hidden">
                        KK Live, Aadar Malik, Nishant Suri, The Yellow Diary,
                        Project 91, Anubhav Bassi, Benny Dayal Live & Rahul Dua
                        you name it! Symphony has been hosting the finest
                        singers, comedians, and bands since 1987!
                    </p>
                    <div
                        className="w-[24rem] flex-[0.6] relative floating max-[1175px]:w-[20rem] max-w-[1024px]:w-[18rem] max-w-[768px]:w-[14rem] max-w-[425px]:w-[10rem] max-[850px]:mb-5 max-[280px]:w-[12rem]"
                        style={{
                            transform: `translate(-${position.x / 70}px, -${
                                position.y / 70
                            }px)`,
                        }}
                    >
                        <Image
                            src={"/pen.png"}
                            alt="pen"
                            width={100}
                            height={100}
                            className="absolute w-[18rem] z-0 left-[45%] -translate-x-1/2 -bottom-6 blur-2xl opacity-80"
                            draggable={false}
                        />
                        <div
                            className="absolute w-[21rem] glow h-[21rem] border-[#eaeaea] border-[3px] rounded-full -bottom-7 right-[40%] translate-x-1/2 max-[1200px]:w-[18rem] max-[1200px]:h-[18rem] max-[1200px]:-bottom-5 max-[1024px]:w-[16rem] max-[1024px]:h-[16rem] max-[280px]:w-[12rem] max-[280px]:h-[12rem]"
                            style={{
                                transform: `translateX(${
                                    50 + position.x / 700
                                }%`,
                            }}
                        ></div>
                        <Image
                            src={"/pen.png"}
                            alt="pen"
                            width={400}
                            height={400}
                            className="m-auto w-[24rem] z-10 relative max-[1180px]:w-[21rem] max-[1024px]:w-[18rem]"
                            draggable={false}
                        />
                    </div>
                    <p className="text-justify text-lg flex-[0.3] max-[1175px]:text-md max-[1175px]:leading-5 max-[280px]:text-sm max-[850px]:text-[1rem] max-[850px]:pb-6">
                        <span className="min-[850px]:hidden">
                            From iconic performances to memorable laughs,
                            Symphony continues to bring top-notch talent and
                            unforgettable experiences to audiences for over
                            three decades!
                        </span>
                        From iconic performances to memorable laughs, Symphony
                        continues to bring top-notch talent and unforgettable
                        experiences to audiences for over three decades!
                    </p>
                </div>
            </div>
            <div className="h-auto border-white border-2- flex justify-center items-center w-[70%] relative max-[675px]:w-full max-[1024px]:h-auto">
                <ComingSoon />
            </div>
        </section>
    );
}
