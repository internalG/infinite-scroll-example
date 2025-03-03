'use client';

import React from 'react';
import { ButtonGroup, Button, Tooltip, Box } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbsUpDownOutlinedIcon from '@mui/icons-material/ThumbsUpDownOutlined';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

interface RatingProps {
  onRate: (rating: 'like' | 'ok' | 'disappointed') => void;
  currentRating?: 'like' | 'ok' | 'disappointed';
}

const Rating: React.FC<RatingProps> = ({ onRate, currentRating }) => {
  return (
    <ButtonGroup 
      variant="outlined" 
      size="large"
      sx={{
        '& .MuiButton-root': {
          width: '64px',
          height: '64px',
          minWidth: 'unset',
          borderRadius: '50% !important',
          p: 0,
          border: 'none',
          color: 'rgba(255, 255, 255, 0.7)',
          position: 'relative',
          '&:hover': {
            border: 'none',
            bgcolor: 'rgba(255, 255, 255, 0.1)',
          },
          '& .MuiSvgIcon-root': {
            fontSize: '1.5rem',
            mb: '12px'
          },
          '& .rating-number': {
            position: 'absolute',
            bottom: '8px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '0.75rem',
            fontWeight: 'medium'
          }
        },
        '& .MuiButton-root.active': {
          // bgcolor: 'rgba(244, 67, 54, 0.2)',
          color: '#FF5722',
          border: 'none',
          // '&:hover': {
          //   bgcolor: 'rgba(244, 67, 54, 0.3)',
          // }
        }
      }}
    >
      <Tooltip title="Like">
        <Button
          className={currentRating === 'like' ? 'active' : ''}
          onClick={() => onRate('like')}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            {currentRating === 'like' ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
            <span className="rating-number">5.0</span>
          </Box>
        </Button>
      </Tooltip>
      
      <Tooltip title="OK">
        <Button
          className={currentRating === 'ok' ? 'active' : ''}
          onClick={() => onRate('ok')}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            {currentRating === 'ok' ? <ThumbsUpDownIcon /> : <ThumbsUpDownOutlinedIcon />}
            <span className="rating-number">3.0</span>
          </Box>
        </Button>
      </Tooltip>
      
      <Tooltip title="Disappointed">
        <Button
          className={currentRating === 'disappointed' ? 'active' : ''}
          onClick={() => onRate('disappointed')}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            {currentRating === 'disappointed' ? <ThumbDownIcon /> : <ThumbDownOutlinedIcon />}
            <span className="rating-number">1.0</span>
          </Box>
        </Button>
      </Tooltip>
    </ButtonGroup>
  );
};

export default Rating; 