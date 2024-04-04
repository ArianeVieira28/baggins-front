import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import HomeAdmin from './pages/HomeAdmin';
import MainPage from './pages/MainPage';
import MainPageAdmin from './pages/MainPageAdmin';
import Profile from './pages/Profile';
import Account from './pages/Account';
import JobOpening from './pages/JobOpening';
import Host from './pages/Host';
import MyAds from './pages/MyAds';
import Search from './pages/Search';
import MyJobOpenings from './pages/MyJobOpenings';
import CurriculoOpening from './pages/CurriculumOpening';
import HostOpening from './pages/HostOpening';

import Main from './pages/Chat/Component/Main/Main2';
import Chat from './pages/Chat/Component/Login/Login';

export default function Routes() {
  // const Auth = {
  //   isAuthenticated: false,
  //   authenticate(cb) {
  //     const token = localStorage.getItem('token');
  //     if (token != null || token !== '' || token !== undefined) {
  //       this.isAuthenticated = true;
  //       // setTimeout(cb, 100);
  //     }
  //   },
  //   signout(cb) {
  //     this.isAuthenticated = false;
  //     // setTimeout(cb, 100);
  //   },
  // };

  const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props => {
          if (localStorage.getItem('token') != null) {
            return <Component {...props} />;
          }
          return (
            <Redirect
              to={{
                pathname: '/',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }}
      />
    );
  };

  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/admin" exact component={HomeAdmin} />
        <ProtectedRoute path="/main" exact component={MainPage} />
        <ProtectedRoute path="/mainAdmin" exact component={MainPageAdmin} />
        <ProtectedRoute path="/account" exact component={Account} />
        <ProtectedRoute path="/profile" exact component={Profile} />
        <ProtectedRoute path="/jobopening/:id" exact component={JobOpening} />
        <ProtectedRoute path="/hostopening/:id" exact component={HostOpening} />
        <ProtectedRoute
          path="/curriculo/:id"
          exact
          component={CurriculoOpening}
        />
        <ProtectedRoute path="/host" exact component={Host} />
        <ProtectedRoute path="/myads" exact component={MyAds} />
        <ProtectedRoute path="/search" exact component={Search} />
        <ProtectedRoute path="/myjobopenings" exact component={MyJobOpenings} />
        <ProtectedRoute path="/chat" exact component={Chat} />
        <ProtectedRoute path="/mainchat" exact component={Main} />
      </Switch>
    </>
  );
}
