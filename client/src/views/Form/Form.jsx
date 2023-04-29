import { useState } from "react";
import axios from 'axios';

import styles from './Form.module.css'

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
      <div className={styles.Container}>
        <div className={styles.card}>
        <h1 className={styles.text}>Create a new videogame</h1>
        <form onSubmit={submitHandler}>
            <div>
                <label className={styles.text} htmlFor="">Game title: </label>
                <input type="text" value={form.name} onChange={changeHandler} name="name"/>
               {errors.name && <span className={styles.text} >{errors.name}</span>} 
             </div>
            <div>
                <label  className={styles.text} htmlFor="">Short description: </label>
                <input type="textarea" value={form.description} onChange={changeHandler} name="description"/>
               {errors.description && <span  className={styles.text} >{errors.description}</span> } 
            </div>
            <div>
                <label  className={styles.text}  htmlFor="">Platforms: </label>
                <input type="text" value={form.platforms} onChange={changeHandler} name="platforms"/> {/* array de opciones varias */}
            </div>
            <div>
                <label   className={styles.text} htmlFor="">Image URL: </label>
                <input type="text" value={form.image} onChange={changeHandler} name="image"/>
            </div>
            <div>
                <label   className={styles.text} htmlFor="">Released data: </label>
                <input type="date" value={form.released} onChange={changeHandler} name="released"/>
            </div>
            <div>
  <label   className={styles.text} htmlFor="">Rating: </label>
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
                <label   className={styles.text} htmlFor="">Genre: </label>
                <input type="text" value={form.genre} onChange={changeHandler} name="genre"/>
            </div>
            <div>
                <button   className={styles.button} type="submit">submit</button>
            </div>
        </form>
        </div>
        </div>
  
    )
};

export default Form;