import React, {useState} from 'react';

import Title from "./components/Title/Title";
import Label from './components/Label/Label';
import Input from "./components/Input/Input";

import './Login.css';


const Login = () => {

    const [ user, setUser ] = useState('');
    const [ pass, setPass ] = useState('');
    const [ passwordError, setPasswordError ] = useState(false);
    const [ isLogin, setIsLogin ] = useState(true);
    const [ hasError, setHasError ] = useState(false);


    function handleChange(name, value) {
        if (name === 'user'){
            // variable para almacenar
            setUser(value);
            setHasError(false);
        }
        else {
            if ( value.length < 6 ) {
                setPasswordError(true);
                setHasError(false);
            }
            else {
                setPasswordError(false);
                setPass(value);
                setHasError(false);
            }
        }
    }

    function ifMatch (param) {
        if(param.user.length > 0&& param.pass.length > 0){
            if (param.user === 'fatilluch' && param.pass === 'f.123456'){
                const { user, pass } = param;
                let ac = { user, pass};
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);
            }
            else {
                setIsLogin(false);
                setHasError(true);
            }
        } else {
            setIsLogin(false);
            setHasError(true);
        }
    }

    function handleSubmit () {
        let account = { user, pass }
        if (account) {
            ifMatch(account);
        }
    }

    return (
        <div className="login-container">
            { !isLogin ?
                <div className="home-container">
                    <h1> Welcome, {user}! </h1>
                    <label> Congratulations, you're logged in :) </label>
                </div>
             :
            <div className="login-content">
                <Title text='Welcome!' />
                { hasError &&
                    <label className="label-alert">
                        Su contraseña o usuario son incorrectos,
                        o no existen en nuestra plataforma
                    </label>
                }
                <Label text= 'User: '/>
                <Input
                    attribute={{
                        id: 'user',
                        name: 'user',
                        type: 'text',
                        placeholder: 'User: ',
                    }}
                    handleChange={handleChange}
                />
                <Label text= 'Password: '/>
                <Input
                    attribute={{
                        id: 'password',
                        name: 'password',
                        type: 'password',
                        placeholder: 'Password: '
                    }}
                    handleChange={handleChange}
                    param={passwordError}
                />

                { passwordError &&
                    <label className='label-error'>
                        Contraseña invalida o incompleta
                    </label>
                }

                <button className="submit-button" onClick={handleSubmit}> Log In </button>
                <button className="cancel-button"> Cancel </button>
            </div>
            }
        </div>
    )
};

export default Login;