import React from "react";

const FAQS = () => {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-medium">
          1. What will a person learn after enrolling in the courses?
        </div>
        <div className="collapse-content text-white">
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
        <div className="collapse-title text-xl font-medium">
          2. How much these courses cost?
        </div>
        <div className="collapse-content text-white">
          <p>
            It actually varies course to course. Please Check the respective course details.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-medium">
          3. Who are the instructors?
        </div>
        <div className="collapse-content text-white">
          <p>
            Here you will learn from the bests in their respective fields. Everyone has celebrated their success. Now they are committed to make champions. So do not have any doubt about the quality of our courses.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          4. What if I get stuck at any point of these courses?
        </div>
        <div className="collapse-content text-white">
          <p>
            We have a dedicated team to help you. If you face any problem, you can simply ask our team to help you. Our support team is available 24/7. We can assure you that you will not get this kind of support from any other platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
