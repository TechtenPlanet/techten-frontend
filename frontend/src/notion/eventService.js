import { apiGet } from '../utils/apiClient'

export const getEvents = async () => {
  try {
    const events = await apiGet('/api/events')
    return events
  } catch (error) {
    console.error('Error fetching events from backend:', error)
    return []
  }
};

export const getEvent = async (id) => {
  try {
    const event = await apiGet(`/api/events/${id}`)
    return event
  } catch (error) {
    console.error('Error fetching event from backend:', error)
    return null
  }
};
