// import React from 'react';
// import Axios from 'axios'
// import styled from 'styled-components';

// const PostTask = styled.div`
//   display: flex;
//   flex-direction: column;
//   -webkit-box-flex: 1;
//   flex-grow: 1;
//   flex-shrink: 0;
//   animation: 0.8s ease 0s 1 normal none running ehAxHE;
// `;

// const FormSubmit= styled.form`
//   display: flex;
//   flex-direction: column;
//   -webkit-box-flex: 1;
//   flex-grow: 1;
//   flex-shrink: 0;
//   animation: 0.8s ease 0s 1 normal none running ehAxHE;
// `


// class PostTask extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {      
//       title:"",
//       detail:"",
//       category:"",
//       postCode:0,
//       dueDate:"",
//       workingTime:1,
//       priceBudget:400,
//       clientId:"60d16ccf12bcd75f34530a06"
//     };
//   }

//   onClose = e => {
//     this.props.onClose && this.props.onClose(e);
//   }

//   render() {
//   return (
//         <PostTask>
//           <FormSubmit onSubmit={this.handleSubmit}>
//                 <label htmlFor="taskTitle">What do you need done</label>
//                 <br/>
//                 <input type="text" id="taskTitle" value = {this.state.title} onChange={this.handleTitleChange} name="task_title"/>
//                 <label htmlFor="taskDescription">What are the details?</label>
//                 <br/>
//                 <textarea id="taskDescription" value = {this.state.detail} onChange={this.handleDetailChange} name="task_description"></textarea>            
//                 <label htmlFor="cleanType">What kind of cleaning?</label>
//                 <br/>
//                 <input type="text" id="cleanType" value = {this.state.category} onChange={this.handleCategoryChange} list="clean_types"/>  
//                 <datalist id="clean_types">
//                   <option value="Home cleaning"/>
//                   <option value="End of lease"/>
//                   <option value="Steam cleaning"/>
//                   <option value="Commercial"/>
//                   <option value="Pest Control"/>
//                   <option value="...anything else"/>
//                 </datalist>         
//                 <label htmlFor="postCode">Post Code</label>
//                 <br/>
//                 <input type="number" id="postCode" value = {this.state.postCode} onChange={this.handlePostCodeChange}  name="post_code"/>
//                 <label htmlFor="dueDate">When do you want it done?</label>
//                 <br/>
//                 <input type="date" id="dueDate" value = {this.state.dueDate} onChange={this.handleDueDateChange} name="due_date"/>            
//                 <label htmlFor="suitableDurations">What suitable time do you need a cleaner</label>
//                 <br/>
//                 <input type="number" id="suitableDurations" value = {this.state.workingTime} onChange={this.handleWorkingTimeChange} name="suitable_durations"/>            
//                 <label htmlFor="price">What is your budget?</label>
//                 <br/>
//                 <input type="number" id="budgetPrice" value = {this.state.priceBudget} onChange={this.handlePriceBudgetChange} name="budget_price"/>            
//             <input type="submit" value="Submit"></input>
//           </FormSubmit>          
//         </PostTask> 
//     )
//   }
// }

// export default PostTask;