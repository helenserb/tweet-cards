// import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function RegisterView() {
  return (
    <div>
      {/* <Helmet> */}
        <title>Registration</title>
      {/* </Helmet> */}
      <RegisterForm />
    </div>
  );
}
