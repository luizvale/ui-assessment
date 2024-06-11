import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import AccountOverview from './account-overview';

// Mock the SupportContact and Sales components
jest.mock('../SupportContact/support-contact.jsx', () => () => <div>Mocked SupportContact</div>);
jest.mock('../Sales/sales.jsx', () => () => <div>Mocked Sales</div>);

const mockData = {
  supportContact: {
    name: 'John Smith',
    email: 'john.smith@feefo.com',
    phone: '020 3362 4208'
  },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  }
};

test('renders Account Overview title', () => {
  render(<AccountOverview data={mockData} />);
  const titleElement = screen.getByText(/Account Overview/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders SupportContact component with correct data', () => {
  render(<AccountOverview data={mockData} />);
  const supportContactElement = screen.getByText(/Mocked SupportContact/i);
  expect(supportContactElement).toBeInTheDocument();
});

test('renders Sales component with correct data', () => {
  render(<AccountOverview data={mockData} />);
  const salesElement = screen.getByText(/Mocked Sales/i);
  expect(salesElement).toBeInTheDocument();
});
