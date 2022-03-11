import fetch from "node-fetch";
fetch("https://swapi.dev/api/people/1")
.then((res)=>{
        //console.log("Data fetched", res);
        res.json().then(
            (data)=>{
                console.log(data)
            }
        ).catch((error)=>{console.log(error)});
    }
    ).catch(
        (e)=>{
            console.log("error commed : ", e);
        }
    )