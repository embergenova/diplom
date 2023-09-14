import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org',
    timeout: 10000,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjk0ZmQ5YjVlNWRhMjYwMmNmYzJiZmM2ZDFmZjM3NCIsInN1YiI6IjY0YjEwYWQ4MjUzZmFiMGM4MmVhY2VjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ear59-vWueQ1YKa2z2YH_ADeStpf_ju12Z2gDFipI3o`
      }
  });

  