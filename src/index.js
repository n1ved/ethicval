import React from "react";
import { createRoot } from 'react-dom/client';
import Modal from "react-modal";
import { HashRouter } from 'react-router-dom'
import AgencyLandingPage from "demos/AgencyLandingPage.js";

Modal.setAppElement("#root");

const container = document.getElementById('root');
const root = createRoot(container);
root.render((
  <HashRouter>
    <AgencyLandingPage />
  </HashRouter>
));
