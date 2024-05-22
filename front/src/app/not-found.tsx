import Link from "next/link";

export default function PageNotFound() {
    return (
        <main className="flex items-center justify-center sm:py-32 lg:px-8">
            <div className="p-10 border rounded-lg shadow-lg">
                <div className="text-center">
                    <p className="text-3xl font-semibold">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                        Page not found
                    </h1>
                    <p className="mt-6 text-base leading-7">
                        Perdón, pero no pudimos llevarte a la página que estabas
                        buscando.
                    </p>
                    <div className="flex items-center justify-center mt-10 gap-x-6">
                        <Link
                            href="/home"
                            className="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm"
                        >
                            Volver a la home
                        </Link>
                        <Link
                            href="#"
                            className="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm"
                        >
                            Contactar con el soporte
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
