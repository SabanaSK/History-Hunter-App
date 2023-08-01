import { useState } from 'react';
import { View } from 'react-native';

import Button from '../ui/Button';
import Input from './Input';

const AuthForm = ({ credentialsInvalid, isLogin }) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const updateInputValueHandler = (inputType, entertedValue) => {
    switch (inputType) {
      case 'email':
        setEnteredEmail(entertedValue);
        break;
      case 'name':
        setEnteredName(entertedValue);
        break;
      case 'password':
        setEnteredPassword(entertedValue);
        break;
    }
  };

  return (
    <View>
      <Input
        placeholder="Email"
        value={enteredEmail}
        onUpdateValue={updateInputValueHandler.bind(this, 'email')}
        keyboardType={'email-address'}
      />
      {!isLogin && (
      <Input
        placeholder="Name"
        value={enteredName}
        onUpdateValue={updateInputValueHandler.bind(this, 'name')}
        keyboardType={'default'}
      />
      )}
      <Input
        placeholder="Password"
        value={enteredPassword}
        onUpdateValue={updateInputValueHandler.bind(this, 'password')}
        keyboardType={'default'}
      />

      <View>
      <Button>
          {/*Krävs function här också */}
          {isLogin ? "Log In" : "Sign Up"}
        </Button>
      </View>
    </View>
  );
}

export default AuthForm;
