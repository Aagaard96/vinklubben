import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi"
import RemoveBtn from "./removeBtn";
import Image from "next/image";

const getTopics = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/topics", {
            cache: "no-store",
        })

        if (!res.ok) {
            throw new Error("Failed to fetch Topics")
        }

        return res.json()
    } catch (error) {
        console.log("Error loading topics: ", error);
    }
}


export default async function TopicsList() {
    const { topics } = await getTopics()

    return (
        <section className="grid justify-center md:grid-cols-2 xl:grid-cols-4 gap-x-5 mt-10 px-5">
            {topics.map(t => (
                <div key={t._id} className="w-[300px] h-fit lg:w-[350px] lg:h-fit border border-red-950 my-7 flex flex-col max-w-2xl justify-between rounded-md mx-auto">
                    <Image src="/vindummy.jpg" width={100} height={100} alt="test" className="w-full rounded-lg p-4" />
                    <div className="flex justify-between items-start bg-red-950 p-3 text-white rounded-b-md">
                        <div>
                            <h2 className="font-bold text-2xl">{t.title}</h2>
                            <p>{t.description}</p>
                            <p>Frankrig, 2001</p>
                        </div>
                        <div className="flex gap-2">
                            <RemoveBtn id={t._id} />
                            <Link href={`editTopic/${t._id}`}>
                                <HiPencilAlt size={24} />
                            </Link>
                        </div>
                    </div>
                </div>

            ))}
        </section>
    )
}
