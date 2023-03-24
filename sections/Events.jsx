import { useState, useRef } from "react";
import Image from "next/image";
import Cards from "@/components/Cards";
import { motion } from "framer-motion";
import { db } from "@/utils/firebase";
import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

const Modal = ({ isOpen, onClose, children }) => {
  let [email, setEmail] = useState("");
  let [loading, setLoading] = useState(false);
  let [submitted, setSubmitted] = useState(false);
  let input = useRef(null);
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
        className="relative h-[450px] flex justify-center items-center w-[60%] bg-[radial-gradient(62.49%_50%_at_50%_50%,#1F1F1F_0%,#0B0B0B_100%)] border-[1px] rounded-[9px] border-[#ffbf00] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-full aspect-[7_/_10]">
          {children?.image && (
            <Image
              src={children?.image}
              alt="event"
              height={800}
              width={564}
              className="h-full w-auto"
            />
          )}
        </div>
        <div className="h-full flex flex-col justify-center font-family2 text-[#FFF1D6] px-10 gap-5">
          <h1 className="text-2xl uppercase">{children?.name}</h1>
          <p className="font-normal text-sm">{children?.long_description}</p>
          <div className="flex justify-start items-center gap-5">
            <div className="flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M19.6667 0C22.0599 0 24 1.94009 24 4.33333V19.6667C24 22.0599 22.0599 24 19.6667 24H4.33333C1.94009 24 0 22.0599 0 19.6667V4.33333C0 1.94009 1.94009 0 4.33333 0H19.6667ZM22 7.33333H2V19.6667C2 20.9553 3.04467 22 4.33333 22H19.6667C20.9553 22 22 20.9553 22 19.6667V7.33333ZM6.33333 15.3333C7.25381 15.3333 8 16.0795 8 17C8 17.9205 7.25381 18.6667 6.33333 18.6667C5.41285 18.6667 4.66667 17.9205 4.66667 17C4.66667 16.0795 5.41285 15.3333 6.33333 15.3333ZM12 15.3333C12.9205 15.3333 13.6667 16.0795 13.6667 17C13.6667 17.9205 12.9205 18.6667 12 18.6667C11.0795 18.6667 10.3333 17.9205 10.3333 17C10.3333 16.0795 11.0795 15.3333 12 15.3333ZM6.33333 10C7.25381 10 8 10.7461 8 11.6667C8 12.5872 7.25381 13.3333 6.33333 13.3333C5.41285 13.3333 4.66667 12.5872 4.66667 11.6667C4.66667 10.7461 5.41285 10 6.33333 10ZM12 10C12.9205 10 13.6667 10.7461 13.6667 11.6667C13.6667 12.5872 12.9205 13.3333 12 13.3333C11.0795 13.3333 10.3333 12.5872 10.3333 11.6667C10.3333 10.7461 11.0795 10 12 10ZM17.6667 10C18.5872 10 19.3333 10.7461 19.3333 11.6667C19.3333 12.5872 18.5872 13.3333 17.6667 13.3333C16.7461 13.3333 16 12.5872 16 11.6667C16 10.7461 16.7461 10 17.6667 10ZM19.6667 2H4.33333C3.04467 2 2 3.04467 2 4.33333V5.33333H22V4.33333C22 3.04467 20.9553 2 19.6667 2Z"
                  fill="#FFF1D6"
                />
              </svg>
              <span className="ml-2 text-sm font-normal">{children?.date}</span>
            </div>
            <div className="flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M1.8 12C1.8 6.3667 6.3667 1.8 12 1.8C17.6333 1.8 22.2 6.3667 22.2 12C22.2 17.6333 17.6333 22.2 12 22.2C6.3667 22.2 1.8 17.6333 1.8 12ZM12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM11.9917 5.57792C11.9322 5.1388 11.5554 4.8 11.1 4.8C10.6032 4.8 10.2 5.2032 10.2 5.7V12.9L10.2083 13.022C10.2678 13.4612 10.6446 13.8 11.1 13.8H15.9L16.022 13.7917C16.4612 13.7322 16.8 13.3554 16.8 12.9C16.8 12.4032 16.3968 12 15.9 12H12V5.7L11.9917 5.57792Z"
                  fill="#FFF1D6"
                />
              </svg>
              <span className="ml-2 text-sm font-normal">{children?.time}</span>
            </div>
            <div className="flex items-center justify-center">
              <svg
                width="21"
                height="24"
                viewBox="0 0 21 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M3.063 3.063C7.14701 -1.021 13.7685 -1.021 17.8525 3.063C21.9365 7.14701 21.9365 13.7685 17.8525 17.8525L16.4269 19.2624C15.3761 20.2936 14.0128 21.6196 12.3363 23.2404C11.2888 24.2533 9.62678 24.2532 8.57936 23.2401L4.38638 19.1615C3.85942 18.6441 3.41832 18.2078 3.063 17.8525C-1.021 13.7685 -1.021 7.14701 3.063 3.063ZM16.5786 4.33689C13.1982 0.956427 7.71734 0.956427 4.33689 4.33689C0.956427 7.71734 0.956427 13.1982 4.33689 16.5786L6.12291 18.3411C7.10645 19.3036 8.34287 20.5051 9.83179 21.9452C10.1809 22.2828 10.7348 22.2829 11.0841 21.9453L15.1615 17.9801C15.7247 17.4272 16.1971 16.96 16.5786 16.5786C19.959 13.1982 19.959 7.71734 16.5786 4.33689ZM10.4578 7.18332C12.4487 7.18332 14.0627 8.79732 14.0627 10.7883C14.0627 12.7792 12.4487 14.3932 10.4578 14.3932C8.46682 14.3932 6.85279 12.7792 6.85279 10.7883C6.85279 8.79732 8.46682 7.18332 10.4578 7.18332ZM10.4578 8.98487C9.46175 8.98487 8.6543 9.79228 8.6543 10.7883C8.6543 11.7843 9.46175 12.5916 10.4578 12.5916C11.4538 12.5916 12.2611 11.7843 12.2611 10.7883C12.2611 9.79228 11.4538 8.98487 10.4578 8.98487Z"
                  fill="#FFF1D6"
                />
              </svg>

              <span className="ml-2 text-sm font-normal">
                {children?.location}
              </span>
            </div>
          </div>

          <form
            className="flex h-10"
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);
              let waitlistRef = query(
                collection(db, "events"),
                where("email", "==", email),
                where("event", "==", children.name)
              );
              getDocs(waitlistRef).then((doc) => {
                if (doc.docs.length === 0) {
                  addDoc(collection(db, "events"), {
                    event: children?.name,
                    email: e.target.email.value.trim(),
                    timestamp: serverTimestamp(),
                  });
                  setSubmitted(true);
                } else {
                  input.current.value = "Email already registered!";
                }
                setTimeout(() => {
                  setSubmitted(false);
                  setLoading(false);
                  input.current.value = "";
                }, 2000);
              });
            }}
          >
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              ref={input}
              className="h-full outline-none font-normal bg-[#D9D9D903] neumorphism-input rounded-l-[6px] pl-4 placeholder:text-sm placeholder:font-normal placeholder:text-[#8F8F8F]"
            />
            <div className="bordered-button h-full rounded-r-[6px] w-28">
              <button className="h-full outline-none rounded-r-[6px] w-full text-md p-1 ">
                <span className="gradient-text flex justify-center items-center">
                  {submitted ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="h-5 w-5 fill-[#ffbf00]"
                      >
                        <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                      </svg>
                    </>
                  ) : (
                    <>
                      {loading ? (
                        <>
                          <Image
                            src={"/loader1.gif"}
                            alt="loader"
                            height={15}
                            width={15}
                          />
                        </>
                      ) : (
                        <>Invite Me</>
                      )}
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};
export default function Events() {
  let events = [
    {
      name: "KK",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Exercitation veniam con...",
      image: "/kk.png",
      date: "6th April",
      time: "10:00pm",
      location: "Gargi Plaza",
      long_description:
        "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum",
    },
    {
      name: "Angelina",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Exercitation veniam con...",
      image: "/angelina.png",
      date: "5th April",
      time: "11:00pm",
      location: "Gargi Plaza",
      long_description:
        "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum",
    },
    {
      name: "3-Direction",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Exercitation veniam con...",
      image: "/3direction.png",
      date: "6th April",
      time: "10:00pm",
      location: "Gargi Plaza",
      long_description:
        "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum",
    },
    {
      name: "china-town",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Exercitation veniam con...",
      image: "/china-town.png",
      date: "6th April",
      time: "10:00pm",
      location: "Gargi Plaza",
      long_description:
        "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum",
    },
    {
      name: "doom classic",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Exercitation veniam con...",
      image: "/doom-classic.png",
      date: "6th April",
      time: "10:00pm",
      location: "Gargi Plaza",
      long_description:
        "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum",
    },
    {
      name: "project-91",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Exercitation veniam con...",
      image: "/project91.png",
      date: "6th April",
      time: "10:00pm",
      location: "Gargi Plaza",
      long_description:
        "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [children, setChildren] = useState();

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <section
      className="h-[200vh] flex flex-col justify-start items-center max-[1024px]:h-auto max-[850px]:gap-10"
      id="events"
    >
      <div className="h-screen border-white border-2- flex justify-center items-center w-[70%] gap-16 max-[1024px]:w-[70%] max-[850px]:w-[60%] max-[720px]:w-[80%] max-[530px]:w-[90%] max-[280px]:w-[95%] max-[850px]:h-max">
        <div
          className="flex w-full justify-center items-center relative translate-y-5 max-[850px]:flex-col max-[850px]:w-[90%] max-[850px]:gap-5 max-[850px]:h-max"
          onMouseMove={handleMouseMove}
        >
          <div className="absolute -top-[28%] w-[80%] left-1/2 -translate-x-1/2 max-[850px]:relative max-[850px]:translate-x-0 max-[850px]:left-0 max-[850px]:w-full">
            <h1 className="text-6xl uppercase pb-2 max-[1175px]:text-5xl max-[850px]:text-4xl max-[530px]:text-3xl max-[280px]:text-2xl">
              events in
            </h1>
            <h1 className="text-7xl uppercase w-full text-center max-[1175px]:text-6xl max-[850px]:text-5xl max-[530px]:text-left max-[530px]:text-4xl max-[280px]:text-3xl">
              symphony 2023
            </h1>
          </div>
          <p className="text-justify text-lg flex-[0.3] max-[1175px]:text-md max-[850px]:hidden">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla,
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
              src={"/crown.webp"}
              alt="crown"
              width={100}
              height={100}
              className="absolute w-[18rem] z-0 left-[45%] -translate-x-1/2 -bottom-6 blur-2xl opacity-80"
              draggable={false}
            />
            <div
              className="absolute w-[21rem] glow h-[21rem] border-[#FF8906] border-[3px] rounded-full -bottom-7 right-[40%] translate-x-1/2 max-[1200px]:w-[18rem] max-[1200px]:h-[18rem] max-[1200px]:-bottom-5 max-[1024px]:w-[16rem] max-[1024px]:h-[16rem] max-[280px]:w-[12rem] max-[280px]:h-[12rem]"
              style={{
                transform: `translateX(${50 + position.x / 700}%`,
              }}
            ></div>
            <Image
              src={"/crown.webp"}
              alt="crown"
              width={400}
              height={400}
              className="m-auto w-[24rem] z-10 relative max-[1180px]:w-[21rem] max-[1024px]:w-[18rem]"
              draggable={false}
            />
          </div>
          <p className="text-justify text-lg flex-[0.3] max-[1175px]:text-md max-[280px]:text-sm max-[850px]:text-[1rem] max-[850px]:pb-6">
            <span className="min-[850px]:hidden">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla,</span>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla,
          </p>
        </div>
      </div>
      <div className="h-screen border-white border-2- flex justify-center items-center w-[70%] relative max-[675px]:w-full max-[1024px]:h-auto">
        <Modal isOpen={isOpen} onClose={handleCloseModal} children={children} />
        <div className="grid grid-rows-2 grid-cols-3 w-[90%] justify-center items-center content-center justify-items-center h-[95%] gap-x-2 gap-y-10 max-[1200px]:h-[80%] max-[1024px]:grid-cols-2 max-[1024px]:grid-rows-3 max-[1024px]:gap-y-5 max-[1024px]:h-auto max-[675px]:w-[80%] max-[675px]:grid-cols-1 max-[675px]:grid-rows-6">
          {events.map((event, index) => (
            <Cards
              name={event.name}
              description={event.description}
              image={event.image}
              key={index}
              onClick={() => {
                setChildren(event);
                handleOpenModal();
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
