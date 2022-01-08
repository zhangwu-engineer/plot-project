import express from 'express';
import {
  getScenarios,
  addScenario,
} from './scenario.controller';

const router = express.Router();

router.get('/', getScenarios);
router.post('/', addScenario);

export default router;
