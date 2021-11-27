import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetPostData } from '../API/api'
import loadimg from '../Img/Loader.gif'

export function ViewData() {

    const param = useParams() // it's only hook! when u want to id from route

    // define State
    const [data, setData] = useState({})
    const [loader, setLoader] = useState(false)

    // useEffect
    useEffect(() => {

        // Function for 
        GetPostData(parseInt(param.id)) // here convert data in parseint() and pass id to function
            .then((res) => {
                setData(res.data) // set response data
                setLoader(true) // Loader true

            }).catch((err) => {
                setLoader(false) // Loader false
            })
    }, [])

    return (
        <>
            {
                !loader ? <img src={loadimg} /> // when loader is not true than load otherwise show data
                    : <div>
                        <h1>{data.id}</h1>
                        <h2>{data.userId}</h2>
                        <h4>{data.title}</h4>
                        <h6>{data.body}</h6>
                    </div>
            }   
        </>
    )
}

// ViewData function is for perticular id 