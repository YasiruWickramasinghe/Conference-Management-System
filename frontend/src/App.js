import React, { useContext } from "react";
//import "../bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Nav from "./component/navbar/Adminnavbar";
import AdminLogin from "./component/login";
import Register from "./component/register";
import Home from "./component/home/home";
import Approve from "./component/approve/approve";
import LoginButton from "./LoginButton";
import SingleConference from "./component/home/singleConference";
import Caption from "./component/caption/caption";
import Profile from "./component/proflie/profile";
import EditProfile from "./component/proflie/EditProfile";
import Navbar from "./editor/navbar";
import CreateSpeaker from "./editor/create/createspeaker";
import ListSpeaker from "./editor/list/listspeaker";
import CreateCategory from "./editor/create/createconference";
import UpdateSpeaker from "./editor/update/updatespeaker";
import ListConference from "./editor/list/listconference";
import UpdateConference from "./editor/update/updateconference";
import Editorlogin from "./editor/login/editorlogin";
import Editorregister from "./editor/login/editorregister";
import RevFooter from "./component/reviewer/RevFooter";

import UserLogin from "./component/USER/component/UserAuthenticate/UserLogin";
import UserDashboard from "./component/USER/component/Researcher/UserDashboard";
import UserSignup from "./component/USER/component/UserAuthenticate/UserSignup";

import UsersNavBar from "./component/USER/component/Researcher/UsersNavBar";
import UserRpaperInsert from "./component/USER/component/Researcher/RpaperInsert";
import UserRpaperRetrieve from "./component/USER/component/Researcher/UserPaperRetrives";
import ResearcherPaymentForm from "./component/USER/component/Researcher/ResearcherPAymentForm";
import AllApprovedPapers from "./component/USER/component/Researcher/AllApprovePapers";
import ViewRpaper from "./component/USER/component/Researcher/ViewResearchpaper";
import ResearcherMainPage from "./component/USER/component/Researcher/ViewResearchpaper";
import RpaperAllNotifications from "./component/USER/component/Researcher/RNotifications/RpaperAllNotifications";

import WorkshopDashboard from "./component/USER/component/WorkshopPresenter/PresenterDashboard";
import ProposalSubmit from "./component/USER/component/WorkshopPresenter/ProposalSubmit";

import UNProposals from "./component/USER/component/WorkshopPresenter/ProposalUNretrieve";
import DeProposals from "./component/USER/component/WorkshopPresenter/ProposalDCretrieve";
import ApProposals from "./component/USER/component/WorkshopPresenter/ProposalAPretrieve";
import ViewProposals from "./component/USER/component/WorkshopPresenter/ProposalView";

import RevHome from "./component/reviewer/home/RevHome";
import RevProfile from "./component/reviewer/RevProfile";
import RevStartUp from "./component/reviewer/RevStartUp";

//Reserach Start

import RevNewResearch from "./component/reviewer/research/RevNewResearch";
import RevOldResearch from "./component/reviewer/research/RevOldResearch";
import RevResearchPaper from "./component/reviewer/research/RevResearchPaper";
import RevApproveResearch from "./component/reviewer/research/RevApproveResearch";

//Reserach End

//Workshop Start

import RevNewWorkshops from "./component/reviewer/workshop/RevNewWorkshops";
import RevOldWorkshops from "./component/reviewer/workshop/RevOldWorkshops";
import RevWorkshopProposal from "./component/reviewer/workshop/RevWorkshopProposal";
import RevApproveWorkshop from "./component/reviewer/workshop/RevApproveWorkshop";

//Workshop End

//login
import RevLogin from "./component/reviewer/login/RevLogin";
import RevRegister from "./component/reviewer/login/RevRegister";
//import RevProfile from "./component/reviewer/login/RevProfile";
//import Navbars from "./component/reviewer/login/Navbars";
import RevLanding from "./component/reviewer/login/RevLanding";

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <br></br>
      <br></br>

      <section>
        <Switch>
          <Route path="/create-speaker" component={CreateSpeaker} exact />
          <Route path="/list-speaker" component={ListSpeaker} exact />
          <Route path="/create-conference" component={CreateCategory} exact />
          <Route path="/updatespeaker/:id" component={UpdateSpeaker} exact />
          <Route path="/list-conference" component={ListConference} exact />
          <Route path="/editorlogin" component={Editorlogin} exact />
          <Route path="/editorregister" component={Editorregister} exact />
          <Route
            path="/updateconference/:id"
            component={UpdateConference}
            exact
          />
        </Switch>
      </section>

      {/* Malith */}
      <Route path="/user/reasearchermainpage">
        <ResearcherMainPage />
      </Route>

      <Route path="/user/RpaperInsert">
        <UserRpaperInsert />
      </Route>

      <Route exact path="/user/userLogin">
        <UserLogin />
      </Route>

      <Route exact path="/user/userSignup">
        <UserSignup />
      </Route>

      <Route path="/user/userDashboard">
        <UserDashboard />
      </Route>

      <Route path="/user/userPapersRetrieve">
        <UserRpaperRetrieve />
      </Route>

      <Route path="/user/allApprovedPapers">
        <AllApprovedPapers />
      </Route>

      <Route path="/user/researcherPaymentForm/:id">
        <ResearcherPaymentForm />
      </Route>

      <Route path="/user/viewRpaper/:id">
        <ViewRpaper />
      </Route>

      <Route path="/user/rnotifications">
        <RpaperAllNotifications />
      </Route>

      <Route path="/workshop/workshopdashboard">
        <WorkshopDashboard />
      </Route>

      <Route path="/workshop/workshopInsert">
        <ProposalSubmit />
      </Route>

      <Route path="/workshop/underreviewproposals">
        <UNProposals />
      </Route>

      <Route path="/workshop/declinedproposals">
        <DeProposals />
      </Route>

      <Route path="/workshop/approvedproposals">
        <ApProposals />
      </Route>

      <Route path="/workshop/viewproposal/:id">
        <ViewProposals />
      </Route>

      {/* shaman */}
      <Route path="/Login" exact>
        <LoginButton />
      </Route>
      <Route path="/conference/:id" exact>
        <SingleConference />
      </Route>

      <Route path="/Admin/Login" exact>
        <AdminLogin />
      </Route>
      <Route path="/Approve" exact>
        <Approve />
      </Route>
      <Route path="/" exact>
        <Caption />
        <Home />
        <RevFooter />
      </Route>
      <Route path="/Admin/Register" exact>
        <Register />
      </Route>
      <Route path="/Admin/Proflie/" exact>
        <Profile />
      </Route>
      <Route path="/Admin/Proflie/Edit" exact>
        <EditProfile />
      </Route>

      {/* yasiru */}

      <Route path="/rev/login" exact component={RevLogin}></Route>
      <Route path="/rev/register" exact component={RevRegister}></Route>
      <Route path="/RevStartUp" exact component={RevStartUp}></Route>

      <Route
        path="/rev/researchpaper/last/:id"
        exact
        component={RevHome}
      ></Route>
      <Route path="/rev/researchProfile" exact component={RevProfile}></Route>

      {/*Reserach*/}

      <Route
        path="/rev/research/underreview"
        exact
        component={RevNewResearch}
      ></Route>
      <Route
        path="/rev/research/reviewed"
        exact
        component={RevOldResearch}
      ></Route>
      <Route
        path="/rev/researchpaper/:id"
        exact
        component={RevResearchPaper}
      ></Route>
      <Route
        path="/rev/researchpaper/update/:id"
        exact
        component={RevApproveResearch}
      ></Route>

      {/*Reserach*/}

      {/*Workshop*/}

      <Route
        path="/rev/workshop/underreview"
        exact
        component={RevNewWorkshops}
      ></Route>
      <Route
        path="/rev/workshop/reviewed"
        exact
        component={RevOldWorkshops}
      ></Route>
      <Route
        path="/rev/workshopproposal/:id"
        exact
        component={RevWorkshopProposal}
      ></Route>
      <Route
        path="/rev/workshopproposal/update/:id"
        exact
        component={RevApproveWorkshop}
      ></Route>
    </React.Fragment>
  );
};

export default App;
