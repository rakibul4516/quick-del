
const Gallary = () => {
    return (
        <section className="lg:w-10/12 w-11/12 bg-[#fffcf7] mx-auto my-9 dark:bg-gray-800 dark:text-gray-50">
            <h1 className="text-4xl font-bold text-center py-3">Gallery</h1>
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                <img src="https://i.ibb.co/r7ncW7B/image.png" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/hZKKDYp/image.png" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/kK5xQS3/image.png" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/KDwppRF/image.png" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/87smggK/image.png" />
            </div>
        </section>
    );
};

export default Gallary;