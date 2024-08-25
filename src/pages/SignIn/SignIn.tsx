import { FormEvent, useState } from "react";
import { useSignIn } from "./hooks/useSignIn";
import Loading from "../../components/Loading";

export default function SignIn() {
    const [username, setUsername] = useState("");
    const { mutate, error, isPending, isError } = useSignIn();

    const handleSignIn = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(username);
        mutate(username);
    };
    return (
        <div>
            <h1 className="text-center text-4xl">SignIn</h1>
            <form onSubmit={handleSignIn} className="flex flex-col gap-10 mt-10">
                <div className="flex flex-col gap-2">
                    <label>Username</label>
                    <input
                        className="border border-black bg-[#FDFDFD] rounded-md ps-3 pe-6 py-2 outline-none"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <p className="text-red-500 text-sm h-2">{isError && error?.message}</p>
                </div>

                <button type="submit" className="color-button flex justify-center items-center py-3 rounded-full">
                    {isPending ? <Loading /> : <span className="text-white">Sign In</span>}
                </button>
            </form>
        </div>
    );
}
