import { useState } from 'react';
import { View } from 'react-native';

import Button from '../ui/Button';
import Input from './Input';

const AuthForm = ({ credentialsInvalid, isLogin, onSubmit }) => {
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

  const submitHandler = () => {
    onSubmit({
      email: enteredEmail,
      name: enteredName,
      password: enteredPassword,
    });
  };


  return (
    <View>
      <Input
        placeholder="Email"
        value={enteredEmail}
        onUpdateValue={setEnteredEmail}
        keyboardType={'email-address'}
      />
      {/*    {!isLogin && (
        <Input
          placeholder="Name"
          value={enteredName}
          onUpdateValue={setEnteredName}
          keyboardType={'default'}
        />
      )} */}
      <Input
        placeholder="Password"
        value={enteredPassword}
        onUpdateValue={setEnteredPassword}
        keyboardType={'default'}
      />

      <View>
        <Button onPress={submitHandler}>
          {isLogin ? "Log In" : "Sign Up"}
        </Button>
      </View>
    </View>
  );
}

export default AuthForm;
