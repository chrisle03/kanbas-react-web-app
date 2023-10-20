import React from "react";

function Status() {
  return (
    <div style={{ paddingLeft: "10px" }}>
      <span>Course Status</span>
      <div className="btn-group" style={{ paddingBottom: "20px" }}>
        <button
          type="button"
          style={{ height: "40px", width: "114px" }}
          className="btn btn-secondary"
        >
          <span>
            <i className="fas fa-ban"></i>
          </span>
          Unpublish
        </button>
        <button
          type="button"
          style={{ height: "40px", width: "114px" }}
          className="btn btn-success"
        >
          <span>
            <i className="fas fa-check-circle"></i>
          </span>
          Published
        </button>
      </div>
      <button
        type="button"
        className="btn btn-secondary"
        style={{ width: "228px", marginTop: "3px" }}
      >
        <span>
          <i className="fas fa-file-import"></i>
        </span>{" "}
        Import Existing Content
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        style={{ width: "228px", marginTop: "3px" }}
      >
        <span>
          <i className="fas fa-chevron-circle-right"></i>
        </span>{" "}
        Import From Commons
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        style={{ width: "228px", marginTop: "3px" }}
      >
        <span>
          <i className="fas fa-bullseye"></i>
        </span>{" "}
        Choose Home Page
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        style={{ width: "228px", marginTop: "3px" }}
      >
        <span>
          <i className="fas fa-chart-bar"></i>
        </span>{" "}
        View Course Stream
      </button>

      <button
        type="button"
        className="btn btn-secondary"
        style={{ width: "228px", marginTop: "3px" }}
      >
        <span>
          <i className="fas fa-bullhorn"></i>
        </span>{" "}
        New Announcement
      </button>

      <button
        type="button"
        className="btn btn-secondary"
        style={{ width: "228px", marginTop: "3px" }}
      >
        <span>
          <i className="fas fa-chart-bar"></i>
        </span>{" "}
        New Analytics
      </button>

      <button
        type="button"
        className="btn btn-secondary"
        style={{ width: "228px", marginTop: "3px" }}
      >
        <span>
          <i className="fas fa-bell"></i>
        </span>{" "}
        View Course Notifications
      </button>

      <h6 style={{ marginTop: "20px" }}>To Do</h6>
      <hr />
      <span style={{ display: "block" }}>
        <i className="fas fa-dot-circle" style={{ color: "red" }}></i>
        <a href="#" style={{ textDecoration: "none", color: "red", paddingLeft: "5px"}}>
          Grade A1 - ENV + HTML
        </a>
      </span>
      <small>100 points | Sep 18 at 11:59pm</small>

      <div style={{ marginTop: "20px" }}>
        <span>Coming Up</span>
        <span className="float-end">
          <i className="fas fa-calendar-alt" ></i>
          <a
            href="#"
            style={{ textDecoration: "none", color: "red", fontSize: "small", paddingLeft: "3px" }}
          >
            View Calendar
          </a>
        </span>
      </div>
      <hr />

      <i className="fas fa-calendar-alt"></i>

      <span style={{ color: "red", paddingLeft: "5px" }}>Lecture</span>
      <div>
        <small>
          CS4550.12631.202410
          <br />
          Sep 11 at 11:45am
        </small>
      </div>

      <i className="fas fa-calendar-alt"></i>
      <span style={{ color: "red", paddingLeft: "5px" }}>CS5610 06 SP23 Lecture</span>
      <div>
        <small>
          CS4550.12631.202410
          <br />
          Sep 11 at 6pm
        </small>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <i className="fas fa-calendar-alt"></i>
        <span style={{ color: "red", paddingLeft: "5px" }}>
          CS5610 Web development Summer 1 2023 - LECTURE
        </span>
        <small>
          CS4550.12631.202410
          <br />
          Sep 11 at 7pm
        </small>
      </div>

      <small style={{ color: "red" }}>12 more in the next week...</small>
    </div>
  );
}

export default Status;