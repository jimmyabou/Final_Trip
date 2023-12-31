import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './providers/UserContext';
import AttractionsProvider from './providers/AttractionsContext';
import { ModalProvider } from './providers/ModalContext';
import Modal from 'react-modal';
import { PlannerProvider } from './providers/PlannerContext';
Modal.setAppElement('#root');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
          <PlannerProvider>
      <ModalProvider>
        <AttractionsProvider>
          <App />
        </AttractionsProvider>
      </ModalProvider>
          </PlannerProvider>
    </UserProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
