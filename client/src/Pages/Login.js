import { useState } from "react";
import { post } from "../helpers/api_helper";
import logo from "../assets/logo.png"
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    let apiEndpoint;
    switch (role) {
      case "user":
        apiEndpoint = "/user/signin";
        break;
      case "admin":
        apiEndpoint = "/admin/signin";
        break;
      default:
        console.error("Invalid role");
        alert("Invalid role");
        return;
    }

    const user = {
      email,
      password,
      role,
    };

    try {
      setIsLoading(true);
      const response = await post(apiEndpoint, user);
      if(!response){
        toast.error(response.message)
      }

      if (response) {
      

        Cookies.set("token", response.token, {
          expires: 1,
          domain: "maid-hiring.vercel.app",
          secure: true,
        });
        Cookies.set("role", response.user.role, { domain: "maid-hiring.vercel.app" });
        Cookies.set("username", response.user.firstName, {
          domain: "maid-hiring.vercel.app",
          secure: true,
        });
  
        Cookies.set("status", response.user.status, {
          domain: "maid-hiring.vercel.app",
          secure: true,
        });
       
        Cookies.set("token", response.token, {
          expires: 1,
          domain: "localhost",
        });
        Cookies.set("role", response.user.role, { domain: "localhost" });
        Cookies.set("username", response.user.firstName, {
          domain: "localhost",
        });
        Cookies.set("status", response.user.status, {
          domain: "localhost",
        });
      
       
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "Click Ok to continue",
        }).then((result) => {
          if (result.isConfirmed) {
            const role = Cookies.get("role");
            if (role === "admin") {
              window.location.href = `/adminDashboard/application`;
            } else {
              window.location.href = `/userDashboard/application`;
            }
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: response.message || "Unexpected login error occurred.",
        });
      }

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Invalid Credentials/Server Error")
      setIsLoading(false);
    }
  };

  return (
    <>
    <ToastContainer/>
      <div className=" flex  justify-center">
        <div className="flex flex-col  justify-center  py-8 lg:mx-auto h-screen lg:py-0">
          <div className="flex flex-row shadow rounded-2xl md:mt-0 sm:max-w-md">
            <div className="p-6 space-y-4 tranistion-all delay-100 md:space-y-6 bg-white  rounded-2xl login-card backdrop-blur-lg sm:p-8 lg:w-96 w-72">
              <h1 className="text-xl font-mono items-center justify-center flex font-bold  tracking-tight text-gray-900 md:text-2xl dark:text-white">
                <img src={logo} alt="" className="w-48 p-1 " />
                {/* <p className="flex justify-center mx-3">Log In</p>  */}
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-green-100 border-none text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="bg-green-100 border-none text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                    required=""
                  />
                </div>
                <div className="flex justify-center space-x-6">
                  <div>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="role"
                        value="user"
                        checked={role === "user"}
                        onChange={() => setRole("user")}
                      />
                      <span>Maid</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="role"
                        value="admin"
                        checked={role === "admin"}
                        onChange={() => setRole("admin")}
                      />
                      <span>Client</span>
                    </label>
                  </div>
                </div>
              </form>
              <button
                className="flex justify-center  w-60 py-2  md:hover:w-64 transition-all delay-200  ease-linear hover:shadow-xl  mx-auto text-white bg-primary-600 bg-[#308e3c] hover:bg-[#2a6f33] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5  text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={handleLogin}
              >
                <svg
                  aria-hidden="true"
                  className={
                    isLoading
                      ? "mr-1 w-5 h-5  text-gray-200 animate-spin dark:text-gray-600 fill-white"
                      : "hidden"
                  }
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <p>Log In</p>
              </button>
         

              <span className="relative top-3 font-semibold mr-2">New to Eco Home?</span>
              <a
                href="/register"
                className="relative top-3 left-1 text-emerald-700 hover:text-emerald-800 "
              >
              Register Here
              </a>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
