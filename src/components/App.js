import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from 'components/SharedLayout';

const Home = lazy(() => import('pages/Home'));
const Tweets = lazy(() => import('pages/Tweets'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  );
};
