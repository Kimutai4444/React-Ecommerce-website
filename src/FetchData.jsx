import React, { useEffect, useState } from "react";

function FetchData() {
    const [errorstate, setErrorState] = useState(false);
    const[errormessage,setErrorMessag]=useState("")

    function getPost() {
        fetch("https:jsonplaceholder.typicode.com/posts/1").
        then(request => request.json()).
        then(Response => {
            console.log(Response);
        }).
            catch(error => {
            setErrorState(true)
                // console.log(error.message);
                console.log(error.message);
        })
    
    }

    function checkIfNumber(value) {
        if (isNaN(value)) {
            throw new Error("NOt a number")
        } else {
            console.log(`${value} is a number`);
        }
    }
    
    function check() {
        try {
            checkIfNumber("r")
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
      check();
    }, []);
    
    return (<>
        {errormessage}
        {errorstate? "An error occured":""}
    </>);
}
export default FetchData;