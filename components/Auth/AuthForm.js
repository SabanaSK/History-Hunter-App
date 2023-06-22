import { useState } from 'react';
import { View } from 'react-native';

import Button from '../ui/Button';
import Input from './Input';

const AuthForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');



  return (
    <View>
      <Input
        placeholder="Email"
        value={enteredEmail}
      />
      <Input
        placeholder="Name"
        value={enteredName}
      />
      <Input
        placeholder="Password"
        value={enteredPassword}
      />

      <View>
        <Button />
      </View>
    </View>
  );
}

export default AuthForm;
