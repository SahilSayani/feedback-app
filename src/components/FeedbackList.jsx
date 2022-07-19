import FeedbackItem from "./FeedbackItem"
const FeedbackList = (props) => {
    if(!props.feedback || props.feedback.length===0){
     return <p> No Feedback Yet</p>
    }
  return (
    <div className="feedback-list">
        {props.feedback.map((item)=>(
            <FeedbackItem key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default FeedbackList