const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || ''

const buildUrl = (path) => `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`

export const apiGet = async (path, options = {}) => {
  const response = await fetch(buildUrl(path), options)
  if (!response.ok) {
    const text = await response.text().catch(() => '')
    throw new Error(`GET ${path} failed: ${response.status} ${response.statusText} ${text}`)
  }
  return response.json()
}

export const apiPost = async (path, body, options = {}) => {
  const response = await fetch(buildUrl(path), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    ...options,
  })
  if (!response.ok) {
    const text = await response.text().catch(() => '')
    throw new Error(`POST ${path} failed: ${response.status} ${response.statusText} ${text}`)
  }
  return response.json()
}

export { API_BASE_URL }
