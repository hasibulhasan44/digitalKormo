import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {
    const {createUser, myStyle, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.fullName.value;
        const photourl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(photourl, name)
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset();
            alert('done');
            handleProfileUpdate(name, photourl)
        })
        .catch(error => {
            console.error(error);
        })
    }

    const handleProfileUpdate = (name, photourl)=> {
        const profile = {
            displayName: name,
            photoURL: photourl
        }
        updateUserProfile(profile)
        .then(() =>{ })
        .catch(e => console.log(e))
    }

  return (
    <div style={myStyle} className='h-screen'>
        <div className="lg:w-1/4 mx-auto p-8 rounded-xl" style={myStyle}>
        <h2 className="text-xl mb-4 text-center">Register Your Account</h2>
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <input className="text-center mb-4 p-2 rounded-lg" type="text" placeholder="Full Name" name="fullName"/>
                <input className="text-center mb-4 p-2 rounded-lg" type="text" placeholder="Photo URL" name="photo"/>
                <input className="text-center mb-4 p-2 rounded-lg" type="email" placeholder="Email" name="email"/>
                <input className="text-center mb-4 p-2 rounded-lg" type="password" placeholder="Password" name="password"/>
                <input className="text-center mb-4 p-2 rounded-lg" type="password" placeholder="Confirm Password" name="confirm"/>
                <hr />
            </div>
                <button className="w-full mt-4 btn btn-outline btn-error btn-xs sm:btn-sm md:btn-md lg:btn-md">Register</button>
        </form>
        </div>
    </div>
  );
};

export default Register;
