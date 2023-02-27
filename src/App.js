import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Partice1 from './Practice1';
import Practice2 from './Practice2';
import Practice3 from './Practice3';
import BrowserProfile from './components/BrowserProfile';
import ProfileCard from './components/ProfileCard';
import StudentTable from './components/StudentTable/';
import SigninForm from './components/SigninForm';
import PrintName from './components/PrintName';
import FunctionComponent from './components/FunctionComponent';
import Alert from './components/Alert';
import { useState } from 'react';
import StudentInfoComponent from './components/StudentInfoComponent';
import StateExample from './components/StateExample';
import UpDown from './components/UpDown';

function App() {
    const [toggle, setToggle] = useState();

    let handleOpenAlert = () => {
        setToggle(true);
        setTimeout(() => {
            setToggle(false);
        }, 3000);
    };

    let handleCloseAlert = () => {
        setToggle(false);
    };

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
                <Link to={'/printName'}>In tên</Link>
                <Link to={'/functionComponent'}>Props</Link>
                <Link to={'/studentInfoComponent'}>Sinh viên</Link>
            </div>

            <div className="button-close" onClick={() => handleOpenAlert()}>
                <span>Open Alert</span>
            </div>

            {/* <StateExample /> */}
            <UpDown />

            <Routes>
                <Route path="/" element={<Partice1 />} />
                <Route path="/practice2" element={<Practice2 />} />
                <Route path="/pactice3" element={<Practice3 />} />
                <Route path="/browserProfile" element={<BrowserProfile />} />
                <Route path="/studentTable" element={<StudentTable />} />
                <Route path="/profileCard" element={<ProfileCard />} />
                <Route path="/signinForm" element={<SigninForm />} />
                <Route path="/printName" element={<PrintName myName="Duy Chiến" num1={1} num2={2} />} />
                <Route path="/functionComponent" element={<FunctionComponent total1={1} total2={2} />} />
                <Route path="/studentInfoComponent" element={<StudentInfoComponent />} />
            </Routes>

            <Alert
                type={'warning'}
                text={'Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại.'}
                toggle={toggle}
                handleCloseAlert={() => handleCloseAlert()}
            />
        </div>
    );
}

export default App;
