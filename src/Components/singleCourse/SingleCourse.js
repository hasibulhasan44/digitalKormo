import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const singleCourse = (props) => {
  console.log(props.course);
  const { name, img, rating, id } = props.course;
  return (
    <div>
        <div className="border-4 border-red-400 rounded-lg mr-4 p-4 mb-4">
          <div>
            <img className="w-full rounded-lg mx-auto" src={img} alt=""></img>
          </div>
          <div>
            <h2 className="mt-4 mb-4">
              Course Name: <span className="font-bold">{name}</span>
            </h2>
            <p className="flex mb-2">
              Ratings:<StarIcon className="h-6 w-4 text-yellow-400"></StarIcon>
              <span>{rating}</span>
            </p>
          </div>
          <Link to={`/courses/${id}`} className="btn btn-outline btn-info mt-2">
            Course Details
          </Link>
        </div>
    </div>
  );
};

export default singleCourse;
