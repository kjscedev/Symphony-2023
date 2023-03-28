import {useState} from "react";
import Image from "next/image";
import { Fireworks } from "@fireworks-js/react";
export default function Home(props) {
  let [show, setShow] = useState(false);
  return (
    <section
      className={`h-screen w-full flex justify-center items-center ${props?.className} relative`}
      id="home"
    >
      {show ? (
        <Fireworks
          options={{
            rocketsPoint: {
              min: 0,
              max: 100,
            },
            count: 100,
            fadeOut: true,
          }}
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            position: "absolute",
            background: "transparent",
            zIndex: 0,
          }}
        />
      ) : (
        <></>
      )}
      <div className="w-[90%] h-[70vh] relative">
        <Image
          src="/ellipse_ring.png"
          alt="ring"
          height={1080}
          width={500}
          className="max-w-[85%] min-w-[42%] pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[38%] origin-center"
        />
        <Image
          src="/logo_sponsor.png"
          height={3800}
          width={3800}
          priority={true}
          alt="logo"
          className="w-full h-full object-contain z-10 absolute blur-3xl"
        />
        <Image
          src="/logo_sponsor.png"
          height={1800}
          width={1800}
          priority={true}
          alt="logo"
          className="w-full h-full object-contain z-10 relative"
          onClick={() => {
            setShow(true);
          }}
        />
      </div>
    </section>
  );
}
