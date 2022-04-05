import axiosInstance from "../axiosInstance";
import {SET_TRANSACTIONS} from './types'
export const setTransactions = (transactions)=>{
      return {
            type: SET_TRANSACTIONS,
            transactions
      }
}