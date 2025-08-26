const NavBar = () => {
  const handleClick = (name) => {
    console.log(`Hello ${name}`);
  };

  return (
    <nav className="navbar">
      <h1>Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
        <button onClick={() => handleClick("day")}>click</button>
      </div>
    </nav>
  );
};

export default NavBar;
