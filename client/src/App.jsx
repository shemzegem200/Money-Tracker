import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [datetime, setDatetime] = useState('2025-01-17T12:30');
  const [description, setDescription] = useState('');
  const [net, setNet] = useState(0);


  useEffect(()=>{
    console.log(import.meta.env.VITE_NODE_API_BACKEND_URL);
      fetch(import.meta.env.VITE_NODE_API_BACKEND_URL+'/api/transactions').then((res)=>{
        res.json().then(data=>{
          setTransactions(data);
        })
      });
  }, []);

  useEffect(()=>{
    var total = 0;
    for (const obj of transactions){
      total += obj.price;
    }
    setNet(total);
  },[transactions]);

  const handleSubmit = (ev)=>{
    ev.preventDefault();
    const price = name.split(' ')[0];
    fetch(import.meta.env.VITE_NODE_API_BACKEND_URL+"/api/transaction", {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({name: name.substring(price.length+1), price, description, datetime})
    }).then(res=>{
      res.json().then(data=>{
        console.log(data);
        setName('');
        setDatetime('');
        setDescription('');

        fetch(import.meta.env.VITE_NODE_API_BACKEND_URL+'/api/transactions').then((res)=>{
          res.json().then(data=>{
            setTransactions(data);
          })
        });
      });
    });
  }

  const deleteTransaction = (trn)=>{
    fetch(import.meta.env.VITE_NODE_API_BACKEND_URL+'/api/delete-transaction', {
      method:'POST',
      headers:{'Content-type': 'application/json'},
      body:JSON.stringify(trn)
    }).then(res=>{
       res.json().then(data=>{
        fetch(import.meta.env.VITE_NODE_API_BACKEND_URL+'/api/transactions').then((res)=>{
          res.json().then(data1=>{
            setTransactions(data1);
          })
        });
       });
    });
  }


  return (
    <div className='outer-container'>
      <h1>${net}</h1>
      <form onSubmit={handleSubmit}>
        <div className='basic'>
          <input type='text' placeholder='amount <space> item' value={name} onChange={(ev)=>setName(ev.target.value)}/>
          <input type='datetime-local' value={datetime} onChange={ev => setDatetime(ev.target.value)}/>
        </div>

        <div className='description'>
          <input type='text' placeholder='description' value={description} onChange={ev=> setDescription(ev.target.value)}/>
        </div>

        <button type='submit'>Add new transaction</button>
      </form>

      <div className='transactions'>
        {transactions.slice().reverse().map((trn, i)=>
          <div className='transaction' onClick={ev=>{deleteTransaction(trn)}} data-tooltip="Click to delete">
            <div className='left'>
              <div className='name'>{trn.name}</div>
              <div className='description'>{trn.description}</div>
            </div>
            <div className='right'>
              <div className={`price${trn.price<0? ' red': ' green'}`}>{trn.price<0? '-$'+(-trn.price):'$'+trn.price }</div>
              <div className='datetime'>{trn.datetime}</div>
            </div>
          </div>
        )}
        
      </div>
    </div>
  )
}

export default App
