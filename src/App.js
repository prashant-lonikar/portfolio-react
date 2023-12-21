import About from "./components/About";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import Publications from "./components/Publications";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Publications />
    </div>
  );
}

export default App;
