"use client";

import "easymde/dist/easymde.min.css";
import { Button, TextField } from "@radix-ui/themes";
import React from "react";
import SimpleMDE from "react-simplemde-editor";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title"/>
      </TextField.Root>
      <SimpleMDE placeholder="Description"/>
      <Button>Submit new issue</Button>
    </div>
  );
};

export default NewIssuePage;