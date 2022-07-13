
const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    task: {
      type: mongoose.Schema.Types.ObjectId,
      required:true,      
      ref:'Task'  
    },
    taskerId:{
      type: mongoose.Schema.Types.ObjectId,
      required:true,      
      ref:'TaskerDetail'  
    },
    /** This priceOffer is the newest offerPrice to simplify the design. 
     * The MVP only have priceOffer. 
     * There are update procedure with price change in the original design.
    */ 
    priceOffer:{
      type: Number,
      required:true,
      min:5,  
      max:9999
    }, 

    /** The following data are used by offer assign by client
     * If the offer assigned, the value will be changed to true by client.
     */
    assigned:{
      type: Boolean,
      required:true,
    }, 

    priceAssigned:{
      type: Number,
      required:true,
      min:5,  
      max:9999
    }, 

    /** The following data are used by workComplete by client and tasker
     * The detailed information will be done in the next sprint.
     */
  }
);

const Offer = mongoose.model('Offer', offerSchema);
module.exports = Offer;