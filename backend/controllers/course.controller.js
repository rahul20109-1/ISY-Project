import Courses from "../models/CourseInfo.model.js";

export const addCourse = async(req, res) => {
    try {
        const {name, acronym, code, branch, credit} = req.body;
        if(!name || !acronym || !code || !branch || !credit){
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
            credit
        });

        await newCourse.save();
        return res.status(201).json(newCourse);
        
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}