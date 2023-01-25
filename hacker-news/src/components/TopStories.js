import React, { useEffect, useState } from "react";
import New from "./New";
import ReactPaginate from "react-paginate";
import style from "./TopStories.module.css"

function TopStories() {
  const [News, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
      );
      const json = await response.json();
      setNews(json);
    }
    fetchNews();
  }, []);

  let [currentPageNumber,setCurrentPageNumber] = useState(0)
  let contentsPerPage = 20
  let contentsVisited = currentPageNumber+contentsPerPage
  let displayContent = News.slice(contentsVisited,contentsVisited+contentsPerPage).map(x=><New id={x} key={Math.random()*10}/>)

  let pageChange = (x)=>{
    setCurrentPageNumber(x.selected)
  }

  return (
    <div>
      <div className={style.divStyle}>{displayContent}</div>
      <div className={style.paginate}>
        <ReactPaginate
          nextLabel={"next"}
          previousLabel={"previous"}
          pageCount={contentsPerPage}
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

export default TopStories;
