import React from 'react';
import { useLottie } from "lottie-react";
import contactAnimation from "../../assets/contact.json";

const Contact = () => {
    const options = {
        animationData: contactAnimation,
        loop: true
      };
    
    const { View } = useLottie(options);

    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='my-24'>
            <h1 className="mb-14 text-3xl md:text-3xl font-semibold leading-none text-center text-primary">Contact <span className='text-neutral'>Us</span></h1>
            <div  className="grid max-w-screen-xl grid-cols-1 gap-20 px-6 py-12 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 shadow shadow-secondary">
	<div className="flex flex-col justify-between ">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold leading-tight lg:text-4xl">Let's talk!</h2>
			<div className="text-secondary pb-2">Any Query? Please contact.</div>
		</div>
		{View}
	</div>
	<form className="space-y-6 ng-untouched ng-pristine mt-14">
		<div>
			<label for="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="Write Here..." className="w-full p-3 rounded border text-black mt-1" />
		</div>
		<div>
			<label for="email" className="text-sm">Email</label>
			<input id="email" placeholder='Write Here...' type="email" className="w-full p-3 rounded border text-black mt-1" />
		</div>
		<div>
			<label for="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" placeholder='Write Here...' className="w-full p-3 rounded border text-black mt-1"></textarea>
		</div>
		<button className="w-full p-3 text-sm font-semibold tracking-wide uppercase rounded border border-primary hover:bg-primary hover:text-black">Send Message</button>
	</form>
</div>
        </div>
    );
};

export default Contact;