import { useState, useRef, useEffect } from "react";
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
        className="relative h-[29rem] flex justify-center items-center w-[60%] bg-[radial-gradient(62.49%_50%_at_50%_50%,#1F1F1F_0%,#0B0B0B_100%)] border-[1px] rounded-[9px] border-[#ffbf00] overflow-hidden max-[1250px]:w-[90%] max-[1250px]:h-[75%] max-[920px]:h-[60%] max-[790px]:w-[95%] max-[740px]:flex-col max-[740px]:w-[60%] max-[740px]:gap-0 max-[740px]:h-[80%] max-[655px]:w-[75%] max-[550px]:h-[100%] max-[550px]:w-[100%] max-[550px]:border-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-full aspect-[7_/_10] max-[740px]:aspect-[10_/_7] max-[740px]:w-full max-[740px]:h-[40%] max-[740px]:flex-[0.4]">
          {children?.image && (
            <Image
              src={children?.image}
              alt="event"
              height={800}
              width={564}
              className="h-full w-auto max-[740px]:w-full max-[740px]:object-cover"
            />
          )}
        </div>
        <div className="h-full flex flex-col justify-center font-family2 overflow-y-auto text-[#FFF1D6] px-10 gap-5 max-[740px]:flex-[0.6] max-[740px]:justify-start max-[740px]:items-center max-[740px]:py-8 max-[430px]:w-[92%] max-[430px]:p-0 max-[550px]:gap-8">
          <h1 className="text-2xl uppercase">{children?.name}</h1>
          <p className="font-normal text-sm max-[740px]:text-justify">
            {children?.long_description}
          </p>
          <div className="justify-start items-center gap-5 max-[550px]:w-[99%] max-[430px]:w-[99%] max-[550px]:justify-between hidden">
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
            className="flex h-10 max-[550px]:w-[99%]"
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
              className="h-full outline-none font-normal bg-[#D9D9D903] neumorphism-input rounded-l-[6px] pl-4 placeholder:text-sm placeholder:font-normal placeholder:text-[#8F8F8F] max-[550px]:w-[95%]"
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
                        <>Register</>
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
export default function Events(props) {
  let events = [
    {
      name: "PAiNT THE PiXEL",
      description:
        "Art is a captivating language that expresses the innermost feelings of an individual in a remarkable way. Create your own virtual masterpiece and showcase your creativity on the grandest stage of all.",
      image: "/paint_the_pixel.png",
      date: "6th April",
      time: "10:00pm",
      location: "Gargi Plaza",
      long_description: `ART iS THE ONLY iNAUDiBLE LANGUAGE
    THAT TOUCHES THE iNNERMOST
    FEELiNGS OF AN iNDiViDUAL AND
    CONVEYS THEM iN THE MOST
    BREATHTAKiNG MANNER
    POSSiBLE...AND WHEN THE DEPTH OF
    HUMAN EMOTiONS MEETS THE
    COMPLEXiTY OF A COMPUTER, MAGIC iS
    MATERiALiZED iN FRONT OF THE
    AUDiENCES THAT FEEL THE ARTiST'S
    iNNER CONUNDRUM WiTHOUT THE
    TRANSFER OF ANY DiALOGUE! CREATE
    YOUR OWN ViRTUAL MARVEL AT THiS
    COLORFUL CONJUNCTURE AND FLAUNT
    YOUR CREATiViTY ON THE BiGGEST
    STAGE POSSiBLE!!`,
    },
    {
      name: "CRESCENDO",
      description:
        "Join the second edition of Crescendo, a solo-instrumental competition where you can create your own symphony and set the stage on fire with your heartwarming tunes.",
      image: "/crescendo.png",
      date: "5th April",
      time: "11:00pm",
      location: "Gargi Plaza",
      long_description: `HAVE YOU EVER PONDERED UPON HOW
      A GROUP OF SELECTED FEW
      iNDiViDUALS MANAGES TO CREATE A
      “SYMPHONY” OF THE HiGHEST CALiBER
      SiNGLE- HANDEDLY?! IF SO, THEN THE
      SECOND EDiTiON OF CRESCENDO, OUR
      SOLO-iNSTRUMENTAL COMPETiTiON iS
      THE DESTiNATiON FOR YOU! STORM THE
      NiGHT BY CREATiNG A CRESCENDO OF
      YOUR OWN AND SET THE STAGE ON FiRE
      WiTH TUNES, STRAiGHT FROM YOUR
      HEART!`,
    },
    {
      name: "Symphony Idol",
      description:
        "Express yourself through musical melodies closest to your heart and showcase your innate creativity on stage by participating in Symphony Idol, the perfect platform for talented individuals.",
      image: "/symphony_idol.png",
      date: "6th April",
      time: "10:00pm",
      location: "Gargi Plaza",
      long_description: `OVER THE YEARS, SYMPHONY HAS
      ASSUMED THE CENTER STAGE iN
      PRODUCiNG TALENTED iNDiViDUALS!
      WiTH THE AMBiTiON OF PROViDiNG A
      PERFECT PLATFORM FOR SUCH GiED
      PERSONAS BURNiNG DEEP WiTHiN OUR
      HEARTS, SYMPHONY IDOL WAS
      FORMULATED! EXPRESS YOURSELF
      THROUGH MUSiCAL MELODiES,
      CLOSEST TO YOUR HEART AND
      iLLUMiNATE THE STAGE WiTH YOUR
      iNNATE SENSE OF CREATiViTY.`,
    },
    {
      name: "feel the beat",
      description:
        "Unleash your inner dancer and showcase your elegance and grace on the stage at Symphony's Solo Dancing Competition by immersing yourself in your favorite melodies. Register now and feel the beat!",
      image: "/feel_the_beat.png",
      date: "6th April",
      time: "10:00pm",
      location: "Gargi Plaza",
      long_description: `FEET THAT HAVE NEVER DANCED ARE
      LiKE SENTENCES, WiTHOUT
      PUNCTUATiON... LET YOUR FEET DO THE
      TALKiNG AT THE SYMPHONY’S SOLO
      DANCiNG COMPETiTiON, FEEL THE BEAT!
      IMMERSE YOURSELF iN THE MELODiES
      OF YOUR FAVORiTE SONG AT
      SYMPHONY 2023. DANCE YOUR WAY
      OUT OF THiS PARADiGM AND DAZZLE
      THE MASSES WiTH YOUR ELEGANCE AND
      GRACE. HOW LONG ARE YOU GOiNG TO
      WAiT?! REGiSTER NOW!!`,
    },
    {
      name: "natsamrat",
      description:
        "Hone your theatrical skills and outshine your peers by transcending the entire performance to newer heights through your unmatched charm and panache at Natsamrat, the perfect platform for aspiring actors.",
      image: "/natsamrat.png",
      date: "6th April",
      time: "10:00pm",
      location: "Gargi Plaza",
      long_description: `A SiNGLE ACTOR CAN TRANSCEND THE
      ENTiRE PERFORMANCE TO NEWER
      HEiGHTS THROUGH THEiR UNRiVALED
      CHARM AND UNMATCHED PANACHE.
      HONE YOUR THEATRiCAL SKiLLS THAT
      CAN LEAVE THE AUDiENCE iN A STATE
      OF AWE AND OUTSHiNE ALL YOUR
      PEERS NATSAMRAT.`,
    },
    {
      name: "verve",
      description:
        'Experience the magic of dance and showcase your skills at Somaiya\'s group dance competition "Verve" - where elegance meets power and fluidity meets fire!',
      image: "/verve.png",
      date: "6th April",
      time: "10:00pm",
      location: "Gargi Plaza",
      long_description: `DANCERS DON'T NEED WiNGS TO FLY
      FOR A REASON: THEiR ELEGANT BODY
      MOVEMENTS AND POWERFUL
      EXPRESSiONS ENCHANT AUDiENCES!
      WE'RE BACK WiTH YET ANOTHER
      REJUVENATiNG EPiSODE OF SOMAiYA'S
      GROUP DANCE COMPETiTiON, "VERVE"!
      FROM THE MOST FLUiD PERFORMANCES
      TO THE ONES THAT SET THE STAGE
      ABLAZE...WE'VE GOT iT ALL iN A SiNGLE
      PLACE. LiVE OUT YOUR AMBiTiONS OF
      CLiMBiNG TO THE TOP OF THE 'DANCE-
      CHAiN' WiTH YOUR KiLLER
      SKiLLS.REGiSTER YOUR TEAM AS SOON
      AS POSSiBLE AND PROVE YOUR WORTH
      AT VERVE 2023!`,
    },
    {
      name: "udghosh",
      description:
        "Experience the rawest form of acting at Symphony's Udghosh, the street play event, and showcase a social or political issue with intense yet canonical portrayal.",
      image: "/udghosh.png",
      date: "6th April",
      time: "10:00pm",
      location: "Gargi Plaza",
      long_description: `UDGHOSH, the rawest form of acting and a major highlight in recent years, was absent from the first-ever online version of Symphony, leaving everyone with an empty feeling. However, Symphony has heard the requests and is pleased to announce that UDGHOSH will now be a part of its lineup. Bring out your drama team and megaphones to portray social/political issues in an intense yet canonical way.`,
    },
    {
      name: "Decibels dj wars",
      description:
        "Join the coveted platform for aspiring DJs and showcase your skills in creating awesome beats to make the crowd fall in love with your downbeat at Symphony's DJ wars.",
      image: "/decibels_dj_wars.png",
      date: "6th April",
      time: "10:00pm",
      location: "Gargi Plaza",
      long_description: `IF YOU ADORE FABRiCATiNG AWESOME
      BEATS AND ASPiRE TO BE THE BiGGEST
      NAME iN THE DJ GAME, STEP UP ON
      ONE OF THE MOST COVETED
      PLATFORMS AND MAKE THE CROWD
      FALL iN LOVE WiTH YOUR DOWNBEAT!
      GRAB ONTO YOUR FAVOURiTE CANS,
      WiPE THE DUST OFF YOUR TURNTABLES
      & SERENADE THE AUDiENCE BY TURNiNG
      UP THE DECiBELS!`,
    },
    {
      name: "picture this photography",
      description:
        "Experience the power of photography and capture profound emotions through your lens at Symphony's photography event.",
      image: "/picture_this_photograph.png",
      date: "6th April",
      time: "10:00pm",
      location: "Gargi Plaza",
      long_description: `A GOOD SNAPSHOT KEEPS A MOMENT
      THAT'S GONE FROM FADiNG AWAY. A
      GOOD PHOTOGRAPH iS A STORY YOU
      FAiL TO CONVEY iN WORDS... A GOOD
      PiCTURE CAN CAUSE ANY iNDiViDUAL
      TO iMMERSE THEMSELVES iN EMOTiONS
      THEY SELDOM RARELY EXPERiENCE! THE
      ATTRiBUTES OF THiS TANGiBLE FORM OF
      MEMORiES SEEM ENDLESS; SO COME
      FORTH AND WiTNESS THE PARADiGM OF
      SYMPHONY UNFOLD iTS DEEPEST
      SECRETS iN FRONT OF YOUR EYES.
      CAPTURE MANY SUCH ARDENT
      EMOTiONS THROUGH YOUR LENS AND
      LET THE OTHERS FEEL THE SAME
      PROFOUND EMOTiONS, COARSE
      THROUGH THEiR VEiNS AS WELL!`,
    },
    {
      name: "battle of bands",
      description:
        "Get ready to rock the stage and claim your fame at Symphony 2023, where you can showcase your musical talent and entice the crowd with your groovy tunes!",
      image: "/battle_of_bands.png",
      date: "6th April",
      time: "10:00pm",
      location: "Gargi Plaza",
      long_description: `ATTENTiON!! TO ALL THE AMATEUR/
      SEMi-PRO BANDS OUT THERE, HERE’S
      YOUR CHANCE TO MAKE THE CROWD
      SWAY TO YOUR TUNES AND YOUR TUNES
      ONLY! CLAiM YOUR FAME iN THiS EPiC
      DUEL AND OUTPERFORM A MULTiTUDE
      OF TALENTED, GROOVY BANDS
      THROUGH SHEER GRiT AND DEXTERiTY.
      ENTiCE THE METALHEADS AND ROCK
      ENTHUSiASTS AT SYMPHONY 2023 AND
      TRAP THEM iN A PARADiGM OF YOUR
      OWN ACCORD, WHERE MUSiC iS KEY.`,
    },
    {
      name: "ok doodle",
      description:
        "Unleash your creativity and showcase your doodling skills at OK Doodle for a chance to win exciting prizes!",
      image: "/ok_doodle.png",
      date: "6th April",
      time: "10:00pm",
      location: "Gargi Plaza",
      long_description: `IF THE LAST PAGE OF ALL YOUR
      NOTEBOOKS iS FiLLED WiTH QUiRKY
      CARiCATURES, AND iF YOU HAVE A
      KNACK OF DOODLiNG DURiNG
      MONOTONOUS MORNiNG LECTURES,
      THEN OK DOODLE MiGHT BE JUST THE
      PLACE FOR YOU TO SHOWCASE YOUR
      SKiLLS.
      DOODLE YOUR HEART OUT, AND STAND
      A CHANCE TO WiN EXCiTiNG PRiZES!`,
    },
    {
      name: "reel making",
      description:
        "Showcase your creativity and unique train of thought by participating in a Reel-making competition and win exciting prizes.",
      image: "/reel_making.png",
      date: "6th April",
      time: "10:00pm",
      location: "Gargi Plaza",
      long_description: `REELS ARE A UNiQUE ART FORM, A REEL CAN
      iNSPiRE, PROVOKE DEEP THOUGHT OR LiFT
      THE SPiRiTS AND ALL iN UNDER A MiNUTE.
      DO YOU THiNK YOU HAVE THE CREATiViTY
      AND THE UNiQUE TRAiN OF THOUGHT
      REQUiRED TO COME OUT ON TOP iN THiS
      COMPETiTiON? DO YOU OFTEN FiND
      YOURSELF SCROLLiNG THROUGH SOCiAL
      MEDiA, MAKiNG REELS WiTH YOUR FRiENDS
      OR REMiXiNG EXiSTiNG ONES?
      THEN SiGN UP!`,
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
      className={`flex flex-col justify-start items-center h-auto max-[850px]:gap-10 ${props?.className}`}
      id="events"
      ref={sectionRef}
    >
      <div className="h-screen border-white border-2- flex justify-center items-center w-[70%] gap-16 max-[1024px]:w-[70%] max-[850px]:w-[60%] max-[720px]:w-[80%] max-[530px]:w-[90%] max-[280px]:w-[95%] max-[850px]:h-max lg:mt-28">
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
            <span className="min-[850px]:hidden">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla,
            </span>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla,
          </p>
        </div>
      </div>
      <div className="h-auto border-white border-2- flex justify-center items-center w-[70%] relative max-[675px]:w-full max-[1024px]:h-auto">
        <Modal isOpen={isOpen} onClose={handleCloseModal} children={children} />
        <div className="grid row-auto grid-cols-3 w-[90%] justify-center items-center content-center justify-items-center gap-x-10 gap-y-10 max-[1200px]:h-[80%] max-[1100px]:gap-6 max-[1024px]:grid-cols-2 max-[1024px]:grid-rows-3 max-[1024px]:gap-y-5 max-[1024px]:h-auto max-[675px]:w-[80%] max-[550px]:grid-cols-1 max-[675px]:grid-rows-6">
          {events.map((event, index) => (
            <Cards
              name={event.name}
              description={event.description}
              image={event.image}
              key={index}
              onClick={() => {
                window.location.href = "#eventcard";
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
