import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./styles.css"

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div style={{paddingTop:"15px"}}>
      <div className="row" >
        <div className="col" style={{ marginBottom: "-30px" }}>
          <input className="form-control w-25" placeholder="Search for Assignment" />
        </div>
        <div className="col-auto float-end" style={{ marginBottom: "-30px" }}>
          <button className="btn btn-secondary">+ Group</button>
          <button className="btn btn-danger">+ Assignment</button>
          <button className="btn btn-secondary">
            <i style={{ color: "white" }} className="fa fa-ellipsis-v" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div style={{ paddingTop: "30px" }}><hr /></div>
      <div className="col">
        <ul className="list-group" style={{ borderRadius: "0", width: "930px", overflow: "auto" }}>
          <li className="list-group-item list-group-item-secondary py-3">
            <i className="fas fa-grip-vertical" style={{paddingRight: "4px"}}></i>
            <i className="fas fa-caret-down" style={{paddingRight: "4px"}}></i>
            <span style={{ fontWeight: "bold" }}>Assignments</span>
            <div className="float-end">
                <span
                    className="rounded-pill"
                    style={{ outline: "solid thin black", padding: "8px" }}
                >
                    40% of Total
                </span>
                <i
                    className="fas fa-plus"
                    style={{
                        fontSize: "small",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        color: "gray",
                    }}
                ></i>
                <i className="fas fa-ellipsis-v"></i>
            </div>
          </li>
          {courseAssignments.map((assignment) => (
            <li className="list-group-item py-3 d-flex" style={{ borderLeft: "6px solid green" }}>
              <div className="col-1 d-flex align-items-center" style={{ fontSize: "x-large" }}>
                <i className="fas fa-grip-vertical"></i>
                <i className="fas fa-book" style={{ paddingLeft: "10px", color: "green" }}></i>
              </div>
              <div className="col-9">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{ color: "black", textDecoration: "none", fontWeight: "bold" }}>
                  {assignment.title}
                </Link>
                <div>
                  <small className="text-secondary">
                    Missing description
                  </small>
                </div>
              </div>
              <div className="col-2 d-flex align-items-center justify-content-end" style={{ fontSize: "large" }}>
                <i className="fas fa-check-circle" style={{ color: "green", paddingRight: "15px" }}></i>
                <i className="fas fa-ellipsis-v" style={{ color: "gray" }}></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Assignments;