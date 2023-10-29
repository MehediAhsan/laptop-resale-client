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

      const blogs = [
        {
          "id": 1,
          "image": "https://source.unsplash.com/WLUHO9A_xik/800x600",
          "title": "Exploring Nature's Wonders",
          "date": "2023-10-20"
        },
        {
          "id": 2,
          "image": "https://images.unsplash.com/photo-1698434156086-918aa526b531?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "title": "The Art of Photography",
          "date": "2023-10-20"
        },
        {
          "id": 3,
          "image": "https://images.unsplash.com/photo-1602080858428-57174f9431cf?auto=format&fit=crop&q=80&w=1551&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "title": "Culinary Adventures: Tasting the World",
          "date": "2023-10-20"
        },
        {
          "id": 4,
          "image": "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "title": "Urban Exploration: Capturing City Vibes",
          "date": "2023-10-20"
        },
        {
          "id": 5,
          "image": "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "title": "Unraveling the Universe: Space Exploration",
          "date": "2023-10-20"
        },
        {
          "id": 6,
          "image": "https://source.unsplash.com/XtUd5SiX464/800x600",
          "title": "The Joy of Reading: Literary Escapes",
          "date": "2023-10-20"
        }
      ]
      
  return (
    
<section class="my-14">
    <div class="container px-6 py-10 mx-auto">
        <h1 data-aos="fade-right" data-aos-duration="1000" class="text-2xl font-semibold capitalize md:text-3xl text-center pb-8">Our latest blog</h1>

        <div data-aos="fade-up" data-aos-duration="1000" class="grid grid-cols-1 gap-14 mt-8 md:mt-16 md:grid-cols-2">
            {
              blogs.map(blog => <div key={blog.id} class="lg:flex shadow shadow-secondary rounded-2xl p-2">
              <img class="object-cover w-full h-56 rounded-lg lg:w-64 skew-y-1 skew-x-1" src={blog.image} alt=""/>

              <div class="flex flex-col gap-3 justify-evenly py-6 lg:mx-6">
                  <a href="/" class="text-xl font-semibold hover:underline ">
                      {blog.title}
                  </a>
                  
                  <span class="">{blog.date}</span>
                  <button className="shadow shadow-secondary rounded w-20 p-1">See More</button>
              </div>
          </div>)
            }
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
              className="rounded-lg shadow overflow-hidden shadow-secondary"
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
