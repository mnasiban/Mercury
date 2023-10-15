import React, { useEffect, useState } from "react";
import { getPosts } from "../services/Index";
import { json } from "react-router-dom";
import SingleCard from "./SingleCard";

function Cards() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const get = async () => {
      const { data } = await getPosts();
      setPosts(data.data);
    };
    get();
  }, []);
  const [filteredData, setFilteredData] = useState([]);
  function hanldeState() {
    setFilteredData(posts);
  }
  return (
    <div>
      <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-4 max-w-[1000px] mx-auto mt-10">
        {posts?.map((card, i) => 
          <SingleCard item={card} key={card.id} />
        )}
      </div>
      <button onClick={hanldeState}>submiy</button>
    </div>
  );
}

export default Cards;
