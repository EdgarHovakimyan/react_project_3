import { useState } from "react"

function Posts({ seeposts, delPost, selPost, delallPosts }) {
    return (<>
        <div className="d-flex flex-wrap justify-content-evenly gap-2 p-2">
            {seeposts.map(item => (
                <div
                    key={item.id}
                    className="card p-2"
                    style={{ width: "250px", border: item.selected ? "2px solid red" : "1px solid gray" }}
                >
                    <div className="card-body">
                        <h4 className="card-title">{item.title}</h4>
                        <p className="card-text">{item.body}</p>
                        {item.categories.map(j => (
                            <div
                                key={j}
                                className="card"
                                style={{ width: "120px" }}
                            >
                                <p className="m-2">{j}</p>
                            </div>
                        ))}
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-danger" onClick={() => delPost(item.id)}>Delete</button>
                        <button className="btn btn-primary" onClick={() => selPost(item.id)} value={item.selected}>Select</button>
                    </div>
                </div>
            ))}
        </div>
        <button className="btn btn-danger w-100" onClick={() => delallPosts()}>Delete Selected</button>
    </>)
}
export default Posts