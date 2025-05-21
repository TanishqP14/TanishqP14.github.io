import './App.css'
import NavBar from './component/NavBar'
import Banner from './component/Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useRef, use} from "react";

function App() {

  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    function updateHeight() {
      if (navRef.current) {
        setNavHeight(navRef.current.clientHeight);
        console.log(navRef.current.clientHeight);
      }
      
    }

    updateHeight(); // on mount
    window.addEventListener("resize", updateHeight); // on resize
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="App">
      <NavBar ref={navRef} />
      <Banner navHeight={navHeight} />
    </div>
  )
}

export default App
