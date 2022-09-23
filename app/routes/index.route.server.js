// Index Routes
import { Router } from 'express';
import { helloWorld } from '../controllers/index.controller.server.js'

// Intanciating the router
const router = Router();

// add middleware to connect application
router.get('/',helloWorld);
router.get('/hello',helloWorld);

export default router;