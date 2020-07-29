import { Link, navigate, Router} from '@reach/router';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PetForm = props => {
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDesc, setPetDesc] = useState("");
    const [petSkills, setPetSkills] = useState("");
    const [errors, setErrors] = useState({});

    const addPet = e => {
        e.preventDefault();
        const newpet = {petName, petType, petDesc, petSkills};
        axios.post("http://localhost:8000/api/pets", newpet)
            .then(res =>{
                console.log(res);
                if(res.data.errors){
                    setErrors(res.data.errors)
                }else{
                    navigate("/");
                }
                
            }).catch(err => console.log(err));
    }
    return(
        <div>
            <form  className="col-sm-8 offset-sm-2" onSubmit={addPet} >
                <img src="/img/cat2.png" alt="cat" className="img-fluid"/>
                <div className="card mt-3">
                    <div className="card-header bg-info text-light text-center">Do you know a pet needing a home?</div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" className="form-control" onChange={e => setPetName(e.target.value)} />
                            { errors.petName ? <p className="text-danger">{errors.petName.properties.message}</p>: "" }

                        </div>
                        <div className="form-group">
                            <label>Type:</label>
                            <input type="text" className="form-control" onChange={e => setPetType(e.target.value)} />
                            { errors.petType ? <p className="text-danger">{errors.petType.properties.message}</p>: "" }
                          

                        </div>
                        <div className="form-group">
                            <label>Description:</label>
                            <input type="text" className="form-control" onChange={e => setPetDesc(e.target.value)} />
                            { errors.petDesc ? <p className="text-danger">{errors.petDesc.properties.message}</p>: "" }


                        </div>
                        <div className="form-group">
                            <label>Any skills?</label>
                            <input type="text" className="form-control" onChange={e => setPetSkills(e.target.value)} />
                        </div>
                    </div>
                    <input type="submit" className="btn btn-success mt-4" value="Post" />

                </div>
            </form>

        </div>
    )

}
export default PetForm;