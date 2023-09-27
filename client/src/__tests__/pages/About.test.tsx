import { render, screen } from "@testing-library/react"; 
import { About } from "../../pages";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../../context/AuthContext";
import { ChatContextProvider } from "../../context/ChatContext";

describe("About", () => {
  // smoke test
  test("renders About", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <About />
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
  //           <About />
  //         </ChatContextProvider>
  //       </AuthContextProvider>
  //     </BrowserRouter>
  //   ); 
  //   expect(asFragment()).toMatchSnapshot(); 
  // });

  // getByText 
  test("should display the paragraph tag with class `about__content`", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <About />
          </ChatContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    ); 
    const paragraphElement = screen.getByText("warbler is a lightweight chat application", {
      exact: false, 
    }) as HTMLElement; 
    expect(paragraphElement).toBeInTheDocument(); 
    expect(paragraphElement).toHaveClass("about__content"); 
  }); 

  // getByTestId 
  test("matches test data-testid on button element", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <About />
          </ChatContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    ); 
    const testId = screen.getByTestId("about__btn"); 
    expect(testId).toBeInTheDocument(); 
  }); 
}); 