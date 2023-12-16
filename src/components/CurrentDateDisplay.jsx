

import React, { useRef } from 'react';
import { DatePicker } from 'ch_react-horizontal-datepicker';

const CurrentDateDisplay = () => {
    const datePickerRef = useRef(null);



    const selectedDay = (val) => {
        console.log(val);
    };

    const today = new Date();
    const currentDay = today.getDay();

    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - currentDay);

    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);

    return (
        <>
            {/* Removed the default icons */}
           
            <DatePicker
                ref={datePickerRef}
                getSelectedDay={selectedDay}
                startDate={startDate}
                endDate={endDate}
                selectDate={today}
                labelFormat={"MMMM yyyy"}
                color={"#374e8c"}
                // labelStyle={{ marginTop: "500%" }}
                className="datepicker-label"
                marked={[
                    {
                        date: new Date(2021, 9, 3),
                        marked: true,
                        style: {
                            color: "#ff0000",
                            padding: "2px",
                            fontSize: 12,
                        },
                        text: "1x",
                    },
                    {
                        date: new Date(2021, 9, 4),
                        marked: true,
                        text: "5x",
                    },
                ]}
            />
        </>
    );
};

export default CurrentDateDisplay;




