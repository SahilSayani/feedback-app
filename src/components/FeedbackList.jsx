import PropTypes  from 'prop-types';
import FeedbackItem from "./FeedbackItem"
const FeedbackList = ({feedback,handleDelete}) => {
    if(!feedback || feedback.length===0){
     return <p> No Feedback Yet</p>
    }
  return (
    <div className="feedback-list">
        {feedback.map((item)=>(
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
        ))}
    </div>
  )
}
FeedbackList.propTypes={
  // feedback: PropTypes.array,this will work too
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}
export default FeedbackList