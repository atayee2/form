import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../Component/SideBare";

export const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLogged') === 'true';
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, []);

  const handleLogOUt = ()=>{
    localStorage.clear('isLogged');
    navigate('/login')
  }

  return (<>
    <div className="main-box">
      <nav className="navbar navbar-expand-lg  navbar-light bg-warning p-0">
        <div className="container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">about</a>
              </li> <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">product</a>
              </li>
            </ul>
        </div>
      </nav>
    </div>
    <button onClick={handleLogOUt}>log out</button>
    <Sidebar />
    </>
  );
};
