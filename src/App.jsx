import React from 'react'
import './App.css'
import Card from './Components/Card/Card'
import 'bootstrap/dist/css/bootstrap.min.css'

let cards = [{
  title: "FREE",
  cost: 0,
  user: "Single",
  storage: true,
  public: true,
  access: true,
  private: false,
  support: false,
  domain: false,
  report: false,
},
{
  title: "PLUS",
  cost: 9,
  user: "5",
  storage: true,
  public: true,
  access: true,
  private: true,
  support: true,
  domain: true,
  report: false,
},
{
  title: "PRO",
  cost: 49,
  user: "Unlimited",
  storage: true,
  public: true,
  access: true,
  private: true,
  support: true,
  domain: true,
  report: true,
}];

function App() {
  return (

    <section className='d-flex justify-content-around flex-wrap bg-primary'> 
     {cards.map((card)=>{
       return <Card data={card}/>
     })}
      
    </section>

  )
}

export default App
