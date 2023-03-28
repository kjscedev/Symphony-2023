import { useState, useRef, useEffect } from "react";
import Image from "next/image";

let data = [
    {
        src: "/sponsors/2022/amrit.jpeg",
    },
    {
        src: "/sponsors/2022/belgian.jpeg",
    },
    {
        src: "/sponsors/2022/blogadda-og.png",
    },
    {
        src: "/sponsors/2022/Briflynews Logo.png",
    },
    {
        src: "/sponsors/2022/bull.png",
    },
    {
        src: "/sponsors/2022/Cali Logo's.png",
    },
    {
        src: "/sponsors/2022/digiboxx.jpg",
    },
    {
        src: "/sponsors/2022/dna.jpeg",
    },
    {
        src: "/sponsors/2022/easy.png",
    },
    {
        src: "/sponsors/2022/elan.jpeg",
    },
    {
        src: "/sponsors/2022/elearn.png",
    },
    {
        src: "/sponsors/2022/enerzal.jfif",
    },
    {
        src: "/sponsors/2022/festsinfo-final-logo-1.png",
    },
    {
        src: "/sponsors/2022/Free_Press_Logo.png",
    },
    {
        src: "/sponsors/2022/gaana.png",
    },
    {
        src: "/sponsors/2022/grabon.png",
    },
    {
        src: "/sponsors/2022/GV Logo - Green.png",
    },
    {
        src: "/sponsors/2022/HDFC Credila.jpg",
    },
    {
        src: "/sponsors/2022/icruze.webp",
    },
    {
        src: "/sponsors/2022/indian express.jpg",
    },
    {
        src: "/sponsors/2022/ishq.png",
    },
    {
        src: "/sponsors/2022/junos.jpeg",
    },
    {
        src: "/sponsors/2022/know.png",
    },
    {
        src: "/sponsors/2022/kommune.png",
    },
    {
        src: "/sponsors/2022/lenphor.png",
    },
    {
        src: "/sponsors/2022/love and hugs.jpeg",
    },
    {
        src: "/sponsors/2022/Love&Huggs_Logo.png",
    },
    {
        src: "/sponsors/2022/metvy.jpeg",
    },
    {
        src: "/sponsors/2022/MOHA-Logo.png",
    },
    {
        src: "/sponsors/2022/mychoice.png",
    },
    {
        src: "/sponsors/2022/mystic.png",
    },
    {
        src: "/sponsors/2022/NB Logo.jpg",
    },
    {
        src: "/sponsors/2022/noticebard-logo-o.svg",
    },
    {
        src: "/sponsors/2022/oxycool.png",
    },
    {
        src: "/sponsors/2022/plum.png",
    },
    {
        src: "/sponsors/2022/polaroid.jpg",
    },
    {
        src: "/sponsors/2022/proche.jpeg",
    },
    {
        src: "/sponsors/2022/provantage.png",
    },
    {
        src: "/sponsors/2022/raag aavatar.png",
    },
    {
        src: "/sponsors/2022/readomania.png",
    },
    {
        src: "/sponsors/2022/Rohan Dance Academy.jpeg",
    },
    {
        src: "/sponsors/2022/sam.png",
    },
    {
        src: "/sponsors/2022/shaka.jpg",
    },
    {
        src: "/sponsors/2022/shristi.jfif",
    },
    {
        src: "/sponsors/2022/splinters.png",
    },
    {
        src: "/sponsors/2022/studio.jpg",
    },
    {
        src: "/sponsors/2022/suk.png",
    },
    {
        src: "/sponsors/2022/sundaram.jpg",
    },
    {
        src: "/sponsors/2022/Tinkle-Logo.png",
    },
    {
        src: "/sponsors/2022/uddo.jpg",
    },
    {
        src: "/sponsors/2022/uk14.jfif",
    },
    {
        src: "/sponsors/2022/uti.jpeg",
    },
    {
        src: "/sponsors/2022/voda.webp",
    },
    {
        src: "/sponsors/2022/Zenzi.png",
    },
];

export default function Sponsor(props) {
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
            className={`flex flex-col justify-start items-center h-auto max-[850px]:gap-10 ${props?.className} py-10 lg:py-0`}
            ref={sectionRef}
            id={"sponsors"}
        >
            <div className="flex flex-col justify-center items-center gap-10 w-[80%] max-[850px]:w-[70%] max-[600px]:w-[90%] max-[850px]:gap-14 max-[850px]:h-max">
                <div
                    className="flex w-full justify-center items-center relative translate-y-5 max-[850px]:flex-col max-[850px]:w-[90%] max-[850px]:gap-5 max-[850px]:h-max"
                    onMouseMove={handleMouseMove}
                >
                    <div className="absolut w-[80%] left-1/2 -translate-x-1/ max-[850px]:relative max-[850px]:translate-x-0 max-[850px]:left-0 max-[850px]:w-full">
                        <h1 className="text-6xl uppercase pb-2 max-[1175px]:text-5xl max-[850px]:text-4xl max-[530px]:text-3xl max-[280px]:text-2xl">
                            Sponsors in
                        </h1>
                        <h1 className="text-7xl uppercase w-full text-center max-[1175px]:text-6xl max-[850px]:text-5xl max-[530px]:text-left max-[530px]:text-4xl max-[280px]:text-3xl">
                            symphony 2023
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-family2 text-center max-[850px]:text-xl">
                        TITLE SPONSOR
                    </h3>
                    <div>
                        <Image
                            src="/sponsors/ss.png"
                            alt="Picture of the author"
                            width={300}
                            height={300}
                            className="rounded-[6px]"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4 items-center justify-center">
                    <h3 className="text-2xl font-family2 text-center max-[850px]:text-xl">
                        PREVIOUS YEAR SPONSORS
                    </h3>
                    <div className="grid row-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center gap-5 w-[95%] sm:w-[70%] max-[850px]:w-[88%]">
                        {data?.map((d, ind) => (
                            <div className="w-full h-28 bg-white flex justify-center items-center rounded-[6px]">
                                <Image
                                    src={d.src}
                                    alt="Sponsor"
                                    width={100}
                                    height={50}
                                    key={ind}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
8;
