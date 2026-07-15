import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 10;
  const country = "us";
  const apiKey = process.env.REACT_APP_API_KEY;
  const [progress, setProgress] = useState(0);
  const [searchItem, setSearchItem] = useState("");

  return (
    <div>
      <Router>
        <LoadingBar color="#f11946" progress={progress} />
        <NavBar setSearchItem={setSearchItem} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                searchItem={searchItem}
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country={country}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                searchItem={searchItem}
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country={country}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                searchItem={searchItem}
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country={country}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                searchItem={searchItem}
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country={country}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                searchItem={searchItem}
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country={country}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                searchItem={searchItem}
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country={country}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                searchItem={searchItem}
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country={country}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                searchItem={searchItem}
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country={country}
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
