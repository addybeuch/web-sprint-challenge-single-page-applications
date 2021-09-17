import React, {useState,useEffect} from "react";
import { Link , Route, Switch } from 'react-router-dom'
import Pizza from "./_tests_/Pizza"
import schema from './_tests_/formSchema'
import * as yup from 'yup';
import { string } from "yup/lib/locale";
import PizzaCard from "./_tests_/pizzaCard";



const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  bacon: false,
  chicken: false,
  special: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  special: '',
}

const initialPizzas = []
const initialDisabled = true

const App = () => {

const [pizzas, setPizzas] = useState(initialPizzas)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

const postPizza = newPizza => {
setPizzas([newPizza, ...pizzas])
setFormValues(initialFormValues);
}

const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]:''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
}

const inputChange = (name, value) => {
  validate(name, value);
  setFormValues({
    ...formValues,
    [name]: value
  })
}

const formSubmit = () => {
  const newPizza = {
    name: formValues.name.trim(),
    size: formValues.size,
    pepperoni: formValues.pepperoni,
    sausage: formValues.sausage,
    bacon: formValues.bacon,
    chicken: formValues.chicken,
    special: formValues.special.trim()

  }
  postPizza(newPizza);
}

useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])


  return (
    <>
    <div className='app'>
    <Link to='/'>Home</Link>
      <Switch>
        <Route exact path={'/'}>
        <nav>
            <h1>Lambda Eats</h1>
            <p>Mmmm beenza!</p>
            <Link id='order-pizza' to='/pizza'>Order Pizza</Link>
        </nav>
        </Route>
        <Route path={'/pizza'}>
          <Pizza
          values={formValues} 
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
           />
           {pizzas.map(pizza => {
             return (
              <PizzaCard key={pizza.id} details={pizza}/>
             )
           })
           }
          </Route>
      </Switch>


    </div>
    </>
  );
};
export default App;
