"use client";

import "easymde/dist/easymde.min.css";
import React, { useCallback, useMemo, useState } from "react";
import dynamic from "next/dynamic";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"));

type MarkdownEditorProps = {
  changeHandler?: (value: string) => void;
}

const MarkdownEditor = ({ changeHandler }: MarkdownEditorProps) => {
  const [ value, setValue ] = useState("");

  const onChange = useCallback((val: string) => {
    setValue(val);
    if (changeHandler) changeHandler(val);
  }, [ changeHandler ]);

  const options = useMemo(() => {
    return {
      autofocus: false,
      spellChecker: false,
    };
  }, []);

  return (
    <SimpleMDE
      placeholder="Description"
      options={options}
      value={value}
      onChange={onChange}
    />
  );
};

export default MarkdownEditor;