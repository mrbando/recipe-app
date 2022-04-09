import React, { useState } from "react";

function RecipeCreate({ saveRecipe }) {

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setName("");
    setCuisine("");
    setPhoto("");
    setRating("");
    setIngredients("");
    setPreparation("");
    saveRecipe({ name, cuisine, photo, rating, ingredients, preparation });
  };

  const nameChangeHandler = (event) => setName(event.target.value);
  const cuisineChangeHandler = (event) => setCuisine(event.target.value);
  const photoChangeHandler = (event) => setPhoto(event.target.value);
  const ratingChangeHandler = (event) => setRating(event.target.value);
  const ingredientsChangeHandler = (event) => setIngredients(event.target.value);
  const preparationChangeHandler = (event) => setPreparation(event.target.value);

  return (
    <form name="create" onSubmit={onSubmitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              {(
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  size="9"
                  required={true}
                  value={name}
                  onChange={nameChangeHandler}
                />
              )}
            </td>
            <td>
              {(
                <input
                  id="cuisine"
                  name="cuisine"
                  type="text"
                  placeholder="Cuisine"
                  size="9"
                  required={true}
                  value={cuisine}
                  onChange={cuisineChangeHandler}
                />
              )}
            </td>
            <td>
              {(
                <input
                  id="photo"
                  name="photo"
                  type="url"
                  placeholder="URL"
                  size="9"
                  required={true}
                  value={photo}
                  onChange={photoChangeHandler}
                />
              )}
            </td>
            <td>
              {(
                <textarea
                  id="ingredients"
                  name="ingredients"
                  type="text"
                  placeholder="Ingredients"
                  size="9"
                  required={true}
                  value={ingredients}
                  onChange={ingredientsChangeHandler}
                />
              )}
            </td>
            <td>
              {(
                <textarea
                  id="preparation"
                  name="preparation"
                  type="text"
                  placeholder="Preparation"
                  row={9}
                  required={true}
                  value={preparation}
                  onChange={preparationChangeHandler}
                />
              )}
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
export default RecipeCreate;

  // const initialState = {
  //   name: "",
  //   cuisine: "",
  //   photo: "",
  //   ingredients: "",
  //   preparation: ""
  // };

  // const [formData, setFormData] = useState({ ...initialState });

  // const handleChange = ({ target }) => {
  //   const value = target.value;
  //   setFormData({...formData, [target.name]: value})}

  // const makePost = (event) => {
  //   event.preventDefault();
  //   setRecipes([formData, ...recipes])
  //   setFormData({ ...initialState })
  // }

  // return (
  //   <form name="create" onSubmit={makePost} style={{backgroundColor: "#fff0c7"}}>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th className="ten">Name</th>
  //           <th className="ten">Cuisine</th>
  //           <th className="createForm">Photo</th>
  //           <th className="createFormMain">Ingredients</th>
  //           <th className="createFormMain">Preparation</th>
  //           <th className="createForm">Actions</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         <tr>
  //           <td>
  //           <input
  //             id="name"
  //             type="text"
  //             name="name"
  //             placeholder="Name"
  //             onChange={handleChange}
  //             value={formData.name}
  //           />
  //           </td>
  //           <td>
  //           <input
  //             id="cuisine"
  //             type="text"
  //             name="cuisine"
  //             placeholder="Cuisine"
  //             onChange={handleChange}
  //             value={formData.cuisine}
  //           />
  //           </td>
  //           <td>
  //           <input
  //             id="photo"
  //             type="url"
  //             name="photo"
  //             placeholder="URL"
  //             onChange={handleChange}
  //             value={formData.photo}
  //           />
  //           </td>
  //           <td>
  //           <textarea
  //             id="ingredients"
  //             type="text"
  //             name="ingredients"
  //             placeholder="Ingredients"
  //             onChange={handleChange}
  //             value={formData.ingredients}
  //             rows="4"
  //           />
  //           </td>
  //           <td>
  //           <textarea
  //             id="preparation"
  //             type="text"
  //             name="preparation"
  //             placeholder="Preparation"
  //             onChange={handleChange}
  //             value={formData.preparation}
  //             rows="4"
  //           />
  //           </td>
  //           <td>
  //           <button type="submit">Submit</button>
  //           </td>
  //         </tr>
  //       </tbody>
  //     </table>

  //   </form>
  // );
// }

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

// export default RecipeCreate;