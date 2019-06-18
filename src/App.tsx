import * as React from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import "./css/app.css";

class App extends React.Component {
  public render() {
    return (
      <>
        <Navigation />
        <Header
          title='KLUG+MILKE'
          text='Software Solutions for Financial Enterprises'
        />

        <Content />

        <Footer text='© klug+milke GmbH - all rights reserved' />
      </>
    );
  }
}

export default App;
