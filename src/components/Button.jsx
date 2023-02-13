function Button({ disabled = false, type = 'button', children }) {
  return (
    <button
      className="text-xl border-gray-500 border px-3 p-1 rounded-lg hover:text-white hover:bg-gray-900 hover:border-white flex items-center content-center"
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
