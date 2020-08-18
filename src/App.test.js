import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import User from './User';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders Account header', () => {
  const wrapper = shallow(<App />);
  const header = <h1>Display Users Account Details</h1>;
  expect(wrapper.contains(header)).toEqual(true);
});

const user = {
  name: 'John Smith',
  email: 'john.smith@gmail.com',
  username: 'john.smith'
};

describe('<User />', () => {
  it('contains user', () => {
    const wrapper = mount(<User user={user} />);
    const value = wrapper.find('p').text();
    expect(value).toEqual(user.email);
  });

  it('accepts user props', () => {
    const wrapper = mount(<User user={user} />);
    expect(wrapper.props().user).toEqual(user);
  });
});
