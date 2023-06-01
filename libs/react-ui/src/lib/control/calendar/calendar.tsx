// import React from 'react';

// interface CalendarProps {
//   onDateChange: (date: Date) => void;
//   defaultDate: Date;
// }

// export const Calendar = ({
//   onDateChange,
//   defaultDate,
// }: CalendarProps): JSX.Element => {
//   const datesInMonth = getDatesInMonth(defaultDate);

//   return (
//     <div className="calendar">
//       {datesInMonth.map((date) => (
//         <button key={date.toString()} onClick={() => onDateChange(date)}>
//           {date.getDate()}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Calendar;
