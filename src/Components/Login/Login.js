import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <div className="flex justify-between">
                    <label className="label">
                    <Link href="#" className="label-text-alt link link-hover text-md">
                        Forgot password?
                    </Link>
                    </label>
                    <Link to="/register" className="btn btn-outline btn-info mt-4">Register</Link>
                </div>
              </div>
              <div className="form-control mt-4">
                <Link className="btn btn-primary">Login</Link>
              </div>
              <hr className="mt-2"/>
              <div>
                <Link className="btn btn-outline w-full mt-4">Login With Github</Link>
                <Link className="btn btn-outline w-full mt-4">Login With Google</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
