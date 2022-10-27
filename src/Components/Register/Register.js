import React, { useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {
    const {createUser, myStyle, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState();

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.fullName.value;
        const photourl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if(password !== confirm){
            toast("pass didn't match")
            return;
        }
        else{
            createUser(email, password)
                .then(result => {
                const user = result.user;
                
                form.reset();
                navigate('/');
                setError('');
                handleProfileUpdate(name, photourl)
            })
            .catch(error => {
                console.error(error);
                toast(error.message);
            })
        }
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
                <input className="text-center mb-4 p-2 rounded-lg" type="text" placeholder="Full Name" name="fullName" required/>
                <input className="text-center mb-4 p-2 rounded-lg" type="text" placeholder="Photo URL" name="photo" required/>
                <input className="text-center mb-4 p-2 rounded-lg" type="email" placeholder="Email" name="email" required/>
                <input className="text-center mb-4 p-2 rounded-lg" type="password" placeholder="Password" name="password" required/>
                <input className="text-center mb-4 p-2 rounded-lg" type="password" placeholder="Confirm Password" name="confirm" required/>
                <hr />
            </div>
                <button className="w-full mt-4 btn btn-outline btn-error btn-xs sm:btn-sm md:btn-md lg:btn-md">Register</button>
        </form>
        <p className="text-red-500 m-3">{error}</p>
        </div>
    </div>
  );
};

export default Register;
