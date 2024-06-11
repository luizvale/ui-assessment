import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import SupportContact from './support-contact';

const mockContact = {
  name: 'John Smith',
  email: 'john.smith@feefo.com',
  phone: '020 3362 4208',
};

test('renders SupportContact title', () => {
  render(<SupportContact contact={mockContact} />);
  const titleElement = screen.getByText(/YOUR FEEFO SUPPORT CONTACT/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders email and phone correctly', () => {
  render(<SupportContact contact={mockContact} />);
  const emailElement = screen.getByText(mockContact.email);
  const phoneElement = screen.getByText(mockContact.phone);
  expect(emailElement).toBeInTheDocument();
  expect(phoneElement).toBeInTheDocument();
});

test('renders FontAwesome icons', () => {
  render(<SupportContact contact={mockContact} />);
  const speakapIcon = screen.getByTestId('speakap-icon');
  const envelopeIcon = screen.getByTestId('envelope-icon');
  expect(speakapIcon).toBeInTheDocument();
  expect(envelopeIcon).toBeInTheDocument();
});
