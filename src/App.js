import logo from "./logo.svg";
import "./App.css";
import MyButton from "./component/MyButton";
import MyHead from "./component/MyHead";
import Services from "./component/Services";
import Content from "./component/Content";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="container">
      <MyHead />
      <Services />
      <Content />
      <Footer></Footer>
    </div>
  );
}

export default App;
