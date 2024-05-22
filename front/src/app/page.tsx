import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-backg">
            <h1 className="font-light text-7xl text-apwhite">¡Bienvenidos!</h1>
            <div>
                <Image
                    src="/images/Apple.gif"
                    alt="gif logo Apple"
                    className="w-[205px] h-[249px] m-16"
                    width="409"
                    height="498"
                    priority
                    unoptimized
                />
            </div>
            <Link
                href="/home"
                className="p-2 text-3xl border rounded-lg cursor-pointer text-apwhite hover:text-apblack hover:bg-apwhite"
            >
                Ingresar a Mpple
            </Link>
        </div>
    );
}
