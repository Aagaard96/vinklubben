import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import Image from "next/image"

const members = [
    {
        name: "Emil S. Christoffersen",
        nick: "EC",
        age: 28,
        preferences: "Burgogne, Pinot Noir, Syrah",
        image: "/members/ec.jpg",
        bonus: "Vi har lige plantet asparges i haven",
        alt: "Member EC"
    },
    {
        name: "Mads Paarúp",
        nick: "Pus",
        age: 27,
        preferences: "Burgogne, Pinot Noir, Syrah",
        image: "/members/pus.jpg",
        bonus: "Ja.. Det er rart",
        alt: "Member Mads"
    },
    {
        name: "Anton Vittrup Filsøe",
        nick: "Anton",
        age: 28,
        preferences: "Burgogne, Pinot Noir, Syrah",
        image: "/members/anton.jpg",
        bonus: "Det her er ik' Bourgone, for det fik jeg til frokost",
        alt: "Member Anton"
    },
    {
        name: "Anders Bech-Willumsen",
        nick: "Abwe",
        age: 28,
        preferences: "Burgogne, Pinot Noir, Syrah",
        image: "/members/abwe.jpg",
        bonus: "Jamen det fordi jeeeg.. træner hver dag o' river hårdt jern",
        alt: "Member ABWE"
    },
    {
        name: "Mads Olsen",
        nick: "Ole",
        age: 28,
        preferences: "Burgogne, Pinot Noir, Syrah",
        image: "/members/ole.jpg",
        bonus: "Jeg kan smadre alle ved det her bord",
        alt: "Member Ole"
    },
    {
        name: "Mikkel Peitersen",
        nick: "Meller",
        age: 28,
        preferences: "Burgogne, Pinot Noir, Syrah",
        image: "/members/meller.jpg",
        bonus: "Stik mig det fucking jack-stik",
        alt: "Member Meller"
    },
    {
        name: "Andreas Aagaard",
        nick: "Andy",
        age: 27,
        preferences: "Burgogne, Pinot Noir, Syrah",
        image: "/members/andy.jpg",
        bonus: "Kærlighed findes på bunden af flasken",
        alt: "Member Andy"
    }

]

export default function Medlemmer() {
    return (
        <>
            <h1 className="font-bold text-3xl lg:text-6xl text-center mt-20">Klubbens medlemmer:</h1>
            <section className="grid justify-center md:grid-cols-2 xl:grid-cols-3 gap-x-10 mt-10">
                {members.map((item, index) => (
                    <Card key={index} className="w-[300px] lg:w-[400px] mx-auto mt-28 overflow-visible rounded-md border-1 border-red-950 shadow-md">
                        <CardHeader className="justify-center flex flex-col -mt-20">
                            <Image className="border-2 border-red-950 rounded-full"
                                alt="Member"
                                radius="full"
                                src={item.image}
                                height={175}
                                width={175}
                                shadow="md"
                            />
                            <div className="text-center mt-5 text-lg">
                                <p className="font-bold">{item.nick}</p>
                                <h3 className="text-slate-500 text-sm">{item.name}, {item.age}</h3>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody className="text-center">
                            <p>Foretrukne vine:</p>
                            <p className="font-medium">{item.preferences}</p>

                        </CardBody>
                        <Divider />
                        <CardFooter className="gap-1 flex flex-col h-16 justify-center items-center font-semibold bg-red-950 rounded-b-md px-5 text-balance">
                            <p className="italic text-center text-white">"{item.bonus}"</p>
                        </CardFooter>
                    </Card>
                ))}
            </section>
        </>
    );
}
