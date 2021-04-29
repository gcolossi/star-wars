import Axios, {AxiosInstance} from 'axios'

const baseURL = 'http://swapi.dev/api';

export const getAxiosInstance = ():AxiosInstance  => {
    let axiosInstance = Axios.create({baseURL:baseURL});
    axiosInstance.interceptors
    .response.use(response =>response,
        (error)=> {
            const {status} = error.response;
            if (status>399) console.info (`Erro na API. Status:${status}`)
        })
    return axiosInstance;
}


