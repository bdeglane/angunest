const React = require('react');
const {Fragment} = require('react');

module.exports = function Input({label, id, placeholder, type, pattern, required, errors}) {
    return (
        <Fragment>
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={id}
            >
                {label}
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                pattern={pattern}
                required={required}
            />
        </Fragment>
    )
};
