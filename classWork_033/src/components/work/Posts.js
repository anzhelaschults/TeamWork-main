import React, {useContext} from "react";
import {GlobalContext} from "./GlobalContextComponent";
import Users from "./Users";
import ToDo from "./ToDo";

//https://jsonplaceholder.typicode.com/posts title

const Posts = () => {

    const {posts} = useContext(GlobalContext)
    return (
        <div style={{display: 'flex'}}>
            <Users/>
            <div>
                {
                    posts.map((post) => (
                            <div
                                key={post.id}
                                className={post.completed ? "completed" : ""}
                            >
                                {post.title}
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}
export default Posts
