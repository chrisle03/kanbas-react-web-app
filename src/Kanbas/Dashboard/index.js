import { Link } from "react-router-dom";
import db from "../Database";
import "./styles.css";
import {React, useState } from "react";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {

  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div style={{ fontSize: "40px" }}>Dashboard</div>
            <hr />
            <div style={{ paddingLeft: "2%" }}>
              <h3>Published Courses ({courses.length})</h3>
              <hr />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="d-flex flex-row flex-wrap">
              {courses.map((course) => (
                <div key={course._id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="card">
                    <img src="../images/card.png" alt="Course Thumbnail" />
                    <div className="card-body">
                      <h6 className="card-link text-truncate">
                        <Link to={`/Kanbas/Courses/${course._id}`}>
                          {course.name}
                        </Link>
                      </h6>
                      <span>{course.number}</span>
                      <p className="text-truncate">
                        <small>{`${course.startDate} to ${course.endDate}`}</small>
                      </p>
                      <i className="fas fa-file-signature"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-10">
            <input
              value={course.name}
              className="form-control"
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
            <input
              value={course.number}
              className="form-control"
              onChange={(e) => setCourse({ ...course, number: e.target.value })}
            />
            <input
              value={course.startDate}
              className="form-control"
              type="date"
              onChange={(e) =>
                setCourse({ ...course, startDate: e.target.value })
              }
            />
            <input
              value={course.endDate}
              className="form-control"
              type="date"
              onChange={(e) =>
                setCourse({ ...course, endDate: e.target.value })
              }
            />
          </div>
          <div className="col-2 d-flex flex-column justify-content-center">
            <button onClick={addNewCourse} className="mb-2 btn btn-success">
              Add
            </button>
            <button onClick={updateCourse} className="btn btn-primary">
              Update
            </button>
          </div>
        </div>
        <div className="list-group mt-5">
          {courses.map((course) => (
            <Link
              key={course._id}
              to={`/Kanbas/Courses/${course._id}`}
              className="list-group-item"
            >
              <button
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }}
                className="float-end btn btn-danger"
              >
                Delete
              </button>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}
                className="float-end btn btn-warning me-2"
              >
                Edit
              </button>
              {course.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;