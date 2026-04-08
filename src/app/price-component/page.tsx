import Image from "next/image";

const Page = () => {
    return (
        <div className="bg-neutral-300 min-h-screen items-center justify-center text-black flex flex-col gap-8">
            <div className="text-center flex flex-col gap-2">
                <h1 className="font-bold text-4xl">Pricing plans</h1>
                <p className="text-sm text-neutral-600">
                    Choose the right plan for your needs
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="h-100 w-75  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl bg-neutral-200 flex flex-col gap-6">
                    <div className="flex-1/4 flex flex-col bg-neutral-50 rounded-3xl p-4 gap-4 shadow-[0_6px_9px_rgb(0,0,0,0.1)] ">
                        <div className="flex-1/5 rounded-2xl bg-neutral-400/50 p-3 flex justify-between flex-col">
                            <div className="py-1 px-2 bg-neutral-50/50 rounded-full w-fit text-[10px] font-semibold">
                                Starter
                            </div>
                            <p>
                                <span className="font-semibold text-3xl">$0</span>/month
                            </p>
                        </div>
                        <div className="flex-1 flex justify-between flex-col">
                            <p className="text-sm text-neutral-600">
                                Perfect For Small Teams
                            </p>
                            <button className="bg-black cursor-pointer text-white w-full rounded-full py-2 text-sm  shadow-[1px_1px_10px_rgb(255,255,255,0.5)_inset]">
                                Start Hiring
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 px-4 flex flex-col gap-2">
                        <div className="flex gap-2 items-center text-sm text-neutral-600">
                            <div className="h-4 w-4 relative">
                                <Image
                                    fill
                                    src="/tick.svg"
                                    alt="tick"
                                    className="object-contain text-neutral-600"
                                />
                            </div>
                            3 Projects
                        </div>
                        <div className="flex gap-2 items-center text-sm text-neutral-600">
                            <div className="h-4 w-4 relative">
                                <Image
                                    fill
                                    src="/tick.svg"
                                    alt="tick"
                                    className="object-contain text-neutral-600"
                                />
                            </div>
                            AI Applicant Screening
                        </div>
                        <div className="flex gap-2 items-center text-sm text-neutral-600">
                            <div className="h-4 w-4 relative">
                                <Image
                                    fill
                                    src="/tick.svg"
                                    alt="tick"
                                    className="object-contain text-neutral-600"
                                />
                            </div>
                            AI Recruiter
                        </div>
                    </div>
                </div>
                <div className="h-100 w-75  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl bg-neutral-200 flex flex-col gap-6">
                    <div className="flex-1/4 flex flex-col bg-neutral-50 rounded-3xl p-4 gap-4 shadow-[0_6px_9px_rgb(0,0,0,0.1)] ">
                        <div className="flex-1/5 rounded-2xl bg-linear-to-r from-blue-100 via-blue-300 to-red-200 p-3 flex justify-between flex-col">
                            <div className="py-1 px-2 bg-neutral-50/50 rounded-full w-fit text-[10px] font-semibold">
                                PROFESSIONAL
                            </div>
                            <p>
                                <span className="font-semibold text-3xl">$99</span>/month
                            </p>
                        </div>
                        <div className="flex-1 flex justify-between flex-col">
                            <p className="text-sm text-neutral-600">
                                Perfect For Growing Terms
                            </p>
                            <button className="bg-black text-white w-full rounded-full py-2 text-sm cursor-pointer  shadow-[1px_1px_10px_rgb(255,255,255,0.5)_inset]">
                                Start Hiring
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 px-4 flex flex-col gap-2">
                        <div className="flex gap-2 items-center text-sm text-neutral-600">
                            <div className="h-4 w-4 relative">
                                <Image
                                    fill
                                    src="/tick.svg"
                                    alt="tick"
                                    className="object-contain text-neutral-600"
                                />
                            </div>
                            Unlimited Projects
                        </div>
                        <div className="flex gap-2 items-center text-sm text-neutral-600">
                            <div className="h-4 w-4 relative">
                                <Image
                                    fill
                                    src="/tick.svg"
                                    alt="tick"
                                    className="object-contain text-neutral-600"
                                />
                            </div>
                            AI Applicant Screening
                        </div>
                        <div className="flex gap-2 items-center text-sm text-neutral-600">
                            <div className="h-4 w-4 relative">
                                <Image
                                    fill
                                    src="/tick.svg"
                                    alt="tick"
                                    className="object-contain text-neutral-600"
                                />
                            </div>
                            AI Recruiter
                        </div>
                        <div className="flex gap-2 items-center text-sm text-neutral-600">
                            <div className="h-4 w-4 relative">
                                <Image
                                    fill
                                    src="/tick.svg"
                                    alt="tick"
                                    className="object-contain text-neutral-600"
                                />
                            </div>
                            Risk-Free Guarantee
                        </div>
                    </div>
                </div>
                <div className="h-100 w-75  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl bg-neutral-200 flex flex-col gap-6">
                    <div className="flex-1/4 flex flex-col bg-neutral-50 rounded-3xl p-4 gap-4 shadow-[0_6px_9px_rgb(0,0,0,0.1)] ">
                        <div className="flex-1/5 rounded-2xl bg-linear-to-r from-blue-100 via-blue-300 to-red-200 p-3 flex justify-between flex-col">
                            <div className="py-1 px-2 bg-neutral-50/50 rounded-full w-fit text-[10px] font-semibold">
                                ENTERPRISE
                            </div>
                            <p>
                                <span className="font-semibold text-3xl">Custom</span>
                            </p>
                        </div>
                        <div className="flex-1 flex justify-between flex-col">
                            <p className="text-sm text-neutral-600">
                                Perfect For Large Organizations
                            </p>
                            <button className="bg-black text-white w-full cursor-pointer rounded-full py-2 text-sm  shadow-[1px_1px_10px_rgb(255,255,255,0.5)_inset]">
                                Contact Us
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 px-4 flex flex-col gap-2">
                        <div className="flex gap-2 items-center text-sm text-neutral-600">
                            <div className="h-4 w-4 relative">
                                <Image
                                    fill
                                    src="/tick.svg"
                                    alt="tick"
                                    className="object-contain text-neutral-600"
                                />
                            </div>
                            Unlimited Projects
                        </div>
                        <div className="flex gap-2 items-center text-sm text-neutral-600">
                            <div className="h-4 w-4 relative">
                                <Image
                                    fill
                                    src="/tick.svg"
                                    alt="tick"
                                    className="object-contain text-neutral-600"
                                />
                            </div>
                            AI Applicant Screening
                        </div>
                        <div className="flex gap-2 items-center text-sm text-neutral-600">
                            <div className="h-4 w-4 relative">
                                <Image
                                    fill
                                    src="/tick.svg"
                                    alt="tick"
                                    className="object-contain text-neutral-600"
                                />
                            </div>
                            AI Recruiter
                        </div>
                        <div className="flex gap-2 items-center text-sm text-neutral-600">
                            <div className="h-4 w-4 relative">
                                <Image
                                    fill
                                    src="/tick.svg"
                                    alt="tick"
                                    className="object-contain text-neutral-600"
                                />
                            </div>
                            Risk-Free Guarantee
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
