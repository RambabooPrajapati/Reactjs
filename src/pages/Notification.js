import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
    // const [count, setCount] = useState(2)
    const count= useSelector((state)=> state.cart.count)
  return (
    <div style={{ fontSize: "20px", fontWeight: "30px", backgroundColor: "yellow", paddingLeft: "10px", paddingRight: "10px", borderRadius: "100%"}}>
      {count}
    </div>
  )
}

export default Notification
