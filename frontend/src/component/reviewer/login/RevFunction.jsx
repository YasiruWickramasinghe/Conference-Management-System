import axios from 'axios';

export const register = (newResearcher) =>{
    return axios.post('http://localhost:8000/registerReviewer', {
        first_name:newResearcher.first_name,
        last_name: newResearcher.last_name,
        email:newResearcher.email,
        password: newResearcher.password
    })
    .then(res=>{
        window.alert("Registered Successfully");
        return res.data;
    })
}



export const login = (researcher) =>{
    return axios.post('http://localhost:8000/loginReviewer', {
        email:researcher.email,
        password: researcher.password
    })
    .then(res=>{

        localStorage.setItem('reviewertoken',res.data)
        console.log(res.data)
        return res.data
    })
    .catch(err=>{
        console.log(err)
    })
}
