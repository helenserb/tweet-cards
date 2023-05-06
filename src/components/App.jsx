import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from "./Layout/Layout";
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { useSelector } from 'react-redux';
import { selectIsFetchingCurrentUser } from 'redux/auth/selectors';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';

const HomeView = lazy(() => import('../pages/HomeView'));
const RegisterView = lazy(() => import('../pages/RegisterView'));
const LoginView = lazy(() => import('../pages/LoginView'));
const ContacstView = lazy(() => import('../pages/ContactsView'));

export const App = () => {
  const getIsFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !getIsFetchingCurrentUser && (
      <section>
        <div>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomeView />} />
              <Route
                path="register"
                element={
                  <RestrictedRoute
                    component={<RegisterView />}
                    redirectTo="/contacts"
                  ></RestrictedRoute>
                }
              />
              <Route
                path="login"
                element={
                  <RestrictedRoute
                    component={<LoginView />}
                    redirectTo="/contacts"
                  ></RestrictedRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute
                    component={<ContacstView />}
                    redirectTo="/login"
                  ></PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </div>
      </section>
    )
  );
};