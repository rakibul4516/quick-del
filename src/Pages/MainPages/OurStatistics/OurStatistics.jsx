import CountUp from 'react-countup';
import { FaUsers } from "react-icons/fa";
import { MdBookmarkAdded, MdDeliveryDining } from "react-icons/md";
import useCountData from "../../../Hooks/useCountData";

const OurStatistics = () => {
    const {count,parcels} = useCountData()
    console.log(parcels)
    const totalParcel = parcels?.length
    console.log(totalParcel)
    const Delivered = parcels?.filter((parcels)=>parcels?.status === 'Delivered')
    const totalDelivered = Delivered?.length
    
    return (
        <section className="p-4 my-10 md:p-8 w-10/12  mx-auto dark:bg-gray-800 dark:text-gray-100">
            <div className="container grid grid-cols-1 gap-6 m-4 mx-auto md:m-0 md:grid-cols-2 xl:grid-cols-3">
                <div className="flex overflow-hidden bg-[#fffcf7] shadow-xl rounded-lg dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex items-center justify-center rounded-r-lg bg-[#d4a373] px-4 dark:bg-violet-400 dark:text-gray-800">
                        <MdBookmarkAdded className="text-4xl font-semibold "/>
                    </div>
                    <div className="flex items-center justify-between flex-1 p-3">
                        <p className="text-4xl font-semibold text-[#dd9042]">
                            <CountUp
                                start={1}
                                end={totalParcel}
                                duration={2.75}
                                
                            >
                                {({ countUpRef }) => (
                                    <div>
                                        <span ref={countUpRef} />
                                    </div>
                                )}
                            </CountUp>

                        </p>
                        <p className="text-lg text-[#dd9042]">Booked</p>
                    </div>
                </div>
                <div className="flex overflow-hidden bg-[#fffcf7] shadow-xl rounded-lg dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex items-center justify-center rounded-r-lg bg-[#d4a373] px-4 dark:bg-violet-400 dark:text-gray-800">
                        <MdDeliveryDining className="text-4xl font-semibold"/>
                    </div>
                    <div className="flex items-center justify-between flex-1 p-3">
                        <p className="text-4xl font-semibold text-[#dd9042]">
                        <CountUp
                                start={1}
                                end={totalDelivered}
                                duration={2.75}
                                
                            >
                                {({ countUpRef }) => (
                                    <div>
                                        <span ref={countUpRef} />
                                    </div>
                                )}
                            </CountUp>
                        </p>
                        <p className="text-lg text-[#d4a373]">Delivered</p>
                    </div>
                </div>
                <div className="flex overflow-hidden bg-[#fffcf7] shadow-xl rounded-lg dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex items-center justify-center px-4 rounded-r-lg bg-[#d4a373] dark:bg-violet-400 dark:text-gray-800">
                        <FaUsers className="text-4xl font-semibold"/>
                    </div>
                    <div className="flex items-center justify-between flex-1 p-3">
                        <p className="text-4xl font-semibold text-[#dd9042]">
                            
                        <CountUp
                                start={1}
                                end={count?.count}
                                duration={2.75}
                                
                            >
                                {({ countUpRef }) => (
                                    <div>
                                        <span ref={countUpRef} />
                                    </div>
                                )}
                            </CountUp>
                        </p>
                        <p className="text-lg text-[#dd9042]">Users</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStatistics;