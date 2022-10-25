import React from "react";

const Register = () => {
  return (
    <div className="lg:w-1/4 lg:mt-12 mt-8 mx-auto  bg-success-content p-8 rounded-xl">
        <h2 className="text-xl mb-4 text-center text-white">Register Your Account</h2>
      <div className="flex flex-col">
        <input className="text-center mb-4 p-2 rounded-lg" type="text" placeholder="First Name" />
        <input className="text-center mb-4 p-2 rounded-lg" type="text" placeholder="Last Name" />
        <input className="text-center mb-4 p-2 rounded-lg" type="text" placeholder="Photo URL" />
        <input className="text-center mb-4 p-2 rounded-lg" type="email" placeholder="Email" />
        <input className="text-center mb-4 p-2 rounded-lg" type="password" placeholder="Password" />
        <hr />
      </div>
        <button className="w-full mt-4 btn btn-outline btn-error btn-xs sm:btn-sm md:btn-md lg:btn-md">Register</button>
    </div>
  );
};

export default Register;
