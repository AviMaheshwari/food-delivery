
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { darkTheme } from './theme/DarkTheme';
import Routers from './routers/Routers';
import { Provider } from 'react-redux';
import { store } from './customer/components/State/store';
import {useSelector} from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './customer/components/State/Authentication/Action';
import{useDispatch} from 'react-redux';



function App() {
  const dispatch=useDispatch()
  const jwt=localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store)

useEffect(()=>{
  dispatch(getUser(auth.jwt || jwt ));
  // dispatch(findCart(jwt));
},[auth.jwt]);

useEffect(()=>{
// dispatch(getRestaurantByUserId(auth.jwt || jwt));

},[auth.user])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Routers/>
      
    </ThemeProvider>
   
    
  );
}

export default App;
