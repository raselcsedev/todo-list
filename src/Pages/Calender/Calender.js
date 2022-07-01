import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const Calender = () => {
    const [date, setDate] = useState(new Date());
    return (
        <>
                <div className='flex w-full px-24 mx-auto'>
                    <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    />
                </div>
            
        </>
    );
};

export default Calender;