import express from 'express'
import { addCourse, deleteCourse, getAllCourses, updateCourse } from '../controllers/course.controller.js';
import { verifyAdmin } from '../middlewares/user.middleware.js';

const courseRouter = express.Router();


courseRouter.post('/add-course',  verifyAdmin, addCourse);
courseRouter.get('/get-courses', verifyAdmin, getAllCourses);
courseRouter.delete('/delete-course/:id',verifyAdmin,deleteCourse);
courseRouter.patch('/update-course/:id',verifyAdmin, updateCourse);

export default courseRouter;