import axios from "axios";
import React, { useEffect, useState } from "react";

const T_Website = ({}) => {
  useEffect(() => {
    const api = axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPost(response.data);
      });
  });

  const [post, setPost] = useState(null);
  const [visible, setVisible] = useState(2);

  const loadMore = () => {
    setVisible((preValue) => preValue + 2);
  };

  return (
    <>
      <div className="row p-2 mt-2 ">
        {post?.slice(0, visible).map((items) => (
          <div className="col-md-6 mt-3" key={items.id}>
            <div className="card">
              <p>{items.title}</p>
              <div className="card-body">
                <p>{items.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-primary btn-lg" onClick={loadMore}>
        Load More
      </button>
    </>
  );
};

export default T_Website;
