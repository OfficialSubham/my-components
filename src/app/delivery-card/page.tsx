import Image from "next/image"

const DeliveryCard = () => {
  return (
    <div className="bg-neutral-200 flex items-center justify-center min-h-screen">
      <div className="shadow-[0_2px_20px_rgb(0,0,0,0.1)] flex flex-col p-5 h-110 w-110 rounded-3xl">
        <div className="flex-1 relative bg-neutral-300 rounded-t-2xl">
          <div className="absolute right-4 top-4 h-9 w-9 bg-black rounded-lg p-1">
            <svg fill="#fff" className="w-fit" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><path d="M12,2A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm1-8.251V7a1,1,0,0,0-2,0v5a1.00586,1.00586,0,0,0,.11816.47217l1.5,2.79883a1.00029,1.00029,0,0,0,1.76368-.94434Z" /></svg>
          </div>
        </div>
        <div className="flex-1 rounded-b-2xl border border-neutral-300 text-black">
          <div className="p-4">
            <h3 className="text-2xl my-2">Track Your Delivery</h3>
            <p className="text-neutral-400 text-sm leading-tight">Monitor your shipment status in real-time. Stay informed about yur delivery's progress every step of the way</p>
          </div>
          <div className="border-t justify-between items-center border-t-neutral-300 flex gap-4 p-4">
            <button className="border border-neutral-300 rounded-2xl px-3 py-2 cursor-pointer">View Status</button>
            <div className="text-sm text-neutral-500">Your delivery is on its way!</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryCard
