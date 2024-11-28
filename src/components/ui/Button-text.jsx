"use client";
import { useModal } from "../hooks/use-modal-store";

export default function ButtonText({
  children,
  className,
  onClick,
  active,
  disabled,
  popup,
  videoSrc
}) {
  const { openPopup } = useModal();

  const handleClick = () => {
    if (popup) {
      openPopup(popup, videoSrc);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`button-text ${className} ${active ? "active" : ""}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
