const API_BASE_URL = '/api';

export const getEvents = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/events`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const events = await response.json();
    return events;
  } catch (error) {
    console.error('Error fetching events from backend:', error);
    return [];
  }
};

export const getEvent = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/events/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const event = await response.json();
    return event;
  } catch (error) {
    console.error('Error fetching event from backend:', error);
    return null;
  }
};
