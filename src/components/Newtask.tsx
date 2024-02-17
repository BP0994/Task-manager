/** @format */
"use client";
import React, { useState } from "react";
import { uuid } from "uuidv4";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from "@nextui-org/react";
import { ref, set } from "firebase/database";
import { db } from "@/Firebase";

export default function CreateTask() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formData, setFormData] = useState({
    date: null,
    description: null,
    status: null,
    tittle: null,
  });
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const taskId = uuid();
    window.alert("form submited successfully");
    // const title = formData.tittle;
    set(ref(db, "tasks/" + taskId), formData);
    // console.log(formData);
  };

  return (
    <>
      <div className="dark bg-transparent ">
        <Button onPress={onOpen} color="primary">
          Create Feedback
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center">
          <ModalContent className="dark">
            {(onClose) => (
              <>
                <form onSubmit={handleSubmit}>
                  <ModalHeader className=" dark flex flex-col gap-1">
                    CreateFeedback
                  </ModalHeader>
                  <ModalBody className="dark text-slate-200">
                    <Input
                      autoFocus
                      endContent={
                        <svg
                          className="dark text-2xl text-default-400 pointer-events-none flex-shrink-0"
                          aria-hidden="true"
                          fill="none"
                          focusable="false"
                          height="1em"
                          role="presentation"
                          viewBox="0 0 24 24"
                          width="1em">
                          <path
                            d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
                            fill="currentColor"
                          />
                        </svg>
                      }
                      label="Tittle"
                      placeholder="Enter Tittle"
                      variant="bordered"
                      name="tittle"
                      onChange={handleChange}
                      required
                    />
                    
                    <Textarea
                      label="feedback"
                      placeholder="Enter your complaints, suggestion, inquiries"
                      className=" dark max-w-xs"
                      name="Description"
                      onChange={handleChange}
                      required
                    />
                    <div>
                      <select
                        name="Type"
                        className="bg-slate-750 text-slate-300 select select-bordered w-full max-w-xs"
                        onChange={handleChange}
                        required>
                        <option disabled selected>
                          Status
                        </option>
                        <option>Complaint</option>
                        <option>Suggestions</option>
                        <option>Inquiry</option>
                      </select>
                    </div>
                    <div className="relative max-w-sm">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                      </div>
                      <input
                        type="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date"
                        name="date"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="flat" onPress={onClose}>
                      Close
                    </Button>
                    <Button type="submit" color="primary" onPress={onClose}>
                      Create Feedback
                    </Button>
                  </ModalFooter>
                </form>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
