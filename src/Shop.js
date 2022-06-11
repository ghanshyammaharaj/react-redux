import React from 'react'
import {useDispatch} from 'react-redux';
//import {bindActionCreators} from 'react';

import  {actionCreators} from './state/index';

const Shop = () => {
    const dispatch = useDispatch();
    //const balance = useSelector(state=>state.amount)
   // const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    <div>
<div className='container'>
    <h1>Deposit/withdrow Money</h1>
    <button className='btn btn-primary mx-2'onClick={()=>{dispatch(actionCreators.depositMoney(100))}}> + </button>
         update Balance
       <button className='btn btn-primary mx-2' onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}> - </button> 
        <button className='btn btn-primary mx-2'onClick={()=>{depositMoney(100)}}> + </button>
         update Balance
        <button className='btn btn-primary mx-2' onClick={()=>{withdrawMoney(100)}}> - </button>
        </div>
    </div>
  )
}

export default Shop
