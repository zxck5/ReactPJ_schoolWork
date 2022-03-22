import { Route, Routes, Link, useParams, useNavigate, useLocation } from "react-router-dom";
import Acc from "./accountList.json";


const App = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> {' | '}
                <Link to="user/login">Login</Link>{' | '}
                <Link to="user/register">Register</Link>{' | '}
                <Link to="user/account">Account</Link>{' | '}
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="user/login" element={<Login />} />
                <Route path="user/register" element={<Register />} />
                <Route path="user/account" element={<AccountList/>}/>
                <Route path="user/account/:number/:id/:pw/:name" element={<AccountInfo/>}/>
                <Route path="user/login/success" element={<LoginSuccess/>}/>
                <Route path="user/register/success" element={<RegisterSuccess/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    )

}

const Home = () => {
    return (
        <div><h1>Home</h1></div>
    )
}
const LoginSuccess=()=>{
    return(
        <div><h1>LoginSuccess</h1></div>
    )
}
const RegisterSuccess=()=>{
    return(
        <div><h1>Register Success</h1></div>
    )
}
const AccountList = () => {
    let accounts = Acc.accountList;
    
    let accControl = [];
    for (var i = 0; i < accounts.length; i ++) {
        accControl.push(<AccRow number = {accounts[i].accountNum} id = {accounts[i].id} pw = {accounts[i].pw} name = {accounts[i].name} />)   
    }

    return accControl;

}

const AccRow = (props) => {
    return (
        <div> account Number : {props.number} id : {props.id} <Link to={"../../user/account/"+props.number+"/"+props.id+"/"+props.pw+"/"+props.name}>View</Link> </div>
    )
}
const AccountInfo = () => {
    var {number,id,pw,name} = useParams();
    var location = useLocation();
    return(
        <div>
            acc Number: {number} <br/>
            acc id: {id}<br/>
            acc pw: {pw}<br/>
            acc name: {name}<br/>
            {location.pathname}
        </div>
    )

}



const Login = () => {
    var navigate = useNavigate();

    const OnSubmit = () => {
        navigate("../../user/login/success");
    }

    return (
        <div>
            <form method="get" onSubmit={OnSubmit} >
                id:<input type="text" />
                <br />
                pw:<input type="password" />
                <br />
                <input type="submit" value="Login"/>
            </form>

        </div>
    )
}
const Register = () => {
    var navigate = useNavigate();
    const OnSubmit = () => {
        navigate("../../user/register/success");
    }

    return (
        
        <div>
            <form method="get" onSubmit={OnSubmit}>
                id:<input type="text" />
                <br />
                pw:<input type="password" />
                <br />
                pw confirm:<input type="password" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

const NotFound = () => {
    return(
        <div><h1>404</h1></div>
    )
}

export default App;