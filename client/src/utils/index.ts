import { Timestamp as TimeType } from "firebase/firestore"; 

export const calculateMessageDate = (timestamp: TimeType) => {
  const currentDate = new Date(); 
  const time = currentDate.getTime() - timestamp.toDate().getTime(); 

  // options 
  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: "numeric", 
    minute: "numeric",
  }; 

  const optionsDate: Intl.DateTimeFormatOptions = {
    month: "numeric", 
    day: "numeric", 
    year: "2-digit", 
  }; 

  if(time <= 1000) return "Just Now";
  if(time > 86400000) {
    return new Intl.DateTimeFormat("en-US", optionsDate).format(timestamp.toDate()); 
  }
  return new Intl.DateTimeFormat("en-US", optionsTime).format(timestamp.toDate()); 
}

export const setDefaultAvatar = () => {
  const avatar1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Twemoji_1f351.svg/1200px-Twemoji_1f351.svg.png"; 
  const avatar2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/440px-Twemoji_1f600.svg.png"; 
  const randomInt = Math.floor(Math.random() * 2 + 1); 
  return randomInt === 1 ? avatar1 : avatar2; 
}