import { Router } from 'express';
import getLastEntries from './controllers/getLastEntries.js';

const router = Router();

router.get('/last-entries', getLastEntries);

export default router;