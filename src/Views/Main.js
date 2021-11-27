// MaimData function is for all id //

import React, { useEffect, useState } from 'react'
import { GetPost } from '../API/api'
import { Card } from '../Components/Card'

export const Main = () => {

    // define state
    const [data, setData] = useState([])

    // useEffect        
    useEffect(() => {

        // "GetPost" 
        GetPost()
            .then((res) => {
                setData(res.data) // here set response for data
            })
            .catch((err) => {
                console.log(err) // if erroe accures than came here error
            })

    }, [])

    return (
        <div>
            <div className="row m-0">
                {
                    data.map((i) =>
                        <div class="col-md-4 my-2">
                            <Card
                                link={`${i.id}`}
                                userid={i.userId} id={i.id} title={i.title} body={i.body} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}


