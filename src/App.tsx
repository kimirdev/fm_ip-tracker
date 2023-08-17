import './App.css'
import 'leaflet/dist/leaflet.css'
import Map from './components/map'
import Form from './components/form'
import { useEffect, useState } from 'react'
import { getGeolocation, getGeolocationByIpOrDomain } from './api'
import offsetToUtcFormat from './helpers/offsetToUtcFormat'

type InfoType = {
  ip: string,
  location: string,
  timeZone: string,
  isp: string,
  lattitude: number,
  longitude: number,
}

function App() {
  const [formValue, setFormValue] = useState("")

  const [info, setInfo] = useState<InfoType>();

  useEffect(() => {
    getGeolocation()
      .then(data => {
        setInfo({
          ip: data.query,
          location: `${data.country || ""}, ${data.city || ""}, ${data.regionName || ""} ${data.zip || ""}`,
          timeZone: offsetToUtcFormat(data.offset),
          isp: data.isp,
          lattitude: data.lat,
          longitude: data.lon,
        })
      })
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    getGeolocationByIpOrDomain(formValue).then(data => {
      setInfo({
        ip: data.query,
        location: `${data.country || ""}, ${data.city || ""}, ${data.regionName || ""} ${data.zip || ""}`,
        timeZone: offsetToUtcFormat(data.offset),
        isp: data.isp,
        lattitude: data.lat,
        longitude: data.lon,
      })
    })

    console.log(e)
  }
  return (
    <>
      <header className='min-w-[100vw] border-very-dark-grey bg-pattern-desktop bg-cover h-[300px] md:h-[280px] bg-center p-6'>
        <h1 className='text-[22px] font-semibold text-white mb-8'>IP Address Tracker</h1>

        <Form handleSubmit={handleSubmit} formValue={formValue} setFormValue={setFormValue} />

        <div className='bg-white p-6 rounded-2xl md:flex md:pt-[40px] md:justify-center md:text-left max-w-[1110px] m-auto min-h-[162px] z-50 relative'>
          <div className='mb-3'>
            <span className='text-[8px] md:text-[10px] font-bold leading-[8px] text-dark-grey'>IP ADDRESS</span>
            <p className='text-base md:text-xl lg:text-2xl font-bold text-very-dark-grey md:w-32 lg:w-40'>{info?.ip}</p>
          </div>
          <hr className='h-[72px] border-r-[1px] border-light-grey md:ml-[42px] md:mr-[24px] lg:ml-[60px] lg:mr-[32px] hidden md:block'/>
          <div className='mb-3'>
            <span className='text-[8px] md:text-[10px] font-bold leading-[8px] text-dark-grey'>LOCATION</span>
            <p className='text-base md:text-xl lg:text-2xl font-bold text-very-dark-grey md:w-32 lg:w-40'>{info?.location}</p>
          </div>
          <hr className='h-[72px] border-r-[1px] border-light-grey md:ml-[42px] md:mr-[24px] lg:ml-[60px] lg:mr-[32px] hidden md:block'/>
          <div className='mb-3'>
            <span className='text-[8px] md:text-[10px] font-bold leading-[8px] text-dark-grey'>TIME ZONE</span>
            <p className='text-base md:text-xl lg:text-2xl font-bold text-very-dark-grey md:w-32 lg:w-40'>{info?.timeZone}</p>
          </div>
          <hr className='h-[72px] border-r-[1px] border-light-grey md:ml-[42px] md:mr-[24px] lg:ml-[60px] lg:mr-[32px] hidden md:block'/>
          <div>
            <span className='text-[8px] md:text-[10px] font-bold leading-[8px] text-dark-grey'>ISP</span>
            <p className='text-base md:text-xl lg:text-2xl font-bold text-very-dark-grey md:w-32 lg:w-40'>{info?.isp}</p>
          </div>
        </div>
      </header>

      <main>
        <Map position={[info?.lattitude || 51.505, info?.longitude || -0.09]} />
        {/* <MapContainer className='min-w-[100vw] h-[calc(100vh-300px)] md:h-[calc(100vh-280px)] z-0' center={[51.505, -0.09]} zoomControl={false} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors <br /> Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a> | Coded by <a href="#">Igor</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer> */}
      </main>

      {/* <footer className='absolute bottom-0 w-28 text-xs bg-white bg-opacity-80'>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Igor</a>.
      </footer> */}
    </>
  )
}

export default App
