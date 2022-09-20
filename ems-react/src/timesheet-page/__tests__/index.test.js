import React from 'react';
import {shallow} from 'enzyme';
import Timesheet from '../';

describe("Timesheet",function() {
    let mountedTimesheet;

    beforeEach(()=> {
       mountedTimesheet = shallow(<Timesheet />);
    });

    it('renders without crashing', () => {
        let mountedTimesheet = shallow(<Timesheet />);
    });
    // it('renders a Spinner', () => {
    //     const spinners = mountedTimesheet.find('Spinner');
    //     expect(spinners.length).toBe(1);
    // });
});