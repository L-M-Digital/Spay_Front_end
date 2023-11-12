import axios from 'axios';
import { useState } from 'react';

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(email, password);
    
    // try{
    //     const response = await axios.post('https://spayapp.ddns.net/admin/login/?next=/admin/',
    //             JSON.stringify({email, password}),
    //             {
    //                 headers: { 'Content-Type': 'application/json' }
    //             }            
    //         )
    // }
    // catch (error) {
    //     if (!error?.response) {
    //         setError('Erro ao acessar o servidor');
    //     } else if (error.response.status == 401) {
    //         setError('Usuário ou senha inválidos');
    //     }
    // }      
    
};

    return(
      <div className="App">
        <header className="App-header">
          <div className="login-form-wrap">
            <h2>login</h2> 
            <form className="login-form">
              <input type="email" 
                    nome= "email" 
                    placeholder="Email" 
                    required 
                    onChange={(e) => setEmail(e.target.value)}
                    />
              <input type="password" 
                    nome= "password" 
                    placeholder="Password" 
                    required 
                    onChange={(e) => setPassword(e.target.value)}
                    />
              <button type="submit" className='btn-login' onClick={(e) => handleLogin(e)}>Login</button>
            </form>
          </div>  
        </header>
      </div>
    );
}

export default Login;