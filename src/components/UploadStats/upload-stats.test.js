import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UploadStats from './upload-stats';

const mockData = {
  uploadSuccess: 75,
  linesSaved: 50,
};

test('renders upload success percentage', () => {
  render(<UploadStats uploadSuccess={mockData.uploadSuccess} linesSaved={mockData.linesSaved} />);
  const uploadSuccessElement = screen.getByText(/8%/i);
  expect(uploadSuccessElement).toBeInTheDocument();
});

test('renders lines saved percentage', () => {
  render(<UploadStats uploadSuccess={mockData.uploadSuccess} linesSaved={mockData.linesSaved} />);
  const linesSavedElement = screen.getByText(/4%/i);
  expect(linesSavedElement).toBeInTheDocument();
});

test('renders UPLOAD SUCCESS text', () => {
  render(<UploadStats uploadSuccess={mockData.uploadSuccess} linesSaved={mockData.linesSaved} />);
  const uploadSuccessTextElement = screen.getByText(/UPLOAD SUCCESS/i);
  expect(uploadSuccessTextElement).toBeInTheDocument();
});

test('renders LINES SAVED text', () => {
  render(<UploadStats uploadSuccess={mockData.uploadSuccess} linesSaved={mockData.linesSaved} />);
  const linesSavedTextElement = screen.getByText(/LINES SAVED/i);
  expect(linesSavedTextElement).toBeInTheDocument();
});
