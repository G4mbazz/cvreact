import {useState, useEffect} from "react";
import Portfolio from "../pages/portfolio";

export default function GitComponent(){

    const [error, setError] = useState(null);
    const [isLoaded,setIsLoaded] = useState(false);
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/G4mbazz/repos")
        .then((res) => res.json())
        .then((items) =>
        {
            setIsLoaded(true);
            setData(items);
        },
        (error) =>{
            setIsLoaded(true);
            setError(error);
        }
        )
    },[])
    if(error){

    }
    else if(!isLoaded){
        return <div>Laddar...</div>
    }
    else{
        return(
            <Portfolio data={data}/>
        )
    }
}