import React, { useState } from "react";
import "./Courses.css";
import { useEffect } from "react";
import { useContext } from "react";
import SingleCourse from "../singleCourse/SingleCourse";
import { AuthContext } from "../../contexts/AuthProvider";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://digital-kormo-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const { myStyle } = useContext(AuthContext);

  return (
    <div id="courses-main-container" className="flex">
      <div
        style={myStyle}
        className="lg:min-h-screen min-h-screen lg:grid lg:grid-cols-2 grid grid-cols-1 mx-auto"
      >
        {courses.map((course) => (
          <p key={course.id}>
            <SingleCourse key={course.id} course={course}></SingleCourse>
          </p>
        ))}
      </div>

      <div style={myStyle} className="border-2 border-gray-600 rounded-lg">
        <h1 className="m-4 text-center bg-slate-400 rounded-lg pl-2 pb-2">
          Click on the buttons to go to the details page
        </h1>
        <div style={myStyle} className="p-8">
          <Link className="btn btn-primary mb-8" to={`/courses/1`}>
            Front-end development
          </Link>
          <Link className="btn btn-info mb-8 w-full" to={`/courses/2`}>
            Graphics Design
          </Link>
          <Link className="btn btn-secondary mb-8 w-full" to={`/courses/3`}>
            Digital Marketing
          </Link>
          <Link className="btn btn-success mb-8 w-full" to={`/courses/4`}>
            Video Editing
          </Link>
          <Link className="btn btn-accent mb-8 w-full" to={`/courses/5`}>
            CPA Marketing
          </Link>
          <Link className="btn w-full" to={`/courses/6`}>
            Spoken English
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
