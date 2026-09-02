import './Form.css';

function Form({ children, onSubmit }) {
  return (
    <form className="cl-form" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Form;
