import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const Register = () => {

  const {createUser} = useContext(AuthContext);


  const handleRegister = e => {
    e.preventDefault(e.currentTarget) 
    console.log(e);
    const form = new FormData(e.currentTarget)
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log( name, photo, email, password);

    // createUser 
    createUser(email, password)
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.log(error.message);
    })



  }
  return (
    <div>
      <Navbar></Navbar>
      <div>
      <h2 className="text-3xl my-10 text-center">Register Your Account</h2>
      <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Your Name</span>
          </label>
          <input type="text" placeholder="Enter Your Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="your photo" name="photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center mt-4">Already Have an Account ? <Link to='/login' className="text-blue-600 font-bold" >Login</Link></p>
      </div>
    </div>
  );
};

export default Register;