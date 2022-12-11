import React from 'react';

const Blog = () => {
    return (
        <div>
           <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Some Important ReactJs Questions</h2>
		<p className="mt-4 mb-8 dark:text-gray-400">We will be answering questions about some important ReactJs Topics</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg" open="">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-green-400">What is the purpose of React Router?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">React Router lets user to navigate from components to components without refreshing the whole website while preserving user state. The main purpose of React Router is to make the whole website into a Single Page Application(SPA)</p>
			</details>
			<details className="w-full border rounded-lg" open="">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-green-400">How does Context API work in React?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">React Context API allows to share information to any React component, by storing it in a central place and allowing access to any component that requests it. By using <i>createContext</i> hook, the data is shared among the nested components. By using <i>useContext</i> hook, the data is accessed by the nested components.
                                It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props. </p>
			</details>
			<details className="w-full border rounded-lg" open="">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-green-400">What is the use of <i>useHref</i> Hook in React? </summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
The useRef Hook allows to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. </p>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default Blog;