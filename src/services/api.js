const API_URL = 'https://jsonplaceholder.typicode.com'

export async function fetchPosts(page = 1, limit = 6, init = {}) {
  const response = await fetch(`${API_URL}/posts?_page=${page}&_limit=${limit}`, init)
  if (!response.ok) {
    throw new Error('Error al obtener datos de la API')
  }

  const total = Number(response.headers.get('x-total-count') ?? 0)
  const data = await response.json()

  return {
    data,
    total,
    totalPages: Math.ceil(total / limit),
  }
}
