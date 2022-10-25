import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.fullName.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
        })
        .catch(error => {
            console.error(error);
        })
    }

  return (
    <div className="lg:w-1/4 lg:mt-12 mt-8 mx-auto  bg-success-content p-8 rounded-xl">
        <h2 className="text-xl mb-4 text-center text-white">Register Your Account</h2>
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <input className="text-center mb-4 p-2 rounded-lg" type="text" placeholder="Full Name" name="fullName"/>
                <input className="text-center mb-4 p-2 rounded-lg" type="text" placeholder="Photo URL" name="photo"/>
                <input className="text-center mb-4 p-2 rounded-lg" type="email" placeholder="Email" name="email"/>
                <input className="text-center mb-4 p-2 rounded-lg" type="password" placeholder="Password" name="password"/>
                <hr />
            </div>
                <button className="w-full mt-4 btn btn-outline btn-error btn-xs sm:btn-sm md:btn-md lg:btn-md">Register</button>
        </form>
    </div>
  );
};

export default Register;
