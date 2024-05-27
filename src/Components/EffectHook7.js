//Fetching the data using hooks
import React, { useState, useEffect } from "react";
import axios from "axios";

function EffectHook6() {
  const [posts, setPost] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default EffectHook6;
