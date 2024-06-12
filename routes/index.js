import express from 'express';
import { homePage, aboutPage, travelPage, testimonialsPage, travelDetail } from '../controllers/pagesController.js';
import { saveTestimonial } from '../controllers/testimonialController.js'

const router = express.Router();

router.get('/', homePage);

router.get('/about', aboutPage);

router.get('/travels', travelPage);

router.get('/travels/:slug', travelDetail);

router.get('/testimonials', testimonialsPage);

router.post('/testimonials', saveTestimonial);

export default router