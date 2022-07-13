const Task = require('../../../models/task');
 
async function createTask(req, res) { 
  const {title, detail, category,postCode,dueDate,
    workingTime, priceBudget,clientId} = req.body;
  const task = new Task({title, detail, category,postCode,dueDate,
    workingTime, priceBudget, clientId});
  await task.save();
  return res.status(201).json(task);
}

async function index(req,res){
    const { topN }=req.body;  //try catch ...... 
    if (Number.isNaN(topN)){
      const tasks=await Task.find().exec(); 
      return res.json(tasks);
    }
    const tasks = await Task.find().sort({ _id: -1 }).limit(topN);
    if(!tasks){
        return res.sendStatus(404);
    }
    return res.json(tasks); 
    //
}


async function show(req,res) {
    const { id }=req.params;
    const task = await Task.findById(id);
    if(!task){
        return res.sendStatus(404);
    }
    return res.json(task);
}

async function update(req,res){
    const { id } = req.params;
    const {title, detail, category,postCode,dueDate,
    workingTime, priceBudget}=req.body;
    const task = await Task.findByIdAndUpdate(id,{title, detail, category,postCode,dueDate,
    workingTime, priceBudget},{new:true});   
    if(!task){
        console.log('The course does not exist');
        return res.sendStatus(404);
    }
    return res.json(task); 
}

function destroy(req,res){
    const { id } = req.params;
    const task = Task.findByIdAndDelete(id);   
    if(!task){
        console.log('The course does not exist');
        return res.sendStatus(404);
    }
    return res.sendStatus(204); 
}





module.exports = {

  createTask,
  index,
  show,
  update,
  destroy, 

};
