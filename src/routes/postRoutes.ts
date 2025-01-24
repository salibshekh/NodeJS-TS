import { Router } from 'express';
import { getPostDetail,createPost} from '../controllers/postController';

const router = Router();

router.get('/getPost', getPostDetail);
router.post('/createPost', createPost);

export default router;
