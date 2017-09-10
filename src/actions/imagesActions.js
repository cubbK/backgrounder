import axios from 'axios'

export function fetchImage (year, month, day) {
  const url = `https://api.nasa.gov/planetary/apod?hd=true&date=${year}-${month}-${day}&api_key=aG61HfHn7T4yzG1Iup2tdHa3YhQ7ENtAtUvmdTbs`
  return {
    type: 'FETCH_IMAGE',
    payload: axios.get(url)
  }
}
