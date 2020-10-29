import React, {useState} from "react";
// import profileImage from "../../assets/colossal-logo.png";
import {Link} from 'react-router-dom';
import Auth from '../../utils/auth';


function Header() {
    const logout = event =>{
        event.preventDefault();
        Auth.logout()
    }
    const loggedIn = Auth.loggedIn()
    const [pageSelected, setPageSelected] = useState(loggedIn ? "dashboard" : "");
    

    return (

        <nav className="nav-extended blue lighten-3">
            <div className="nav-wrapper">
                <Link to="/"  className="brand-logo">
                    <h5>Colossal Closer</h5>
                </Link>
                {/* <img src={profileImage} className="my-2" style={{ maxWidth: "8%", width: "40%" }} alt="Colossal Closer" /> */}

                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons"></i></a>
                <ul id="nav-mobile" className="right ">
                    {loggedIn ? (
                        <>
                            <li><a href="" onClick={logout}>Logout</a></li>
                            {/* <li>
                            <Link to ="/AddCustomer"
                            href="/AddCustomer">Customer +
                            </Link>
                            
                        </li> */}
                        {/* <li>
                            <Link to ="/AddSale"
                            href="/AddSale">Sale +
                            </Link>
                            
                        </li> */}
                        </>
                    ):(
                         // <li><a href="sign.html">Login</a></li>
                        <li>
                            <Link to ="/signup"
                            href="/signup">sign up
                            </Link>
                        
                        </li>
                    
                    )
                    }
                
                    
                </ul>
            </div>
            <div className="nav-content">
                <ul className="tabs tabs-transparent">
                    <ul className="flex-row">
                        <li className={`mx-2 ${(pageSelected === "dashboard") && 'active'}`}>
                            <Link to="/" data-testid="dashboard" onClick={() => setPageSelected("dashboard")}>
                                Dashboard
                            </Link>
                        </li>
                        <li className={`mx-2 ${(pageSelected === "customers") && 'active'}`}>
                            <Link to="/AddCustomer" data-testid="customers" onClick={() => setPageSelected("customers")}>
                                Customers
                            </Link>
                        </li>
                        <li className={`mx-2 ${(pageSelected === "sales") && 'active'}`}>
                            <Link to="/AddSale" data-testid="sales" onClick={() => setPageSelected("sales")}>
                                Sales
                            </Link>
                        </li>
                        {/* <li className="mx-2">
                            <Link to="/customer-graphs" data-testid="customerGraphs" onClick={() => setPageSelected("customerGraphs")}>
                                Customers Graph
                            </Link>
                        </li>
                        <li className="mx-2">
                            <Link to="sales-graph" data-testid="salesGraph" onClick={() => setPageSelected("salesGraph")}>
                                Sales Graph
                            </Link>
                        </li> */}
                    </ul>
                </ul>
            </div>
        </nav>

    );
}
export default Header;