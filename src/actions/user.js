import axiosInstance from "../axiosInstance";

export const getCreditCardIdByUsername = (username) => {
      return new Promise((resolve, reject) => {
             axiosInstance.get('/ccid/'+username).then(res => {
                  resolve(res.data.ccid)
            }).catch(err => {
                  reject(err)
            }) 
      })
}
export const getTransactionDetailById = (id) => {
      return new Promise((resolve, reject) => {
            axiosInstance.get('/transaction-detail/'+id).then(res => {
                 resolve(res.data)
           }).catch(err => {
                 reject(err)
           }) 
     })
}
export const getLastTransactionIdByCreditCardId = (ccid) => {
      return new Promise((resolve, reject) => {
             axiosInstance.get('/transactions/'+ccid).then(res => {
                  let allTransactionsByCcid = res.data
                  let lastTransaction = allTransactionsByCcid.sort(function(a,b){
                        return new Date(b.id) - new Date(a.id);
                  }).pop()
                  resolve(lastTransaction)
            }).catch(err => {
                  reject(err)
            }) 
      })
}
