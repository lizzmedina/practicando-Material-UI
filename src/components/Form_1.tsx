import { Box, Grid, Paper, TextField, Typography } from '@mui/material';

export const Form_1 = () => {
    return (
            <Box component='section'  sx={{maxWidth: 500}}>
                <Paper elevation={2} sx={{p:'32px', display:'flex', flexDirection: 'column', gap: 3}}>
                    <Typography component='h1' variant='h1' sx={{fontSize:24, fontWeight: 500 }}>
                        Registrate para recibir las últimas noticias
                    </Typography>
                    <Grid item xs={12}>
                    <TextField 
                        id="outlined-basic" 
                        label="name" 
                        variant="outlined" 
                        color="primary"                         
                        sx={{width:1}} // el 1 es como el 100% del contenedor
                    />
                    </Grid>
                </Paper>
            </Box>
    )
}
