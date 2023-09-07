import { Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { red } from "@mui/material/colors";
import Divider from '@mui/material/Divider';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useState, useEffect } from "react";
import { getUser } from "../../api/apiService";

export default function Post(props) {
    const [user, setUser] = useState({});
    useEffect(() => {
        getUser(props.data.userId).then((res) => {
            setUser(res.data)
        })
    }, [])

    return (
        <Card style={{ marginBottom: 8 }} variant="outlined" sx={{ borderRadius: '10px' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {user.name?.substring(0, 1)}
                    </Avatar>
                }
                title={user?.name}
                subheader={`@${user?.username}`}
                action={
                    <IconButton onClick={() => props.handleDelete(props.data.id)} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                }
            />
            <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                    {props.data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.data.body}
                </Typography>
            </CardContent>
            <Divider variant="middle" />
            <CardActions>
                <Button onClick={() => props.handleCommentsOpen(props.data.id)} size="medium" startIcon={<CommentIcon />}>Comments</Button>
            </CardActions>
        </Card>
    )
}