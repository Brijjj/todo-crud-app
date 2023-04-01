import React from "react";

const Page = ({ totalpost, postperpage, setCurrentPage }) => {
  let pages = [];
  for (let i = 0; i <= totalpost / postperpage; i++) if(i>0) pages[i]=i
  

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

