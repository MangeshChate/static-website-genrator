import Image from 'next/image';
import Link from 'next/link';

function Page() {
  return (
    <div className='h-[100vh]'>
      <span className='text-blue-900 font-bold text-3xl'>Simple Static Website Generator</span>
      <div className='grid grid-cols-4 gap-3 h-[90%] mt-3 '>
        <div className='col-span-1 bg-blue-200 p-4 flex flex-col items-center rounded-xl shadow-xl'>
          <span className='text-xl'>Drag an Drop Element from here</span>
          <hr />
        </div>
        <div className="col-span-3 bg-blue-500 p-4 flex items-center flex-col rounded-xl shadow-xl">
          <span className='text-xl '>Your static Website</span>
          
        </div>
      </div>
    </div>
  );
}

export default Page;
