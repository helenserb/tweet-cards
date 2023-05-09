import { useLocation } from 'react-router-dom';
import { HomePage } from 'components/HomePage';

const Home = () => {
  const location = useLocation();
  return <HomePage location={location} />;
};

export default Home;
