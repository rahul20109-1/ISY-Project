import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    acronym:{
        type:String,
        required:true,
        unique:true
    },
    code:{
        type:Array,
        required:true
    },
    branch:{
        type:Array,
        required:true
    },
    credit:{
        type:Number,
        required:true
    },
    level:{
        type:Array,
        required:true
    },
    prereq:{
        type:Array,
        required:true
    },
    antireq:{
        type:Array,
        required:true
    }
},{timestamps:true});

const Courses = mongoose.model('Courses', courseSchema);

export default Courses;