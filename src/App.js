import './App.css';
import Main from './components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
// REACT_APP_SERVER=http://localhost:3111
// REACT_APP_SERVER=https://nimrawi-api.herokuapp.com

function App() {
  return (
    <>
<Header/>
<Main/>

</>
  );
}

export default App;

