

const Formulario = (props) => {
const {inputs, setInputs} = props;

    const createUser = e => {

        setInputs({
           ...inputs,
        [e.target.name]: e.target.value 
        });
    };

    return (
        <form >
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" onChange={createUser} name="name"/>
            </div>
            <div>
                <label htmlFor="lastname">Lastname: </label>
                <input type="text" onChange={createUser} name="lastname"/>
            </div>
            <div>
                <label htmlFor="email">Email Address: </label>
                <input type="email" onChange={createUser} name="email"/>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" onChange={createUser} name="password"/>
            </div>
            <div>
                <label htmlFor="confirm">Confirm Password: </label>
                <input type="password" onChange={createUser} name="confirm"/>
            </div>
            <input type="submit" value="Create User" />
        </form>
    )
}

export default Formulario
