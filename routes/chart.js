import { barData } from '../controllers/chartData.js';
import express from 'express'
const router=express.Router();

router.get('/chartData',barData);
export default router;