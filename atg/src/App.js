import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
// import Post from "./components/Posts/Post";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
