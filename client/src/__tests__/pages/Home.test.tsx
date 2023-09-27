import { render } from "@testing-library/react"; 
import { Home } from "../../pages";
import { describe, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../../context/AuthContext";
import { ChatContextProvider } from "../../context/ChatContext";

describe("Home", () => {
  test("renders Home", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <Home />
          </ChatContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    )
  }); 
}); 