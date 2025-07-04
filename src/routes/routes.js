import express from 'express';
import { chat } from '../controllers/controller.js';

const router = express.Router();

router.post('/v1/chat', chat);

export default router;