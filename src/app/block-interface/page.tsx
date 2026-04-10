import Image from "next/image";

const Page = () => {
    return (
        <div className="bg-black min-h-screen">
            <Contianer>
                <div className="relative w-full h-20 pt-10 flex flex-col justify-between">
                    <div className="w-full h-px bg-neutral-700">
                        <div className="relative">
                            <div className="absolute right-px top-0">
                                <span className="absolute -translate-y-2 h-4 w-px bg-neutral-200"></span>
                                <span className="absolute h-px -translate-x-2 w-4 bg-neutral-200"></span>
                            </div>
                            <div className="absolute left-0 top-0">
                                <span className="absolute -translate-y-2 h-4 w-px bg-neutral-200"></span>
                                <span className="absolute h-px -translate-x-2 w-4 bg-neutral-200"></span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-px bg-neutral-700">
                        <div className="relative">
                            <div className="absolute right-px top-0">
                                <span className="absolute -translate-y-2 h-4 w-px bg-neutral-200"></span>
                                <span className="absolute h-px -translate-x-2 w-4 bg-neutral-200"></span>
                            </div>
                            <div className="absolute left-0 top-0">
                                <span className="absolute -translate-y-2 h-4 w-px bg-neutral-200"></span>
                                <span className="absolute h-px -translate-x-2 w-4 bg-neutral-200"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-100 h-100 flex flex-col items-center justify-center gap-4 mx-auto text-center">
                    <h1 className="text-5xl font-bold text-center leading-11 tracking-tight">
                        Building Blocks For Interfaces
                    </h1>
                    <p className="text-neutral-400">
                        Get your apps and websites uo and running quickly with precomposed
                        and animated blocks
                    </p>

                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-full cursor-pointer shadow-[0_2px_20px_rgb(255,255,255,0.2)_inset] text-sm text-neutral-400">
                        Explore blocks{" "}
                        <div className="relative h-4 w-4">
                            <Image
                                fill
                                src="/rightArrow.svg"
                                alt="arrow"
                                className="object-contain"
                            />
                        </div>
                    </button>
                </div>

                <div className="flex gap-4 h-110">
                    <div className="flex-1 bg-neutral-500/10 flex flex-col">
                        <div className="flex-4 bg-neutral-700"></div>
                        <div className="flex-1 p-4 text-neutral-400 leading-5 flex flex-col justify-between">
                            <h1 className="text-white text-xl flex text-center items-center font-bold  gap-2">
                                <div className="relative h-5 w-5">
                                    <Image
                                        fill
                                        src="/robot.svg"
                                        alt="arrow"
                                        className="object-contain"
                                    />
                                </div>
                                AI Chatbot
                            </h1>
                            <p>
                                Use Kibo UI components to create a fully featured AI
                                chatbot interface
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 bg-neutral-500/10 flex flex-col">
                        <div className="flex-4 bg-neutral-700"></div>
                        <div className="flex-1 p-4 text-neutral-400 leading-5 flex flex-col justify-between">
                            <h1 className="text-white text-xl flex text-center items-center font-bold  gap-2">
                                <div className="relative h-5 w-5">
                                    <Image
                                        fill
                                        src="/people.svg"
                                        alt="people"
                                        className="object-contain"
                                    />
                                </div>
                                Collaborative Canvas
                            </h1>
                            <p>
                                Create and online, realtime collaborative canvas with Kibo
                                UI components
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-px bg-neutral-700">
                    <div className="relative">
                        <div className="absolute right-px top-0">
                            <span className="absolute -translate-y-2 h-4 w-px bg-neutral-200"></span>
                            <span className="absolute h-px -translate-x-2 w-4 bg-neutral-200"></span>
                        </div>
                        <div className="absolute left-0 top-0">
                            <span className="absolute -translate-y-2 h-4 w-px bg-neutral-200"></span>
                            <span className="absolute h-px -translate-x-2 w-4 bg-neutral-200"></span>
                        </div>
                    </div>
                </div>
            </Contianer>
        </div>
    );
};

const Contianer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative min-h-screen w-full mx-auto max-w-4xl pb-100">
            <div className="bg-neutral-700 h-full left-0 absolute w-px"></div>
            <div className="bg-neutral-700 h-full right-0 absolute w-px"></div>
            {children}
        </div>
    );
};

export default Page;
