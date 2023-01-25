import { Route, Switch, Redirect } from "react-router-dom";
import BestStories from "./components/BestStories";
import NewStories from "./components/NewStories";
import TopStories from "./components/TopStories";
import Header from "./components/Header";
import style from "./App.module.css"

function App() {
  return (
    <div className={style.container}>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/top-stories" />
        </Route>
        <Route path="/top-stories" exact>
          <TopStories />
        </Route>
        <Route path="/new-stories" exact>
          <NewStories />
        </Route>
        <Route path="/best-stories" exact>
          <BestStories />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// import ReactPaginate from "react-paginate"
// const data = [some 50data]
// const [pageNumber,setPageNumber] = useState(0)
// const usersPerPage = 10
// const pagesVisited = usersPerPage*pageNumber
// const displayUsers = data.slice(pagesVisited,pagesVisited+usersPerPage)

// const pageCount = Math.ceil(data.length/usersPerPage)

// const changePage = ({selected})=>{
//   setPageNumber(selected)
// }

// return(
//   <div>
//     {displayUsers}
//     <ReactPaginate
//       previousLabel={"previous"}
//       nextLabel={"next"}
//       pageCount={pageCount}
//       onPageChange={changePage}
//       containerClassName={"container"}
//       previousLinkClassName={}
//       nextLinkClassName={}
//       disabledClassName={}
//       activeClassName={}
//     />
//   </div>
// )
