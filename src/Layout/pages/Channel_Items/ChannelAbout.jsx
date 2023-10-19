import React from 'react'
import ReactShowMoreText from 'react-show-more-text'
// Icons
import { FaShare } from "react-icons/fa";

export default function ChannelAbout() {
    return (
        <>
            <div className="about-main" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <div className="about-contents sm:flex flex-nowrap px-8 sm:px-10 md:px-16 py-8">
                    <div className="about-contents-section-1 w-full sm:w-3/4 p-3 md:p-6">
                        <div className="channel-description pb-6 mb-3 border-b border-slate-300">
                            <h1 className='font-semibold text-md'>Channel Description</h1>
                            <p className='my-3 text-[12px] '>
                                <ReactShowMoreText lines={3} more={<div className='mt-3'><span className="text-blue-600 text-sm">Show More</span></div>} less={<div className='mt-3'><span className="text-blue-600">Show Less</span></div>}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt et quasi, reprehenderit dolores, ea illum inventore velit ratione vero vel totam error sit illo earum deserunt molestias, nemo labore non amet quae natus fugiat laborum facere. Magnam, veritatis quo? Adipisci dolorum veniam quasi sunt magnam vero voluptate recusandae esse nam tenetur aliquid rerum pariatur ut quibusdam iure ex ratione modi ab distinctio, quas voluptatibus ad! Vitae nemo vero molestiae saepe quaerat odio expedita asperiores numquam amet libero dignissimos repellendus, perspiciatis architecto doloremque exercitationem impedit? Quos, tempora et dicta error qui nesciunt earum ullam quidem distinctio ab, quis natus dignissimos non!
                                </ReactShowMoreText>
                            </p>
                        </div>
                        <div className="channel-channels-items mb-3 border-b border-slate-300">
                            <h1 className='font-semibold text-md'>Channels</h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 py-8">


                                <div className="flex flex-nowrap mb-4 md:mb-0 md:flex-col md:p-6 items-center gap-5 hover:bg-gray-50">
                                    <div className="channel-logo w-[60px] md:w-[80px] h-[60px] md:h-[80px] bg-slate-200 rounded-full" style={{ backgroundImage: `url()`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                                    <div className="flex flex-nowrap justify-center flex-col">
                                        <h1 className='font-semibold text-[13px] text-center'>Channel Name</h1>
                                        <h1 className='font-medium text-[11px]'>20M Subscriber</h1>
                                    </div>
                                    <button className='view font-semibold text-sm  border-2 border-black text-black px-5 py-2 rounded-full flex flex-nowrap items-center gap-2'>View</button>
                                </div>
                                <div className="flex flex-nowrap mb-4 md:mb-0 md:flex-col md:p-6 items-center gap-5 hover:bg-gray-50">
                                    <div className="channel-logo w-[60px] md:w-[80px] h-[60px] md:h-[80px] bg-slate-200 rounded-full" style={{ backgroundImage: `url()`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                                    <div className="flex flex-nowrap justify-center flex-col">
                                        <h1 className='font-semibold text-[13px] text-center'>Channel Name</h1>
                                        <h1 className='font-medium text-[11px]'>20M Subscriber</h1>
                                    </div>
                                    <button className='view font-semibold text-sm  border-2 border-black text-black px-5 py-2 rounded-full flex flex-nowrap items-center gap-2'>View</button>
                                </div>
                                <div className="flex flex-nowrap mb-4 md:mb-0 md:flex-col md:p-6 items-center gap-5 hover:bg-gray-50">
                                    <div className="channel-logo w-[60px] md:w-[80px] h-[60px] md:h-[80px] bg-slate-200 rounded-full" style={{ backgroundImage: `url()`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                                    <div className="flex flex-nowrap justify-center flex-col">
                                        <h1 className='font-semibold text-[13px] text-center'>Channel Name</h1>
                                        <h1 className='font-medium text-[11px]'>20M Subscriber</h1>
                                    </div>
                                    <button className='view font-semibold text-sm  border-2 border-black text-black px-5 py-2 rounded-full flex flex-nowrap items-center gap-2'>View</button>
                                </div>


                            </div>
                        </div>
                        <div className="channel-Links pb-6 border-b border-slate-300">
                            <h1 className='font-semibold text-md'>Links</h1>
                            <ul className="channel-links-items py-3 list-disc ms-5">
                                <li className="my-5">
                                    <h1 className='text-sm font-medium'>Instagram</h1>
                                    <a href='/' target='_blank' className="text-[12px] font-medium text-blue-600">https://piyush.com</a>
                                </li>
                                <li className="my-5">
                                    <h1 className='text-sm font-medium'>Instagram</h1>
                                    <a href='/' target='_blank' className="text-[12px] font-medium text-blue-600">https://piyush.com</a>
                                </li>
                                <li className="my-5">
                                    <h1 className='text-sm font-medium'>Instagram</h1>
                                    <a href='/' target='_blank' className="text-[12px] font-medium text-blue-600">https://piyush.com</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="about-contents-section-2 p-3 md:p-6">
                        <div className="channel-description mb-3">
                            <h1 className='font-semibold text-md pb-3 border-b border-slate-300'>Stats</h1>
                            <h1 className='font-medium text-sm my-3 pb-3 border-b border-slate-300'>Joined Mar 18, 2017</h1>
                            <h1 className='font-medium text-sm my-3 pb-3 border-b border-slate-300'>940,434,751 views</h1>
                            <button className='share font-semibold text-sm border-2 border-black text-black px-5 py-3 rounded-full flex flex-nowrap items-center gap-2'>Share <FaShare /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

