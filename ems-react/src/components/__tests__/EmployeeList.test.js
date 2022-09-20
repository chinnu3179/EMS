import React from 'react';
import {shallow} from 'enzyme';
import EmployeeList from '../EmployeeList';

describe("EmployeeList",function() {
    let mountedEmployeeList;

    beforeEach(()=> {
       mountedEmployeeList = shallow(<EmployeeList />);
    });

    it('renders without crashing', () => {
        let mountedEmployeeList = shallow(<EmployeeList />);
    });
    it('renders a Spinner', () => {
        const spinners = mountedEmployeeList.find('Spinner');
        expect(spinners.length).toBe(1);
    });
});