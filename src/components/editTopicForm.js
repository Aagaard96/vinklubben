"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
    const [newTitle, setNewtitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ newTitle, newDescription }),
            })

            if (!res.ok) {
                throw new Error("Failed to create a topic")
            }

            router.push("/vinkaelderen")
            router.refresh()
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-8 w-1/3 p-5 mx-auto border-black border">
            <h2>Edit Topic</h2>
            <input
                onChange={(e) => setNewtitle(e.target.value)}
                value={newTitle}
                className="border border-slate-500 rounded-md px-8 py-2"
                type="text"
                placeholder="Topic Text"
            />
            <input
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                className="border border-slate-500 rounded-md px-8 py-2"
                type="text"
                placeholder="Topic Description"
            />
            <button className="bg-red-950 text-white py-3 px-6 w-fit mx-auto rounded-md">
                Edit Topic
            </button>
        </form>
    );
}
