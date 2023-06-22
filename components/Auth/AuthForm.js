import { useState } from 'react';
import { View } from 'react-native';

import Input from './Input';

const AuthForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  return (
    <View>
      <Input
        label="Email"
        value={enteredEmail}
      />
      <Input
        label="Password"
        value={enteredPassword}
      />
      <Input
        label="Confirm Password"
        value={enteredConfirmPassword}
      />
    </View>
  );
}

export default AuthForm;
