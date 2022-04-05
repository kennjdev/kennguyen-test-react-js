import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from 'antd';
import { Link, Redirect } from "react-router-dom";
import { getCreditCardIdByUsername, getLastTransactionIdByCreditCardId } from "../actions/user";
import { setTransactions } from "../actions/transaction";
import { useSelector, useDispatch } from "react-redux";
const TransactionDetail = (props) => {
      const { transactions } = useSelector(state => state.users)
      if (!transactions.length) return <Redirect to="/" />
      let detailTransaction = transactions.find(item => item.id == props.match.params.id)
      return (
            <div style={{ padding: 50 }}>
                  Detail Transaction:
                  <Card>
                        <div>
                             <strong>  Transaction id:  </strong>     
                             # {detailTransaction.id}
                        </div>
                        <div>
                             <strong>  Title:   </strong>    
                              {detailTransaction.title}
                        </div>
                        <div>
                             <strong>  Description:   </strong>    
                              {detailTransaction.description}
                        </div>
                        <Button><Link to='/'>Back</Link></Button>
                  </Card>
            </div>
      );
}
export default TransactionDetail;
