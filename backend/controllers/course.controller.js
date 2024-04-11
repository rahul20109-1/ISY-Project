import Courses from "../models/CourseInfo.model.js";

export const addCourse = async(req, res) => {
    try {
        const {name, acronym, code, branch, credit, level,antipreq, prereq} = req.body;
        if(!name || !acronym || !code || !branch || !credit||!level||!antipreq||!prereq){
            return res.status(400).json({message:'All fields are mandatory'});
        }

        const existingCourse = await Courses.findOne({acronym});

        if(existingCourse){
            return res.status(409).json({message:'Course already exist'});
        }

        const newCourse = new Courses({
            name,
            acronym,
            code,
            branch,
            credit,
            level,
            antipreq,
            prereq
        });

        await newCourse.save();
        return res.status(201).json(newCourse);
        
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}

export const getAllCourses = async(req, res) => {
    try {
        const courses = await Courses.find();
        if(!courses){
            return res.status(404).json({message:'You have no courses yet'});
        }

        return res.status(200).json(courses)

    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}

export const deleteCourse = async(req, res) => {
    try {
        const {id} = req.params;
        const course = await Courses.findByIdAndDelete(id);
        if(!course){
            return res.status(404).json({message:'No courses found'});
        }

        return res.status(200).json({message:'Course deleted successfully'});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}

export const updateCourse = async(req, res) => {
    try {
        const {id} = req.params;
        const course = await Courses.findByIdAndUpdate(id,req.body,{new:true});
        if(!course){
            return res.status(404).json({message:'No courses found'});
        }

        return res.status(200).json(course);
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}