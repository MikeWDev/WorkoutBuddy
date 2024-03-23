import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./Pages/Home";
import Navbar from "./componets/navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_SECRET}`,
    authDomain: "workoutbuddy-f9020.firebaseapp.com",
    projectId: "workoutbuddy-f9020",
    storageBucket: "workoutbuddy-f9020.appspot.com",
    messagingSenderId: "924455778709",
    appId: "1:924455778709:web:ac6c24825166d585ec1e9c",
    measurementId: "G-PDS8GXDZG5",
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
          </Routes>
          <Routes>
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
          </Routes>
          <Routes>
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
