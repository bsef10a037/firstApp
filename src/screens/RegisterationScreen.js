import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { FilledButton } from '../components/FilledButton';
import { Error } from '../components/Error';
import { IconButton } from '../components/IconButton';
import { Loading } from '../components/Loading';

import { AuthContainer } from '../components/AuthContainer';
import { AuthContext } from '../contexts/AuthContext';

export function RegisterationScreen({navigation}){
  const {register} = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('walayat37@gmail.com');
  const [password, setPassword] = React.useState('abc');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');


  return (
  <AuthContainer>
  <IconButton
        style={styles.closeIcon}
        name={'close-circle-outline'}
        onPress={() => {
          navigation.pop();
        }}
      />
 <Heading style={styles.title}>Registeration</Heading>
 
 <Error error={error}></Error>
 <Input style={styles.input} palceholder={"Email"} keyboardType={'email-address'}  onChangeText= {setEmail}
        value={email}/>
 <Input style={styles.input} palceholder={"Password"} secureTextEntry  onChangeText= {setPassword}
        value={password}/>
 <FilledButton title={'Register'} style={styles.RegisterationButton} onPress={async () => {
   try{
    setLoading(true);
   await register(email,password);
   navigation.pop();
   }
   catch(e){
     setLoading(false);
     setError(e.message);
    console.log(e.response);
   }
 }}></FilledButton>
 <Loading loading={loading}/>
</AuthContainer>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 120,
    padding: 20,
  },
  input: {
    marginVertical: 8,
  },
  title: {
    marginBottom: 48,
  },
  RegisterationButton: {
    marginVertical: 20,
  },
  closeIcon: {
    position: 'absolute',
    top: 60,
    right: 16,
  }
});

