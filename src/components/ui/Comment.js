import {Card, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import Grid from '@mui/material/Grid';
export default function Comment(){

    return(
        <Grid container style={{marginBottom:8}}>
            <Grid item xs={1}>
                <Avatar style={{margin:3}} sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                </Avatar>
            </Grid>
            <Grid item xs={11}>
                <Card variant="outlined" sx={{ borderRadius: '10px' }}>
                    <Typography style={{margin:10}} sx={{ mb: 1.5 }} color="text.secondary">
                        Shrimp and Chorizo Paella
                    </Typography>
                    <Typography style={{margin:10}} variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </Card>
            </Grid>
        </Grid>
    )
}