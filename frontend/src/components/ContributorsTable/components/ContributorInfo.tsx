import React from 'react';
import {
    Avatar,
    Box,
    Link,
    Typography,
    Tooltip
} from '@mui/material';
import { ContributorInfoProps } from '../types';
import { ContributorTooltipContent } from './tooltips/ContributorTooltip';

export const ContributorInfo: React.FC<ContributorInfoProps> = ({ contributor, index }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2.5, sm: 2 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <Link 
                    href={contributor.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ display: 'flex' }}
                >
                    <Avatar
                        src={contributor.avatarUrl}
                        alt={contributor.name || contributor.login}
                        sx={{ 
                            width: { xs: 48, sm: 40 }, 
                            height: { xs: 48, sm: 40 },
                            borderRadius: '50%'
                        }}
                    />
                </Link>
                {index < 3 && (
                    <Typography 
                        sx={{ 
                            fontSize: { xs: '1.4rem', sm: '1.2rem' },
                            lineHeight: 1,
                            position: 'absolute',
                            right: -12,
                            bottom: -6
                        }}
                    >
                        {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                    </Typography>
                )}
            </Box>
            <Box sx={{ minWidth: 0, flex: 1 }}>
                <Tooltip
                    title={<ContributorTooltipContent contributor={contributor} />}
                    arrow
                    placement="bottom-start"
                    componentsProps={{
                        tooltip: {
                            sx: {
                                bgcolor: theme => theme.palette.mode === 'dark' ? '#161b22' : '#ffffff',
                                border: '1px solid',
                                borderColor: theme => theme.palette.mode === 'dark' ? '#30363d' : 'rgba(27, 31, 36, 0.15)',
                                boxShadow: theme => theme.palette.mode === 'dark' 
                                    ? '0 8px 24px rgba(1, 4, 9, 0.75)'
                                    : '0 8px 24px rgba(140, 149, 159, 0.2)',
                                borderRadius: '6px',
                                p: 0,
                                maxWidth: 'none',
                                '& .MuiTooltip-arrow': {
                                    color: theme => theme.palette.mode === 'dark' ? '#30363d' : 'rgba(27, 31, 36, 0.15)',
                                    '&::before': {
                                        backgroundColor: theme => theme.palette.mode === 'dark' ? '#161b22' : '#ffffff',
                                        border: '1px solid',
                                        borderColor: theme => theme.palette.mode === 'dark' ? '#30363d' : 'rgba(27, 31, 36, 0.15)',
                                    }
                                }
                            }
                        }
                    }}
                >
                    <Box sx={{ minWidth: 0 }}>
                        <Link 
                            href={contributor.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ 
                                color: theme => theme.palette.mode === 'dark' ? '#e6edf3' : '#24292f',
                                textDecoration: 'none',
                                '&:hover': { textDecoration: 'underline' },
                                display: 'block'
                            }}
                        >
                            <Typography 
                                variant="subtitle1" 
                                sx={{ 
                                    fontWeight: 600, 
                                    mb: 0.5,
                                    color: 'inherit',
                                    fontSize: { xs: '1.1rem', sm: '1rem' }
                                }}
                            >
                                {contributor.name || contributor.login}
                            </Typography>
                        </Link>
                        {contributor.name && (
                            <Link 
                                href={contributor.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ 
                                    textDecoration: 'none',
                                    '&:hover': { textDecoration: 'underline' }
                                }}
                            >
                                <Typography 
                                    variant="body2" 
                                    sx={{ 
                                        color: theme => theme.palette.mode === 'dark' ? '#2f81f7' : '#0969da',
                                        fontWeight: 600,
                                        fontSize: { xs: '0.9375rem', sm: '0.875rem' }
                                    }}
                                >
                                    {contributor.login}
                                </Typography>
                            </Link>
                        )}
                    </Box>
                </Tooltip>
            </Box>
        </Box>
    );
}; 