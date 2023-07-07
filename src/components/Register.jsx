import React from "react";
import "../components/Register.css";

const Register = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="column">
          <div>
            <img
              src="https://images.pexels.com/photos/112116/pexels-photo-112116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="text-overlay">
              <h1>Altitude Air</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                dignissimos quod impedit ipsum eius praesentium. Quisquam
                quibusdam necessitatibus nostrum impedit deleniti facere
                perferendis. Accusamus dolorum est, non id porro delectus!
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <form>
            <div><h1>Explore & Experince</h1>
            <p>Get your most comfortable journey all the way up</p></div>
            <div>
            <input type="text" id="firstname" placeholder="FirstName"></input>
            <input type="text" id="lastname" placeholder="lastName"></input><br />
            
            <input type="text" id="email" placeholder="Email"></input><br/>
            <input type="text"id='username' placeholder="Username"></input><br/>
            <input type="text"id="password" placeholder="password"></input><br/>
            <input type="text" id="confirm"placeholder="confirm password"></input><br/>
            <button>Get started</button>

              
              
              </div>

          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Register;
