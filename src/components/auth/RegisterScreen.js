import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch } from 'react-redux';       
import { removeError, setError } from '../../actions/ui';

export const RegisterScreen = () => {

    const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    name: 'emiliano',
    email: 'emi@gmail.com',
    password: '123456',
    password2: '123456'
  });
    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if( isFormValid() ) {
            console.log('Formulario cargado correctamente');
        }
    }

    const isFormValid = () => {
        
        if( name.trim() <= 0) {
            dispatch( setError('El nombre es obligatorio') );            
            return false;
        } else if (email.trim() <=0 || !validator.isEmail(email)) {
            dispatch( setError('El email es obligatorio o no es valido') );
            return false;
        } else if (password.trim()<=0 || password2.trim()<=0 || password !== password2 || password.length < 6) {
            dispatch( setError('Las contraseñas no Las contraseñas no coinciden o no han sido cargadas, y la contraseña debe tener al menos 6 caracteres o son incorrectas') );
            return false;
        }
        dispatch( removeError());   
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={ handleRegister }>

                <div className="auth__alert-error">
                    hola mundo
                </div>

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={ password2 }
                    onChange={ handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
