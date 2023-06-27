import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Footer from './footer';
import Header from './header';
import Main from './main';

function App() {
  return (
    <section>
      <Header />
      <Main />
      <Footer />
    </section>
  );
};

const app = ReactDOMClient.createRoot(document.getElementById("root"))

app.render(<App />)
