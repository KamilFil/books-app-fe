import axios from "axios";



const API = axios.create({baseURL: 'http://localhost:35001/', withCredentials: true})


//AuthPath
export const apiAuthUser = () => API.get(`/auth/user/`)

//UserPath
export const apiLoginUser = (data: object) => API.post(`/auth/login/`, data)
export const apiGetUser = () => API.get(`/users/`)

//BookPath
export const apiCreateBook = (data: object) => API.post('/books/', data)
export const apiGetAllBook = () => API.get(`/books/`)
export const apiActiveBooks = (id:string | undefined ) => API.get(`books/active/${id}`)
export const apiGetOneBook = (id: string | undefined) => API.get(`/books/${id}`)
export const apiLikeBook = (id: string | undefined) => API.get(`/books/like/${id}`)
export const apiGetForCategoryName = (catName:string) => API.get(`/books/category/${catName}`)

export const apiGetCategory = () => API.get('/category-books')
//FilePath
export const apiSendFile = (data: object) => API.post('/send-file/upload/', data, {headers: {
        'Content-Type': 'multipart/form-data',
    }})