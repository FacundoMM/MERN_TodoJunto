import { useState } from "react";

const PersonCard = ({ name, lastName, age, hair }) => {

    const [Newage, setAge] = useState(age);
    

    const Birthday = () => {
        setAge(Newage + 1);
    };

    return (
        <div>
            <h1>{lastName}, {name}</h1>
            <div>
                <p>age: {Newage}</p>
                <p>Hair color: {hair}</p>
            </div>
            <div>
                <button type="button" onClick={Birthday}>Birthday Button for {name} {lastName}</button>
            </div>
        </div>
    )
}

export default PersonCard
