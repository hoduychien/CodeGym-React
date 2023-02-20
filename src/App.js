import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Partice1 from './Practice1';
import Practice2 from './Practice2';
import Practice3 from './Practice3';
import BrowserProfile from './components/BrowserProfile';
import ProfileCard from './components/ProfileCard';
import StudentTable from './components/StudentTable/';
import SigninForm from './components/SigninForm';

function App() {
    return (
        <div className="App">
            <div className="navbar">
                <Link to={'/'}>Thực hành 1</Link>
                <Link to={'/practice2'}>Thực hành 2</Link>
                <Link to={'/pactice3'}>Thực hành 3</Link>
                <Link to={'/browserProfile'}>Bài tập 1</Link>
                <Link to={'/studentTable'}>Bài tập 2</Link>
                <Link to={'/profileCard'}>Bài tập 3</Link>
                <Link to={'/signinForm'}>Bài tập 4</Link>
            </div>

            <Routes>
                <Route path="/" element={<Partice1 />} />
                <Route path="/practice2" element={<Practice2 />} />
                <Route path="/pactice3" element={<Practice3 />} />
                <Route path="/browserProfile" element={<BrowserProfile />} />
                <Route path="/studentTable" element={<StudentTable />} />
                <Route path="/profileCard" element={<ProfileCard />} />
                <Route path="/signinForm" element={<SigninForm />} />
            </Routes>
        </div>
    );
}

export default App;
