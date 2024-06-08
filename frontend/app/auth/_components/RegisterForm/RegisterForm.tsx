import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import React from "react";

interface IRegisterFormProps {
  selected: string | number;
  setSelected: React.Dispatch<React.SetStateAction<string | number>>;
}

export function RegisterForm({ selected, setSelected }: IRegisterFormProps) {
  return (
    <>
      <form className="flex flex-col gap-4 h-[300px]">
        <Input
          isRequired
          label="Phone no"
          placeholder="Enter your name"
          type="number"
          variant="underlined"
        />
        <Input
          isRequired
          label="Password"
          placeholder="Enter your Password"
          type="email"
          variant="underlined"
        />
        <Input
          isRequired
          label="Confirm Password"
          placeholder="Re-Enter your password"
          type="password"
          variant="underlined"
        />

        <div className="flex gap-2 justify-end">
          <Button fullWidth color="primary">
            Get OTP
          </Button>
        </div>

        <p className="text-center text-small">
          Already have an account?{" "}
          <Link size="sm" onPress={() => setSelected("log-in")}>
            Login
          </Link>
        </p>
      </form>
    </>
  );
}
