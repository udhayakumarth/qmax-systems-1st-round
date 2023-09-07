import {Button, Card, CardActions, CardContent, CardHeader, Typography} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import {red} from "@mui/material/colors";
import Divider from '@mui/material/Divider';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import {useState} from "react";

export default function Post(props){

    return(
        <Card style={{marginBottom:8}} variant="outlined" sx={{ borderRadius: '10px' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                title="Shrimp and Chorizo Paella"
                action={
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                }
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <Divider variant="middle" />
            <CardActions>
                <Button onClick={() => props.handleCommentsOpen()} size="medium" startIcon={<CommentIcon />}>Comments</Button>
            </CardActions>
        </Card>
    )
}