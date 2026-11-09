import { ImSpinner8 } from "react-icons/im";

// session 4
export default function Spinner({ size = 60 }: { size?: number }) {
  return <ImSpinner8 className="animate-spin text-orange-500" size={size} />;
}
// end of session 4
