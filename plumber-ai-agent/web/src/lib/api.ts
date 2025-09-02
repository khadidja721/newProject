const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export async function apiGet(path: string) {
  const res = await fetch(`${API_BASE}${path}`)
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`)
  return res.json()
}
