"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !description) {
      alert("Title and Description are required")
      return
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ title, description }),
      })

      if (res.ok) {
        router.push("/vinkaelderen")
        router.refresh()
      } else {
        throw new Error("Failed to create a topic")
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 mt-8 w-1/3 p-5 mx-auto border-black border">
      <h2>Add Topic</h2>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 rounded-md px-8 py-2"
        type="text"
        placeholder="Topic Text"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 rounded-md px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />
      <button
        type="submit"
        className="bg-red-950 text-white py-3 px-6 w-fit mx-auto rounded-md">
        Add Topic
      </button>
    </form>
  );
}
