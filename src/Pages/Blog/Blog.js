import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
    const discussionsData = [
        {
          id: 1,
          title: 'How to Choose the Right Laptop for Gaming?',
          summary: 'Looking for advice on selecting a gaming laptop? Share your thoughts here!',
          author: 'John Doe',
          authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
          image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        },
        {
          id: 2,
          title: 'Troubleshooting Common Laptop Issues',
          summary: 'Discuss and troubleshoot common laptop problems with the community.',
          author: 'Jane Smith',
          authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
          image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        },
        {
          id: 3,
          title: 'Best Laptops for Programming in 2023',
          summary: 'Share your recommendations and experiences with laptops for coding.',
          author: 'Alice Johnson',
          authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
          image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        },
        // Add more discussions as needed
      ];
  return (
    
<section class="my-20">
    <div class="container px-6 py-10 mx-auto">
        <h1 data-aos="fade-right" data-aos-duration="1000" class="text-3xl font-semibold capitalize lg:text-4xl text-center pb-10">Our latest blog</h1>

        <div data-aos="fade-up" data-aos-duration="1000" class="grid grid-cols-1 gap-14 mt-8 md:mt-16 md:grid-cols-2">
            <div class="lg:flex border rounded-2xl p-2">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold hover:underline ">
                        How to use sticky note for problem solving
                    </a>
                    
                    <span class="text-sm">On: 20 October 2019</span>
                </div>
            </div>

            <div class="lg:flex border rounded-2xl p-2">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold hover:underline ">
                        How to use sticky note for problem solving
                    </a>

                    <span class="text-sm">On: 20 October 2019</span>
                </div>
            </div>

            <div class="lg:flex border rounded-2xl p-2">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold hover:underline ">
                        Morning routine to boost your mood
                    </a>

                    <span class="text-sm">On: 25 November 2020</span>
                </div>
            </div>

            <div class="lg:flex border rounded-2xl p-2">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold hover:underline ">
                        All the features you want to know
                    </a>

                    <span class="text-sm">On: 30 September 2020</span>
                </div>
            </div>

            <div class="lg:flex border rounded-2xl p-2">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold hover:underline ">
                        Minimal workspace for your inspirations
                    </a>

                    <span class="text-sm">On: 13 October 2019</span>
                </div>
            </div>

            <div class="lg:flex border rounded-2xl p-2">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="/" class="text-xl font-semibold hover:underline ">
                        What do you want to know about Blockchane
                    </a>
                    
                    <span class="text-sm">On: 20 October 2019</span>
                </div>
            </div>
        </div>
    </div>

    <section className="py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-14 text-center">
          Forum Highlights
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {discussionsData.map((discussion) => (
            <div
              key={discussion.id}
              className=" rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={discussion.image}
                alt={discussion.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  <Link to={`/forum/${discussion.id}`}>
                    {discussion.title}
                  </Link>
                </h3>
                <p className="mb-4">{discussion.summary}</p>
                <div className="flex items-center">
                  <img
                    src={discussion.authorAvatar}
                    alt={discussion.author}
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="ml-2">{discussion.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
</section>
  );
};

export default Blog;
