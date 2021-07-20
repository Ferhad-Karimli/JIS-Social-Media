
import style from '../Main/Calendar.module.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';


function CalendarJis () {

    const [value, onChange] = useState(new Date());
  return (
    <div className={style.container }>

<div className={style.one}>
    <div>

    <p>Select Date Range : </p>

    </div>

   


    <div className={style.sub_one}>

        <div className={style.calendar_one}>

        <Calendar
        onChange={onChange}
        value={value}
      />

        </div>

    </div>

</div>
<div className={style.two}>

<div className={style.calendar_two}>

<Calendar
        onChange={onChange}
        value={value}
      />

</div>




</div>
<div className={style.third}>
<p className={style.presents}>Day Presents</p>

<div className={style.day}>
 <span className={style.date}>
 Today
     </span>    
    
    </div>

    <div className={style.day}>
 <span className={style.date}>
Yesterday
     </span>    
    
    </div>

    <div className={style.day}>
 <span className={style.date}>
 Last 7 Days
     </span>    
    
    </div>

    <div className={style.day}>
 <span className={style.date}>
 Last 14 Days
     </span>    
    
    </div>

    <div className={style.day}>
 <span className={style.date}>
 Last 30 Days
     </span>    
    
    </div>
    <div className={style.day}>
 <span className={style.date}>
 This week 
     </span>    
    
    </div>

    <div className={style.day}>
 <span className={style.date}>
 Last week
     </span>    
    
    </div>

    <div className={style.day}>
 <span className={style.date}>
 This month
     </span>    
    
    </div>

    <div className={style.day}>
 <span className={style.date}>
Last Month
     </span>    
    
    </div>
</div>

      
    </div>
  );
}

export default CalendarJis;