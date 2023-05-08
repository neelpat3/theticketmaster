import styles from './App.module.css';
import LoginSignup from './components/LoginSignup';
import train from './assets/train.png';
import tmlogo from './assets/logo.png';
import Navbar from './components/Navbar';
import {Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CSVUploader from './components/CSVUploader';
import DetailStepper from './components/DetailStepper';
import Process from './components/Process';
import { useNavigate } from 'react-router-dom';
import TrainResultsPage from './components/TrainResultsPage';
import TrainSchedule from './components/TrainSchedule';
import DailyReport from './components/Analytics';

function App() {
    
    const navigate = useNavigate();
    return (
        <div className={styles.App}>
            <img style={{cursor:"pointer"}} onClick={()=> navigate('/home')} src={tmlogo} alt='Theticketmaster'></img>
                <Routes>
                    <Route path="/" element={<Process />} />
                    <Route path="home" element={<Home />} />
                    <Route path="stations" element={<TrainResultsPage />} />
                    <Route path="admin/csv" index element={<CSVUploader />} />
                    <Route path="admin/delay" index element={<TrainSchedule />} />
                    <Route path="admin/reports" index element={<DailyReport />} />
                </Routes>
            {/* <LoginSignup /> */}
            <img className={styles.bottomImg} src={train} alt='train'></img>
        </div>
    );
}

export default App;
