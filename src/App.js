import CalendarComponent from './views/pages/calendar';
import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


function App({children}) {
  return (
    <div className='appPage'> <LocalizationProvider dateAdapter={AdapterDayjs}>
    {children}
    <CalendarComponent></CalendarComponent>
  </LocalizationProvider>
</div>
   
  );
}

export default App;
