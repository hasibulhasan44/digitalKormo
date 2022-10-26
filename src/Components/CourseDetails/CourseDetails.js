import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import './CourseDetails.css'

const CourseDetails = () => {
  const singleCourseApi = useLoaderData();
  const { img, name, rating, price, details } = singleCourseApi;
  console.log(singleCourseApi);
  const { myStyle } = useContext(AuthContext);
  return (
    <div id="single-course-container" className="flex">
      <div style={myStyle} className="h-screen pr-4">
        <div>
          <img className="mx-auto rounded-xl" src={img} alt="" />
        </div>
        <div className="grid grid-cols-3 items-center">
          <h1 className="mt-4 mb-4">
            Name: <span className="text-lg font-bold">{name}</span>
          </h1>
          <p className="flex">
            Ratings:{rating}
            <StarIcon className="h-6 w-4 text-yellow-400"></StarIcon>{" "}
          </p>
          <p>Price: ${price}</p>
        </div>

        <div>
          <p>Details: {details.description}</p>
          <p className="mt-4">Advantages: {details.advantages}</p>
        </div>
      </div>


      <div style={myStyle} className="border-2 border-gray-600 rounded-lg">
        <h1 className="m-4 text-center bg-slate-400 rounded-lg pl-2 pb-2">Click on the buttons to go to the details page</h1>
        <div style={myStyle} className="p-8">
            <Link className="btn btn-primary mb-8" to={`/courses/1`}>Front-end development</Link>
            <Link className="btn btn-info mb-8 w-full" to={`/courses/2`}>Graphics Design</Link>
            <Link className="btn btn-secondary mb-8 w-full" to={`/courses/3`}>Digital Marketing</Link>
            <Link className="btn btn-success mb-8 w-full" to={`/courses/4`}>Video Editing</Link>
            <Link className="btn btn-accent mb-8 w-full" to={`/courses/5`}>CPA Marketing</Link>
            <Link className="btn w-full" to={`/courses/6`}>Spoken English</Link>
        </div>
        </div>
    </div>
  );
};

export default CourseDetails;
