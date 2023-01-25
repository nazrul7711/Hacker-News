import React, { useEffect, useState } from "react";
import style from "./New.module.css"

function New(props) {

  const [title, setTitle] = useState();
  const [by, setBy] = useState();
  const [url, setUrl] = useState();

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${props.id}.json?print=pretty`
      );
      const data = await response.json();
      setTitle(data.title)
      setBy(data.by)
      data.url ? setUrl(data.url) : setUrl(false)
    };
    fetchNews();
  }, []);

  return (
    <>
      <div className={style.container}>
        <a href={url ? url : "#"}>{title}</a>
        <p>By:{by}</p>
        <div className={style.line}></div>
      </div>
    </>
  );
}

export default New;

//react-router-dom@5
//import {Route} from react-router-dom

//<Route path="/welcome">
//<Welcome/>
//</Route>


//in index import BrowserRouter from "react-router-dom" <BrowserRouter><App/></BrowserRouter>

// import {Link} from "react-router-dom"
// <Link to="/welcome" >Welcome</Link>
// <NavLink activeClassName={classes.active} to="/welcome">Welcome</NavLink>
//path="/product-detail/:productId"
// import useParams from "react-router-dom"
//const params = useParams()
//{params.productId}
//Switch wrap for single component
//<Route path="/" exact>
//   <Redirect to="/Welcome"/>
// </Route>
