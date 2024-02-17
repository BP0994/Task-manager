/** @format */

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function HelloPage() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Feedback form</p>
          <p className="text-small text-default-500">github link</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>This is a Simple feedback form website</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link showAnchorIcon href={"/login"}>
          Login Now!
        </Link>
      </CardFooter>
    </Card>
  );
}
