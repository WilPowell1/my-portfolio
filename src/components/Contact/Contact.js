import "./contact.css";
import { useState } from "react";

const Contact = () => {
    const [message, setMessage] = useState(false);

    const handleSubmit = (event) => {
        event.prevent.default();
        setMessage(true);
    }

    return (
        <div className="contact" id="Contact">
            <div className="left">
                <img src=""  alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="email" />
                    <textarea placeholder="message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP :)</span>}
                </form>
            </div>
        </div>  
    )
}

export default Contact;