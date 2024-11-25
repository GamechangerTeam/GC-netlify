// import "./button.scss"
export default function ButtonText({children, className, onClick,  active, disabled   }) {
  

    return (
      <button className={`button-text ${className} ${active ? "active" : ""}`} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }
  