import React from "react";
import "./contactUs.css"

const ContactUs = () => {
    return (
        <div class="flex flex-wrap w-full bg-[#c8c8c8]">
        <div class="flex sm:row sm:mx-20 sm:my-6 sm:mt-12"> 
            <div class="shadow-3xl rounded-lg bg-white px-10 py-8 sm:mb-16">
                <h1 className="text-4xl text-[#37c7da]">Let's Get In Touch</h1>
                <p className="py-4">Have a question or comment about <a href="/"> Barbera </a>? We’d love to help! Just fill in the form below and someone from our team will reply back to you in no time.</p>
                
                <input className="py-4" type="text" placeholder="Your Name" /> <br/>
                <input className="py-4" type="email" placeholder="Email Address" /> <br/>
                <textarea className="py-4" type="message" rows="4" placeholder="Message" /> <br/>
                <div className="flex justify-end">
                <button className="py-4 btn-64" type="submit">
                <span>Send</span>
                </button>
                </div>
            </div>
            <div class="bg-white bg-[#c8c8c8] again sm:ml-10">
                <div class="rounded-lg bg-white sm:p-6 text-left">
                    <h2 className="pb-2">Mailing Address</h2>
                    <p>Barbera Inc</p>
                    <p>200 – 1460 Chevrier Blvd
                        Winnipeg, MB R3T 1Y6
                        Canada</p>
                    <h2 className="pb-2 pt-4">Support Hours</h2>
                    <p>Monday – Friday, 9AM – 5PM Central</p>
                </div>
                <div className="rounded-lg bg-white mt-6 p-6 mb-16 text-left">
                    <h2 className="pb-2">Need some help?</h2>
                    <p>Visit our Help Site for tips and resources, Book a Call with our team or call us on 1-888-966-8176.</p>
                </div>

            </div>

        </div>

    </div>
    )
}

export default ContactUs