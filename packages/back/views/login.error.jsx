const React = require('react')

module.exports = function LoginError({ message }) {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Oops!&nbsp;</strong>
      <span className="block sm:inline">{message}</span>
    </div>
  )
}
