import React from 'react';
import { sleep } from '../utils/sleep';
import { BASE_URL } from '../config/';
import { createAction } from '../utils/createAction';
import axios from 'axios';
import SecureStorage, { ACCESS_CONTROL, ACCESSIBLE, AUTHENTICATION_TYPE } from 'react-native-secure-storage'

export function useAuth(){
    const [state, dispatch] = React.useReducer((state,action) => {
        switch(action.type){
          case 'SET_USER':
          return {
            ...state,
            loading: false,
            user: {...action.payload},
          }
          case 'REMOVE_USER':
            return {
              user: undefined,
            }
            case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload,
            }
          case 'default':
            return state;
          
        }
      },{
        user: undefined,
        loading:true,
      })
    
      const auth = React.useMemo(
        () => ({
          login: async (email, password) => {
            await sleep(2000);
             const {data} = await axios.post(`${BASE_URL}/auth/local`, {
              identifier: email,
              password,
            });
            const user = {
              email: data.user.email,
              token: data.jwt,
            };
            await SecureStorage.setItem('user',JSON.stringify(user));
            dispatch(createAction('SET_USER',user));
          },
          logout:  async() => {
            await SecureStorage.removeItem('user');
            dispatch(createAction('REMOVE_USER'));
          },
          register:  async(email,password) => {
            await sleep(2000);
            await axios.post(`${BASE_URL}/auth/local/register`,{
              username: email,
              email,
              password,
            });
          },
        }),
        [],
      );
   
              React.useEffect( () => {
                     sleep(2000).then(()=>{
          SecureStorage.getItem('user').then(user => {
              if(user){
              dispatch(createAction('SET_USER',JSON.stringify(user)));
              }else{
              dispatch(createAction('SET_LOADING', false));

              }
          });
            });  
      },[]);
  

      return {auth,state};
}