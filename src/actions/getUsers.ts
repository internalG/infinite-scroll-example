//actions/getUsers.ts
'use server'

export const getUsers = async (offset: number, limit: number) => {
  try {
    const url = `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${limit}`
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = (await response.json()) as UserAPIResponse
    return data.users
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    console.error('Failed to fetch users:', errorMessage)
    throw new Error(`Failed to fetch users: ${errorMessage}`)
  }
}