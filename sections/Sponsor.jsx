import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        window.addEventListener("popstate", () => {
            onClose();
        });
    }, []);
    return (
        <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                pointerEvents: isOpen ? "auto" : "none",
            }}
            onClick={(e) => {
                onClose();
            }}
        >
            <div
                className="relative h-[80vh] flex justify-center items-center w-[60%] bg-[radial-gradient(62.49%_50%_at_50%_50%,#1F1F1F_0%,#0B0B0B_100%)] border-[1px] rounded-[9px] border-[#ffbf00] overflow-hidden max-[1250px]:w-[90%] max-[1250px]:h-[75%] max-[920px]:h-[60%] max-[790px]:w-[95%] max-[740px]:flex-col max-[740px]:w-[60%] max-[740px]:gap-0 max-[740px]:h-[80%] max-[655px]:w-[75%] max-[550px]:h-[100%] max-[550px]:w-[100%] max-[550px]:border-none"
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    className="absolute top-2 left-2"
                    onClick={() => onClose()}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="w-[2rem] h-[2rem] cursor-pointer fill-white"
                    >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </div>
                <div className="grid h-[85%] overflow-y-auto row-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center gap-5 w-[95%] sm:w-[70%] max-[850px]:w-[88%]">
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
        </motion.div>
    );
};

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

    const [isOpen, setIsOpen] = useState(false);
    const [children, setChildren] = useState();

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <section
            className={`flex flex-col justify-start items-center h-auto max-[850px]:gap-10 ${props?.className} py-10 lg:py-0 mb-16`}
            ref={sectionRef}
            id={"sponsors"}
        >
            <Modal
                isOpen={isOpen}
                onClose={handleCloseModal}
                children={children}
            />
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
                            src="/sponsors/ss.jpg"
                            alt="Picture of the author"
                            width={300}
                            height={300}
                            className="rounded-[6px]"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4 items-center justify-center">
                    <div className="bordered-button h-full rounded-[6px] w-auto">
                        <button
                            className="h-full outline-none rounded-[6px] w-full text-md p-3 px-6 max-[600px]:text-sm"
                            onClick={() => {
                                handleOpenModal();
                            }}
                        >
                            <span className="font-normal">SEE PREVIOUS YEAR SPONSORS</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
8;
