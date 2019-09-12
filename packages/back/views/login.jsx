const React = require('react');
const Body = require('./body');
const Input = require('./input');
const LoginError = require('./login.error')

module.exports = function Login({error, to}) {
    return (
        <Body>
            <div className="body bg-white overflow-hidden border-t border-l border-r border-gray-400 bg-gray-200 flex justify-center items-center">
                <div className="w-full max-w-xs">
                    <form
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                        action={`/login?to=${to}`}
                        method="post"
                    >
                        {error && (<LoginError message={error}/>)}
                        <div className="mb-4">
                            <Input
                                id="username"
                                type="text"
                                placeholder="Username"
                                label="Username"
                                pattern="[a-zA-Z]+"
                                required={true}
                            />
                        </div>
                        <div className="mb-6">
                            <Input
                                id="password"
                                type="password"
                                placeholder="******************"
                                label="Password"
                                pattern="[a-zA-Z]+"
                                required={true}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <input
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            />
                            <a
                                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 opacity-50 cursor-not-allowed"
                                href="#"
                            >
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2019 @BenoitDecline Corp. MIT.
                    </p>
                </div>
            </div>
        </Body>
    )
}
