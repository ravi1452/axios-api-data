import React from 'react'
import { Link } from 'react-router-dom'

export function Card(props) {

    return (
        <div class="card">
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <div className="card-body bg-warning">

                <Link to={props.link}>{props.link}</Link>
                
                <h5 className="card-text"> ID = {props.userid} </h5>
                <h6 className="card-title"> NAME = {props.title} </h6>
                <p className="card-text"> BODY = {props.body} </p>
            </div>
        </div>
    )
}
