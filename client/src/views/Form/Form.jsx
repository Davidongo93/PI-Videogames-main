import { useState } from "react";

const Form = ()=>{

    const [form,setForm] = useState({
        name: "",
        description: "",
        platforms: "",
        image: "",
        release: "",
        rating:"" ,
        genre:""
      });

      const [errors,setErrors]=useState({
        name: "",
        description: "",
        platforms: "",
        image: "",
        release: "",
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
          setErrors({...errors,name:"Please input a videogame name."})
        }else{
        setErrors({...errors,name:""})
        };

        if (!form.description) {
          setErrors({...errors,description:"Write a short description"})
        }else{
        setErrors({...errors,description:""})
        };

      
      };
      


    return(
        <>
        <h1>Create a new videogame</h1>
        <form>
            <div>
                <label htmlFor="">Game title: </label>
                <input type="text" value={form.name} onChange={changeHandler} name="name"/>
                <span>{errors.name}</span>
            </div>
            <div>
                <label htmlFor="">Short description: </label>
                <input type="textarea" value={form.description} onChange={changeHandler} name="description"/>
                <span>{errors.description}</span>
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
                <label htmlFor="">Release data: </label>
                <input type="date" value={form.release} onChange={changeHandler} name="release"/>
            </div>
            <div>
                <label htmlFor="">Rating: </label>
                <input type="text" value={form.rating} onChange={changeHandler} name="rating"/>
            </div>
            <div>
                <label htmlFor="">Genre: </label>
                <input type="text" value={form.genre} onChange={changeHandler} name="genre"/>
            </div>
        </form>
        </>
    )
};

export default Form;