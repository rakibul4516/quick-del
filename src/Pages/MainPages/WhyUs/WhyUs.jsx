import { RiVerifiedBadgeFill } from "react-icons/ri";

const WhyUs = () => {
    return (
        <section className="lg:w-10/12 w-11/12 bg-[#fffcf7] mx-auto my-9 dark:bg-gray-800 dark:text-gray-100">
            <div className="container grid lg:grid-cols-2 grid-cols-1 mx-auto lg:flex-row">
                <img src="https://i.ibb.co/09vk493/image.png" alt="banner" className="w-full h-full" />
                <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 dark:bg-violet-400 dark:text-gray-900">
                    <div className="flex space-x-2 sm:space-x-4">
                        <RiVerifiedBadgeFill className='text-7xl font-semibold text-green-400' />
                        <div className="space-y-2">
                            <p className="text-lg font-medium leadi">How can I track my parcel?</p>
                            <p className="leadi">You can track your parcel using the tracking number provided to you after booking your delivery.</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 sm:space-x-4">
                        <RiVerifiedBadgeFill className='text-7xl font-semibold text-green-400' />

                        <div className="space-y-2">
                            <p className="text-lg font-medium leadi">How do I prepare my parcel for shipping?</p>
                            <p className="leadi">Properly package your item in a secure box or envelope with appropriate padding to prevent damage during transit. </p>
                        </div>
                    </div>
                    <div className="flex space-x-2 sm:space-x-4">
                        <RiVerifiedBadgeFill className='text-7xl font-semibold text-green-400' />

                        <div className="space-y-2">
                            <p className="text-lg font-medium leadi"> Do you offer international shipping?</p>
                            <p className="leadi">Yes.Check our website or contact us for information on available destinations and shipping rates.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;