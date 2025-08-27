const BlogList = () => {
  return (
    <div className="blog-list">
      {BlogList.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
