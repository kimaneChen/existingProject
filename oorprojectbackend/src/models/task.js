const mongoose = require('mongoose');      

const taskSchema =  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      minLength:8,  
      maxLength:50   
    },    
    detail: {
      type: String,
      required: true,
      trim: true,
      minLength:25,  
      maxLength:3000   
    },
    category:{
      type: String,
      required: true,
      trim: true,
      minLength:3,  
      maxLength:15
    },
    postCode:{
      type: Number,
      required: true,
      min:1000,  
      max:99990
    },
    dueDate:{
      type: String,      // Replace by date if the date data is confirmed
      required: true,
    },
/** The working time include the five selection
 * 0: No special time requirement
 * 1: Morning from 6:00 to 10:00 
 * 2: MiddleDay from 10:00 to 14:00
 * 3: Afternoon from 14:00 to 18:00
 * 4: Evening  from 18:00 to 22:00 */

    workingTime:{
      type: Number,
      trim: true,
      min:0,  
      max:5
    },
    priceBudget:{
      type: Number,
      required:true,
      min:5,  
      max:9999
    },
    clientId:{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref:'User'
	  }},
    {   
        timestamps:true,
        toJSON:{
            virtuals:true
        },
        id:false
    }  
);

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;