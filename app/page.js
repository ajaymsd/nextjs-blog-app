'use client';
import Link from "next/link";
import { useState,useEffect,useRef } from "react";
export default function Home() {
  const [posts,setPosts] = useState([]);
  const searchRef = useRef("");
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/posts");
        const data = await response.json();
        setPosts(data.posts);
        console.log(data.posts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  const searchPosts = async() =>{
    const response = await fetch("http://localhost:3000/api/posts?search="+searchRef.current.value);
    const data = await response.json();
    setPosts(data.posts);
  }
  
  return (
    <>
   <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </main>
    <div className="flex justify-end px-4">
        <input ref={searchRef} type="text" className="px-4 py-2 border border-gray-300 rounded-md" placeholder="Search..." onInput={searchPosts}/>
        <button onClick={searchPosts} className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4">Search</button>
      </div>

      {posts.map((post,key) =>{
        return(
          <Link href={'/post/'+post._id} key={key}>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border border-gray-200 p-4">
          <img className="w-full h-48 object-cover mb-4" src={post.image} alt="Post Image"/>
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-600">{post.short_description}</p>
        </div>
    </div>
    </Link>
        )
      })}
    
    </>
      
  );
}
