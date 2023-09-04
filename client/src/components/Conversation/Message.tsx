import "../../styles/Message.css"; 

export default function Message() {
  return (
    <div className="message owner">
      <div className="message__info">
        <img src="https://images.unsplash.com/photo-1563718944-758794a56b34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpY2Fnb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="" />
        <span>just now</span>
      </div>
      <div className="message__content">
        <p>Hello World</p>
        <p>Hello World</p>
        <img src="https://images.unsplash.com/photo-1563718944-758794a56b34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpY2Fnb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="" />
      </div>
    </div>
  )
}