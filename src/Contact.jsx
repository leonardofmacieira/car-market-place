import React from "react";
import Header from "./components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Button } from "./components/ui/button";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-[#eef0fc] flex justify-center items-center py-10 px-4">
        <Card className="w-full max-w-lg sm:max-w-md p-6 shadow-lg rounded-lg bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">Contact</CardTitle>
            <CardDescription className="text-gray-600">Get in touch with us</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <Input className="mt-2" placeholder="Your Name" />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input className="mt-2" placeholder="Your Email" />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <Textarea placeholder="Write your message" rows="4" className="mt-2" />
              </div>

              <Button className="w-full mt-2">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
