import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Contact, Features, Footer, Landing, ImageGallery, Navbar, NotFound, VideoGallery } from "./index";

export const App = () => {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing />
            <ImageGallery />
            <VideoGallery />
            <Features />
            <Contact />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      <Footer />
    </Router>
  );
}

