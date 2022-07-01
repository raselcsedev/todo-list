import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const Calender = () => {
    const [date, setDate] = useState(new Date());
    
    return (
        <>
                <div className='w-full lg:flex  lg:px-24'>
                    <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    />
                    <h4 className='text-2xl font-bold mt-36 lg:px-24'>Current Time : <span className='text-primary'>{format(date, 'PP')}</span></h4>
                </div>
                
            
        </>
    );
};

export default Calender;