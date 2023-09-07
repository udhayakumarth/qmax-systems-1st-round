import Post from "../components/ui/Post";
import Container from '@mui/material/Container';
import Comment from "../components/ui/Comment";
import { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
export default function HomeScreen(props) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(props.posts)
    }, [props])

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '24ch',
                '&:focus': {
                    width: '34ch',
                },
            },
        },
    }));

    console.log(posts.length);
    return (
        <div>
            <Box sx={{ flexGrow: 1 }} style={{ marginBottom: 100 }}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Posts
                        </Typography>
                        <Button variant="outlined" startIcon={<RefreshIcon style={{ color: "white" }} />}>
                            <Typography style={{ color: "white" }}>Refersh</Typography>
                        </Button>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <Container maxWidth="md">
                    <Container maxWidth="sm">
                        <Typography style={{ marginBottom: 16 }} variant="body2" color="text.secondary">
                            All Posts
                        </Typography>
                        <Divider style={{ marginBottom: 8 }} />
                        {posts.length > 0 ?
                            <div>
                                {
                                    posts.map((element) => {
                                        return <Post key={element.id} data={element} handleCommentsOpen={handleOpen} />
                                    })
                                }
                            </div>
                            :
                            <Typography variant="body2" color="text.secondary">
                                No Post Found.
                            </Typography>}

                    </Container>
                </Container>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    PaperProps={{ sx: { borderRadius: "10px" } }}
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Comments"}
                    </DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent>
                        <Comment />
                        <Comment />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}