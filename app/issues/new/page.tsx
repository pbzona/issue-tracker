"use client";

import "easymde/dist/easymde.min.css";
import { Button, TextField } from "@radix-ui/themes";
import React, { Suspense } from "react";

const SimpleMDE = React.lazy(() => {
  const navigator = window.navigator;
  if (navigator) {
    return import("react-simplemde-editor");
  }

  return new Promise((_, reject) => reject(null));
});

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title"/>
      </TextField.Root>
      <Suspense fallback={<div>Loading markdown editor...</div>}>
        <SimpleMDE placeholder="Description"/>
      </Suspense>
      <Button>Submit new issue</Button>
    </div>
  );
};

export default NewIssuePage;