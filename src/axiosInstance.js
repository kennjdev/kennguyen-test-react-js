import axios from "axios";
import { notification } from 'antd';
const Swal = require('sweetalert2')

const axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
});



export default axiosInstance;
