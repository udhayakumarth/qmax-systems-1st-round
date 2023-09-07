import { Card, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Grid from '@mui/material/Grid';
export default function Comment(props) {
    return (
        <Grid container style={{ marginBottom: 8 }}>
            <Grid item xs={1}>
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {props.data.name.substring(0, 1)}
                </Avatar>
            </Grid>
            <Grid item xs={11}>
                <Card variant="outlined" sx={{ borderRadius: '10px' }}>
                    <Typography style={{ margin: 10 }} sx={{ mb: 1.5 }} variant="subtitle1" gutterBottom>
                        {props.data.name}
                    </Typography>
                    <Typography style={{ margin: 10 }} variant="body2" color="text.secondary">
                        {props.data.body}
                    </Typography>
                </Card>
            </Grid>
        </Grid>
    )
}