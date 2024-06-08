"use client";
import React from "react";
import { useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Image from "next/image";
//Static images
import signupImage from "@/public/images/signup/image.png";
import iconImage from "@/public/icon.png";

import { RegisterForm } from "./_components/RegisterForm/RegisterForm";
import { LoginForm } from "./_components/LoginForm/LoginForm";

export default function AuthPage() {
  const [selected, setSelected] = useState<string | number>("log-in");

  return (
    <div className="">
      <div className="flex justify-evenly bg-black gap-8 items-center bg-whit min-h-screen">
        {/* Image  */}
        <div className="hidden sm:visible">
          <Image src={signupImage} alt="Register" className="" />
        </div>
        <>
          {/* Form Tab  */}
          <div className=" w-full flex flex-col justify-evenly gap-x-8 min-h-screen">
            <div className="block">
              <Card className="max-w-[400px]" shadow="none">
                <CardHeader className="flex gap-3">
                  <Image src={iconImage} alt="Question Bucket" />
                  <div className="flex flex-col">
                    <p className="text-lg font-bold tracking-wide">
                      Question Bucket
                    </p>
                    <p className="text-xs font-bold">
                      Learn, Practice & Succeed
                    </p>
                  </div>
                </CardHeader>
              </Card>
            </div>
            <div className="w-full grid place-items-center">
              <Card className="max-w-full w-[340px] h-[400px]" shadow="none">
                <CardBody className="overflow-hidden">
                  <Tabs
                    className="justify-center"
                    radius="full"
                    color="primary"
                    size="md"
                    aria-label="Tabs form"
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                  >
                    {/* Register Tab  */}

                    <Tab key="register" title="Register" className="">
                      <RegisterForm
                        selected={selected}
                        setSelected={setSelected}
                      />
                    </Tab>
                    {/* Register Tab Ends  */}

                    {/* Login Tab  */}
                    <Tab key="log-in" title="Log-in">
                      <LoginForm
                        selected={selected}
                        setSelected={setSelected}
                      />
                    </Tab>
                    {/* Login Tab End  */}
                  </Tabs>
                </CardBody>
              </Card>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
