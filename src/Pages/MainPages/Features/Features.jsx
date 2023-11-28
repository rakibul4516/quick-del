import './Features.css'
import img1 from '../../../assets/calender.png'
import img2 from '../../../assets/calculate.png'
import img3 from '../../../assets/gift.png'
const Features = () => {
    return (
        <div className='lg:w-8/12 w-11/12 mx-auto my-10'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
                <div className="flex flex-col items-center justify-center gap-2 lg:p-4">
                    <img src={img1} alt="" className='h-20 w-20 rounded-lg'/>
                    <h4 className="text-xl font-semibold text-center">Emergency Delivery</h4>
                    <p className="text-xs text-center">We are giving fist and emergency delivery with the customar requirement.</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 lg:p-4">
                    <img src={img2} alt="" className='h-20 w-20 rounded-lg'/>
                    <h4 className="text-xl font-semibold text-center">Low Cost</h4>
                    <p className="text-xs text-center">We are charging low cost for our customar setisfection.Be happy with us.</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 lg:p-4">
                    <img src={img3} alt="" className='h-20 w-20 rounded-lg' />
                    <h4 className="text-xl font-semibold text-center">special Offers</h4>
                    <p className="text-xs text-center">We have some special support and surprices for our customar for happiness.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;