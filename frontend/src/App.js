import React from 'react';
import './styles/main.scss';
import { Toaster } from 'react-hot-toast';

import Navbar from "./components/navbar/navbar"
import AppHeader from './components/header/appHeader';
import TodoData from './components/todoData/todoData';
function App() {
  return (
    <>
      <div className="container">
        <Navbar>TODO List</Navbar>
        <div>
          <AppHeader />
          <TodoData />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default App;
