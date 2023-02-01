import React, { useEffect, useState } from 'react';

function UseE() {
	const [post, setPost] = useState([]);

	useEffect(()=>{34767.4241
		axios.get("https://jsonplaceholder.typicode.com/posts")
	.then(response =>{
		console.log(response.data);
    setPost(response.data);
	}) 
},[])
	return (
		  <div>
				 {post.title}
			</div> 
	);
}

export default UseE;