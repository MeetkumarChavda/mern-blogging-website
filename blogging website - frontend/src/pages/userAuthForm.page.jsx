import InputBox from "../components/input.component";
import googleIcon from "../imgs/google.png";
import { Link } from "react-router-dom";

const UserAuthForm = ({ type })=>{
    return(
       <section className="h-cover  flex items-center justify-center">
            <form action="w-[80%] max-w-[400px]">
                <h1 className = "text-4xl font-gelasio capitalize text-center mb-24">
                     {type == "sign-in"  ? "Welcome Back" : "Join us Today"}
                </h1>
                {
                    type != "sign-in" ?
                    <InputBox 
                        name ="FullName"
                        type = "text"
                        placeholder= "Full Name"
                        icon= "fi-rr-user"
                        
                    /> 
                    : ""
                }
                <InputBox 
                    name ="email"
                    type = "email"
                    placeholder= "username@example.com"
                    icon = "fi-rr-envelope"
                    /> 
                <InputBox 
                    name ="password"
                    type = "password"
                    placeholder= "password"
                    icon = "fi-rr-key"
                    />
                <button 
                    className="btn-dark center mt-14"
                    type = "submit"
                >
                    { type.replace("-", " ") }
                </button>

                <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black border-black">
                    <hr className="w-1/2 border=black"></hr>
                    <p>or</p>
                    <hr className="w-1/2 border=black"></hr>
                </div>

                <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center px-10">
                    <img src={googleIcon} 
                    className="w-5 "
                    alt="" />
                    continue with google
                </button>

                {
                    type == "sign-in" ? 
                    <p className="mt-6 text-dark-grey text-xl text-center">
                        Don't have an account?
                        <Link to="/signup" className = "underline text-black text-xl ml-1">
                          Join us today
                        </Link>

                    </p>
                    :
                     <p className="mt-6 text-dark-grey text-xl text-center">
                    Already a member ?
                    <Link to="/signin" className = "underline text-black text-xl ml-1">
                        Sign in here
                    </Link>

                </p>
                }
            
            </form>
       </section>
    )
}

export default UserAuthForm;