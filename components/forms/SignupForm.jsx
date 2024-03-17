import { useState } from 'react';
import UserService from '@/services/UserService';
import { Input, Button } from '@material-tailwind/react';

const SignupForm = ({ setIsSignUp }) => {
  const [loading, setLoading] = useState(false);

  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    setLoading(true);
    await UserService.signupUser(
      firstname,
      lastname,
      username,
      email,
      password,
      confirmPassword
    );
    setLoading(false);
    setIsSignUp(false);
  };
  return (
    <>
      <Input
        color="blue"
        variant="standard"
        type="text"
        size="md"
        className="text-primary"
        placeholder="First Name"
        label="First Name"
        onChange={(e) => setfirstname(e.target.value)}
      />
      <Input
        color="blue"
        variant="standard"
        type="text"
        size="md"
        className="text-primary"
        placeholder="Last Name"
        label="Last Name"
        onChange={(e) => setlastname(e.target.value)}
      />
      <Input
        color="blue"
        variant="standard"
        type="text"
        className="text-primary"
        size="md"
        placeholder="Username"
        label="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        color="blue"
        variant="standard"
        type="text"
        size="md"
        className="text-primary"
        placeholder="Email"
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        color="blue"
        variant="standard"
        type="password"
        size="md"
        className="text-primary"
        placeholder="Password"
        label="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        color="blue"
        variant="standard"
        type="password"
        className="text-primary"
        size="md"
        placeholder="Confirm Password"
        label="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button
        onClick={handleSignUp}
        color="blue"
        buttonType="filled"
        size="sm"
        className="mt-5"
        rounded={false}
        block={false}
        iconOnly={false}
        ripple="light"
        type="submit"
      >
        Sign Up
      </Button>
    </>
  );
};
export default SignupForm;
