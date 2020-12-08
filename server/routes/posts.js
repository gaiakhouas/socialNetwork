import express from 'express';
import { getPosts, createPost} from '../controllers/posts.js'

const router = express.Router();

// routes of our backend application
router.get('/', getPosts);
router.post('/', createPost);


export default router;
