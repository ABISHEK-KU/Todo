export interface LoginData {
  userName: string;
  password: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  token: string | null;
}