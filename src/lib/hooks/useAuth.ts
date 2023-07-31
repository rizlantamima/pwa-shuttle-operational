import { useState } from "react";
import { api } from "../configurations/api";
import { AxiosError, ResponseError422 } from "../types/error-response";
import { isResponseError422 } from "../utils/error";
import axios from "axios";

type UserData = {
  // Define the shape of user data based on your backend response
  id: string;
  username: string;
  // Add other properties as needed
};

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const login = async (email: string, password: string): Promise<void> => {
    setError("");
    try {
      setLoading(true);
      const response = await api.post<{ token: string }>("/api/login", {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      setAuthenticated(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(
          "setError(error.response?.data?.message)",
          error.response?.data?.message
        );

        setError(error.response?.data?.message);
      }

      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = (): void => {
    localStorage.removeItem("token");
    setAuthenticated(false);
  };

  const getToken = (): string | null => {
    return localStorage.getItem("token");
  };

  const getUserData = (): UserData | null => {
    const token = getToken();
    return null;
  };

  return {
    authenticated,
    login,
    logout,
    getUserData,
    loading,
    error,
  };
};

export default useAuth;
