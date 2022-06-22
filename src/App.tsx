// import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Editor } from './pages/Editor';
// import Home from './pages/Home';

function App() {
    return (
        <div className="App">
            {/* <Container> */}
            <Routes>
                <Route path="/" element={<Editor />}></Route>
            </Routes>
            {/* </Container> */}
        </div>
    );
}

export default App;
