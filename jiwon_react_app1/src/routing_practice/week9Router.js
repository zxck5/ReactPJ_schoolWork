
import { Routes, Route, Link, useParams } from 'react-router-dom'

function App() {
  var lang = "fr";
  return (
    <div>
      <Link to={lang + "/"}>Home</Link>
      {"  |  "}
      <Link to={lang + "/users/login"}>Login</Link>
      {"  |  "}
      <Link to={lang + "/users/register"}>Register</Link>
      {"  |  "}
      <Link to={lang + "/Projects/"}>Projects</Link>
      {"  |  "}
      <Link to={lang + "/users/Dashboard"}>Dashboard</Link>
      {"  |  "}

      <br />
      <Routes>

        <Route path="*" element={<NotFoundPage />} />
        <Route path="/:lang">
          <Route path="" element={<Home />} />
          <Route path="users">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="Projects/" element={<ProjectList />} />
          <Route path="Project/:id/:name/" element={<Project />} />
        </Route>
      </Routes>

    </div>
  );
}
function Dashboard() {

  return <div>User Dashboard</div>;
}
function Project() {
  var { id, name } = useParams();
  return <div>Project ID is {id} and it's name is {name}</div>;
}
function ProjectRow(props) {
  return <div>{props.id} {props.name} <Link to={"../../en/Project/" + props.id + "/" + props.name}>View</Link></div>;
}
function ProjectList() {
  let projects = [];
  for (var i = 0; i < 100; i++) {
    projects.push(<ProjectRow name={"project" + i} id={i} />);
  }
  return <div>
    {projects}
  </div>;
}
function NotFoundPage() {
  return <div><h1>Page not found</h1><img src="https://images.squarespace-cdn.com/content/v1/51fbb364e4b0d35aeaac238d/1375486403967-TFWBUHT8O3FWXCTJK5JM/404-page-error.jpg"></img></div>;
}
function Home() {
  return "We are at home!";
}
function Login() {
  return <div>
    <h1>Login</h1>
    <form>
      <input type="text" id="login" name="login" placeholder="username" />
      <input type="text" id="password" name="login" placeholder="password" />
      <input type="submit" value="Login" />
    </form>
  </div>
}
function Register() {
  return <div>
    <h1>Register</h1>
    <form>
      <input type="text" id="login" name="login" placeholder="username" />
      <input type="text" id="password" name="login" placeholder="password" />
      <input type="submit" value="Register" />
    </form>
  </div>
}
export default App;
