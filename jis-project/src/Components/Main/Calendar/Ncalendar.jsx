

import React from 'react';
import classnames from 'classnames';
import { addDays } from 'date-fns';
import { useState } from 'react';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';
import { DateRangePicker } from 'react-date-range';

import * as calendar from './calendar';

import './inde.css';



export default  function Ncalendar ()  {
  
    const [state, setState] = useState([
        {
        //   startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);

  
    
       

        return (
            <div>



<DateRangePicker
  onChange={item => setState([item.selection])}
  showSelectionPreview={true}
  moveRangeOnFirstSelection={false}
  months={2}
  ranges={state}
  direction="horizontal"
/>;




            </div>
        );
    
}