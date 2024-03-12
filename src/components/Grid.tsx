import { Grid } from '@mui/material'
import {Paper, styled } from "@mui/material";

export const GridComponent = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Item>xs</Item>
                </Grid>
                <Grid item xs={6} >
                    <Item >xs=6</Item>
                </Grid>
                <Grid item xs>
                    <Item>xs</Item>
                </Grid>                
                <Grid container  direction="row"  justifyContent="center"  alignItems="center"> 
                    <span>soy un texto y debería ser rosa Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dolore vero, voluptate, eum, cum pariatur incidunt consequuntur quos recusandae nobis corporis illo ipsam. Blanditiis, consequuntur! Debitis in molestiae reiciendis nam?</span>
                </Grid>
            </Grid>
        </>            
    )
}
