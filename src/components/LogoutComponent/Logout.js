// import { Navigate } from 'react-router-dom';

// function Logout()
// {
//     localStorage.removeItem('token');
//     localStorage.removeItem('_id');
//     localStorage.removeItem('email');
//     localStorage.removeItem('name');
//     localStorage.removeItem('mobile');
//     localStorage.removeItem('address');
//     localStorage.removeItem('city');
//     localStorage.removeItem('gender');	  
//     localStorage.removeItem('role');
//     localStorage.removeItem('info');
    
//     return(
//         <>
           
//             <Navigate to='/login' />
//         </>
//     )
// }

// export default Logout


import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (confirmLogout) {
      localStorage.clear();
      localStorage.removeItem("_grecaptcha")
      navigate('/login', { replace: true });
    } else {
      navigate(-1); // return to previous page
    }
  }, [navigate]);

  return null;
}

export default Logout;
