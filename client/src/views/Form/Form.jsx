import { useState } from "react";
import axios from 'axios';
const Form = ()=>{

    const [form,setForm] = useState({
        name: "",
        description: "",
        platforms: "",
        image: "",
        released: "",
        rating:"" ,
        genre:""
      });

      const [errors,setErrors]=useState({
        name: "",
        description: "",
        platforms: "",
        image: "",
        released: "",
        rating:"" ,
        genre:""
      });
      const changeHandler = (event)=>{
          const property = event.target.name;
          const value = event.target.value;
          setForm({...form, [property]:value})
          validate({...form, [property]:value})
      }
      const validate = (form) => {
        let errors = {};
        if (!form.name) {
          errors = {...errors, name: "Please input a videogame name."}
        } else {
          errors = {...errors, name: ""}
        };
      
        if (!form.description) {
          errors = {...errors, description: "Write a short description"}
        } else {
          errors = {...errors, description: ""}
        };
      
        setErrors(errors);
      };
      const submitHandler =(event)=>{
        event.preventDefault()
        axios.post("http://localhost:3001/videogames",form)
        .then(res=>alert(res))
        .catch(err=>alert(err));
      }


    return(
        <>
        <h1>Create a new videogame</h1>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="">Game title: </label>
                <input type="text" value={form.name} onChange={changeHandler} name="name"/>
               {errors.name && <span>{errors.name}</span>} 
             </div>
            <div>
                <label htmlFor="">Short description: </label>
                <input type="textarea" value={form.description} onChange={changeHandler} name="description"/>
               {errors.description && <span>{errors.description}</span> } 
            </div>
            <div>
                <label htmlFor="">Platforms: </label>
                <input type="text" value={form.platforms} onChange={changeHandler} name="platforms"/> {/* array de opciones varias */}
            </div>
            <div>
                <label htmlFor="">Image URL: </label>
                <input type="text" value={form.image} onChange={changeHandler} name="image"/>
            </div>
            <div>
                <label htmlFor="">Released data: </label>
                <input type="date" value={form.released} onChange={changeHandler} name="released"/>
            </div>
            <div>
  <label htmlFor="">Rating: </label>
  <select value={form.rating} onChange={changeHandler} name="rating">
    <option value="">-- Select a rating --</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select>
</div>

            <div>
                <label htmlFor="">Genre: </label>
                <input type="text" value={form.genre} onChange={changeHandler} name="genre"/>
            </div>
            <div>
                <button type="submit">submit</button>
            </div>
        </form>
        </>
    )
};

export default Form;