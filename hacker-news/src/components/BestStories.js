import React, { useEffect, useState } from "react";
import New from "./New";
import ReactPaginate from "react-paginate";
import style from "./BestStories.module.css"

function BestStories() {
  const [News, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty`
      );
      const json = await response.json();

      setNews(json);
    }
    fetchNews();
  }, []);



  const [pageNumber, setPageNumber] = useState(0);
  const newsPerPage = 20;
  const pagesVisited =  pageNumber * newsPerPage;

  const pageCount = Math.ceil(News.length/newsPerPage)

  const pageChange = (s)=>{
    setPageNumber(s.selected)
  }
  
  return (
    <div>
      <div className={style.divStyle}>
        {News.slice(pagesVisited, pagesVisited + newsPerPage).map((x) => (
          <New id={x} key={Math.random() * 10} />
        ))}
      </div>
      <div className={style.paginate}>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          pageCount={pageCount}
          onPageChange={pageChange}
          containerClassName={style.pagination}
          previousLinkClassName={style.previousLink}
          nextLinkClassName={style.nextLink}
          activeClassName={style.active}
        />
      </div>
    </div>
  );
}

export default BestStories;
