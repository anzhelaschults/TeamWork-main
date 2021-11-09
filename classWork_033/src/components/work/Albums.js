import React, {useContext} from "react";
import {GlobalContext} from "./GlobalContextComponent";
import Users from "./Users";
import ToDo from "./ToDo";

//https://jsonplaceholder.typicode.com/albums title


const Albums = () => {

    const {albums} = useContext(GlobalContext)
    return (
        <div style={{display: 'flex'}}>
            <Users/>
            <div>
                {
                    albums.map((album) => (
                            <div
                                key={album.id}
                                className={album.completed ? "completed" : ""}
                            >
                                {album.title}
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}
export default Albums
