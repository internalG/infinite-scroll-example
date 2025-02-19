'use client'

type UserProps = {
  user: User
}

export default function UserCard({ user }: UserProps) {
  return (
    <div className='bg-indigo-400 text-white rounded-lg shadow-md w-full max-w-2xl p-4 hover:bg-indigo-500 transition-colors'>
      <div className="flex items-center gap-4">
        <img 
          src={user.profile_picture} 
          alt={`${user.first_name} ${user.last_name}`}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{`${user.first_name} ${user.last_name}`}</h2>
          <p className="text-indigo-100">{user.email}</p>
          <p className="text-indigo-100">{user.phone}</p>
          <p className="text-sm text-indigo-100">
            {`${user.city}, ${user.state}, ${user.country}`}
          </p>
        </div>
      </div>
    </div>
  )
}
