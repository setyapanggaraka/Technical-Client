import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="text-center">
            <h2 className="card-title">Selamat Datang Username!</h2>
          </div>
          <div className="card-actions justify-center">
            <button onClick={handleLogout} className="btn btn-primary">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
