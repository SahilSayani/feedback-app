import { useState } from "react"
const FeedbackItem = () => {
  const[rating,SetRating] =useState(7);
  const [text, setText] = useState('lorem ipsum dolor sit amet')
  return (
    <div className="card">FeedbackItem
    <div className="num-display">{rating}</div>
    <div className="text-display">{text}</div>
    </div>
  )
}

export default FeedbackItem