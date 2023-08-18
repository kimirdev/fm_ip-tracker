import './App.css'
import 'leaflet/dist/leaflet.css'
import Map from './components/map'
import Form from './components/form'
import { useEffect, useState } from 'react'
import { getGeolocation } from './api'
import { Info } from './types/info.type'
import InfoPanel from './components/info-panel'

function App() {
  const [formValue, setFormValue] = useState("")

  const [info, setInfo] = useState<Info>();

  useEffect(() => {
    getGeolocation()
      .then(data => {
        setInfo({
          ip: data.ip,
          location: `${data.location.country}, ${data.location.region}, ${data.location.city} ${data.location.postalCode}`,
          timeZone: `UTC ${data.location.timezone}`,
          isp: data.isp,
          lattitude: data.location.lat,
          longitude: data.location.lng,
        })
      })
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    getGeolocation(formValue)
      .then(data => {
        setInfo({
          ip: data.ip,
          location: `${data.location.country}, ${data.location.region}, ${data.location.city} ${data.location.postalCode}`,
          timeZone: `UTC ${data.location.timezone}`,
          isp: data.isp,
          lattitude: data.location.lat,
          longitude: data.location.lng,
        })
      })
  }
  return (
    <>
      <header className='min-w-[100vw] border-very-dark-grey bg-pattern-desktop bg-cover h-[300px] md:h-[280px] bg-center p-6'>
        <h1 className='text-[22px] font-semibold text-white mb-8'>IP Address Tracker</h1>

        <Form handleSubmit={handleSubmit} formValue={formValue} setFormValue={setFormValue} />

        <InfoPanel info={info} />
      </header>

      <main>
        <Map position={[info?.lattitude || 51.505, info?.longitude || -0.09]} />
      </main>
    </>
  )
}

export default App
