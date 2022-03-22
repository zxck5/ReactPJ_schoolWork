import React, { useState, useEffect } from 'react';

import { Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';

function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="user/login">Login</Link>
      {" | "}
      <Link to="user/register">Register</Link>
      {" | "}
      <Link to="user/account/arman/hamzehlou">Account</Link>
      {" | "}
      <a href="../user/register"> Register (HREF)</a> <span> -- Why you should not use an anchor!</span>
      <br /> <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/accessdenied" element={<AccessDenied />} />
        <Route path="/user">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="account">
            <Route path=":name">
              <Route path="" element={<Account />} />
              <Route path=":lname" element={<Account />} />
              <Route path=":lname/:country" element={<Account />} />
            </Route>

          </Route>

        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <br />
      <p>
        See how component below resets everytime you use an anchor instead of a link to navigate.
      </p>
      <Counter />
      <br />
      <HelloForm name="arman" lname="hamzehlou" loe="masters" />
    </div>
  );
}

function HelloForm(props) {

  return <Greeting {...props} />
}
function Greeting(props) {
  return <div>
    Hello {props.name} {props.lname} who has a {props.loe}!
  </div>
}
function Account() {
  var { name, lname, country } = useParams();
  var navigate = useNavigate();
  var location = useLocation();

  useEffect(() => {
    if (country == "canada") {
      buttonClick();
    }
  })

  var buttonClick = () => {
    navigate("/user/account/arman/hamzehlou/germany");
  }
  return <div>
    The username is {name} {lname} is from {country}
    <br />
    {location.pathname}
    <br />
    <button onClick={buttonClick}>Redirect to Access Denied Page</button>
  </div>
}
function AccessDenied() {
  return <div>You are not allowed to access the page</div>
}
function NotFound() {
  return <div>
    <h1>
      404 Not Found
    </h1>
    <img src="https://st.depositphotos.com/2702761/3989/v/600/depositphotos_39898855-stock-illustration-puppy-with-404-error-message.jpg" />
  </div>
}
function Home() {
  return <div>Home here</div>
}
function Counter(props) {
  const [counter, setCounter] = useState(0);
  var onclickHandler = () => {
    setCounter(counter + 1);
  }
  return <div>
    <button onClick={onclickHandler}>
      {counter} Increase
    </button>
  </div>
}
function Login() {
  return <div>
    <form>
      <input type="text" />
      <br />
      <input type="password" />
      <br />
      <input type="submit" value="Login" />
    </form>
  </div>
}
function Register() {
  return <div>
    <form>
      <input type="text" />
      <br />
      <input type="password" />
      <br />
      <input type="password" />
      <br />
      <input type="submit" value="Register" />
    </form>
  </div>
}
export default App;
