import React from 'react';
import { render, fireEvent ,screen} from '@testing-library/react';


import Heading from './Heading';




import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
  render(<Heading />);
  const linkElement = screen.getByText(/Welcome to the Expense Tracker/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders with the correct props', () => {
  const props = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
  };
  const { getByText } = render(<Heading {...props} />);
  expect(getByText(props.name)).toBeInTheDocument();
});

test('renders with the correct state', () => {
  const { getByText } = render(<Heading />);
  expect(getByText('Welcome to the Expense Tracker')).toBeInTheDocument();
});

test('updates state correctly when an event is triggered', () => {
  const { getByText } = render(<Heading />);
  fireEvent.click(getByText('Logout'));
  expect(getByText('Button clicked')).toBeInTheDocument();
});

test('updates props correctly when an event is triggered', () => {
  const props = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
  };
  const { getByText } = render(<App {...props} />);
  fireEvent.click(getByText('Update name'));
  expect(getByText(`Name updated to ${props.name}`)).toBeInTheDocument();
});

test('function is called when an event is triggered', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<App onClick={handleClick} />);
  fireEvent.click(getByText('Click me'));
  expect(handleClick).toHaveBeenCalled();
});

test('function is not called when an event is not triggered', () => {
  const handleClick = jest.fn();
  render(<App onClick={handleClick} />);
  expect(handleClick).not.toHaveBeenCalled();
});

test('function is called with the correct arguments when an event is triggered', () => {
  const handleClick = jest.fn();
  const props = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
    onClick: handleClick,
  };
  const { getByText } = render(<App {...props} />);
  fireEvent.click(getByText('Update name'));
  expect(handleClick).toHaveBeenCalledWith(props.name);
});

test('function is not called with incorrect arguments when an event is triggered', () => {
  const handleClick = jest.fn();
  const props = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
    onClick: handleClick,
  };
  const { getByText } = render(<App {...props} />);
  fireEvent.click(getByText('Update name'));
  expect(handleClick).not.toHaveBeenCalledWith(`${props.name}123`);
});


