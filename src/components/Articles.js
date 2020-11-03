import React, { useState, useEffect } from "react";
import SkeletonElement from "../skeletons/SkeletonElement";

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      // Body.json() is asynchronous and returns a Promise object
      // that resolves to a JavaScript object.
      // JSON.parse() is synchronous can parse a string and
      // change the resulting returned JavaScript object.
      const data = await res.json();
      setArticles(data);
    }, 3000);
  });

  return (
    <div>
      <h2>Articles</h2>

      <SkeletonElement type="title" />
      <SkeletonElement type="text" />
      <SkeletonElement type="thumbnail" />
      <SkeletonElement type="avatar" />

      {articles &&
        articles.map((article) => (
          <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}
      {!articles && <div>loading...</div>}
    </div>
  );
};

export default Articles;
