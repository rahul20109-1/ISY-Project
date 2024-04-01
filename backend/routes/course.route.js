import express from 'express'
import { addCourse, deleteCourse, getAllCourses, updateCourse } from '../controllers/course.controller.js';

const courseRouter = express.Router();


courseRouter.post('/add-course', addCourse);
courseRouter.get('/get-courses',getAllCourses);
courseRouter.delete('/delete-course/:id',deleteCourse);
courseRouter.patch('/update-course/:id', updateCourse);

export default courseRouter;