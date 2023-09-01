import './App.css';
import Messenger from './components/Messenger';
import AccountProvider from "./context/AccountProvider";
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  const clientId = '316731393807-n8jb126990cs608ag36k16irem267nj0.apps.googleusercontent.com';
  return(
    <>
      <GoogleOAuthProvider clientId={clientId}> 
        <AccountProvider>
          <Messenger/>
        </AccountProvider>
      </GoogleOAuthProvider>;
    </>
  )
}


export default App;
