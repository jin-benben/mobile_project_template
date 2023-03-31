import axios from 'axios'

const request=axios.create({
    baseURL:import.meta.env.BASE_URL
})

request.interceptors.request.use(function(config){
    return  config
})

request.interceptors.response.use(function(response){
    console.log()
    if(response.data.ResponseStatus===0){
        return response.data.datas
    }else{
        return Promise.reject(response.data)
    }
},function(error){
    return Promise.reject(error)
})

export default request