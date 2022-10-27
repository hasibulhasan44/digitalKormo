import React from "react";
import { StarIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import "./CourseDetails.css";

const CourseDetails = () => {
  const singleCourseApi = useLoaderData();
  const { img, name, rating, price, details, id } = singleCourseApi;
  console.log(singleCourseApi);
  const { myStyle } = useContext(AuthContext);
  return (
    <div>
        <div style={myStyle} className="lg:flex lg:justify-between p-4 flex justify-around">
            <div className="w-3/4 bg-gray-400 p-4 rounded-lg">
                <h1>Hello beloved Lerners. This is a course where you can learn {name} very efficiently and in a easy way. If you need any further query, you can easily press on the download button and download a PDF.</h1>
            </div>
            <div className="items-center">
                <ArrowDownTrayIcon className="h-12 w-12 mr-8 mx-auto text-red-600"></ArrowDownTrayIcon>
            </div>
        </div>


      <div id="single-course-container" className="flex">
        <div style={myStyle} className="min-h-screen p-4">
          <div>
            <img className="mx-auto rounded-xl" src={img} alt="" />
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:items-center grid grid-cols-1 mb-4">
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
          <Link to={`/premiumAccess/${id}`} className="btn">Get Premium Access</Link>
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
    </div>
  );
};

export default CourseDetails;
