import { FC, FormEventHandler, useState } from "react";
import Section from "./Section";
import { Fade } from "react-awesome-reveal";
import TextBox from "./TextBox";
import TextArea from "./TextArea";
import Socials from "./Socials";

const Contact: FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setSubmitting] = useState(false);
    const [isSubmitted, setSubmitted] = useState(false);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        setSubmitting(true);
        e.preventDefault();

        const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
                email: email,
                name: name,
                subject: subject,
                message: message,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        const resJson = await res.json();
        if (resJson.error) {
            console.error(resJson.error);
            alert("Something went wrong, please try again!");
        } else {
            setSubmitted(true);
            setSubmitting(false);
        }
    };

    return (
        <>
            <Section
                id="contact"
                className="flex h-full min-h-[50vh] flex-col gap-8 pt-16"
            >
                <Fade triggerOnce>
                    <h1 className="mt-4 text-3xl text-tertiary">Contact Me</h1>
                </Fade>
                <Fade triggerOnce>
                    <p className="mb-4 text-justify text-lg font-light text-tertiary sm:text-xl">
                        If you would like to discuss an opportunity, ask a
                        question, or just get to know me, feel free to reach out
                        anytime!
                    </p>
                </Fade>
                <Fade direction="up" triggerOnce className="w-full self-center">
                    {!isSubmitted ? (
                        <form
                            className="flex flex-col gap-4 sm:mb-8"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <TextBox
                                    label="Name"
                                    value={name}
                                    setValue={setName}
                                    required={true}
                                    type="text"
                                />
                                <TextBox
                                    label="Email"
                                    value={email}
                                    setValue={setEmail}
                                    required={true}
                                    type="email"
                                />
                            </div>
                            <TextBox
                                label="Subject"
                                value={subject}
                                setValue={setSubject}
                                required={true}
                                type="text"
                            />
                            <TextArea
                                label="Message"
                                value={message}
                                setValue={setMessage}
                                required={true}
                            />
                            <button
                                className="hover:white-glow w-fit self-center rounded-md bg-dark-2 py-3 px-6 text-xl text-tertiary transition-all duration-500"
                                type="submit"
                            >
                                {!isSubmitting
                                    ? "Say Hello"
                                    : "Saying Hello..."}
                            </button>
                        </form>
                    ) : (
                        <h1 className="mb-16 mt-8 text-center text-xl text-tertiary">
                            Thanks for reaching out! I'll contact you via the
                            email you provided as soon as I can. Have a great
                            day ahead.
                        </h1>
                    )}
                </Fade>
                <Socials
                    direction="row"
                    className="mt-4 mb-8 sm:hidden"
                    fadeDirection="left"
                />
            </Section>
        </>
    );
};
export default Contact;
