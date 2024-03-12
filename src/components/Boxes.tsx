import { Box } from '@mui/material'
import React from 'react'

export const Boxes = () => {
    return (
        <Box
            height={120}          
            my={2}
            display="flex"
            alignItems="center"
            gap={2}
            p={2}
            sx={{ border: '2px solid grey' }}
        >
            This Box uses MUI System props for quick customization.
            <Box
                sx={{
                    width: 50,
                    height: 100,
                    borderRadius: 1,
                    bgcolor: 'primary.main',
                    '&:hover': {
                    bgcolor: 'primary.dark',
                    },
                }}
            />
            <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                This Box renders as an HTML section element.
            </Box>
        </Box>
    )
}
