import React from 'react';
import {shallow} from 'enzyme';
import LoginPage from '../';

describe("LoginPage",function() {
    let mountedLoginPage;

    beforeEach(()=> {
       mountedLoginPage = shallow(<LoginPage />);
    });

    it('renders without crashing', () => {
        let mountedLoginPage = shallow(<LoginPage />);
    });

});