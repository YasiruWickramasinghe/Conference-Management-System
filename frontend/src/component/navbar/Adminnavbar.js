import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import RNotification from "../USER/component/Researcher/RNotifications/Rnotifications";
import jwt_decode from "jwt-decode";
//import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const Adminnavbar = () => {
  const history = useHistory();

  function logout() {
    localStorage.removeItem("Reasearcher");
    localStorage.removeItem("Workshop_Presenter");
    localStorage.removeItem("reviewertoken");

    history.push("/");
    location.reload();
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          CMS
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            {localStorage.getItem("AdminIsLoggedIn") && (
              <Link className="nav-link" to="/Approve">
                Approve
              </Link>
            )}
          </li>
          <li className="nav-item">
            {localStorage.getItem("AdminIsLoggedIn") && (
              <Link className="nav-link" to="/Admin/Proflie/">
                Profile
              </Link>
            )}
          </li>

          <li className="nav-item">
            {!localStorage.getItem("Workshop_Presenter") &&
              !localStorage.getItem("Reasearcher") &&
              !localStorage.getItem("AdminIsLoggedIn") &&
              !localStorage.getItem("EditorLoggedIn") &&
              !localStorage.getItem("reviewertoken") && (
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              )}
          </li>
          <li class="nav-item">
            {(localStorage.getItem("EditorLoggedIn") ||
              localStorage.getItem("AdminIsLoggedIn")) && (
              <Link
                class="nav-link active"
                aria-current="page"
                to="/create-speaker"
              >
                Create speaker
              </Link>
            )}
          </li>
          {(localStorage.getItem("EditorLoggedIn") ||
            localStorage.getItem("AdminIsLoggedIn")) && (
            <li class="nav-item">
              <a class="nav-link" href="/list-speaker">
                List speaker
              </a>
            </li>
          )}
          {(localStorage.getItem("EditorLoggedIn") ||
            localStorage.getItem("AdminIsLoggedIn")) && (
            <li class="nav-item">
              <a class="nav-link" href="/create-conference">
                Create Conference
              </a>
            </li>
          )}

          {(localStorage.getItem("EditorLoggedIn") ||
            localStorage.getItem("AdminIsLoggedIn")) && (
            <li class="nav-item">
              <a class="nav-link" href="/list-conference">
                List conference
              </a>
            </li>
          )}

          {localStorage.getItem("Reasearcher") && (
            <li className="nav-item">
              <Link className="nav-link" to="/user/userDashboard">
                Dashboard
              </Link>
            </li>
          )}
          {localStorage.getItem("Reasearcher") && (
            <li className="nav-item">
              <Link className="nav-link" to="/user/userPapersRetrieve">
                Pending & Denied Papers
              </Link>
            </li>
          )}

          {localStorage.getItem("Reasearcher") && (
            <li className="nav-item">
              <Link className="nav-link" to="/user/allApprovedPapers">
                Approved Papers
              </Link>
            </li>
          )}

          {localStorage.getItem("Reasearcher") && (
            <li className="nav-item">
              <Link className="nav-link" to="/user/RpaperInsert">
                New Paper
              </Link>
            </li>
          )}

          {localStorage.getItem("Reasearcher") && (
            <li className="nav-item">
              <a
                href="/user/userLogin"
                onClick={logout}
                className="nav-link"
                to="/Login"
              >
                Logout
              </a>
            </li>
          )}
          {localStorage.getItem("Reasearcher") && (
            <li className="nav-item">
              <Link className="nav-link" to="/user/rnotifications">
                <RNotification />
              </Link>
            </li>
          )}

          {localStorage.getItem("Workshop_Presenter") && (
            <li className="nav-item">
              <Link className="nav-link" to="/workshop/workshopdashboard">
                Dashboard
              </Link>
            </li>
          )}
          {localStorage.getItem("Workshop_Presenter") && (
            <li className="nav-item">
              <Link className="nav-link" to="/workshop/underreviewproposals">
                Pending Proposals
              </Link>
            </li>
          )}

          {localStorage.getItem("Workshop_Presenter") && (
            <li className="nav-item">
              <Link className="nav-link" to="/workshop/declinedproposals">
                Declined Proposals
              </Link>
            </li>
          )}

          {localStorage.getItem("Workshop_Presenter") && (
            <li className="nav-item">
              <Link className="nav-link" to="/workshop/approvedproposals">
                Approved Proposals
              </Link>
            </li>
          )}

          {localStorage.getItem("Workshop_Presenter") && (
            <li className="nav-item">
              <Link className="nav-link" to="/workshop/workshopInsert">
                New Proposal
              </Link>
            </li>
          )}

          {localStorage.getItem("Workshop_Presenter") && (
            <li className="nav-item">
              <a
                href="/user/userLogin"
                onClick={logout}
                className="nav-link"
                to="/Login"
              >
                Logout
              </a>
            </li>
          )}
          {localStorage.getItem("reviewertoken") && (
            <li class="nav-item">
              <Link class="nav-link" to="/rev/researchpaper/last/:id">
                Reviewer Home
              </Link>
            </li>
          )}

          {localStorage.getItem("reviewertoken") && (
            <li class="nav-item">
              <Link class="nav-link" to="/rev/research/underreview">
                New Research Papers
              </Link>
            </li>
          )}
          {localStorage.getItem("reviewertoken") && (
            <li class="nav-item">
              <Link class="nav-link" to="/rev/research/reviewed">
                Old Research Papers
              </Link>
            </li>
          )}
          {localStorage.getItem("reviewertoken") && (
            <li class="nav-item">
              <Link class="nav-link" to="/rev/workshop/underreview">
                New Workshop Proposals
              </Link>
            </li>
          )}
          {localStorage.getItem("reviewertoken") && (
            <li class="nav-item">
              <Link class="nav-link" to="/rev/workshop/reviewed">
                Old Workshop Proposals
              </Link>
            </li>
          )}
          {/* <li class="nav-item">
                                <Link class="nav-link" to="/rev/researchProfile">
                                    Profile
                                </Link>
                            </li> */}
          {localStorage.getItem("reviewertoken") && (
            <li class="nav-item">
              <Link class="nav-link" onClick={logout}>
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Adminnavbar;
