import axios from "axios";

export const authLogin = async (req) => {
  try {
    const {email, password} = req
    const res = await axios.post(`http://picvul-service.herokuapp.com/login`, {email, password})
    return res
  }catch (e){
    return e
  }
}

export const logout = async () => {
  try {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    window.location = '/'
  }catch (e) {
    return e
  }
}

export const regis = async (req) => {
  let job = "Just Human"
  let profile_image = "/cdn/webassets/default-profile.jpg"
  let fullname
  try {
    const {email,username, password} = req
    fullname = username
    const response = await axios.post(`http://picvul-service.herokuapp.com/api/user/regist`, {email,username,fullname, password, job, profile_image})
    return response
  }catch (e){
    return e
  }
}

export const deleteAccount = async (req) => {
  try {
    const {authHeader, id_user} = req
    console.log(authHeader,id_user);
    const res = await axios.delete(`http://picvul-service.herokuapp.com/api/user/delete`,{ headers: {Authorization : authHeader}, data: {id_user:id_user} })
    logout()
    return res
  }catch (e){
    return e
  }
}