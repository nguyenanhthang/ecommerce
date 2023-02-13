import { Box, CircularProgress } from '@mui/material';

const FullScreenLoader = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                background: '#ffff',
                position: 'fixed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999
            }}
        >
            <Box display='flex' alignItems='center' justifyContent='center' sx={{ height: '100vh' }}>
                <CircularProgress />
            </Box>
        </Box>
    );
};

export default FullScreenLoader;
