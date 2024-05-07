import Button from "../Button/Button"
import styles from "./Contact.module.css"
import { MdMessage } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
const ContactForm = () => {

    const [name,setName] = useState("---User Name---");
    const [email,setEmail] = useState("---User Email----");
    const [text,setTxt] = useState("---User Info----");


    const onSubmit = (event) =>{
        event.preventDefault();

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setTxt(event.target[2].value);
       
     
    }

    return (
        <section
            className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_button}>
                    <Button text="VIEW SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
                    <Button text="VIA CALL" icon={<FaPhoneAlt fontSize={24} />} />
                </div>
                <Button
                    isOutline={true}
                    text="VIA EMAIL FORM" icon={<MdOutlineEmail fontSize="24px" />} />

                <form
                onSubmit={onSubmit}
                >
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>

                    <div className={styles.form_control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                    </div>

                    <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows="8" />
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "end"
                    }}>
                        <Button
                            text="SUBMIT" />
                    </div>
                    <div>{name + "---" +email + "---" + text}</div>
                </form>
            </div>
            <div className={styles.contact_image}>
               <img src="./images/contact.svg" alt="inmg" />
            </div>
        </section>
    )
}

export default ContactForm
