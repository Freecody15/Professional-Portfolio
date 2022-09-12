import { signInWithPopup } from "firebase/auth";


const Login = () => {
    return (
        <div className="dashboard">
            <button onClick={signInWithPopup}>
                Sign in with google
            </button>
        </div>
    )
}

export default Login;