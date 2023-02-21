function Button({ children, type }) {
  return (
    <button
      className={`text-white font-bold py-2 px-4 rounded ${
        type === 'submit'
          ? 'bg-red-500 hover:bg-red-700 '
          : 'bg-gray-500 hover:bg-gray-700 '
      }`}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {children}
    </button>
  )
}

function SelectButton({ children, ...rest }) {
  return (
    <select
      role="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </select>
  )
}
export { SelectButton }
export default Button
