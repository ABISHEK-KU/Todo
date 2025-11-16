import { PasswordField, EyeIcon } from "@/style/passwordField";
import { Eye, EyeOff } from "lucide-react";
import type { LoginData } from "@/types";
import { LoginFormContainer, Button } from "@/style/login";
import { Card, CardContent, CardHeader, CardTitle } from "@/style/card";
import { Field, FieldGroup, FieldLabel, Input } from "@/style/field";

interface LoginFormProps {
  userData: LoginData;
  viewPassword: boolean;
  setViewPassword: React.Dispatch<React.SetStateAction<boolean>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function LoginForm({
  userData,
  viewPassword,
  setViewPassword,
  handleChange,
  handleLogin,
}: LoginFormProps) {
  return (
    <LoginFormContainer>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="userName">User Name</FieldLabel>
                <Input
                  id="userName"
                  type="userName"
                  name="userName"
                  value={userData?.userName}
                  placeholder="Enter your user name"
                  onChange={(e) => handleChange(e)}
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
                <Button type="submit">Login</Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </LoginFormContainer>
  );
}
