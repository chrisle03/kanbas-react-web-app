import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./styles.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <div>
      <div className="float-end">
        <button className="btn btn-secondary">Collapse All</button>
        <button className="btn btn-secondary">View Progress</button>
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Publish All</button>
        <button className="btn btn-danger">+ Module</button>
        <button className="btn btn-secondary"><i style={{ color: "white" }} className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
      </div>
      <div style={{ paddingTop: "30px" }}><hr /></div>
      <div className="col">
        <ul className="list-group fixed-list-group" style={{ borderRadius: "0" }}>
          {
            modules
              .filter((module) => module.course === courseId)
              .map((module, index) => (
                <li key={index} className="list-group-item list-group-item-secondary py-3">
                  <i className="fas fa-grip-vertical" style={{paddingRight: "3px" }}></i>
                  <i className="fas fa-caret-down" style={{paddingRight: "5px" }}></i>
                  <span>{module.name}</span>
                  <div className="float-end">
                    <i className="fas fa-check-circle" style={{ color: "green" }}></i>
                    <i className="fas fa-caret-down"></i>
                    <i className="fas fa-plus" style={{ fontSize: "small", paddingLeft: "10px", paddingRight: "10px", color: "gray" }}></i>
                    <i className="fas fa-ellipsis-v"></i>
                  </div>
                </li>
              ))
          }
        </ul>
      </div>
    </div>
  );
}

export default ModuleList;