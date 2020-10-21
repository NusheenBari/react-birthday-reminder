import React from "react"
import birthdays from './birthdays'

const Birthday = () => {
    const [person, setPerson] = React.useState(birthdays);
    const filterToday = () => {
        let d = new Date()
        let dayToday = d.getDate()

        let todays = person.filter((people) => people.bday === dayToday & people.bmonth === 'October')
        setPerson(todays)
    }
 
    return <React.Fragment>
         <section className="container">

<h1 style={{color:'teal'}}>Today's Birthdays</h1>
        { person.map(eachPerson => {const{name, bday, bmonth, pic} = eachPerson
           
        return(   
            <article key={eachPerson.id} className="people">
                <img alt={name} src={pic}></img>
                <div className="dets">
                    <h4>{name}</h4>
                    <p>{bday} {bmonth}</p>
                </div>
            </article>


        )
        })
        
        }
        <button onClick={()=>{alert('Wishes sent!')}}>Wish All</button>
        <button onClick={filterToday}>Filter Today All</button>


        </section>
    </React.Fragment>
}

export default Birthday