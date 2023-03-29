import React from "react";

const Page = ({ totalpost, postperpage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= totalpost / postperpage; i++) pages.push(i);

  return (
    <div>
      {pages.map((page) => {
        return (
          <button onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Page;
