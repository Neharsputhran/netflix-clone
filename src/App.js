
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Main from './component/Main';
import NavBar from './component/NavBar';
import SignIn from './component/SignIn';
import MovieDetails from './component/MovieDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/MovieDetails' element={<MovieDetails/>}/>

        
      </Routes>
         
    </div>
  );
}

export default App;
