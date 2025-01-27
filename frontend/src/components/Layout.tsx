import React from 'react';
import { Box, Container, useTheme } from '@mui/material';
import { FiltersPanel } from './FiltersPanel';
import { ContributorsTable } from './ContributorsTable';
import { HiringSection } from './HiringSection';
import { useContributors } from '../hooks/useContributors/index';
import { useHiring } from '../hooks/useHiring';
import Header from './Header';

interface LayoutProps {
  onToggleTheme: () => void;
}

export const Layout = ({ onToggleTheme }: LayoutProps) => {
  const theme = useTheme();
  const { contributors = [], isLoading: isLoadingContributors, error: contributorsError } = useContributors();
  const { hiringManager, jobOpenings, isLoading: isLoadingHiring } = useHiring();

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        bgcolor: theme => theme.palette.mode === 'dark' ? '#0d1117' : '#ffffff',
        position: 'relative',
      }}
    >
      <Header onToggleTheme={onToggleTheme} />
      <Container 
        maxWidth="lg" 
        sx={{ 
          flex: 1,
          py: 4,
          px: { xs: 2, sm: 3 },
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          mb: '200px' // Add space for the sticky footer
        }}
      >
        <FiltersPanel />
        <ContributorsTable
          contributors={contributors}
          isLoading={isLoadingContributors}
          error={contributorsError}
        />
      </Container>
      {!isLoadingHiring && hiringManager && jobOpenings && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: theme => theme.palette.mode === 'dark' ? '#0d1117' : '#ffffff',
            borderTop: '1px solid',
            borderColor: theme => theme.palette.mode === 'dark' ? '#30363d' : 'rgba(27, 31, 36, 0.15)',
            boxShadow: theme => theme.palette.mode === 'dark' 
              ? '0 -4px 12px rgba(0, 0, 0, 0.3)'
              : '0 -4px 12px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease-in-out',
            zIndex: 1000,
          }}
        >
          <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
            <HiringSection
              hiringManager={hiringManager}
              jobOpenings={jobOpenings}
            />
          </Container>
        </Box>
      )}
    </Box>
  );
}; 