
import fetch from "node-fetch";
const loadData = async () =>{
    try{
    const data = await fetch("https://swapi.dev/api/people/1");
    const value = await data.json();
    console.log("promise rfesolved", value.name, value.gender);
}
catch{
    console.log("error!!!!!!!!")
}
}

loadData();

