import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './containers/common/navbar/NavbarContainers';
import Index from './pages/Index';
import Discover from './pages/Discover';
import Jobs from './pages/Jobs';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SignUp from './pages/SignUp';
import Customer from './pages/Customer';
import Lost from './pages/Lost';

function App() {
  const [isLoggined, setIsLoggined] = useState(false);

  return (
    <>
      <header>
        <Navbar isLoggined={isLoggined} />
      </header>
      <div style={{ height: '4rem' }}></div>
      <main>
        <div className="콘텐츠박스">
          <div className="콘텐츠박스정렬">
            <Switch>
              <Route
                exact
                path="/"
                component={() => <Index isLoggined={isLoggined} />}
              />
              <Route path="/discover" component={Discover} />
              <Route path="/jobs" component={Jobs} />
              <Route path="/signup" component={SignUp} />
              <Route
                path="/login"
                component={() => <Login setIsLoggined={setIsLoggined} />}
              />
              <Route path="/customer" component={Customer} />
              <Route path="/privacy" component={PrivacyPolicy} />
              <Route path="/lost" component={Lost} />
              <Route render={ErrorPage} />
            </Switch>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
