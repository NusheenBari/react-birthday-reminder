import React, {useEffect, useState} from "react"
import birthdays from './birthdays'

const Birthday = () => {
    const [people, setPeople] = useState(birthdays)
    const [thisMonth, setThisMonth] = useState('');
    let d = new Date()
    let today = d.getDate()
    let theMonth = d.getMonth()
    
    const findMonth = () => {
        if(theMonth===0){
            setThisMonth('January')
        }
        else if(theMonth===1){
            setThisMonth('February')
        } 
        else if(theMonth===2){
            setThisMonth('March')
        } 
        else if(theMonth===3){
            setThisMonth('April')
        } 
        else if(theMonth===4){
            setThisMonth('May')
        } 
        else if(theMonth===5){
            setThisMonth('June')
        } 
        else if(theMonth===6){
            setThisMonth('July')
        } 
        else if(theMonth===7){
            setThisMonth('August')
        } 
        else if(theMonth===8){
            setThisMonth('September')
        } 
        else if(theMonth===9){
            setThisMonth('October')
        } 
        else if(theMonth===10){
            setThisMonth('November')
        } 
        else{
            setThisMonth('December')
        }
    }

    const filterToday = () => {
        
    let todays = people.filter((persons) => persons.bday === today && persons.bmonth === thisMonth)
    setPeople(todays)
     
  }

  const filterThisMonth = () => {
      let months = people.filter((persons) => persons.bmonth===thisMonth)
      setPeople(months)
  }

    useEffect(() => {
        findMonth()
    });


    return <>
    <section style={{background:'white', width: '50%', margin:'30px auto',padding:'30px', borderRadius:'10px'}}>
    <h1 style={{color:'teal'}}>Birthdays!    <button onClick={filterToday}>Today</button>
    <button onClick={filterThisMonth}>This Month</button>
</h1>

  

        {people.map(person => {const{id, name, bday, bmonth,pic} = person
            return(
                <article style={{paddingBottom:'20px'}}  key={id}>
                    <img  alt={`${id}-${name}`} src={pic}/>
                    {bday===today && bmonth===thisMonth && <button onClick={()=>{alert(`Wishes sent to ${name}!`)}}> Wish </button>}
                    <div>
            {bday===today && bmonth===thisMonth ? <h2><i style={{color:'gold'}}>Today is {name}'s birthday!</i></h2> : <p>{name}, {bday} {bmonth}</p>}
                       
                    </div>
                    
                </article>
            )
        
        })}
    <button onClick={()=>setPeople(birthdays)}>View all</button>

    </section>
        

        </>

  
}


export default Birthday