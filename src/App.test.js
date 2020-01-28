import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const app = mount(<App />)
    expect(app.find('p').text()).toEqual('Welcome to Cat Tinder')
});
