import TopicsList from "@/components/topicsList";
import Link from "next/link";


export default function Vinkaelderen() {
    return (
        <section className="w-full mt-20">
            <div className="flex justify-center">
                <Link href="/addTopic" className='bg-white border-red-950 border rounded-md text-red-950 py-1.5 px-3 lg:px-6 lg:py-3 lg:text-2xl font-semibold'>Tilføj vin</Link>
            </div>
            <TopicsList />
        </section>
    )
}
