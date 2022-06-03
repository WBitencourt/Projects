import React from 'react';
import {View, Button} from 'react-native';
import useAuth from '../../contexts/auth';

export default function Settings() {
  const {signed, user, signOut} = useAuth();

  // console.log(signed);
  // console.log(user);

  function handleSignOut() {
    signOut();
  }

  return (
    <View>
      <Button title="Log out" onPress={() => handleSignOut()} />
    </View>
  );
}
