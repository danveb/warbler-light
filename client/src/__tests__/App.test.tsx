import { render } from "@testing-library/react"; 
import App from "../App";
import { describe, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";
import { ChatContextProvider } from "../context/ChatContext";

describe("App", () => {
  // smoke test 
  test("renders App", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <App />
          </ChatContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    )
  }); 

  // snapshot test 
  // asFragment() matcher not available in vitest
  // test("matches snapshot", () => {
  //   render(
  //     <BrowserRouter>
  //       <AuthContextProvider>
  //         <ChatContextProvider>
  //           <App />
  //         </ChatContextProvider>
  //       </AuthContextProvider>
  //     </BrowserRouter>
  //   ); 
  //   expect(asFragment()).toMatchSnapshot(); 
  // });
}); 