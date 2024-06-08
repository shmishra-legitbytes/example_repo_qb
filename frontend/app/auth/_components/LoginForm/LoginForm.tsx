import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import React from "react";

interface ILoginFormProps {
  selected: string | number;
  setSelected: React.Dispatch<React.SetStateAction<string | number>>;
}
export function LoginForm({ selected, setSelected }: ILoginFormProps) {
  return (
    <>
      <form className="flex flex-col gap-4">
        <Input
          isRequired
          label="Email"
          placeholder="Enter your email"
          type="email"
          variant="underlined"
        />
        <Input
          isRequired
          label="Password"
          placeholder="Enter your password"
          type="password"
          variant="underlined"
        />
        <div className="flex gap-2 justify-end">
          <Button fullWidth color="primary">
            Log-in
          </Button>
        </div>
        <p className="text-center text-small">
          Need to create an account?{" "}
          <Link size="sm" onPress={() => setSelected("register")}>
            Register
          </Link>
        </p>
      </form>
    </>
  );
}
