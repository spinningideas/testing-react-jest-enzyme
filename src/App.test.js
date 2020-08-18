import React from 'react';
import { shallow, mount } from 'enzyme';
import Account from './Account';
import App from './App';
import toJson from 'enzyme-to-json';

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

describe('<Account />', () => {
  it('contains account', () => {
    const wrapper = mount(<Account user={user} />);
    const value = wrapper.find('p').text();
    expect(value).toEqual(user.email);
  });

  it('accepts user account props', () => {
    const wrapper = mount(<Account user={user} />);
    expect(wrapper.props().user).toEqual(user);
  });
});
