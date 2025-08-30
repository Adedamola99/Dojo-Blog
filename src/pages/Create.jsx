import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Yuri");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addBlog = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setLoading(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("blog added");
      setLoading(false);
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Add New Blog</h2>
      <form onSubmit={addBlog}>
        <label>Blog Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog Body:</label>
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="moshi">Moshi</option>
          <option value="yuri">Yuri</option>
        </select>
        <button>{loading ? "Loading" : "Add Blog"}</button>
      </form>
    </div>
  );
};

export default Create;
