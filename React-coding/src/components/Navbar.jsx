import { Link } from "react-router-dom";

const Navbar = () => {
  const data = [
    {
      link: "/modal",
      name: "Modal",
    },
    {
      link: "/shuffle-list",
      name: "ShuffleList",
    },
    {
      link: "/dropdown",
      name: "dropdown",
    },
    {
      link: "/list",
      name: "list",
    },
    {
      link: "/custom-hooks",
      name: "custom-hooks",
    },
    {
      link: "/infinite-scroll",
      name: "infinite-scroll",
    },
    {
      link: "/counter-ref",
      name: "counter-ref",
    },
    {
      link: "/stop-watch",
      name: "stop-watch",
    },
    {
      link: "/pure",
      name: "pure component",
    },
    {
      link: "/folder",
      name: "Folder",
    },
  ];
  return (
    <nav>
      {data.map((item) => (
        <div key={item.name}>
          <Link to={item.link}>{item.name}</Link>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
