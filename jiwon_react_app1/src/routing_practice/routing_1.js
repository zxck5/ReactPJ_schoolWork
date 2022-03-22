import React, {useEffect} from "react";
import { Routes, Route, Link, useParams,useNavigate,useLocation } from "react-router-dom";

const App = () => {
    return (
        <div>
            <nav>
                <NaviagationPanel/>
                <Link to = "en/">Home</Link>{'  |  '}
                <Link to = "en/users/login">Login</Link>{'  |  '}
                <Link to = "en/users/register">register</Link>{'  |  '}
                <Link to = "en/users/dashboard">dashboard</Link>{'  |  '}
                <Link to = "en/projects">projects</Link>{' | '}
                
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}/>
  
                <Route path="/:lang">
                    <Route path="users">
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register/>}/> 
                        <Route path="dashboard" element={<Dashboard/>}/> 
                        <Route path=":lname/:fname/:country" element={<Account/>}/>
                        <Route path="*" element={<NotFound/>}></Route>  
                    </Route>
                    <Route path="redirect" element={<Redirect/>}/>

                    <Route path="projects" element={<ProjectList/>}/>
                    <Route path="projects/:name/:content/" element= {<Project/>}/>  
                    <Route path="*" element={<NotFound/>}></Route>

                </Route>
                <Route path="/accessdenied" element={<AccessDenied/>} />
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </div>
    )    
}
const Home = () => {
    return(
        <div><h1>Home</h1></div>
    )
}
const Redirect = () => {
    var navigate = useNavigate();
    setTimeout(()=>{
        navigate("/login");
    }, 5000);
    return <div>
        Please wait for 5 seconds
    </div>
}


const Account = () => {
    let {lname,fname,country} = useParams();
    var props = {userName : lname};

    var navigate = useNavigate();
    useEffect(()=>{
        if (country == "canada") {
            navigate("/accessdenied")
        }
    })

    return(
        <p>Name: {fname} {lname} country:{country}<Dashboard {...props}/></p>
    )
}
const AccessDenied = () => {
    return (
        <div><h1>AccessDenied</h1></div>
    )
}

const Register = () => {
    return(
        <div><h1>Register</h1></div>
    )
}

const Dashboard = () => {
    return(
        <div><h1>Dashboard</h1></div>
    )
}
const ProjectList = () => {
    
    let projects = [
        {project1 : 'Hello World'},
        {project2 :'Hello World2'}
    ];
    let array = [];
    for (var i = 0; i < projects.length; i++) {
        for (var key in projects[i]) {
            array.push(<ProjectRow name= {key} content = {projects[i][key]}/>)
        }
    }
    
    return( 
        <div>{array}</div>
    )
}
const Project = () => {
    var {name,content} = useParams();
    return(
        <div>project name is {name} content:{content}</div>
    )
}


const ProjectRow = (props) => {
    return(
        <div>{props.name} {props.content} <Link to = {"../../en/projects/" + props.name + "/" + props.content }>View</Link></div>
    ) 
}

const Login = () => {
    return(
        <div><h1>Login</h1></div>
    )
}
function NaviagationPanel () {
    let navigate = useNavigate();
    var forward = () => {
        navigate(+1);
    }
    var backward = () => {
        navigate(-1);
    }
    return (
        <div>
            <button onClick={forward}>Forward</button>
            <button onClick={backward}>backward</button>
        </div>
    )
}


const NotFound = () => {
    return(
        <div><h1>404</h1></div>
    )
}


export default App;