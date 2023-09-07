import Post from "../components/ui/Post";
import Container from '@mui/material/Container';
import Comment from "../components/ui/Comment";
import { useEffect, useState } from "react";
import { Typography, InputAdornment, Snackbar } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from "@mui/icons-material/Close";
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import { getComments } from "../api/apiService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function HomeScreen(props) {
    const savedSearch = localStorage.getItem("search");
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState(savedSearch ? savedSearch : "");
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        localStorage.setItem("search", search);
        console.log(localStorage.getItem("search"), "chenged");
        if (search.trim() === "") {
            setFilteredPosts(posts);
        } else {
            const filtered = posts.filter((post) =>
                post.title.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredPosts(filtered);
        }
    }, [search, posts]);

    const handleDelete = (postId) => {
        setPosts(posts.filter(function (element) {
            return element.id !== postId;
        }))
        toast.success('Post Deleted!', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    useEffect(() => {
        setPosts(props.posts)
        setFilteredPosts(props.posts);
    }, [props])

    const [open, setOpen] = useState(false);
    const handleOpen = (postId) => {
        getComments(postId).then((res) => {
            setComments(res.data)
            setOpen(true)
        })
    };
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Box sx={{ flexGrow: 1 }} style={{ marginBottom: 80 }}>
                <AppBar color="inherit" position="fixed">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Posts
                        </Typography>
                        <TextField
                            size="small"
                            variant="outlined"
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                        <IconButton aria-label="Refersh">
                            <RefreshIcon />
                        </IconButton>
                    </Toolbar>

                </AppBar>
            </Box>
            <div>
                <Container maxWidth="md">
                    <Container maxWidth="sm">
                        {search?.length > 0 ?
                            <Typography style={{ marginBottom: 16 }} variant="body2" color="text.secondary">
                                {`Search Result for "${search}"`}
                            </Typography>
                            :
                            <Typography style={{ marginBottom: 16 }} variant="body2" color="text.secondary">
                                All Posts
                            </Typography>
                        }

                        {filteredPosts.length > 0 ?
                            <div>
                                {
                                    filteredPosts.map((element) => {
                                        return <Post key={element.id} data={element} handleCommentsOpen={handleOpen} handleDelete={handleDelete} />
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
                        {posts.length > 0 ?
                            <div>
                                {
                                    comments.map((element) => {
                                        return <Comment key={element.id} data={element} />
                                    })
                                }
                            </div>
                            :
                            <Typography variant="body2" color="text.secondary">
                                No Comments Found.
                            </Typography>}
                    </DialogContent>
                </Dialog>
            </div>
            <ToastContainer />
        </div>
    )
}