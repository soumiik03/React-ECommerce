import { useState } from "react";
import "./Login.css";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters"),
});

export const Login = () => {
  /* const [email, setEmail] = useState("");
  const [password, setPassword] = useState("") */

  const[formData,setFormData]=useState({
    email:"",
    password:""
  })
  
  const [error, setError] = useState("");

  const chnageHandle=(e:any)=>{
    const name=e.target.name
    const value=e.target.value

    setFormData({...formData,[name]:value})
    setError("");
  }

  const submitHandler = (e: any) => {
    e.preventDefault();
    /* console.log("Email ",email)
    console.log("Email ",password) */
    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Invalid form data");
      return;
    }
    setError("");
    console.log(result.data)
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={submitHandler} noValidate>
        <input value={formData.email} name="email" onChange={chnageHandle} placeholder="Email.." type="email"/>
        <input value={formData.password} name="password" onChange={chnageHandle} placeholder="Password.." type="password" />
        {error && <p className="login-error" role="alert">{error}</p>}
        <button>Login</button>
      </form>
    </div>
  );
};
