import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTopButton from "./components/footer/ScrollToTopButton";

function App() {
  return (
    <>
      <Routes>
        <Route path="/wiz_music" element={<Home />} />
      </Routes>

      {/* Home과 완전히 분리 */}
      <ScrollToTopButton />
    </>
  );
}

export default App;
