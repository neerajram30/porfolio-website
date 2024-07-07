import { MoonLoader, PulseLoader } from 'react-spinners';
function Loader() {

    return (
        <div className='bg-white h-screen flex flex-col w-full justify-center items-center'>
            <MoonLoader size={32} color='#646FD4' />
            <div className='mt-2'>
                <span className='text-hcolor text-sm'>Loading <PulseLoader size={5} color='#646FD4' /></span>
            </div>
        </div>
    );
}

export default Loader

