import axiosInstance from "../axiosInstance";
import {SET_TRANSACTIONS} from './types'
export const setTransactions = (transactions)=>{
      console.log('transactions',transactions)
      return {
            type: SET_TRANSACTIONS,
            transactions
      }
}