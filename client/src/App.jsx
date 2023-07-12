import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

// COMPONENTS \\
import UserForm from './components/UserForm';
import Navbar from './components/NavBar';
import LoginForm from './components/LoginForm';
import ActivitiesList from './components/ActivitiesList';
import PackageDays from './components/PackageDays';

// CONTEXTS \\
import UserContext from './providers/UserContext';
import { AttractionsContext } from './providers/AttractionsContext';

// STYLES \\
import './styles/Main.scss';
import CreatePackage from './components/CreatePackage';

const App = () => {

  const { user } = useContext(UserContext);
  const { featuredAttractionsData, isLoadingFeatured, favAttractionsData, isLoadingFav } = useContext(AttractionsContext);


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={isLoadingFeatured === true ? <p>Loading...</p> : <ActivitiesList attractions={featuredAttractionsData.attractions} pageTitle={"Helping you find your way..."} />} />
          <Route path="/register" element={<UserForm/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/packages" element={<CreatePackage/>} />
          <Route path="/days/:packageId" element={<PackageDays/>} />
          {/* Add more routes here */}
          {user &&
            <Route path={`/favorites/${user.id}`} element={isLoadingFav === true ? <p>Loading...</p> : <ActivitiesList attractions={favAttractionsData} pageTitle={"Your Favorite Experiences"} />} />
          }










        </Routes>
      </Router>
    </div >
  );
};

export default App;
