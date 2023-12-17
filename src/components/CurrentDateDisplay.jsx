import React from 'react';
import { DatePicker } from 'ch_react-horizontal-datepicker';

const CurrentDateDisplay = ({props, ref}) => {
  const today = new Date();
  const currentDay = today.getDay();
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - currentDay);
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);

  const getSelectedDay = (val) => {
    if (ref && ref.current) {
      ref.current.handleDateSelection(val); 
    }
  };

  return (
    <DatePicker
      ref={ref}
      getSelectedDay={getSelectedDay}
      startDate={startDate}
      endDate={endDate}
      selectDate={today}
      labelFormat={"MMMM yyyy"}
      color={"#374e8c"}
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
  );
};

export default CurrentDateDisplay;




