import { useRef } from "react";
import "./Form.css"

function Form({getRef}){
    const refName = useRef(null)
    function formHandler(e){
        e.preventDefault();
        console.log(refName.current.value)
        getRef(refName.current.value)
    }
    return<>
        <fieldset>
        <legend>Form</legend>
        <form onSubmit={formHandler} id="form">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="email" id="email"  />
            <br></br>
            <label htmlFor="password">Password</label>
            <input type="password"  id="password"  placeholder="password"/>
            <br></br>

            <label htmlFor="name">Name</label>
            <input ref={refName} type="text"  placeholder="name" id="name"/>
            <br></br>

            <label htmlFor="occupatation">occupatation</label>
            <input type="text" id="occupatation" placeholder="occupatation" />

            <br></br>
            <input type="submit" />

        </form>
        </fieldset>
        
    </>
}

export default Form