import React from "react";
import "./aboutUs.css"


const AboutUs = () => {
    return (
        <div>
            <div className="flex justify-center object-cover h-screen">
                <img src="./images/about-us.jpg" className="w-screen"></img>
                <div className="centered text-white text-5xl text-center">EMPOWERING BARBERS SINCE 2021</div>
            </div>
            <div className="flex flex-row flex-wrap">
                <div className="lg:w-1/2 h-fit lg:mt-16 lg:mx-20 lg:mb-0">
                    <div className="px-4 lg:px-8 flex justify-center flex-col text-left mx-8 my-8 rounded-lg">
                        <h1 className="py-4 text-3xl">FOR BARBERS</h1>
                        <p className="pb-4">More Than Just An Appointment Booking App, It’s Life Made Easy!</p>
                        <p className="pb-2 text-lg font-semibold">Features</p>
                        <ol class="list-disc lg:px-6">
                            <li>Mobile and Web version</li>
                            <li>Reduce No Shows with the reminders feature</li>
                            <li>Get paid for deposits and services using</li>
                            <li>Get appointments while you work!</li>
                            <li>Accept payments (credit card payments) Stripe and Square</li>
                            <li>Deposits, Cancellations, and No Show fees</li>
                            <li>Calendar view, Daily and Weekly</li>
                            <li>Client Management (unlimited number of clients)</li>
                            <li>Services (categories, services, costs, duration)</li>
                            <li>Reminders: Text Messages, Push Notifications, and Emails</li>
                            <li>Confirm, Decline, Reschedule appointments</li>
                            <li>Free Portfolio page (build based on your profile and your pictures)</li>
                            <li>Notifications (emails, push notifications, SMS notifications)</li>
                        </ol>
                    </div>
                </div>
                <div className="hidden lg:flex lg:mt-16">
                    <img src="/images/mobile.png" className="lg:h-5/6" />
                </div>
            </div>
            <div className="flex flex-row flex-wrap w-full bg-[#37c7da] text-white">
                <div className="hidden lg:flex lg:mt-32 lg:pl-36 lg:mb-0 lg:pb-0">
                    <img src="/images/customer.png" className="lg:h-4/6" />
                </div>
                <div className="lg:w-1/2 h-fit lg:mt-16 lg:mx-0 lg:mb-0">
                    <div className="px-4 lg:px-8 flex justify-center flex-col text-left mx-4 my-4 lg:mx-16 rounded-lg lg:pl-20">
                        <h1 className="py-4 text-3xl">FOR CLIENTS</h1>
                        <p className="pb-4">More Than Just An Appointment Booking App, It’s Life Made Easy!</p>
                        <p className="pb-2 text-lg font-semibold">Features</p>
                        <ol class="list-disc px-6">
                            <li>Free mobile app</li>
                            <li>Free access from the web to your barbers’ profile</li>
                            <li>Book your appointments, no need to call your barber for</li>
                            <li>Confirm, Decline, Reschedule appointments</li>
                            <li>Pay online for your services</li>
                            <li>Services (categories, services, costs, duration)</li>
                            <li>Receive reminders, never miss your appointment</li>
                            <li>Review your services, rate your barber</li>
                            <li>Free access to a <a href="/" className="underline hover:font-bold">Barbera directory</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutUs;