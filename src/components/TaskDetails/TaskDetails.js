import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaCalendarAlt, FaFacebookF,
  FaTwitter, FaLinkedinIn, 
  FaStar, FaStarHalfAlt } from 'react-icons/fa';

import Avatar from '../Avatar';
import Button from '../Button';
import breakpoint from '../breakpoint';
import Modal from '../Modal';
import fetchTaskDetails from './fetchTaskDetails';

const TaskDetail = styled.div`
    overflow-x: hidden;
    overflow-y: auto;
    //width: 60%;
`;

const TaskDetailHeader = styled.div`
    display: flex;
    margin: 10px 20px;
    @media screen and ${breakpoint.device.xs} {
      flex-direction: column;
    }
    flex-direction: row;

`;

const DetailsPanel = styled.div`
    margin-top: 20px;
    position: relative;
    flex: 70%;
`;

const StatusBar = styled.div`
  height: 20px;
  margin-bottom: 20px;
  flex: 30%;
`;

const PostDetail = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;
const PostItem = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 5px;
  &::before {
    background-color: #f6f8fd;
    content: "";
    display: block;
    height: 1px;
    left: 40px;
    position: absolute;
    right: 5px;
    top: 50px;
  }
`;
const User = styled.a`
  color: #008fb4;
  cursor: pointer;
  text-decoration: none;
`;
const PostTime = styled.div`
  position: absolute;
  bottom: 15px;
  position: absolute;
  right: 5px;
`;
const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  margin: 10px 25px;
  width: 202px;
`;
const PaymentPanel = styled.div`
    border-color: rgb(187, 194, 220);
    border-width: 1px;
    border-style: solid;
    border-radius: 8px;
    text-align: center;
    padding: 15px;
`;
const PaymentPrice = styled.h2`
    padding: 8px 0px;
`;

const TaskShare = styled.div`
    border-radius: 6px;
    border: 1px solid rgb(231, 235, 251);
    margin-top: 20px;
    position: relative;
    text-align: center;
    padding: 15px;
    p {
      position: absolute;
      top: -25px;
      left: 35%;
    }
`;

const ShareButtons = styled.div``;

const TaskDetailBody = styled.div`
    line-height: 1.4;
`;
const Details = styled.div`
    max-height: 253px;
    overflow-y: hidden;
    transition: max-height 0.3s ease-out 0s;
    position: relative;
    overflow-wrap: break-word;
    word-break: break-word;
    margin: 10px 20px;
`;

const OfferContent = styled.div`
  position: relative;
  margin: 0 20px;
  padding-bottom: 15px;
`;
const OfferDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 8px;
  align-items: stretch;
`;

const TaskerInfo = styled.div`
  display: flex;
  -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
`;
const UserInfo = styled.div`
  a {
    color: rgb(0, 143, 180);
    font-family: museo-bold, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 16px;
    font-weight: initial;
    line-height: 24px;
    letter-spacing: 0.15px;
  }
`;
const UserRating = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;
const OfferComment = styled.div`
    background-color: rgb(246, 248, 253);
    border-radius: 4px;
    padding: 8px;
    p {
      color: rgb(41, 43, 50);
    font-family: museo-regular, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 14px;
    font-weight: initial;
    line-height: 20px;
    letter-spacing: 0.25px;
    overflow-wrap: break-word;
    word-break: break-word;
    text-decoration: initial;
    text-align: initial;
    vertical-align: initial;
    font-style: initial;
    white-space: pre-wrap;
    margin: 0px;
    padding: 0px;
    }
`;
const taskId='60d924172bfc720668ea197b';
const getTaskDetails = () => {
  return fetchTaskDetails.get(`/tasks/${taskId}`)
    .then((res) => res.data)
  }
class TaskDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskInfo: undefined,
      show: false
    }
  }
  showModal = e => {
      this.setState({
        show: !this.state.show
      })
    }

    // 传入res data作为新的taskInfo的state
  handleTaskChange = (newTaskInfo) => {
    this.setState({
      taskInfo: newTaskInfo,
    })
  }

  // 在TaskDetails组件mount时开始加载getTaskDetails函数
  componentDidMount() {
    getTaskDetails().then(this.handleTaskChange);
};
  
  render() {
    const { taskInfo } = this.state;
    console.log(taskInfo);
    if(!taskInfo) {
      return 'Loading';
    }
  return (
    <TaskDetail>
      <div className="TaskDetailScroller">
        <TaskDetailHeader>
          <DetailsPanel>
            <StatusBar>
              <Button type='Status' title='OPEN' focus={true}></Button>
              <Button type='Status' title='ASSIGNED' focus={true}></Button>
              <Button type='Status' title='COMPLETED' focus={false}></Button>
            </StatusBar>
            <h2>{taskInfo.title}</h2>
            <PostDetail>
              <PostItem>
                <Avatar />
                <div>
                  <div>POSTED BY</div>
                  <User>{taskInfo.clientId}</User>
                </div>
                <PostTime>5 hours ago</PostTime>
              </PostItem>
              <PostItem>
                <FaMapMarkerAlt className="icon" />
                <div>
                  <div>LOCATION</div>
                  <div>Remote</div>
                </div>
              </PostItem>
              <PostItem>
                <FaCalendarAlt className="icon" />
                <div>
                  <div>DUE DATE</div>
                  <div>{taskInfo.dueDate}</div>
                  <div>Anytime</div>
                </div> 
              </PostItem>
            </PostDetail>
          </DetailsPanel>

          <Sidebar>
            <PaymentPanel>
              <div>TASK BUDGET</div>
              <PaymentPrice>${taskInfo.priceBudget}</PaymentPrice>
              <Button onClick={(e) => this.showModal()} type='Offer' title='Make an Offer' />
              <Modal onClose={this.showModal} show={this.state.show} title={"Make an Offer"} />
            </PaymentPanel>
            <TaskShare>
              <p>SHARE</p>
              <ShareButtons>
                <FaFacebookF className="icon-share" />
                <FaTwitter className="icon-share" />
                <FaLinkedinIn className="icon-share" />
              </ShareButtons>
            </TaskShare>
          </Sidebar>
        </TaskDetailHeader>

        <TaskDetailBody>
          <Details>
            <p>DETAILS</p>
            <div>{taskInfo.detail}</div>
          </Details>
        </TaskDetailBody>

        <div className="task-detail-offer">
            <OfferContent>
              <p>OFFERS</p>
              <OfferDetails>
                <TaskerInfo>
                  <Avatar />
                  <UserInfo>
                  
                    <UserRating>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </UserRating>
                  </UserInfo>
                </TaskerInfo>
                <OfferComment>
                  <p>Hi Chloe
                    Keen to work on this!

                    I'm ABN registered, a professional and creative designer with ID badge certified. I'd be happy to design a logo for your business. 

                    You will get:
                    ✓ 4 Unique & Clean designs to choose from 
                    ✓ Unlimited edits until we get the perfect design
                    ✓ High quality work & Ownership to the design 
                    ✓ All the file formats to use
                    ✓ Airtasker fee included 

                    Looking forward to working with you and build a positive working relationship that will benefit both of us.

                    PS: I will suggest you to go with AUSTRALIAN designers. A lot of here are overseas and fake designers

                    Cheers!
                    Shafiq
                  </p>
                </OfferComment>
              </OfferDetails>

            </OfferContent>


        </div>

      </div>
    </TaskDetail>
  )
  }
}

export default TaskDetails;