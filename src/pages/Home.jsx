import { useState } from "react";
import BlogList from "../components/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { name: "Eminem Show", author: "james", body: "Lorem Ipsum...", id: "1" },
    { name: "Recovery", author: "mario", body: "Lorem Ipsum...", id: "2" },
    { name: "Space Bound", author: "chris", body: "Lorem Ipsum...", id: "3" },
    { name: "No Love", author: "dave", body: "Lorem Ipsum...", id: "4" },
  ]);

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
  };

  return (
    <div className="home">
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "chris")}
        title="Top Blog"
        handleDelete={handleDelete}
      />
      <BlogList blogs={blogs} title="Latest Blog" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
