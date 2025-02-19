// components/UserList.tsx
'use client'
import UserCard from './UserCard'
import { useEffect, useState } from 'react'
import { getUsers } from '@/actions/getUsers'
import { useInView } from 'react-intersection-observer'
import { USERS_PER_PAGE } from '@/constants/pagination'

type UserListProps = {
  initialUsers: User[]
}

export default function UserList({ initialUsers }: UserListProps) {
  const [offset, setOffset] = useState(USERS_PER_PAGE)
  const [users, setUsers] = useState<User[]>(initialUsers)
  const { ref, inView } = useInView()
  const [isLoading, setIsLoading] = useState(false)

  const loadMoreUsers = async () => {
    try {
      setIsLoading(true)
      const apiUsers = await getUsers(offset, USERS_PER_PAGE)
      setUsers(users => [...users, ...apiUsers])
      setOffset(offset => offset + USERS_PER_PAGE)
    } catch (error) {
      console.error('Error loading users:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (inView) {
      loadMoreUsers()
    }
  }, [inView, loadMoreUsers])

  return (
    <div className='flex flex-col gap-3'>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      <div ref={ref}>
        {isLoading && <div className="text-center py-4">Loading more users...</div>}
      </div>
      {/* <button onClick={loadMoreUsers}>Load more</button> */}
    </div>
  )
}
