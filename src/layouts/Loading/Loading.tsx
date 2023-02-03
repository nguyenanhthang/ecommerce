import { Box, CircularProgress } from '@mui/material';

const FullScreenLoader = () => {
    return (
        <Box
            sx={{
                height: '100%',
                width: '100%',
                background: '#ffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Box display='flex' alignItems='center' justifyContent='center' sx={{ height: '100%' }}>
                <CircularProgress />
            </Box>
        </Box>
    );
};

export default FullScreenLoader;
