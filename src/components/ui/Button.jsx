"use client";
import { useModal } from "../hooks/use-modal-store";

// import "./button.scss"
export default function Button({
  children,
  className,
  onClick,
  active,
  disabled,
  popup,
}) {
  const { openPopup } = useModal();
  const handleClick = () => {

    if (popup) {
      openPopup(popup);
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`button ${className ? className : ""} ${
        active ? "active" : ""
      }`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
