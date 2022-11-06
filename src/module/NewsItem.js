import React from 'react'

export default function NewsItem(props) {
    return (
        <>
            <div className="card my-2" >
                <img src={props.img} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                        {props.description}
                    </p>
                    <a href={props.url} className="btn btn-primary">
                        More...
                    </a>
                </div>
            </div>

        </>
    )
}
