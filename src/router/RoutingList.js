import React from 'react';
import {Route} from 'react-router-dom';
import Transactions from '../components/Transactions';
import TransactionDetail from '../components/TransactionDetail';


const routes = [

      {
            path: '/',
            component: Transactions,
            key: '/transactions',
      },
      {
            path: '/transaction/:id',
            component: TransactionDetail,
            key: '/transaction/:id',
      }
     
];

function RoutingList() {
      return routes.map(item => {
            let prop = {

                  path: item.path,
                  key: item.key
            }
            if (typeof item.component != 'undefined') {
                  prop.component = item.component
            }
            return (
                  <Route
                        exact
                        {...prop}
                  />
            );
      });
}

export default RoutingList;
