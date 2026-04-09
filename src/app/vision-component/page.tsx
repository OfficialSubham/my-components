const Page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center text-black bg-neutral-200">
            <div className="h-150 w-200 bg-white rounded-4xl shadow-[0_2px_20px_rgb(0,0,0,0.1)] p-4">
                <div className="w-full h-full bg-neutral-200/70 rounded-2xl p-4 flex gap-4">
                    <div className="flex-1 border rounded-2xl border-neutral-300 px-4 py-12 flex flex-col justify-between">
                        <div className="gap-8 flex flex-col w-70">
                            <div>
                                <h1 className="text-2xl text-neutral-500">
                                    Shaped by Your Choices,
                                </h1>
                                <h1 className="text-2xl -mt-1 font-bold">
                                    Driven by Your Vision
                                </h1>
                            </div>
                            <p className="text-neutral-500">
                                We will use that context when making future suggestions.
                            </p>

                            <div className="flex gap-2 w-60 flex-wrap">
                                <span className="bg-neutral-200  shadow-[0_2px_20px_rgb(0,0,0,0.1),1px_10px_10px_rgba(255,255,255,0.6)_inset] px-3 py-1.5 text-sm rounded-2xl border border-neutral-400/70">
                                    Performance
                                </span>
                                <span className="bg-neutral-200  shadow-[0_2px_20px_rgb(0,0,0,0.1),1px_10px_10px_rgba(255,255,255,0.6)_inset] px-3 py-1.5 text-sm rounded-2xl border border-neutral-400/70">
                                    Availability
                                </span>
                                <span className="bg-neutral-200  shadow-[0_2px_20px_rgb(0,0,0,0.1),1px_10px_10px_rgba(255,255,255,0.6)_inset] px-3 py-1.5 text-sm rounded-2xl border border-neutral-400/70">
                                    Cost
                                </span>
                                <span className="bg-neutral-200  shadow-[0_2px_20px_rgb(0,0,0,0.1),1px_10px_10px_rgba(255,255,255,0.6)_inset] px-3 py-1.5 text-sm rounded-2xl border border-neutral-400/70">
                                    Revenue
                                </span>
                            </div>
                        </div>
                        <button className="flex bg-black px-5 py-2 rounded-full text-white w-fit gap-1 items-center shadow-[0_2px_20px_rgb(0,0,0,0.1),4px_8px_10px_rgba(255,255,255,0.2)_inset]">
                            <div className="h-4 w-4 rounded-full border-2 border-neutral-400 border-t-white animate-spin"></div>
                            Train your AI
                        </button>
                    </div>
                    <div className="flex-1 flex flex-col gap-10 bg-neutral-950 rounded-2xl text-neutral-400 px-8 py-12">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-white text-2xl">Goals updated</h1>
                            <p className="text-sm tracking-wider w-70">
                                We focus on reducing latency and keeping the UI
                                consistently responsive, even under heavy traffic loads.
                            </p>
                        </div>

                        <div className="flex-1 flex justify-between flex-col">
                            <div className="flex justify-center">
                                <span className="border border-neutral-600 px-3 py-1 rounded-full text-sm">
                                    Cost
                                </span>
                            </div>

                            <div className="flex justify-between px-4">
                                <span className="border border-neutral-600 bg-neutral-100/5 px-3 py-1 rounded-full text-sm">
                                    Availability
                                </span>
                                <span className="border border-neutral-600 bg-neutral-100/5 px-3 py-1 rounded-full text-sm">
                                    Performance
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
