export const Button = ({ children, ...props }) => (
  <button {...props} className={`p-2 bg-blue-600 text-white rounded ${props.className}`}>
    {children}
  </button>
);
