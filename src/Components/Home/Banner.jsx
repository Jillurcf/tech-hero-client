
 // import from 'keen-slider/react.es' for to get an ES module
import { useLoaderData } from 'react-router-dom';
import Slider from './Slider';



const  Banner = () => {
    const addedUsers = useLoaderData()
    console.log(addedUsers);
    return (
        <div className='w-screen mx-aut0'>
            {/* <div className='mx-auto grid grid-cols-6'>
            {
                addedUsers.map(users => <Slider key={users._id} users={users}></Slider>)
            }
            </div> */}
            <Slider addedUsers={addedUsers}></Slider>
        </div>
    )
   
}

export default Banner;