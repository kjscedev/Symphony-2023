import { useEffect, useRef, useState } from "react";

export default function Proshows(props) {
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
      className={`flex flex-col justify-start items-center h-screen max-[850px]:gap-10 ${props?.className}`}
      id="proshows"
      ref={sectionRef}
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h1 className="text-4xl font-bold text-center text-white">
          Proshows
        </h1>
        </div>
    </section>
  );
}
