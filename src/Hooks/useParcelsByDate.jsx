import useAllParcels from "./useAllParcels";

const useParcelsByDate = () => {
    const {data} = useAllParcels()
    console.log(data)
    const filterDataByDate = data?.reduce((acc, booking) => {
        const { bookingDate } = booking;
        if (!acc[bookingDate]) {
          acc[bookingDate] = []; 
        }
        acc[bookingDate].push(booking); 
        return acc;
      }, {});

    return filterDataByDate;
};

export default useParcelsByDate;