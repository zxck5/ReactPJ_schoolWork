
function Welcome (props) {
    return <h1>Hello, {props.name}</h1>
}
function App() {
    return (
        <div>
            <Welcome name="Sara"></Welcome><Welcome name="Cahal"></Welcome><Welcome name="Edite"></Welcome>

        </div>
    );
}
export default App;