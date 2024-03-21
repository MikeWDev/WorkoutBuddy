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
    apiKey: "AIzaSyBY-wiVhWmMDrRd9_yKl04mFrnPTTxY-Fo",
    authDomain: "workoutbuddy-575d5.firebaseapp.com",
    projectId: "workoutbuddy-575d5",
    storageBucket: "workoutbuddy-575d5.appspot.com",
    messagingSenderId: "31814171225",
    appId: "1:31814171225:web:bba4254d5e4941718a0f48",
    measurementId: "G-KNK4EZ9WVC",
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
