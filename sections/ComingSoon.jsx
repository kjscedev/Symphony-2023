import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "@/utils/firebase";
const ComingSoon = () => {
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
        let waitlistRef = query(
            collection(db, "waitlist"),
            where("email", "==", email)
        );
        getDocs(waitlistRef).then((doc) => {
            if (doc.docs.length === 0) {
                addDoc(collection(db, "waitlist"), {
                    email: email,
                }).then(() => {
                    setLoading(false);
                    setSubmitted(true);
                    localStorage.setItem("email", email);
                });
            } else {
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
        <div className="md:h-screen z-0 flex items-center justify-center h-[60vh]">
            <div className="relative py-16 md:h-[70%] h-auto flex justify-center items-center flex-col gap-6 md:gap-5 w-[90%] md:w-[80%] bg-[radial-gradient(62.49%_50%_at_50%_50%,#1F1F1F_0%,#0B0B0B_100%)] border-[1px] rounded-[9px] border-[#ffbf00]">
                <h1 className="text-7xl max-[335px]:text-5xl md:text-[4.9rem] leading-[0.85] coming-soon text-center">
                    COMING
                    <br />
                    SOON
                </h1>
                <h3 className="text-center font-family2 text-md font-normal text-[#F2E6CF] w-[80%] md:w-[70%]">
                    Get ready to step into a world of royalty and elegance! A
                    grand celebration is coming your way, filled with enchanting
                    festivities and unforgettable memories.
                </h3>
            </div>
        </div>
    );
};

export default ComingSoon;
