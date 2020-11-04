import React from "react";
import SkeletonElement from "./SkeletonElement";

const SkeletonArticle = ({ theme }) => {
  const themeClass = theme || "light"; // default light theme

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-article">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
    </div>
  );
};

export default SkeletonArticle;
