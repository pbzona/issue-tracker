"use client";

import { Button, TextField } from "@radix-ui/themes";
import MarkdownEditor from "@/components/markdown-editor";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title"/>
      </TextField.Root>
      <MarkdownEditor changeHandler={() => null}/>
      <Button>Submit new issue</Button>
    </div>
  );
};

export default NewIssuePage;