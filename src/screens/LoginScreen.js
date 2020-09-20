import React from 'react';
import {View, StyleSheet,TextInput} from 'react-native';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { FilledButton } from '../components/FilledButton';
import { TextButton } from '../components/TextButton';
import { Error } from '../components/Error';
import { Loading } from '../components/Loading';
import { AuthContainer } from '../components/AuthContainer';
import { AuthContext } from '../contexts/AuthContext';

export function LoginScreen({navigation}){

 const {login} = React.useContext(AuthContext);
 const [email, setEmail] = React.useState('walayat37@gmail.com');
 const [password, setPassword] = React.useState('abc');
 const [loading, setLoading] = React.useState(false);
 const [error, setError] = React.useState('');

  return (
  <AuthContainer>
 <Heading style={styles.title}>LOGIN</Heading>
 <Error error={error}></Error>
 <Input
        style={styles.input}
        placeholder={'Email'}
        keyboardType={'email-address'}
        value={email}
        onChangeText= {setEmail}
      />
      <Input
        style={styles.input}
        placeholder={'Password'}
        keyboardType={'default'}
        secureTextEntry
        value={password}
        onChangeText= {setPassword} 
      />
 <FilledButton title={'Login'} style={styles.loginButton} onPress={async() => {
   try{
    setLoading(true);
   await login(email,password);
   }
   catch(e){
     setLoading(false);
     setError(e.message);
    console.log(e.response);
   }

   
 }}></FilledButton>
<TextButton title={'You dont have Account? Create one'} onPress={() => {navigation.navigate('Registeration')}}></TextButton>
<Loading loading={loading}/>
</AuthContainer>
)
}

const styles = StyleSheet.create ({
  input: {
    marginVertical: 8,
  },
  title: {
    marginBottom: 48,
  },
  loginButton: {
    marginVertical: 20,
  }
});

