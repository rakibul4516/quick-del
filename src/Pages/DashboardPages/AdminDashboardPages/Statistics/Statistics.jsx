import ReactApexChart from 'react-apexcharts';
import useParcelsByDate from '../../../../Hooks/useParcelsByDate';
import { useState } from 'react';

const Statistics = () => {
    const filterDataByDate = useParcelsByDate()
    const [dates, setDates] = useState()
    console.log(filterDataByDate)
    if (filterDataByDate && typeof filterDataByDate === 'object') {
        const bookingDates = Object.keys(filterDataByDate);
        if (!dates) {
            setDates(bookingDates)
        }
    }

    //get array length
    const lengths = filterDataByDate
    ? Object.values(filterDataByDate)
        ?.map(arr => arr?.length) 
    : []; 
  
  

    const chartData = {
        series: [{
            name: "Bookings",
            data: lengths,
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'Parcels Booked by Date',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#e9edc9', '#fefae0'],
                    opacity: 0.8
                },
            },
            xaxis: {
                categories: dates,
            }
        }
    };

    return (
        <div id="chart" className='w-8/12 mx-auto py-14'>
            <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
        </div>
    );
};

export default Statistics;
