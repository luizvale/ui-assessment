import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sales from './sales';

// Mock the UploadStats component
jest.mock('../UploadStats/upload-stats', () => ({ uploadSuccess, linesSaved }) => (
  <div>Mocked UploadStats with {uploadSuccess}% upload success and {linesSaved}% lines saved</div>
));

const mockData = {
  uploads: 8,
  linesSaved: 4,
};

test('renders Sales title and information', () => {
  render(<Sales data={mockData} />);
  const titleElement = screen.getByText(/Sales/i);
  expect(titleElement).toBeInTheDocument();

  const infoElement = screen.getByText(/You had 8 uploads and 4 lines added/i);
  expect(infoElement).toBeInTheDocument();
});

test('renders UploadStats component with correct data', () => {
  render(<Sales data={mockData} />);
  const uploadStatsElement = screen.getByText(/Mocked UploadStats with 8% upload success and 4% lines saved/i);
  expect(uploadStatsElement).toBeInTheDocument();
});

test('renders FontAwesomeIcon', () => {
  render(<Sales data={mockData} />);
  const iconElement = screen.getByTestId('upload-icon');
  expect(iconElement).toBeInTheDocument();
});
