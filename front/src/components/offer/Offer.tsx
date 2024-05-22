import Image from "next/image";

const Offer = () => {
    return (
        <>
            <div className="max-w-[1500px] h-[250px] m-auto py-6 px-4">
                <Image
                    src="/images/banner.png"
                    alt="Apple community+"
                    className="w-full h-full object-cover object-center"
                    width="1440"
                    height="432"
                />
            </div>
        </>
    );
};

export default Offer;
