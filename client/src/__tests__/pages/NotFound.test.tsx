import { render, screen } from "@testing-library/react"; 
import { NotFound } from "../../pages";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../../context/AuthContext";
import { ChatContextProvider } from "../../context/ChatContext";

describe("NotFound", () => {
  // smoke test
  test("renders NotFound", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <NotFound />
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
  //           <NotFound />
  //         </ChatContextProvider>
  //       </AuthContextProvider>
  //     </BrowserRouter>
  //   ); 
  //   expect(asFragment()).toMatchSnapshot(); 
  // });

  // getByText 
  test("should display the heading tag", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <NotFound />
          </ChatContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    ); 
    const headingElement = screen.getByText("🚒 Not Found", {
      exact: true, 
    }) as HTMLElement; 
    expect(headingElement).toBeInTheDocument(); 
  }); 

  // getByText
  test("should display the paragraph tag", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <NotFound />
          </ChatContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    ); 
    const paragraphElement = screen.getByText("404 | Looks like you encountered an error...", {
      exact: true, 
    }) as HTMLElement; 
    expect(paragraphElement).toBeInTheDocument(); 
    expect(paragraphElement).toHaveClass("notFound__content-text"); 
  }); 
}); 