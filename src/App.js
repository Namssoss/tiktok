import { useState } from 'react'
import Timer from './Timer'

const orders = [100,200,300]
// const gifts = [
//   'Qua 1',
//   'Qua 2',
//   'Qua 3'
// ]
const gifts = [
  {id: 1 , name: 'Qua 1'},
  {id: 2 , name: 'Qua 2'},
  {id: 3 , name: 'Qua 3'}
]
function App() {
  // const [counter, setCounter] = useState(1)
  // const [counter2, setCounter2] = useState(() => {
  //   const total = orders.reduce((total,cur) => total + cur)
  //   return total
  // })
  // const [info, setInfo] = useState({
  //   name: 'Nguyen Van A',
  //   age: '18',
  //   address: 'Ha Noi, VN'
  // })

  // const handleIncrease = () =>{
  //   setCounter(counter+1)
  // }

  // const handleIncrease2 = () =>{
  //   setCounter2(counter2 => counter2 + 1)
  //   setCounter2(counter2 => counter2 + 1)
  //   setCounter2(counter2 => counter2 + 1)
  // }

  // const handleInfo = () =>{
  //   setInfo({
  //     ...info,
  //     bio: 'hi'
  //   })
  // }

  // return (
  //   <div className="App" style={{padding: 20}}>
  //     <div>{counter}</div>
  //     <button onClick={handleIncrease}>Increase</button>
  //     <div>{counter2}</div>
  //     <button onClick={handleIncrease2}>Increase</button>
  //     <div>{JSON.stringify(info)}</div>
  //     <button onClick={handleInfo}>UP</button>
  //   </div>
  // );

  //////////////////////////giftRandom//////////////////////////////////
  // const [gift,setGift] = useState()

  // const randomGift = () => {
  //   const index = Math.floor(Math.random() * gifts.length);
  //   setGift(gifts[index])
  // }
  // return (
  //   <div className='App' style={{padding: 20}}>
  //     <div style={{color: 'red'}}>{gift || 'Khong co gi'}</div>
  //     <button onClick={randomGift}>Nhan thuong</button>
  //   </div>
  // );

  /////////////////////////Two-way binding////////////////////////////////
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')

  const handleRegister = () => {
    console.log({name, email})
  }
  //radio
  const [radio,setRadio] = useState()

  const [state, setState] = useState(false)

  console.log(radio)

  return (
      <div className='App' style={{padding: 20}}>
        <input onChange={e => setName(e.target.value)}></input>
        <input onChange={e => setEmail(e.target.value)}></input>
        <button onClick={handleRegister}>Register</button>
        {gifts.map(gift => (
          <div key={gift.id}>
              <input 
                type='radio' /*name='1'*/
                checked={radio === gift.id}
                onChange={() => setRadio(gift.id)}
              />
                {gift.name}
          </div>
        ))}

        {state && <Timer></Timer>}
        <button onClick={() => setState(!state)}>Toggle</button>
      </div>
    );
  
}

export default App;
