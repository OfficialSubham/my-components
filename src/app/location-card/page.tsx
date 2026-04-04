import Image from "next/image";

const LocationCard = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-neutral-300">
            <div className="w-98 h-110 rounded-4xl bg-white shadow-[0_2px_20px_rgb(0,0,0,0.1)] p-4 flex flex-col">
                <div className="flex-1 p-3 flex flex-col gap-6 ">
                    <div className="flex justify-between">
                        <button className="bg-neutral-800 px-3 py-1.5 rounded-lg text-sm shadow-[0_2px_2px_rgb(0,0,0,0.4),1px_1px_5px_rgba(255,255,255,0.6)_inset]">
                            Lush and green
                        </button>
                        <div className="flex bg-neutral-800 w-24 text-sm p-0.5 rounded-lg items-center justify-center">
                            <span className="flex-1 text-center">JAN</span>
                            <span className="flex-1 bg-white text-black h-full flex items-center justify-center rounded-lg">
                                25
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl text-neutral-800">Discovering peace</h1>
                        <p className="text-neutral-400">
                            Far from the city&apos;s noise, the green mountains stretch
                            endlessly into the horizon, blanketed with mist and
                            silence{" "}
                        </p>
                    </div>
                </div>
                <div className="relative flex-1/6 bg-neutral-600 rounded-4xl">
                    <Image
                        src="/images/spider-man.jpg"
                        alt="image"
                        fill
                        className="rounded-3xl"
                    />
                    <div className="absolute bottom-6 left-6 flex flex-col items-center">
                        <div className="flex">
                            <div className="h-6 w-6 relative">
                                <Image
                                    src="/location.svg"
                                    alt="Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="font-semibold">Blue Ridge</h3>
                        </div>
                        <p>Virginia, USA</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationCard;
