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
        <div>
            <h1 className="mb-14 text-3xl md:text-3xl font-semibold leading-none text-center text-primary">Contact <span className='text-red-500'>Us</span></h1>
            <div className="grid max-w-screen-xl grid-cols-1 gap-20 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-gray-800 bg-gray-200">
	<div className="flex flex-col justify-between ">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold leading-tight lg:text-4xl">Let's talk!</h2>
			<div className="dark:text-gray-500 pb-2">Any Query? Please contact.</div>
		</div>
		{View}
	</div>
	<form className="space-y-6 ng-untouched ng-pristine mt-14">
		<div>
			<label for="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 rounded border" />
		</div>
		<div>
			<label for="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded border" />
		</div>
		<div>
			<label for="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 rounded border"></textarea>
		</div>
		<button className="w-full p-3 text-sm font-semibold tracking-wide uppercase rounded dark:bg-secondary text-white">Send Message</button>
	</form>
</div>
        </div>
    );
};

export default Contact;