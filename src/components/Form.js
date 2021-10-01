import { useState } from "react";
import { FormStyled } from "./styles/Form.styled";
import ButtonStyled from "../components/styles/Button.styled";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form({ sent, setSent, setData, data }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(null);

  const emptyField = () => {
    toast.warning("Veuillez renseigner tous les champs obligatoires!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !lastName || !email) {
      emptyField();
    } else {
      try {
        const response = await axios.post("http://localhost:4000/send", {
          name: name,
          last_name: lastName,
          email: email,
          number: number,
        });
        console.log("response:", response.data);
        setData(response.data);
        setSent(true);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <FormStyled onSubmit={(event) => handleSubmit(event)}>
        <h1>Inscrivez-vous à la newsletter</h1>
        <label htmlFor='name'>Prénom*:</label>
        <input
          onChange={(e) => {
            setName(e.target.value);
            console.log(name);
          }}
          type='text'
          name='name'
        />
        <label htmlFor='lastName'>Nom*:</label>
        <input
          onChange={(e) => {
            setLastName(e.target.value);
            console.log(lastName);
          }}
          type='text'
          name='lastName'
        />
        <label htmlFor='email'>E-mail*:</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(email);
          }}
          type='email'
          name='email'
        />
        <label htmlFor='number'>Numero(optionnel):</label>
        <input
          onChange={(e) => {
            setNumber(e.target.value);
            console.log(number);
          }}
          type='number'
          name='number'
        />
        <ButtonStyled type='submit' value='Envoyer'>
          Envoyer
        </ButtonStyled>
      </FormStyled>
      <ToastContainer />
    </>
  );
}

export default Form;
