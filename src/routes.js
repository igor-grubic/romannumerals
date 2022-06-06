import express from 'express';

import api from './api/romanNumerals.js';

const router = express.Router();

router.get('/romannumerals', api.getRomanNumerals);

export default router;
