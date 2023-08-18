import axios from "axios";

// 'https://geo.ipify.org/api/v2/country?apiKey=at_7Rf8E9ZC046UpgnbZaVDBwJ6AKISX&ipAddress=8.8.8.8'
const instance = axios.create({
  baseURL: 'http://ip-api.com/json/',
});

export type GeoType = {
  city: string,
  country: string,
  isp: string,
  lat: number,
  lon: number,
  offset: number,
  query: string,
  regionName: string,
  status: string,
  zip: string,
}

export const getGeolocation = (): Promise<GeoType> => {
  return instance.get("?fields=33612505").then(data => data.data);
}

export const getGeolocationByIpOrDomain = (ipOrDomain: string): Promise<GeoType> => {
  return instance.get(`${ipOrDomain}?fields=33612505`).then(data => data.data)
}
