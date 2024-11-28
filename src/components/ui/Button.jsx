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
  videoSrc,
}) {
  const { openPopup } = useModal();
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    // if (videoSrc) {
    //   return openVideoPopup(popup, videoSrc);
    // }
    if (popup) {
     openPopup(popup, videoSrc);
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
