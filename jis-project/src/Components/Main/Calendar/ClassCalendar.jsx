import React from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class ClassCalendar extends React.Component {
  static defaultProps = {
    numberOfMonths: 2,
  };

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  handleResetClick() {
    this.setState(this.getInitialState());
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className="RangeExample">
        {/* <p>
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
          {from && to && (
            <button className="link" onClick={this.handleResetClick}>
              Reset
            </button>
          )}
        </p> */}
        <DayPicker
          className="Selectable"
        //   numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
          direction="horizontal"
        />
        <Helmet>
          <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #F7F7F7;
    !important;
    color: #131315;
    ;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    // border-top-left-radius: 50% !important;
    // border-bottom-left-radius: 50% !important;
    background-color: #131315 !important;
    border-radius: 4px !important;

  }
  .Selectable .DayPicker-Day--end {
    // border-top-right-radius: 50% !important;
    // border-bottom-right-radius: 50% !important;
    background-color: #131315 !important;
    border-radius: 4px !important;
  }
  .DayPicker-Weekday {
    border-bottom: 1px solid #DFE2E9;!important
  }
`}</style>
        </Helmet>
      </div>
    );
  }
}

// import React from 'react';
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';

// export default function ClassCalendar() {
//   return <DayPicker 
//   initialMonth={new Date(2021, 7)}
//   selectedDays={[
//     new Date(2021, 7, 24),
//     new Date(2017, 7, 24),
//     {
//       after: new Date(2021, 7, 21),
//       before: new Date(2017, 3, 25),
//     },
//   ]}




//   />;
// }