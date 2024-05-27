// //Fetching the data using hooks
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function EffectHook6() {
//   const [post, setPosts] = useState({});
//   const [id, setId] = useState(1);
//   const [idFromButtonClick, setIdFromButtonClick] = useState(1);
//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
//       .then((response) => {
//         console.log(response);
//         setPost(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [idFromButtonClick]);

//   const handleClick = () => {
//     setIdFromButtonClick(id);
//   };
//   return (
//     <div>
//       <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
//       <button type="button" onClick={handleClick}>
//         Fetch Psost
//       </button>
//       <div>{post.title}</div>
//       {/* <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul> */}
//     </div>
//   );
// }

// export default EffectHook6;
