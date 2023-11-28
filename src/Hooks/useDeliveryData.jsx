import { useEffect, useState } from "react";
import useAllParcels from "./useAllParcels";
import useUsers from "./useUsers";

const useDeliveryData = () => {
    const user = useUsers();
    const { data } = useAllParcels();
    const [parcels, setParcels] = useState();
    const [totalDelivery,setTotalDelivery] =useState('')
    const [id,setId] =useState()
    useEffect(() => {
        const idArray = user?.data ? user.data.map(item => item?._id) : [];
        const deliveryCountArray = user?.data ? user.data.map(item => item?.totalDeliver) : [];
        console.log();
        const id = idArray[0];
        const filterDeliver = deliveryCountArray[0]
        if (id && !parcels) {
            const filteredParcels = data?.filter(parcel => parcel?.deliverymen === id);
            setParcels(filteredParcels);
            setTotalDelivery(filterDeliver)
            setId(id)

        }

    
    }, [user, data, parcels]); 
    return {parcels,totalDelivery,id};
};

export default useDeliveryData;