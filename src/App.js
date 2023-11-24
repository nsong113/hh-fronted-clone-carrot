import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./ pages/Login/LoginPage";
import SignupPage from "./ pages/Signup/SignupPage";
import MainPage from "./ pages/Main/MainPage";
import ModifyPage from "./ pages/Modify/ModifyPage";
import DetailPage from "./ pages/Detail/DetailPage";
import WritePage from "./ pages/Write/WritePage";
import MypagePage from "./ pages/MypagePage/MypagePage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/modify" element={<ModifyPage />} />
      <Route path="/mypage" element={<MypagePage />} />
      <Route path="/detail" element={<DetailPage />} />
      <Route path="/write" element={<WritePage />} />
    </Routes>
  );
}

export default App;
