'use client';
import { useEffect, useState } from "react";
export default function Post({params}) {
    const [post,setPost] = useState({});
    useEffect(()=>{
    const fetchPost =async () =>{
        try {
            const response = await fetch('http://localhost:3000/api/post/'+params.id);
            const data= await response.json();
            setPost(data.post);
            console.log(data);
           } catch(err) {
             console.log(err)
           }
    }
      fetchPost();
    },[params.id]);

    return (
        <>
<main className="container mx-auto px-4 py-6">
<h2 className="text-4xl font-bold mb-4">{post.title}</h2>
<p className="text-gray-500">Published on January 1, 2022</p>
<img src={post.image} alt="Post Image" className="my-4  "/>
<p>{post.description}</p>
</main>
        </>
        );
}