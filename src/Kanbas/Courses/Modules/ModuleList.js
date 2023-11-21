import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId]);
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
  
  return (
    <div>
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
                ))}
          </ul>
        </div>
      </div>
      <div className="mt-5">
        <ul className="list-group">
          <li className="list-group-item">
            <button
              onClick={handleAddModule}
              className="btn btn-success float-end ms-2"
            >
              Add
            </button>
            <button
              onClick={() => handleUpdateModule(module._id)}
              className="btn btn-primary float-end ms-2"
            >
              Update
            </button>
            <div>
              <input
                value={module.name}
                onChange={(e) =>
                  dispatch(setModule({ ...module, name: e.target.value }))
                }
              />
            </div>
            <div>
              <textarea
                value={module.description}
                onChange={(e) =>
                  dispatch(
                    setModule({ ...module, description: e.target.value })
                  )
                }
              />
            </div>
          </li>
          {modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li key={index} className="list-group-item">
                <button
                  onClick={() => dispatch(setModule(module))}
                  className="float-end btn btn-success"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteModule(module._id)}
                  className="float-end btn btn-danger me-2"
                >
                  Delete
                </button>
                <h3>{module.name}</h3>
                <p>{module.description}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ModuleList;