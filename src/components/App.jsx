import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from 'pages/Home';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import Contacts from 'pages/Contacts';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='register' element={<RegisterPage />}/>
        <Route path='login' element={<LoginPage />}/>
        <Route path='contacts' element={<Contacts />}/>
      </Route>
    </Routes>
  );
};
