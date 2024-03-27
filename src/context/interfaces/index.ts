export type UserType = {
    name: string;
    email: string;
  };
  
export type AuthContextType = {
    user: UserType;
    signIn(email: string, password: string): void;
    logout(): void;
    registerUser(email: string, password: string): void;
};
  
export type loginResponse = {
    access_token: string;
};