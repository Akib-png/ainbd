import React, { useState } from "react";
import NavigationM from '.Navigation/NavigationM';  // Correct import path


function PostSystem() {
  const [caseInput, setCaseInput] = useState("");
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    if (caseInput.trim()) {
      const newPost = {
        id: Date.now(),
        content: caseInput,
        date: new Date().toLocaleString(),
      };

      setPosts([newPost, ...posts]);
      setCaseInput("");
    } else {
      alert("Please enter case result before posting!");
    }
  };

  return (
    <div className="App">
      {/* Add NavigationM at the top */}
      <NavigationM />

      <h1>Case Results Feed</h1>
      <div className="input-container">
        <textarea
          placeholder="Write a case result..."
          value={caseInput}
          onChange={(e) => setCaseInput(e.target.value)}
        />
        <button onClick={handlePost} className="post-button">Post</button> {/* Added class */}
      </div>

      <div className="posts-container">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="post">
              <p>{post.content}</p>
              <small>{post.date}</small>
            </div>
          ))
        ) : (
          <p>No posts yet. Be the first to share!</p>
        )}
      </div>
    </div>
  );
}

export default PostSystem;
