import SideBar from "./SideBar";
import TagList from "./TagList";

export default function NavBar()
{
    return(
      <>
        <nav className="navbar navbar-dark bg-dark sticky-top flex-md-nowrap p-0">
          <div className="bg-dark text-white col-md-2">
            <button className="btn btn-link navbar-brand container-fluid">
              <TagList/>
            </button>
          </div>
        </nav>
      </>
    )
}