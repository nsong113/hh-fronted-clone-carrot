import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/Signup/SignupPage';
import MainPage from './pages/Main/MainPage';
import ModifyPage from './pages/Modify/ModifyPage';
import DetailPage from './pages/Detail/DetailPage';
import WritePage from './pages/Write/WritePage';
import MypagePage from './pages/MypagePage/MypagePage';
import Layout from './layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/modify" element={<ModifyPage />} />
        <Route path="/mypage" element={<MypagePage />} />
        <Route path="/detail/:goodsId" element={<DetailPage />} />
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
