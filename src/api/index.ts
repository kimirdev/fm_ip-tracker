import axios from "axios";

// 'https://geo.ipify.org/api/v2/country?apiKey=at_7Rf8E9ZC046UpgnbZaVDBwJ6AKISX&ipAddress=8.8.8.8'
// const instance = axios.create({
//   baseURL: 'http://ip-api.com/json/',
// });

// export type GeoType = {
//   city: string,
//   country: string,
//   isp: string,
//   lat: number,
//   lon: number,
//   offset: number,
//   query: string,
//   regionName: string,
//   status: string,
//   zip: string,
// }

// export const getGeolocation = (): Promise<GeoType> => {
//   return instance.get("?fields=33612505").then(data => data.data);
// }

// export const getGeolocationByIpOrDomain = (ipOrDomain: string): Promise<GeoType> => {
//   return instance.get(`${ipOrDomain}?fields=33612505`).then(data => data.data)
// }


// const instance = axios.create({
//   baseUrl: `https://geo.ipify.org/api/v2/country?apiKey={}`
// })

const apiKey = import.meta.env.VITE_API_KEY

type IpifyLocationType = {
  country: string,
  region: string,
  city: string,
  postalCode: string,
  timezone: string,
  lat: number,
  lng: number,
}

type IpifyGeoType = {
  ip: string,
  isp: string,
  location: IpifyLocationType,
}

const ipv4Regex = /(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}/g
const ipv6Regex = /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/g

export const getGeolocation = (ipOrDomain?: string): Promise<IpifyGeoType> => {
  let query = ''

  if (!ipOrDomain) {
    query = ''
  } else if (ipOrDomain.match(ipv4Regex) || ipOrDomain.match(ipv6Regex)) {
    query = `&ipAddress=${ipOrDomain}`
  } else {
    query = `&domain=${ipOrDomain}`
  }
  return axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}${query}`).then(data => data.data)
}