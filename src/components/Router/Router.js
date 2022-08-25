import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Contacts from "../../containers/Contacts/Contacts";
import AddContactPage from "../../containers/AddContactPage/AddContactPage.js";
import EditContactPage from "../../containers/EditContactPage/EditContactPage";
import { ContextProvider } from "../../context/GlobalState";
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from "react-toastify";
const Router = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Contacts />}></Route>
          <Route path="/contact/new" element={<AddContactPage />}></Route>
          <Route path="/contact/edit/:id" element={<EditContactPage />}></Route>
        </Routes>
        <ToastContainer pauseOnHover={false} autoClose={1300}/>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default Router;
