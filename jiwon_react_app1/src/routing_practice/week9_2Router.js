
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
  useLocation,
  useNavigate
} from 'react-router-dom';


function App() {
  return (
    <div>
      <h1>


        <Link to="/">Home</Link>
        {" | "}
        <Link to="/login">Login</Link>
        {" | "}
        <Link to="/register">Register</Link>
        {" | "}  
        <Link to="/account">Account</Link>
        {" | "}
      </h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account/:name/:lname/:age0" element={<Account />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </div>

  );
}
function Account() {

  var {age0, name, lname, } = useParams();
  return <div>Account name is {name} {lname} is {age0} years old</div>
}
function Home() {
  return <div>Hello Here is the home page</div>
}
function PageNotFound() {
  return <div><img src="https://st3.depositphotos.com/3050385/17908/v/1600/depositphotos_179080780-stock-illustration-error-404-creative-illustration-dachshund.jpg">
  </img>Page Not Found</div>
}
function Login() {
  return <div>Please log in</div>
}
function Register() {
  return <div>
    Register Page
  </div>
}

export default App;
