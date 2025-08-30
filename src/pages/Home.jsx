import BlogList from "../components/BlogList";
import useFetch from "../hooks/fetch";

const Home = () => {
  const {
    data: blogs,
    loading,
    errorMessage,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {loading && <div>Loading....</div>}
      {errorMessage && <div>{errorMessage}</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
