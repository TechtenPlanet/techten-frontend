import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CourseDetailPage from '../pages/CourseDetailPage';

jest.mock('../utils/apiClient', () => ({
  apiGet: jest.fn(),
}));

const { apiGet } = jest.requireMock('../utils/apiClient');

describe('CourseDetailPage', () => {
  it('renders course title from api', async () => {
    apiGet.mockResolvedValueOnce({
      id: '123',
      title: 'Test Course',
      description: 'Brief description',
      format: 'Online',
      grades: 'All levels',
      category: 'Category',
      image: '/test.jpg',
      links: [],
      sessions: [],
      pricing: null,
    });

    render(
      <MemoryRouter initialEntries={['/course/123']}>
        <Routes>
          <Route path="/course/:id" element={<CourseDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText('Test Course')).toBeInTheDocument());
  });
});
