import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import Chatpage from "./pages/Chatpage";
function App() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/auth" element={<AuthPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/chat/:id" element={<Chatpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
