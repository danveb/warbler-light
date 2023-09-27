import { fireEvent, render, screen } from "@testing-library/react"; 
import { Register } from "../../pages";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../../context/AuthContext";
import { ChatContextProvider } from "../../context/ChatContext";

describe("Register", () => {
  // smoke test
  test("renders Register", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <Register />
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
  //           <Register />
  //         </ChatContextProvider>
  //       </AuthContextProvider>
  //     </BrowserRouter>
  //   ); 
  //   expect(asFragment()).toMatchSnapshot(); 
  // });

  // getByText 
  test("should display warbler title", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <Register />
          </ChatContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    ); 
    const titleText = screen.getByText("warbler", {
      exact: true, 
    }) as HTMLElement; 
    expect(titleText).toBeInTheDocument(); 
    expect(titleText).not.toBe("hello world"); 
  }); 

  // getByTestId 
  test("matches testId on register form", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <Register />
          </ChatContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    ); 
    const testId = screen.getByTestId("form"); 
    expect(testId).toBeInTheDocument(); 
  });

  // getByLabelText
  test("display name, email, password labels are present in register form", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <Register />
          </ChatContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    ); 
    const displayNameLabel = screen.getByLabelText("Display Name"); 
    const emailLabel = screen.getByLabelText("Email"); 
    const passwordLabel = screen.getByLabelText("Password"); 
    expect(displayNameLabel).toBeInTheDocument(); 
    expect(emailLabel).toBeInTheDocument(); 
    expect(passwordLabel).toBeInTheDocument(); 
  });

  // getByLabelText 
  test("displays initial state for username/password", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <Register />
          </ChatContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    ); 
    const displayNameInput = screen.getByLabelText("Display Name") as HTMLInputElement; 
    const emailInput = screen.getByLabelText("Email") as HTMLInputElement; 
    const passwordInput = screen.getByLabelText("Password") as HTMLInputElement; 
    expect(displayNameInput.value).not.toBe("John Doe"); 
    expect(emailInput.value).toBe(""); 
    expect(passwordInput.value).toBe(""); 
  });

  // getByLabelText & fireEvent 
  test("should update displayName/email/password input fields when user adds it", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <Register />
          </ChatContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    ); 
    // initialize sample displayName/email/password 
    const displayName = "Peach B"; 
    const email = "peachan@gmail.com"; 
    const password = "123456"; 
    const displayNameInput = screen.getByLabelText("Display Name") as HTMLInputElement;
    const emailInput = screen.getByLabelText("Email") as HTMLInputElement; 
    const passwordInput = screen.getByLabelText("Password") as HTMLInputElement; 
    // fireEvent change on input, targeting the values
    fireEvent.change(displayNameInput, {
      target: {
        value: displayName,
      },
    });
    fireEvent.change(emailInput, {
      target: {
        value: email, 
      },
    }); 
    fireEvent.change(passwordInput, {
      target: {
        value: password, 
      }, 
    }); 
    expect(displayNameInput.value).toBe("Peach B"); 
    expect(emailInput.value).not.toBe("sharpieBest@gmail.com"); 
    expect(emailInput.value).not.toBe("jdoe@test.com"); 
    expect(passwordInput.value).toBe("123456"); 
    expect(passwordInput.value).not.toBe("hello world my friends!"); 
  }); 
}); 