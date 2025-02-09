"use client";

import { useActionState } from "react";
import Submit from "@/components/submit";

export default function ContactForm({ action }) {
  const [state, formAction] = useActionState(action, {});
  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <p className="form-actions">
          <Submit />
          {state.length > 0 &&
            state.map((error) => <li key={error}>{error}</li>)}
        </p>
      </form>
    </>
  );
}
