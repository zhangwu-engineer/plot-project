import express from 'express';
import { getScenarios } from './scenario.controller';

const router = express.Router();

router.get('/', getScenarios);

export default router;
