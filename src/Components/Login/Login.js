import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
    const {myStyle} = useContext(AuthContext);

    const navigate = useNavigate();

    const {signIn, googleSignIn, githubSignIn} = useContext(AuthContext);

    const googleProvider =new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const handleSubmit =event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            const user = result.user;
            navigate('/')
        })
        .catch(error => {
            console.error(error);
        })
    }

    const handleGoogleSignIn = () =>{
        googleSignIn(googleProvider);
    }

    const handleGithubSignIn = () =>{
        githubSignIn(githubProvider);
    }

  return (
    <div style={myStyle}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body" style={myStyle}>
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label className="label">
                    <span className="label-text" style={myStyle}>Email</span>
                    </label>
                    <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                    <span className="label-text" style={myStyle}>Password</span>
                    </label>
                    <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    />
                    <div className="flex justify-between">
                        <label className="label">
                        <Link href="#" className="label-text-alt link link-hover text-md" style={myStyle}>
                            Forgot password?
                        </Link>
                        </label>
                        <Link to="/register" className="btn btn-outline btn-info mt-4">Register</Link>
                    </div>
                </div>
                <div className="form-control mt-4">
                    <button className="btn btn-primary" style={myStyle}>Login</button>
                </div>
              </form>
                <hr className="mt-2"/>
                <div>
                    <Link className="btn btn-outline w-full mt-4" onClick={handleGithubSignIn} style={myStyle}>Login With Github</Link>
                    <Link className="btn btn-outline w-full mt-4" onClick={handleGoogleSignIn} style={myStyle}>Login With Google</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
