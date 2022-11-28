import React from 'react';

const Faq = () => {
    return (
        <section className="text-gray-800 my-12">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl text-center mb-5">FAQ</h2>
		<p className="mt-4 mb-8 dark:text-gray-400">LaptopResaleZ. website helps people to buy any second-hand product that is sell any seller.</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How to sell your product use this site?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Just go to the login register page registration as seller then go to the dashboard where you can add product </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How to buy product use this site?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Just go to the login register page registration as buyer then you can order different product </p>
			</details>
		</div>
	</div>
</section>
    );
};

export default Faq;