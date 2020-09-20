import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { HeaderIconButton } from '../components/HeaderIconButton';
import { AuthContext } from '../contexts/AuthContext';
import { UserContext } from '../contexts/UserContext';
export function ProductsListScreen({navigation}){
  const user = React.useContext(UserContext);
  const {logout} = React.useContext(AuthContext);
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
          <HeaderIconButton
            name={'log-out'}
            onPress={() => {
              logout();
            }}
          />
    
      ),
    });
  }, [navigation,logout]);
  return (
    
  <View style={styles.container}><Text>Welcome To products List</Text>
  <Text>{user.email}</Text>
  </View>
)
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

