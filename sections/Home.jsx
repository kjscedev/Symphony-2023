import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { collection, addDoc, getDocs, doc, query, where} from "firebase/firestore";
import { db } from "@/utils/firebase";
const Home = () => {
  const [email, setEmail] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [invalid, setInvalid] = React.useState(false);
  let button = useRef(null);
  let input = useRef(null);
  useEffect(() => {
    localStorage.getItem("email") && setSubmitted(true);
  }, []);
  useEffect(() => {
    if (submitted) {
      button.current.disabled = true;
      input.current.disabled = true;
      input.current.value = "Added on the guestlist!";
    }
  }, [submitted]);
  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    let waitlistRef = query(collection(db, "waitlist"), where("email", "==", email));
    getDocs(waitlistRef).then((doc) => {
      if (doc.docs.length===0) {
        addDoc(collection(db, "waitlist"), {
          email: email,
        }).then(() => {
          setLoading(false);
          setSubmitted(true);
          localStorage.setItem("email", email);
        });
      }
      else{
        setInvalid(true);
        input.current.value = "Already Invited!";
        setLoading(false);
        setTimeout(() => {
          setInvalid(false);
          input.current.value = "";
        }, 1000);
      }
    });
  };
  return (
    <div className="h-screen z-0 flex items-center justify-center">
      <Image
        src="/bg.png"
        alt=""
        width={1920}
        height={1080}
        className="absolute w-full h-full top-0 object-cover"
        priority={true}
      />
      <div className="relative py-16 flex justify-center items-center flex-col gap-10 md:gap-4 w-[90%] md:w-[50%] bg-[radial-gradient(62.49%_50%_at_50%_50%,#1F1F1F_0%,#0B0B0B_100%)] border-[1px] rounded-[9px] border-[#ffbf00]">
        <h1 className="text-7xl md:text-[4.9rem] leading-[0.85] coming-soon text-center">
          COMING
          <br />
          SOON
        </h1>
        <form
          className="flex flex-col gap-6 md:gap-3 justify-center items-center w-[80%] md:w-[50%]"
          onSubmit={(e) => submit(e)}
        >
          <div className={`w-full p-0 m-0 neo-input h-10 transition-all duration-700 border-2 ${invalid? "border-[#ffc8007f]": "border-[rgba(193,193,193,0.14)]"}`}>
            <input
              type="email"
              className="bg-transparent outline-none placeholder-[#c1c1c1b8] w-full h-full text-center font-family2 text-[#F2E6CF] font-light"
              placeholder="Enter your email"
              ref={input}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div
            className={`p-[1.5px] h-10 bg-[linear-gradient(rgba(255,215,0,1),rgba(199,107,0,0.7))] transition-all duration-30000 overflow-hidden ${
              submitted ? "w-10 rounded-full" : " w-36 rounded-[6px]"
            }`}
          >
            <button
              className={`w-full h-full font-family2 flex justify-center items-center rounded-[6px] text-[#FFC700] font-normal transition-all duration-500 ${
                submitted ? "bg-transparent" : "bg-[#181818]"
              }`}
              type="submit"
              ref={button}
            >
              {submitted ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-6 "
                  >
                    <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </>
              ) : (
                <>
                  {loading ? (
                    <>
                      <Image
                        src={"/loader.gif"}
                        alt="loader"
                        height={40}
                        width={40}
                      />
                    </>
                  ) : (
                    <>Invite Me</>
                  )}
                </>
              )}
            </button>
          </div>
        </form>
        <h3 className="text-center font-family2 text-md font-normal text-[#F2E6CF] w-[80%] md:w-[60%]">
          Experience an enchanting royal celebration! Sign up now and be the
          first on the guestlist!
        </h3>
      </div>
    </div>
  );
};

export default Home;
