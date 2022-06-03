import React from 'react';
import {View, Button} from 'react-native';
<<<<<<< HEAD
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
=======
//import useAuth from '../../contexts/auth';

export default function Login() {
  return <View />;
}

// export default function Settings() {
//   const {signed, user, signOut} = useAuth();

//   // console.log(signed);
//   // console.log(user);

//   function handleSignOut() {
//     signOut();
//   }

//   return (
//     <View>
//       <Button title="Log out" onPress={() => handleSignOut()} />
//     </View>
//   );
// }
>>>>>>> ca1ce95b9fc62748dda53551a66da9733e2f57c5
