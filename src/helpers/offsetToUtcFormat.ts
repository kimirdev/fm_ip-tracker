export default function offsetToUtcFormat(offset: number) {
  const hours = offset/3600;

  const hoursStr = hours>9 || hours <-9 ? String(hours>0?hours:-hours) : `0${hours>0?hours:-hours}`

  return `UTC ${hours >= 0 ? '+' : '-'}${hoursStr}:00`
}