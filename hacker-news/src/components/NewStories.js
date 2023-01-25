import React, { useEffect, useState } from "react";
import New from "./New";
import ReactPaginate from "react-paginate";
import style from "./NewStories.module.css"

function NewStories() {
  const [News, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`
      );
      const json = await response.json();

      setNews(json);
    }
    fetchNews();
  }, []);

  let [currentPageNumber, setCurrentPageNumber] = useState(0);
  let contentPerPage = 20;
  let contentsVisited = currentPageNumber * contentPerPage;

  let pageChange = (x) => {
    setCurrentPageNumber(x.selected);
  };
  return (
    <div>
      <div className={style.divStyle}>
        {News.slice(contentsVisited, contentsVisited + contentPerPage).map(
          (x) => (
            <New id={x} key={Math.random() * 10} />
          )
        )}
      </div>
      <div className={style.paginate}>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          onPageChange={pageChange}
          pageCount={contentPerPage}
          containerClassName={style.pagination}
          previousLinkClassName={style.previousLink}
          nextLinkClassName={style.nextLink}
          activeClassName={style.active}
        />
      </div>
    </div>
  );
}

export default NewStories;
