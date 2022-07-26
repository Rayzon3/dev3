const Login = () => {
    return(
        <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-black">
            <h1 className="font-bold text-4xl text-emerald-500">Register</h1>
            <div>
                <div className="p-4 flex flex-col">
                    <input type="text" className="p-4 m-2 rounded-md" placeholder="Enter Username" />
                    <input type="text" className="p-4 m-2 rounded-md" placeholder="Enter Password"/>
                    <button className="rounded-md p-4 m-2 bg-emerald-500 hover:bg-emerald-600">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login