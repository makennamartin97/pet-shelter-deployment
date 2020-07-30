import React, {useState, useEffect} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';


export default props => {

    const [pet, setPet] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + props._id)
            .then(res => setPet(res.data))
    }, [])

    const adoptPet = (_id) => {
        axios.delete(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                axios.get("http://localhost:8000/api/pets")
                    .then( res => {
                        setPet(res.data);
                        navigate("/pets")
                    })
                    .catch(err => console.log(err));
            })
    }

    return(
        <div className="col-sm-6 offset-sm-3">
            <div className="card m-2">
                <div className="card-header bg-info text-white text-center">
                    About: { pet.petName } 
                </div>
                <div className="card-body mn-4">
                    <p>Type: { pet.petType }</p>
                    <p>Description: { pet.petDesc }</p>
                    <p>Skills: {pet.petSkills}</p>
                </div>
                <div className="text-center m-2">
                    <Link className="btn btn-warning float-left" to={"/pets/" + pet._id + "/edit"}>Edit</Link>
                    <button className="btn btn-success float-right" onClick={(e)=>{adoptPet(pet._id)}}>Adopt {pet.petName}!</button>
                </div>

            </div>  
        </div>

    )
}
