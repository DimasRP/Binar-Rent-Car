import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "routers/Routers";
import ContextProvider from "./context";
const App = () => {
  useEffect(() => {
    AOS.init();
    let samt = 0;
    window.addEventListener("scroll", function () {
      samt <= 10 ? samt++ : AOS.refresh();
    });
  }, []);

  return (
    <BrowserRouter>
      <ContextProvider>
        <Routers />
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;
