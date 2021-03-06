import style from "../Main/Calendar.module.css";
import React, { useState } from "react";
import Calendar from "./Calendar/index";
import Calendar_2 from "./Calendar/second_index";
import Ncalendar from "./Calendar/Ncalendar";
import ClassCalendar from "./Calendar/ClassCalendar";

function CalendarJis() {
  return (
    <div className={style.container}>
      <div className={style.one}>
        <div>
          <p className={style.range}>Select Date Range : </p>
        </div>

        {/* Calendar one start */}

        <div className={style.sub_one}>
          <div className={style.calendar_one}>
            <ClassCalendar />
          </div>
        </div>

        {/* Calendar one finish */}
      </div>

      {/* Calendar two start */}

      <div className={style.two}>
        <div className={style.sub_two}>
          <div className={style.calendar_two}>
            <ClassCalendar />
          </div>
        </div>
        <div className={style.reservation}>
          <div className={style.cancel}> Cancel</div>
          <div className={style.update}>Update</div>
        </div>
      </div>

      {/* Calendar two finish */}

      <div className={style.third}>
        <p className={style.presents}>Day Presents</p>

        <div className={style.day}>
          <span className={style.date}>Today</span>
        </div>

        <div className={style.day}>
          <span className={style.date}>Yesterday</span>
        </div>

        <div className={style.day}>
          <span className={style.date}>Last 7 Days</span>
        </div>

        <div className={style.day}>
          <span className={style.date}>Last 14 Days</span>
        </div>

        <div className={style.day}>
          <span className={style.date}>Last 30 Days</span>
        </div>
        <div className={style.day}>
          <span className={style.date}>This week</span>
        </div>

        <div className={style.day}>
          <span className={style.date}>Last week</span>
        </div>

        <div className={style.day}>
          <span className={style.date}>This month</span>
        </div>

        <div className={style.day}>
          <span className={style.date}>Last Month</span>
        </div>
      </div>
    </div>
  );
}

export default CalendarJis;
