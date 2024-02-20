import { useEffect, useState } from "react"



const useFetch = (url)=>{
    const [data,setData] = useState(null)
    useEffect(()=>{
        fetch(url).then((res) => {
            res.json().then(result=>{
                setData(result.products)
            })
        }).catch((err) => {
            console.log(err)
        });
    },[url])
   return data
}

export default useFetch