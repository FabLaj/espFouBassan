import { Outlet } from "react-router-dom";
import DateList from "./DateList";

const SideBar = () =>
{
    return(
        <div className="row flex-nowrap">
            <div className="col-auto col-md-2 bg-light" >
                <div className="sidebar-sticky" style={{height: "100vh"}}>
                    <DateList></DateList>
                </div>
            </div>
            <div className="d-md-block m-2" style={{flexShrink: "1"}}>
                <Outlet/>
            </div>
        </div>
    );
} 

export default SideBar;