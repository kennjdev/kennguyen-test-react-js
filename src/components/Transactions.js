import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button, Table } from 'antd';
import { Link } from "react-router-dom";
import { getCreditCardIdByUsername, getLastTransactionIdByCreditCardId } from "../actions/user";
import { setTransactions } from "../actions/transaction";
import { useSelector, useDispatch } from "react-redux";
const columns = [
      {
            title: 'Id',
            dataIndex: 'id',
            render: (text) => {
                  return <span>{"#" + text}</span>
            }
      },
      {
            title: 'Transaction title',
            dataIndex: 'title',
      },
      {
            title: 'Action',
            render: (record) => {
                  return <Link to={'/transaction/' + record.id}><Button>Detail</Button></Link>
            }
      }
];
const ConvertTest = (props) => {
      const [result, setResult] = useState([])
      let convertVariable =
      {
            d1: {
                  name: 'name 1',
                  value: 'value1'
            },
            d2: {
                  name: 'name 2',
                  value: 'value1'
            }
      }
      const convertObjectToArray = (e) => {
            let keys = Object.keys(convertVariable)
            let resultConvert = keys.map(key => {
                  let values = Object.values(convertVariable[key])
                  return [key, ...values]
            })
            setResult(resultConvert)
      }
      return (
            <Card>
                  <h3>Convert Object To array Value</h3>
                  origin :
                  <pre>{JSON.stringify(convertVariable, null, 2)}</pre>
                  <br />
                  <Button onClick={e => convertObjectToArray(e)}>Convert to array</Button>
                  <br />
                  <div>
                        <pre>{result.length ? JSON.stringify(result, null, 2) : ''}</pre>
                  </div>

            </Card>
      )
}
const Transactions = (props) => {
      const [loading, setLoading] = useState(false)
      const { transactions } = useSelector(state => state.users)
      const users = useSelector(state => state.users.list)
      const dispatch = useDispatch()
      useEffect(() => {
            async function fetchData() {
                  if (!transactions.length) {
                        setLoading(true)
                        let data = []
                        for (let i = 0; i < users.length; i++) {
                              let ccid = await getCreditCardIdByUsername(users[i].username)
                              let lastTransaction = await getLastTransactionIdByCreditCardId(ccid)
                              data = [...data, lastTransaction]
                        }
                        dispatch(setTransactions(data))
                        setLoading(false)
                  }
            }
            fetchData();
      }, [])
      return (
            <div style={{ padding: 80 }}>
                  {!loading ?
                        (<div>
                              List Last Transaction By Credit Card Id:
                              <Table dataSource={transactions} columns={columns} />
                        </div>)
                        : 'loading'}
                  <ConvertTest />
            </div>
      );
}
export default Transactions;
