import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StemSquadPage from '../pages/StemSquadPage';

jest.mock('../notion/stemSquadService', () => ({
  getStemSquadLandingContent: jest.fn(),
}));

const { getStemSquadLandingContent } = jest.requireMock('../notion/stemSquadService');

describe('StemSquadPage', () => {
  it('renders CTA link to stem-squad enrollment', async () => {
    getStemSquadLandingContent.mockResolvedValueOnce([
      {
        id: 'hero1',
        type: 'Hero',
        title: 'STEM Squad',
        content: 'Join us',
        buttonLabel: 'Enroll',
        buttonLink: 'stem-squad',
        media: [],
      },
    ]);

    render(
      <MemoryRouter initialEntries={['/stem-squad']}>
        <StemSquadPage />
      </MemoryRouter>
    );

    const cta = await screen.findByRole('link', { name: /Enroll/i });
    expect(cta.getAttribute('href')).toContain('/get-involved?form=stem-squad');
  });
});
