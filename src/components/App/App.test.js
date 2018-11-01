import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
import {BrowserRouter} from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should match the snapshot', () => {
  const wrapper = shallow(<App />)

  expect(wrapper).toMatchSnapshot()
})