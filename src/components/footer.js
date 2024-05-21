import Image from "next/image";
import React from "react";
import { FcDonate } from "react-icons/fc";
import { FaCopyright } from "react-icons/fa";

export default function Footer() {
    return (
        <section className="w-full py-10 bg-red-950 flex items-center text-white justify-around font-bold mt-10">
            <div>
                <Image
                    src="/logo.png"
                    height={200}
                    width={200}
                    alt="Logo"
                    className="rounded-full border-4 border-white md:w-[200px] md:h-[200px] h-[125px] w-[125px]"
                />
            </div>

            <p className="flex flex-col items-center md:flex-row md:items-baseline gap-2 text-xs lg:text-2xl">Copyright<FaCopyright /><span>AAA-Dev</span></p>

            <div className="flex flex-col gap-2 rounded-full border-4 border-white md:w-[200px] md:h-[200px] h-[125px] w-[125px] items-center justify-center bg-red-900/50">
                <p>
                    <FcDonate className="size-8" />
                </p>
                <p className="flex flex-col text-center text-xs">MP-Box<span>5967-4012436</span></p>
            </div>
        </section>
    );
}
