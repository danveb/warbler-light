import { fireEvent, render, screen } from "@testing-library/react"; 
import { Login } from "../../pages";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../../context/AuthContext";
import { ChatContextProvider } from "../../context/ChatContext";

describe("Login", () => {
  // smoke test
  test("renders Login", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <Login />
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
  //           <Login />
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
            <Login />
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
  test("matches testId on login form", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <Login />
          </ChatContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    ); 
    const testId = screen.getByTestId("form"); 
    expect(testId).toBeInTheDocument(); 
  });

  // getByLabelText
  test("email and password labels are present in login form", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <Login />
          </ChatContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    ); 
    const emailLabel = screen.getByLabelText("Email"); 
    const passwordLabel = screen.getByLabelText("Password"); 
    expect(emailLabel).toBeInTheDocument(); 
    expect(passwordLabel).toBeInTheDocument(); 
  });

  // getByLabelText 
  test("displays initial state for username/password", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <Login />
          </ChatContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    ); 
    const emailInput = screen.getByLabelText("Email") as HTMLInputElement; 
    const passwordInput = screen.getByLabelText("Password") as HTMLInputElement; 
    expect(emailInput.value).toBe(""); 
    expect(passwordInput.value).toBe(""); 
  });

  // getByLabelText & fireEvent 
  test("should update email/password input fields when user adds it", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <Login />
          </ChatContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    ); 
    // initialize sample email/password 
    const email = "juanchotalarga@gmail.com"; 
    const password = "123456"; 
    const emailInput = screen.getByLabelText("Email") as HTMLInputElement; 
    const passwordInput = screen.getByLabelText("Password") as HTMLInputElement; 
    // fireEvent change on input, targeting the values
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
    expect(emailInput.value).toBe("juanchotalarga@gmail.com"); 
    expect(emailInput.value).not.toBe("jdoe@test.com"); 
    expect(passwordInput.value).toBe("123456"); 
    expect(passwordInput.value).not.toBe("hello world my friends!"); 
  }); 

  // mock form submission
  test.skip("mocking form submission", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <Login />
          </ChatContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    ); 
    /* jest mock 
    - unable to mock jest function with vitest? 
    */ 
    const mockSubmit = jest.fn(); 

    // initialize sample email/password 
    const email = "juanchotalarga@gmail.com"; 
    const password = "123456"; 
    const emailInput = screen.getByLabelText("Email") as HTMLInputElement; 
    const passwordInput = screen.getByLabelText("Password") as HTMLInputElement; 
    // grab Login button 
    const loginBtn = screen.getByRole("button", {
      name: "Login", 
    }); 
    // fireEvent change on input, targeting the values 
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
    fireEvent.click(loginBtn); 
    expect(mockSubmit).toHaveBeenCalledWith(email, password); 
  }); 
}); 