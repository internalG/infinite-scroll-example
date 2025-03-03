'use client'

import { useState } from 'react';
import Rating from './Rating';

type UserProps = {
  user: User;
  onRatingChange?: (userId: number, rating: 'like' | 'ok' | 'disappointed') => void;
}

export default function UserCard({ user, onRatingChange }: UserProps) {
  const [currentRating, setCurrentRating] = useState<'like' | 'ok' | 'disappointed' | undefined>(user.rating);

  const handleRate = (rating: 'like' | 'ok' | 'disappointed') => {
    setCurrentRating(rating);
    onRatingChange?.(user.id, rating);
  };

  const getRatingColor = (rating: 'like' | 'ok' | 'disappointed') => {
    switch (rating) {
      case 'like':
        return 'text-[#4caf50]';
      case 'ok':
        return 'text-[#2196f3]';
      case 'disappointed':
        return 'text-[#f44336]';
      default:
        return 'text-indigo-100';
    }
  };

  return (
    <div className='bg-indigo-400 text-white rounded-lg shadow-md w-full max-w-2xl p-4 hover:bg-indigo-500 transition-colors'>
      <div className="flex flex-col gap-4">
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
        
        <div className="mt-2 bg-white/5 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center">
          <Rating onRate={handleRate} currentRating={currentRating} />
          {currentRating && (
            <p className="text-sm mt-3 text-white/70">
              Your rating: <span className={`font-medium capitalize ${getRatingColor(currentRating)}`}>
                {currentRating}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
