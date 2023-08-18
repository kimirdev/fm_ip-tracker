import { Info } from "../../types/info.type";

export default function InfoPanel({info}: {info?: Info}) {

  const {ip, location, timeZone, isp} = info || {}

  return (
    <div className='bg-white p-6 rounded-2xl md:flex md:pt-[40px] md:justify-center md:text-left max-w-[1110px] m-auto min-h-[162px] z-50 relative'>
      <div className='mb-3'>
        <span className='text-[8px] md:text-[10px] font-bold leading-[8px] text-dark-grey'>IP ADDRESS</span>
        <p className='text-base md:text-xl lg:text-2xl font-bold text-very-dark-grey md:w-32 lg:w-40'>{ip}</p>
      </div>
      <hr className='h-[72px] border-r-[1px] border-light-grey md:ml-[42px] md:mr-[24px] lg:ml-[60px] lg:mr-[32px] hidden md:block'/>
      <div className='mb-3'>
        <span className='text-[8px] md:text-[10px] font-bold leading-[8px] text-dark-grey'>LOCATION</span>
        <p className='text-base md:text-xl lg:text-2xl font-bold text-very-dark-grey md:w-32 lg:w-40'>{location}</p>
      </div>
      <hr className='h-[72px] border-r-[1px] border-light-grey md:ml-[42px] md:mr-[24px] lg:ml-[60px] lg:mr-[32px] hidden md:block'/>
      <div className='mb-3'>
        <span className='text-[8px] md:text-[10px] font-bold leading-[8px] text-dark-grey'>TIME ZONE</span>
        <p className='text-base md:text-xl lg:text-2xl font-bold text-very-dark-grey md:w-32 lg:w-40'>{timeZone}</p>
      </div>
      <hr className='h-[72px] border-r-[1px] border-light-grey md:ml-[42px] md:mr-[24px] lg:ml-[60px] lg:mr-[32px] hidden md:block'/>
      <div>
        <span className='text-[8px] md:text-[10px] font-bold leading-[8px] text-dark-grey'>ISP</span>
        <p className='text-base md:text-xl lg:text-2xl font-bold text-very-dark-grey md:w-32 lg:w-40'>{isp}</p>
      </div>
    </div>
  )
}
