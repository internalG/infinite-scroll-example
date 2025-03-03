'use client';

import React from 'react';
import { Button, Stack, Tooltip } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

interface RatingProps {
  onRate: (rating: 'like' | 'ok' | 'disappointed') => void;
}

const Rating: React.FC<RatingProps> = ({ onRate }) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
      <Tooltip title="Like">
        <Button
          variant="outlined"
          color="success"
          onClick={() => onRate('like')}
          startIcon={<ThumbUpIcon />}
        >
          Like
        </Button>
      </Tooltip>
      
      <Tooltip title="OK">
        <Button
          variant="outlined"
          color="info"
          onClick={() => onRate('ok')}
          startIcon={<ThumbsUpDownIcon />}
        >
          OK
        </Button>
      </Tooltip>
      
      <Tooltip title="Disappointed">
        <Button
          variant="outlined"
          color="error"
          onClick={() => onRate('disappointed')}
          startIcon={<ThumbDownIcon />}
        >
          Disappointed
        </Button>
      </Tooltip>
    </Stack>
  );
};

export default Rating; 