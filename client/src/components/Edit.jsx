import React, {useState, useEffect} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';


const Edit = props => {
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDesc, setPetDesc] = useState("");
    const [petSkills, setPetSkills] = useState("");
    const [errors, setErrors] = useState({});

    useEffect( () => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                console.log(res);
                setPetName(res.data.petName);
                setPetType(res.data.petType);
                setPetDesc(res.data.petDesc);
                setPetSkills(res.data.petSkills);
            }).catch(errors => console.log(errors));
    }, [props._id]);
    const editPet = e => {
        e.preventDefault();
        const updatedpet = {petName, petType, petDesc, petSkills};
        axios.put(`http://localhost:8000/api/pets/${props._id}`, updatedpet)
            .then(res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/");
                }
            }).catch(err => console.log(err));
    }

    return(
        <div>
        <form  className="col-sm-8 offset-sm-2" onSubmit={editPet} >
            <div className="card mt-3">
                <div className="card-header bg-info text-light text-center">Edit Pet</div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" className="form-control" onChange={e => setPetName(e.target.value)} value={petName} />
                        { errors.petName ? <p className="text-danger">{errors.petName.properties.message}</p>: "" }

                    </div>
                    <div className="form-group">
                        <label>Type:</label>
                        <input type="text" className="form-control" onChange={e => setPetType(e.target.value)} value={petType}/>
                        { errors.petType ? <p className="text-danger">{errors.petType.properties.message}</p>: "" }
                      

                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" className="form-control" onChange={e => setPetDesc(e.target.value)} value={petDesc}/>
                        { errors.petDesc ? <p className="text-danger">{errors.petDesc.properties.message}</p>: "" }


                    </div>
                    <div className="form-group">
                        <label>Any skills?</label>
                        <input type="text" className="form-control" onChange={e => setPetSkills(e.target.value)} value={petSkills} />

                    </div>
                </div>
                <input type="submit" className="btn btn-success mt-4" value="Update" />

            </div>
        </form>

    </div>

    )
}
export default Edit;