import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('renders learn react link', () => {
  let mountedApp;
    beforeEach(()=> {
      mountedApp = shallow(<App />);
    });

    it('renders without crashing', () => {
        let mountedApp = shallow(<App />);
    });
});
