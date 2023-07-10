import Fetch from './hooks/fetchUsers';
import UserForm from './components/userForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/NavBar';
import LoginForm from './components/loginForm';
import ActivitiesList from './components/ActivitiesList';
import useApplicationData from './hooks/useApplicationData';
import FetchAttractions from './hooks/attractions/fetchAttractions';
import FetchFeaturedAttractions from './hooks/attractions/fetchFeaturedAttractions';

import './styles/Main.scss';

const App = () => {
  const {
    handleLogin,
    logoutHandler,
    userEmail, //  email of the logged in user 
    userID  //  user ID from the database of the logged in user
  } = useApplicationData();
  const user = {
    email: userEmail,
    id: userID
  };

  const { featuredAttractionsData,
    isLoading,
    error } = FetchFeaturedAttractions();

  console.log("featuredAttractionsData", featuredAttractionsData);
  console.log("isLoading", isLoading);
  console.log("error", error);




  return (
    <div className="App">
      <Router>
        <Navbar email={userEmail} logoutHandler={logoutHandler} />

        <Routes>
          <Route path="/" element={isLoading === true ? <p>Loading...</p> : <ActivitiesList attractions={featuredAttractionsData.attractions} pageTitle={"Helping you find your way..."} />} />
          <Route path="/favorites" element={isLoading === true ? <p>Loading...</p> : <ActivitiesList attractions={featuredAttractionsData.attractions} pageTitle={"Your Favorite Experiences"} />} />
          <Route path="/register" element={<UserForm />} />
          <Route path="/login" element={<LoginForm handleLogin={handleLogin} />} />
          {/* Add more routes here */}










        </Routes>
      </Router>
    </div>
  );
};

export default App;


