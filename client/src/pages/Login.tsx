import { Link } from "react-router-dom";
import herobg from "../assets/hero_bg.jpeg";
import {
  BikeIcon,
  Loader2Icon,
  LockIcon,
  MailIcon,
  UserIcon,
} from "lucide-react";
import { useState } from "react";
function Login() {
  const [isLoadingState, setIsloadingState] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => (window.location.href = "/"), 1000);
  };
  return (
    <div className="min-h-screen flex">
      {/* left side */}
      <div className="hidden lg:flex lg:w-1/2 bg-app-green relative items-center justify-center">
        <img
          src={herobg}
          alt="bg image"
          className="absolute inset-0 object-cover h-full opacity-10 bg-center"
        />
        <div className="relative text-cennter px-12">
          <h2 className="text-4xl font-semibold text-white mb-4">
            Welcome back to Instcart
          </h2>
          <p className="text-white/60 front-serif text-xl max-w-sm mx-auto text-center">
            Fresh grocies and organic produce, deliveres to your doorstep
          </p>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1 flex-center px-4 py-12 bg-app-cream">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-2">
              <BikeIcon className="size-8 text-app-green" />
              <span className=""> InstaCart</span>
            </Link>
            <h1 className="text-2xl font-semibold text-app-green mb-2">
              {isLoadingState
                ? "Sign in to your Account"
                : "Sign up for an account"}
            </h1>
            <p className="text-sm text-app-text-light ">
              {isLoadingState ? "Dont have Account" : "Already havr an account"}{" "}
              <button
                onClick={() => setIsloadingState(!isLoadingState)}
                className="text-orange-500 ml-1 font-semibold hover:text-orange-600 transitiom-color"
              >
                {isLoadingState ? "Create one " : "Sign In"}
              </button>
            </p>
          </div>

          {/* Login & Register form  */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {isLoadingState && (
              <label className="text-sm flex flex-col gap-1">
                Name
                <div className="relative">
                  <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light" />
                  <input
                    type="text"
                    name=""
                    id=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="your name"
                    className="w-full pl-11 pr-4 py-2 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all"
                  />
                </div>
              </label>
            )}
            <label className="text-sm flex flex-col gap-1">
              Email
              <div className="relative">
                <MailIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light" />
                <input
                  type="email"
                  name=""
                  id=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@example.com"
                  className="w-full pl-11 pr-4 py-2 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all"
                />
              </div>
            </label>
            <label className="text-sm flex flex-col gap-1">
              Password
              <div className="relative">
                <LockIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light" />
                <input
                  type="password"
                  name=""
                  id=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="......"
                  className="w-full pl-11 pr-4 py-2 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all"
                />
              </div>
            </label>
            <button
              type="submit"
              disabled={loading}
              className="flex-center w-full py-3 bg-green-950 text-white font-semibold rounded-xl hover:bg-green-900 transition-colors disabled:opacity-50"
            >
              {loading ? (
                <Loader2Icon className="animate-spin" />
              ) : isLoadingState ? (
                "Sign In "
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
