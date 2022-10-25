import React from "react";

const Register = () => {
  return (
    <div className="w-1/4 mx-auto min-h-screen bg-base-200 p-8 rounded-xl">
        <h2 className="text-xl mb-4 text-center text-white">Register Your Account</h2>
      <div className="flex flex-col">
        <input className="text-center mb-4 p-2 rounded-lg" type="text" placeholder="First Name" />
        <input className="text-center mb-4 p-2 rounded-lg" type="text" placeholder="Last Name" />
        <input className="text-center mb-4 p-2 rounded-lg" type="text" placeholder="Photo URL" />
        <input className="text-center mb-4 p-2 rounded-lg" type="email" placeholder="Email" />
        <input className="text-center mb-4 p-2 rounded-lg" type="password" placeholder="Password" />

      </div>
    </div>
  );
};

export default Register;
