//app/page.tsx
import UserList from '@/components/UserList'
import { getUsers } from '@/actions/getUsers'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { USERS_PER_PAGE } from '@/constants/pagination'

export default async function Home() {
  const initialUsers = await getUsers(0, USERS_PER_PAGE)

  return (
    <main className="container mx-auto px-4 py-8">
      <ErrorBoundary>
        <UserList initialUsers={initialUsers} />
      </ErrorBoundary>
    </main>
  )
}