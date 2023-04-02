import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white border-t-yellow-900 border-t-2 p-4 m-auto md:p-4 bottom-0 left-0 right-0 z-50 lg:w-[70%] w-full">
            <div className="w-full flex justify-center items-center mb-8">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-family2 max-[961px]:mb-3">
                        CONTACT US
                    </h1>
                    <div className="flex flex-row items-center justify-center max-[961px]:flex-col max-[961px]:gap-2">
                        <a
                            href="tel:+91 8104135588"
                            className="mx-2 hover:text-[#fbd700]"
                        >
                            Dheemanta: +91 8104135588
                        </a>

                        <a
                            href="tel:+91 9820674958"
                            className="mx-2 hover:text-[#fbd700]"
                        >
                            Parth: +91 9820674958
                        </a>
                        <a
                            href="tel:+91 9987105109"
                            className="mx-2 hover:text-[#fbd700]"
                        >
                            Dhruv: +91 9987105109
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto flex items-center justify-center">
                <p className="text-center font-family2">
                    Made with 💛 by{" "}
                    <a
                        href="https://hackerstellar.csikjsce.org"
                        className="gradient-text"
                    >
                        CSI-KJSCE
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
