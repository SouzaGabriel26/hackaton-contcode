import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type BackToHomeButtonProps = JSX.IntrinsicElements['button'];

export const BackToHomeButton = ({ ...props }: BackToHomeButtonProps) => {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => {
        navigate('/')
      }}
      {...props}>
      <FaArrowLeft className="text-xl" />
    </button>
  )
}
