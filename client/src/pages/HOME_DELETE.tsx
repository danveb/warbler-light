// import React, { useState, useEffect } from "react";
// import { db, auth } from "../firebase"; 
// import { collection, onSnapshot, addDoc, orderBy, query } from "firebase/firestore"; 
// import { useAuthState } from "react-firebase-hooks/auth"; 
// // import { SignIn, SignOut } from "../components";
// import "../styles/Home.css"; 

// interface MessagesProp {
//   id: string;
//   data: {
//     text: string;
//     timestamp: string;
//     uid: string;
//     displayName: string;
//   };
// }

// export default function Home() {
//   // user from useAuthState 
//   const [user] = useAuthState(auth); 

//   // useState 
//   const [messages, setMessages] = useState<MessagesProp[]>([]); 
//   const [input, setInput] = useState(""); 

//   // useEffect
//   useEffect(() => {
//     const q = query(collection(db, "messages"), orderBy("timestamp")); 
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       setMessages(
//         snapshot.docs.map((doc) => ({
//           id: doc.id, 
//           data: doc.data(), 
//         })) as MessagesProp[]
//         );
//       }); 
//     return () => unsubscribe(); 
//   }, []); 

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInput(e.target.value); 
//   }; 

//   const sendMessage = async (e: React.FormEvent) => {
//     e.preventDefault(); 
//     if(input.trim()) {
//       await addDoc(collection(db, "messages"), {
//         text: input, 
//         timestamp: new Date(), 
//         uid: user?.uid, 
//         displayName: user?.displayName, 
//       }); 
//     }
//     setInput(""); 
//   }; 

//   return (
//     <div className="home">
//       <h1>Warbler | Lite</h1>
//       <SignOut />
//       <main>
//         {user ? (
//           <>
//             {messages.map(({ id, data }) => (
//               <div key={id} className={`message ${data.uid === user.uid ? "sent" : "received"}`}>
//                 <span className="displayName">{data.displayName}: </span>
//                 <span className="messageText">{data.text}</span>
//               </div>
//             ))}
//           </>
//         ) : (
//           <SignIn />
//         )}
//       </main>
//       {user && (
//         <footer>
//           <form onSubmit={sendMessage}>
//             <input value={input} onChange={handleInputChange} placeholder="Type a message" />
//             <button type="submit">Send</button>
//           </form>
//         </footer>
//       )}
//     </div>
//   )
// }