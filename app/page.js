"use client";
import { useState, useEffect } from "react";
import Flags from "@/components/Flags";
import { Footer, Navbar, Pillar } from "../components";
import {
    About,
    Home,
    Events,
    Proshows,
    Shield,
    Syahi,
    Parvaah,
} from "../sections";
import { motion } from "framer-motion";
import Sponsor from "@/sections/Sponsor";

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
                className="relative h-[35rem] flex justify-center items-center w-[60%] bg-[radial-gradient(62.49%_50%_at_50%_50%,#1F1F1F_0%,#0B0B0B_100%)] border-[1px] rounded-[9px] border-[#ffbf00] overflow-hidden max-[1250px]:w-[90%] max-[1250px]:h-[75%] max-[920px]:h-[60%] max-[790px]:w-[95%] max-[740px]:w-[60%] max-[740px]:h-[80%] max-[655px]:w-[75%] max-[550px]:h-[100%] max-[550px]:w-[100%] max-[550px]:border-none"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="h-full flex flex-col items-center font-family2 overflow-y-auto overflow-x-hidden text-[#FFF1D6] px-10 py-6 gap-5 max-[430px]:w-[92%]">
                    <div>
                        <h1 className="text-xl">General Rules</h1>
                    </div>
                    <div className="text-sm">
                        <ol className="list-decimal flex gap-4 flex-col font-normal whitespace-pre-wrap">
                            <li>
                                Participation is open for all the events in
                                Virtual Mode.
                            </li>
                            <li>
                                For Offline Events/Finales attendance,
                                participants need to have a double vaccinated
                                certificate or within 72-hour RT-PCR report.
                            </li>
                            <li>
                                Entry in the campus will not be permitted
                                without any of the documents in the above
                                mentioned point and will be solely participants
                                responsibility .
                            </li>
                            <li>
                                All rules must be strictly adhered for each and
                                every event during the competition.
                            </li>
                            <li>
                                Any kind of
                                religious/political/controversial/offensive/vulgar
                                depiction is strictly prohibited.
                            </li>
                            <li>
                                Judge's collective decision will be final and
                                binding. No doubt regarding the same shall be
                                entertained.
                            </li>
                            <li>
                                Judge scores or mark sheets will not be revealed
                                under any circumstances, for both virtual and
                                offline events.
                            </li>
                            <li>
                                Submissions won't be accepted once the deadline
                                lapses.
                            </li>
                            <li>
                                Exceeding the time limit will result in negative
                                marking and/or disqualification.
                            </li>
                            <li>
                                The organizers will contact the participants
                                only via the email address and contact numbers
                                given during registration.
                            </li>
                            <li>
                                The information provided during registration
                                should be correct, and is the sole
                                responsibility of the participant.
                            </li>
                            <li>
                                Requests for registration fee refunds shall not
                                be entertained. If under any circumstances, the
                                competition is canceled by the organizers then
                                the registration fees will be credited back.
                            </li>
                            <li>
                                Symphony does not intend any copyright claims on
                                the artist's work. The winner's art, if posted
                                on the social media handles of Symphony, shall
                                have the due credits to the creators.
                            </li>
                            <li>
                                The organizing committee reserves the right to
                                change the prize structure, prize money, nature
                                of prize at any point of time before the start
                                of the event/competition.
                            </li>
                            <li>
                                In case of cancellation of any event, the
                                registration fees will be refunded within 15
                                days of cancellation.
                            </li>
                            <li>
                                The same team participating in the eliminations
                                should take part in the final rounds. Any
                                substitutions would lead to disqualification.
                            </li>
                            <li>
                                Display of violence and unruly behaviour shall
                                lead to disqualification and expulsion of the
                                individual and the respective college from the
                                festival.
                            </li>
                            <li>
                                Decisions taken by the judges are final and
                                irrevocable for all of the events.
                            </li>
                            <li>
                                Violation of any of the rules mentioned in the
                                rulebook shall lead to the disqualification of
                                the participant(s).
                            </li>
                            <li>
                                The organizers reserve the right to reduce the
                                duration of the performance in the elimination
                                rounds in case there is a shortage of time due
                                to the number of performing teams.
                            </li>
                            <li>
                                The decisions of the organizing committee will
                                be final and binding under all circumstances.
                            </li>
                            <li>
                                All updates will be posted on our social media
                                handles and our official website regularly.
                            </li>
                        </ol>
                    </div>
                    <form
                        className="flex h-10"
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <div className="bordered-button h-full rounded-[6px] w-28">
                            <button
                                className="h-full outline-none rounded-[6px] w-full text-md p-1 "
                                onClick={() => {
                                    onClose();
                                }}
                            >
                                <span className="font-normal">Accept</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default function Page() {
    const [currentSection, setCurrentSection] = useState("home");
    const handleScroll = () => {
        const scrollableDiv = document.querySelector(".scrollable-div");
        const scrollTop = Math.round(scrollableDiv.scrollTop);
        const sections = document.querySelectorAll("section");

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (
                scrollTop >= sectionTop &&
                scrollTop < sectionTop + sectionHeight
            ) {
                setCurrentSection(section.id);
            }
        });
    };
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            <Pillar />
            <Navbar open={handleOpenModal} />
            <Flags flag={currentSection} />
            <div
                className="h-screen overflow-y-auto overflow-x-hidden scrollable-div"
                onScroll={handleScroll}
            >
                <Modal isOpen={isOpen} onClose={handleCloseModal} />
                <Home
                    className="section"
                    onSectionChange={setCurrentSection}
                    sectionChange={currentSection}
                />
                <Events
                    className="section"
                    onSectionChange={setCurrentSection}
                />
                <Proshows
                    className="section"
                    onSectionChange={setCurrentSection}
                />
                <Shield
                    className="section"
                    onSectionChange={setCurrentSection}
                />
                <Syahi
                    className="section"
                    onSectionChange={setCurrentSection}
                />
                <Parvaah
                    className="section"
                    onSectionChange={setCurrentSection}
                />
                <Sponsor
                    className="section"
                    onSectionChange={setCurrentSection}
                />
                <Footer
                    className="section"
                    onSectionChange={setCurrentSection}
                />
            </div>
        </>
    );
}
