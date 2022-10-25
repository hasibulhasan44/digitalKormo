import React from "react";
import { useState } from "react";

const FAQS = () => {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });


  const toggleMode = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
    }
  };

  return (
    <div style={myStyle} className="h-screen">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div style={myStyle} className="collapse-title text-xl font-medium">
          1. What will a person learn after enrolling in the courses?
        </div>
        <div style={myStyle} className="collapse-content text-black">
          <p>
            It depends on that particular person. If anyone enrolls the{" "}
            <strong>Digital Marketing</strong> Course, he will learn the basics
            to advance of this field. Besides, it depends on the passion,
            hardwork and dedication of the student.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div style={myStyle} className="collapse-title text-xl font-medium">
          2. How much these courses cost?
        </div>
        <div style={myStyle} className="collapse-content text-black">
          <p>
            It actually varies course to course. Please Check the respective
            course details.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div style={myStyle} className="collapse-title text-xl font-medium">
          3. Who are the instructors?
        </div>
        <div style={myStyle} className="collapse-content text-black">
          <p>
            Here you will learn from the bests in their respective fields.
            Everyone has celebrated their success. Now they are committed to
            make champions. So do not have any doubt about the quality of our
            courses.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div style={myStyle} className="collapse-title text-xl font-medium">
          4. What if I get stuck at any point of these courses?
        </div>
        <div style={myStyle} className="collapse-content text-black">
          <p>
            We have a dedicated team to help you. If you face any problem, you
            can simply ask our team to help you. Our support team is available
            24/7. We can assure you that you will not get this kind of support
            from any other platform.
          </p>
        </div>
      </div>
      <label className="swap swap-rotate">
        <input type="checkbox" />

        <svg
          onClick={toggleMode}
          className="swap-on fill-current w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        <svg
          onClick={toggleMode}
          className="swap-off fill-current w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
    </div>
  );
};

export default FAQS;
