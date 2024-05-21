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
                <div key={t._id} className="p-4 w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] border border-black-300 my-7 flex flex-col max-w-2xl justify-between gap-5 items-start rounded-md mx-auto">
                    <Image src="/members/andy.jpg" width={100} height={100} alt="test" className="" />
                    <div className="flex">
                        <div>
                            <h2 className="font-bold text-2xl">{t.title}</h2>
                            <div>{t.description}</div>
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
