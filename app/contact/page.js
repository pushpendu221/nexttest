import ContactForm from "@/components/contact-form";
import { storePost } from "../lib/dbcall";
import { redirect } from "next/navigation";
export default function ContactPage() {
  async function createPost(preval, formData) {
    "use server";
    const title = formData.get("title");
    const image = formData.get("image");
    const content = formData.get("content");

    let error = [];

    if (!title || title.trim().length === 0) {
      error.push("Please enter a valid Title");
    }
    if (!content || content.trim().length === 0) {
      error.push("Please enter a valid content");
    }
    if (!image || image.size === 0) {
      error.push("Please enter Image");
    }

    if (error.length > 0) {
      return error;
    }

    storePost({
      imageUrl: "",
      title,
      content,
      userId: 1,
    });

    redirect("/users");
  }

  return <ContactForm action={createPost} />;
}
