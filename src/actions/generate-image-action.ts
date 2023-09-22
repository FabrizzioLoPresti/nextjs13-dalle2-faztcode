'use server'

export const generateImage = async (formData: FormData) => {
  const prompt = formData.get('prompt') as string

  // if (prompt === '') throw new Error('Prompt is required')
  if (prompt === '') return ''

  const res = await fetch(`${process.env.BACKEND_URL}/api/generate`, {
    method: 'POST',
    body: JSON.stringify({ prompt }),
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
  })
  const { url } = await res.json()
  return url
}
