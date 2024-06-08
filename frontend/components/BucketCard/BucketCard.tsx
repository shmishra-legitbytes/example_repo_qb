import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import React from "react";

import onlineGMATexamImage from "@/public/images/gmat/Online-GMAT-exam.png";
import { Button, ButtonGroup } from "@nextui-org/button";
import { StarIcon } from "./StarIcon";
import { SelectedStarIcon } from "./SelectedStarIcon";
import { formatCurrency } from "@/utils/formatCurrency";
import { Link } from "@nextui-org/link";

import { IoMdCart } from "react-icons/io";
export function BucketCard() {
  return (
    <Card className="w-min min-h-[452px]  p-4">
      <CardHeader className="w-full justify-center items-center">
        <div className="bg-foreground-100 p-4 rounded-xl min-w-[224px]">
          <div className="flex justify-end mb-1">
            <Button isIconOnly radius="full" size="sm">
              <StarIcon />
            </Button>
          </div>
          <Image
            src={onlineGMATexamImage}
            alt="Online GMAT Exam"
            width={200}
            height={153}
          />
        </div>
      </CardHeader>
      <CardBody className="flex flex-col justify-evenly">
        <div className="flex justify-between w-full">
          <h1 className="font-bold text-lg">GMAT Bank</h1>
          <h1 className="font-bold text-lg">
            {formatCurrency("en-US", "USD")(4999 / 100)}
          </h1>
        </div>
        <div className="mt-2">
          <p className="line-clamp-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            iure eos maxime quo harum alias? Beatae, distinctio? Molestias saepe
            ducimus assumenda nam nisi veritatis officia qui, dignissimos cumque
            magnam! Incidunt.
          </p>
        </div>
      </CardBody>
      <CardFooter className="flex flex-col space-y-2">
        <div className="flex justify-center items-center space-x-1">
          <ButtonGroup>
            {new Array(5).fill(null).map((star, i) => {
              return (
                <Button
                  key={i}
                  isIconOnly
                  variant="light"
                  size="sm"
                  className="p-0 m-0"
                >
                  <SelectedStarIcon />
                </Button>
              );
            })}
          </ButtonGroup>
          <div className="w-max">
            <p className="text-sm">
              &#40;&nbsp;5&nbsp;&#41; <span>Reviews</span>{" "}
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center gap-x-2">
          <Button as={Link} variant="ghost" fullWidth>
            Details
          </Button>
          <Button isIconOnly variant="ghost">
            <IoMdCart size={20} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
