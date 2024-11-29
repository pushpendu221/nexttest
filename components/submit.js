"use client";
import { useFormStatus } from "react-dom";
export default function Submit() {
  const status = useFormStatus();

  if (status.pending) {
    console.log(status);
    return <>Loading....</>;
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
}
