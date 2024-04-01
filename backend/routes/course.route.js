import express from 'express'
import { addCourse } from '../controllers/course.controller.js';

const courseRouter = express.Router();

//ynha se course add honge
courseRouter.post('/add-course', addCourse);

export default courseRouter;