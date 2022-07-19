
const FeedbackItem = (props) => {

  return (
    <div className="card">
    <div className="num-display">{props.item.rating}</div>
    <div className="text-display">{props.item.text}</div>
    </div>
  )
}

export default FeedbackItem