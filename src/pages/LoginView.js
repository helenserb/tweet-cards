// import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function LoginView() {
  return (
    <div>
      {/* <Helmet> */}
        <title>Login</title>
      {/* </Helmet> */}
      <LoginForm />
    </div>
  );
}
