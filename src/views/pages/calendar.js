
import {DateCalendar} from '@mui/x-date-pickers';
import './calendar.css';
import { blue } from '@mui/material/colors';

export default function CalendarComponent(){
    return(<div className='calendarPage'>
        <h1>Inkredible</h1>
        <DateCalendar className='calendar' sx={{
            width:"70vw",
            maxHeight:"100vh",
        }}/>
        </div>);
}
