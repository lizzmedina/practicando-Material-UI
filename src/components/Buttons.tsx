import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import { Avatar, Box, Button } from '@mui/material';
import { pink } from "@mui/material/colors";

export const Buttons = () => {
    return (
        <Box component='section'>
            <Button variant="contained" color="primary" size="large">  botón contained </Button>
            <Button variant="outlined" color="secondary">  botón outlined</Button>
            <Button variant="text"color="secondary"> botón Text</Button>
            <Button color="secondary">Primary</Button>
            <Button disabled color="secondary">Disabled</Button>
            <Button href="#text-buttons" color="secondary">Link</Button>
            <Button variant="outlined" color="error">  Error </Button>
            <Button variant="outlined" startIcon={<DeleteIcon />}  color="error">  Delete</Button>
            <Button variant="contained" endIcon={<SendIcon />}>  Send</Button>        
            <IconButton color="secondary" aria-label="delete" size="large">   <DeleteIcon fontSize="inherit"/> </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">  <AlarmIcon />  </IconButton>
            <IconButton color="secondary" aria-label="add to shopping cart"> <AddShoppingCartIcon /> </IconButton>
            <IconButton aria-label="fingerprint" color="secondary"><Fingerprint /></IconButton>
            <Button
                color="secondary"
                disabled={false}
                size="large"
                variant="outlined"  
                sx={ { borderRadius: 28 } }
            >
                apretar
            </Button>
            <Avatar sx={{ bgcolor: pink[500] }}>N</Avatar>
        </Box>
    )
}
