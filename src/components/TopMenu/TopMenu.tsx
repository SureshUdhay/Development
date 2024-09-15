import React from "react";
import TopMenuAccount from "./TopMenuAccount";
import "./TopMenu.css";
import { useSelector } from "react-redux";
import { IStateType, IRootPageStateType } from "../../store/models/root.interface";

const TopMenu: React.FC = () => {
  const page: IRootPageStateType = useSelector((state: IStateType) => state.root.page);

  return (
    <nav className="navbar navbar-expand navbar-light bg-custom-dark topbar mb-4 static-top shadow">
  
       <div className="col text-center align-items-center text-white-50">
          <p className="h4 fw-light mb-4 headingcolor" style={{color:'#fff',marginTop:'10px'}}>
            Monthly Vehicle Inspection
          </p>
        </div>
    
    </nav>
  );
};

export default TopMenu;
