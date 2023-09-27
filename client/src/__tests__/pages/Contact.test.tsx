import { render, screen } from "@testing-library/react"; 
import { Contact } from "../../pages";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../../context/AuthContext";
import { ChatContextProvider } from "../../context/ChatContext";

describe("Contact", () => {
  // smoke test
  test("renders Contact", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <Contact />
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
  //           <Contact />
  //         </ChatContextProvider>
  //       </AuthContextProvider>
  //     </BrowserRouter>
  //   ); 
  //   expect(asFragment()).toMatchSnapshot(); 
  // });

  // getByText 
  test("should display the paragraph tag", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <Contact />
          </ChatContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    ); 
    const paragraphElement = screen.getByText("© All rights reserved – Danny Bae", {
      exact: true, 
    }) as HTMLElement; 
    expect(paragraphElement).toBeInTheDocument(); 
  }); 

  // getByTestId 
  test("matches data-testid on link tag", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <Contact />
          </ChatContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    ); 
    const testId = screen.getByTestId("github__link"); 
    expect(testId).toBeInTheDocument(); 
  }); 

  // getByRole 
  test("img tag will have a src attribute", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <Contact />
          </ChatContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    ); 
    const img = screen.getByRole("img"); 
    expect(img).toHaveAttribute("src"); 
  }); 
}); 