import { PasswordField, EyeIcon } from "@/style/passwordField";
import { Eye, EyeOff } from "lucide-react";
import type { LoginData } from "@/types";
import { HelperText, LoginFormContainer } from "@/style/login";
import { Card, CardContent, CardHeader, CardTitle } from "@/style/card";
import { Field, FieldGroup, FieldLabel, Input } from "@/style/field";
import { Button } from "@/style/button";
import { LoginErrorMessage } from "@/style/message";

interface LoginFormProps {
  userData: LoginData;
  viewPassword: boolean;
  setViewPassword: React.Dispatch<React.SetStateAction<boolean>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string;
  isLoading?: boolean;
}

export function LoginForm({
  userData,
  viewPassword,
  setViewPassword,
  handleChange,
  handleLogin,
  error = "",
  isLoading = false,
}: LoginFormProps) {
  return (
    <LoginFormContainer>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            {error && <LoginErrorMessage>{error}</LoginErrorMessage>}
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="userName">User Name</FieldLabel>
                <Input
                  id="userName"
                  type="text"
                  name="userName"
                  value={userData?.userName}
                  placeholder="Enter your user name"
                  onChange={(e) => handleChange(e)}
                  disabled={isLoading}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <PasswordField>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    type={viewPassword ? "text" : "password"}
                    value={userData?.password}
                    onChange={(e) => handleChange(e)}
                    disabled={isLoading}
                  />
                  <EyeIcon>
                    {viewPassword ? (
                      <Eye onClick={() => setViewPassword(false)} />
                    ) : (
                      <EyeOff onClick={() => setViewPassword(true)} />
                    )}
                  </EyeIcon>
                </PasswordField>
              </Field>
              <Field>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
          <HelperText>
            Demo credentials: <br />
            Username: <strong>abishekKumar</strong> <br />
            Password: <strong>Innoppl@123</strong>
          </HelperText>
        </CardContent>
      </Card>
    </LoginFormContainer>
  );
}
