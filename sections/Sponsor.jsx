import { useState, useRef, useEffect } from "react";
import Image from "next/image";
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
            className={`flex flex-col justify-start items-center h-auto max-[850px]:gap-10 ${props?.className} py-10 md:py-0`}
            ref={sectionRef}
        >
            SPONSOR

        </section>
    );
}
