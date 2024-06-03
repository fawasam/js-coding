import React, { useEffect, useState } from "react";
const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?${page}`
        // `https://dummyjson.com/products?limit=10&skip=${page}`
      );
      const data = await response.json();
      //   console.log(products);
      setData((prev) => [...prev, ...data]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    console.log(scrollTop);
    console.log(clientHeight);
    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(page);

  return (
    <section>
      <div>
        <h1>Infinite Scroll</h1>
        {data &&
          data?.map((item, i) => (
            <div key={i}>
              <h3>{item.title}</h3>
            </div>
          ))}
        {loading && <p>Loading ...</p>}
      </div>
    </section>
  );
};

export default InfiniteScroll;
