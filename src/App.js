import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Snackbar from "@material-ui/core/Snackbar";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import UpIcon from "@material-ui/icons/ArrowUpwardTwoTone";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { PureComponent } from "react";
import "./App.css";
import ADIB from "./assets/icons/adib_icon.png";
import enginner_logo from "./assets/icons/avatar_engineer_icon.png";
import Cassandra from "./assets/icons/cassandra_icon.png";
import Cgpa from "./assets/icons/cgpa_logo.png";
import college from "./assets/icons/college.png";
import Css from "./assets/icons/css_icon.png";
import Trainee from "./assets/icons/engineer.png";
import github from "./assets/icons/github.png";
import Diploma from "./assets/icons/graduated.png";
import graphql_logo from "./assets/icons/graphql_icon.png";
import Html from "./assets/icons/html_icon.png";
import Javascript from "./assets/icons/javascript_icon.png";
import Java from "./assets/icons/java_icon.png";
import linkedIn from "./assets/icons/linkedin.png";
import naukri from "./assets/icons/naukri.png";
import node_logo from "./assets/icons/node_icon.png";
import postgressql_logo from "./assets/icons/postgres_icon.png";
import userData from "./assets/icons/profile.jpg";
import programing_logo from "./assets/icons/programing.png";
import logo from "./assets/icons/react_icon.png";
import redux_logo from "./assets/icons/redux_icon.png";
import School from "./assets/icons/school.png";
import scss_logo from "./assets/icons/scss_icon.png";
import AMEX from "./assets/icons/travel_icon.png";
import firebase from "./Firebase/firebase";
import Toolbar from "./Toolbar/Toolbar.js";

const styles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },

  cssLabel: {
    "&$cssFocused": {
      color: "white !important",
    },
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "white !important",
    },
  },

  cssFocused: {
    color: "black",
  },

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "black !important",
  },
});

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "",
      emailvalue: "",
      userfeedback: "",
      emptyNameField: true,
      emptyEmailField: true,
      isToaster: false,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    };
    this.setValue = this.setValue.bind(this);
  }

  componentDidMount() {
    Aos.init({ duration: 800 });
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    });
  };

  writeFeedback = async () => {
    if (this.state.emailvalue !== "") {
      this.setState({
        emptyNameField: false,
      });
    }
    if (this.state.nameValue !== "") {
      this.setState({
        emptyEmailField: false,
      });
    }

    var emailData = this.state.emailvalue;
    var user = emailData.replace(".", "_");
    if (this.state.emailvalue && this.state.nameValue) {
      firebase
        .database()
        .ref("feedback/" + user)
        .set({
          name: this.state.nameValue,
          email: this.state.emailvalue,
          userfeedback: this.state.userfeedback,
        });
    } else {
      this.setState({
        isToaster: true,
      });
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  closeSnackBar = () => {
    this.setState({
      isToaster: true,
    });
  };

  setValue(event) {
    this.setState({
      nameValue: event.target.value,
      emailvalue: event.target.value,
      userfeedback: event.target.value,
    });
  }

  viewProjectDetails = () => {
    alert("checking");
    // this.props.history.push("/project/detail");
  };

  mohan = () => {
    this.setState({});
  };

  render() {
    const { classes } = this.props;
    let { isToaster, screenWidth, screenHeight } = this.state;
    let mediumDevice = true;
    if (screenWidth <= 768) {
      mediumDevice = false;
    }
    return (
      <div className="App">
        <Toolbar />
        <div className="mainDivision">
          <div className="userImage">
            <div data-aos="fade-right" className="description_title">
              <span className="text_1">I'm Dinesh</span>
              <img height="25px" weight="25px" src={programing_logo}></img>
              <br></br>
              <span className="text_2">UI Engineer || FrontEnd Dev.</span>
              <img height="25px" weight="25px" src={enginner_logo}></img>
              <br></br>
              <div className="language-div">
                <div className="react-span">
                  <img height="25px" weight="25px" src={logo}></img>
                  <a className="react-span-a">React JS</a>
                </div>
                <div className="react-span-1">
                  <img height="25px" weight="25px" src={redux_logo}></img>
                  <a className="react-span-a-1">Redux</a>
                </div>
                <div className="react-span-2">
                  <img height="25px" weight="25px" src={scss_logo}></img>
                  <a className="react-span-a-2">Scss</a>
                </div>
              </div>
              <div className="language-div-2">
                <div className="react-span">
                  <img height="25px" weight="25px" src={node_logo}></img>
                  <a className="react-span-a">Node JS</a>
                </div>
                <div className="react-span-1">
                  <img height="25px" weight="25px" src={graphql_logo}></img>
                  <a className="react-span-a-1">GraphQL</a>
                </div>
                <div className="react-span-2">
                  <img height="25px" weight="25px" src={postgressql_logo}></img>
                  <a className="react-span-a-2">PostgreSQL</a>
                </div>
              </div>
            </div>
            <div style={{ paddingTop: "1rem", paddingLeft: "5rem" }} href="./">
              {" "}
              <img
                alt="DINESH KUMAR"
                src={userData}
                className="image__props"
              ></img>
            </div>
            {mediumDevice && (
              <div className="line-div">
                <hr width="1" size="150"></hr>
              </div>
            )}
            <div data-aos="fade-left" className="experience_title">
              <div className="project-span">Crayon Data private Limited</div>
              <div className="project-span">UI Engineer</div>
              <div className="project-span">Projects</div>
              <div className="project-div">
                <div>
                  <img height="25px" weight="25px" src={ADIB}></img>
                  <a
                    onClick={() => this.viewProjectDetails()}
                    className="react-span-a"
                  >
                    ADIB Productivity
                  </a>
                </div>
                <div>
                  <img height="25px" weight="25px" src={AMEX}></img>
                  <a
                    onClick={() => this.viewProjectDetails()}
                    className="react-span-a"
                  >
                    AMEX
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="userImage-1">
            <div data-aos="fade-right" className="description_title">
              <span className="trainee">Trainee Enginner - 0 to 3 Years</span>
              <br></br>
              <span className="exp-trainee">Engineer - 0 to 5.5 Years</span>
              <br></br>
              <div className="language-div-level-2">
                <div className="react-span">
                  <img height="25px" weight="25px" src={Java}></img>
                  <a className="react-span-a">Java/J2ee</a>
                </div>
                <div className="react-span-1">
                  <img height="25px" weight="25px" src={Javascript}></img>
                  <a className="react-span-a-1">Javascript</a>
                </div>
                <div className="react-span-2">
                  <img height="25px" weight="25px" src={Css}></img>
                  <a className="react-span-a-2">CSS</a>
                </div>
              </div>
              <div className="language-div-2">
                <div className="react-span">
                  <img height="25px" weight="25px" src={Html}></img>
                  <a className="react-span-a">HTML/XML</a>
                </div>
                <div className="react-span-1">
                  <img height="25px" weight="25px" src={postgressql_logo}></img>
                  <a className="react-span-a-1">PostgreSQL</a>
                </div>
                <div className="react-span-2">
                  <img height="25px" weight="25px" src={Cassandra}></img>
                  <a className="react-span-a-2">CassandraDB</a>
                </div>
              </div>
            </div>
            <div
              style={{ paddingTop: "1.5rem", paddingLeft: "5rem" }}
              href="./"
            >
              {" "}
              <img
                alt="DINESH KUMAR"
                src={Trainee}
                className="image__props"
              ></img>
            </div>
            {mediumDevice && (
              <div className="line-div">
                <hr width="1" size="150"></hr>
              </div>
            )}
            <div data-aos="fade-left" className="experience_title">
              <div className="project-span">IVTL Infoview Private Limited</div>
              <div className="project-span">Fullstack Developer</div>
              <div className="project-span">Projects</div>
              <div className="project-div-level-2">
                <div>HUE</div>
                <div>Delphi Conversion</div>
                <div>Intraweb</div>
              </div>
            </div>
          </div>

          <div className="userImage-1">
            <div data-aos="fade-right" className="description_title">
              <span className="trainee">
                Thiagarajar College of Engineering, Madurai
              </span>
              <br></br>
              <span className="exp-trainee">
                UG - Electronics Communication and Engineering
              </span>
              <br></br>
              <div className="language-div-level-2">
                <div className="react-span">
                  <img height="25px" weight="25px" src={Cgpa}></img>
                  <a className="react-span-a">CGPA - 8.0</a>
                </div>
              </div>
            </div>
            <div
              style={{ paddingTop: "1.5rem", paddingLeft: "5rem" }}
              href="./"
            >
              {" "}
              <img
                alt="DINESH KUMAR"
                src={college}
                className="image__props"
              ></img>
            </div>
            {mediumDevice && (
              <div className="line-div">
                <hr width="1" size="150"></hr>
              </div>
            )}
            <div data-aos="fade-left" className="experience_title">
              <div className="project-span">Projects</div>
              <div className="project-div-level-2">
                <div>Antenna - Metamaterials</div>
              </div>
            </div>
          </div>

          <div className="userImage-1">
            <div data-aos="fade-right" className="description_title">
              <span className="trainee">
                Thiagarajar Polytechnic College, Salem
              </span>
              <br></br>
              <span className="exp-trainee">
                Electronics Communication and Engineering
              </span>
              <br></br>
              <div className="language-div-level-2">
                <div className="react-span">
                  <img height="25px" weight="25px" src={Cgpa}></img>
                  <a className="react-span-a">CGPA - 98%</a>
                </div>
              </div>
            </div>
            <div
              style={{ paddingTop: "1.5rem", paddingLeft: "5rem" }}
              href="./"
            >
              {" "}
              <img
                alt="DINESH KUMAR"
                src={Diploma}
                className="image__props"
              ></img>
            </div>
            {mediumDevice && (
              <div className="line-div">
                <hr width="1" size="150"></hr>
              </div>
            )}
            <div data-aos="fade-left" className="experience_title">
              <div className="project-span">Projects</div>
              <div className="project-div-level-2">
                <div>HandControllable Wheelchair</div>
              </div>
            </div>
          </div>

          <div className="userImage-1">
            <div data-aos="fade-right" className="description_title">
              <span className="trainee">Fatima Higher Secondary School</span>
              <br></br>
              <span className="exp-trainee">Puducherry</span>
              <br></br>
              <div className="language-div-level-2">
                <div className="react-span">
                  <img height="25px" weight="25px" src={Cgpa}></img>
                  <a className="react-span-a">Percentage - 76%</a>
                </div>
              </div>
            </div>
            <div
              style={{ paddingTop: "1.5rem", paddingLeft: "5rem" }}
              href="./"
            >
              {" "}
              <img
                alt="DINESH KUMAR"
                src={School}
                className="image__props"
              ></img>
            </div>
          </div>

          <div
            data-aos="zoom-out"
            className="feedback"
            style={{ fontFamily: "sans-serif" }}
          >
            <div className="feedback-name">
              <div
                style={{
                  fontWeight: "bolder",
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                }}
              >
                Give feedback
              </div>
              <div
                style={{
                  fontWeight: "300",
                  fontSize: "14px",
                  paddingTop: "8px",
                  fontFamily: "Work Sans, sans-serif",
                }}
              >
                What you think of my portfolio ?
              </div>
            </div>
            <div style={{ marginTop: "-32px" }} className="row field_style">
              <TextField
                style={{
                  width: 350,
                  fontSize: "14px",
                  fontFamily: "Work Sans, sans-serif",
                }}
                id="outlined-name"
                label="Your Name"
                margin="normal"
                variant="outlined"
                // error={this.state.emptyNameField}
                // required
                inputProps={{ style: { fontFamily: "nunito", color: "white" } }}
                fullWidth
                value={this.state.nameValue}
                onChange={(event, newValue) =>
                  this.setState({
                    nameValue: event.target.value,
                  })
                }
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </div>
            <div className="row field_style">
              <TextField
                style={{
                  width: 350,
                  fontSize: "14px",
                  fontFamily: "Work Sans, sans-serif",
                }}
                id="outlined-name"
                label="Your Email"
                // error={this.state.emptyEmailField}
                color="primary"
                // required
                margin="normal"
                variant="outlined"
                value={this.state.emailvalue}
                onChange={(event, newValue) =>
                  this.setState({
                    emailvalue: event.target.value,
                  })
                }
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </div>
            <div className="row field_style">
              <TextField
                style={{
                  width: 375,
                  fontSize: "14px",
                  fontFamily: "Work Sans, sans-serif",
                }}
                id="outlined-multiline-static"
                label="Do you have any thoughts you'd like to share?"
                multiline
                rows="6"
                fullWidth
                margin="normal"
                variant="outlined"
                value={this.state.userfeedback}
                onChange={(event, newValue) =>
                  this.setState({
                    userfeedback: event.target.value,
                  })
                }
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </div>
            <div>
              <Button
                style={{
                  marginTop: "2rem",
                  marginLeft: "13rem",
                  fontWeight: "500",
                  background: "black",
                  color: "white",
                }}
                variant="contained"
                onClick={() => this.writeFeedback()}
              >
                Submit
              </Button>
            </div>
          </div>
          <div className="navigateToTop">
            <Fab variant="extended" onClick={() => this.scrollToTop()}>
              <UpIcon />
            </Fab>
            <div>
              <Snackbar
                autoHideDuration={2000}
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
                open={isToaster}
                onClose={() => this.closeSnackBar()}
                message="Please enter Name and Email ID"
              />
            </div>
          </div>
          <div
            style={{
              height: "30%",
              width: "100%",
              background: "black",
              paddingBottom: "2rem",
              borderTopRightRadius: "3rem",
              borderTopLeftRadius: "3rem",
              color: "white",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <div
              style={{
                display: "flex",
                left: "43%",
                top: "397%",
                justifyContent: "center",
                padding: "2rem",
              }}
            >
              <div>
                <img
                  src={linkedIn}
                  width="25px"
                  height="25px"
                  style={{ paddingRight: "2rem", cursor: "pointer" }}
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/dinesh-inc/")
                  }
                ></img>
              </div>
              <div>
                <img
                  src={github}
                  width="25px"
                  height="25px"
                  style={{ cursor: "pointer" }}
                  onClick={() => window.open("https://github.com/itsDinz")}
                ></img>
              </div>
              {/* <div>
                <img
                  src={naukri}
                  width="25px"
                  height="25px"
                  style={{ paddingLeft: "2rem", cursor: "pointer" }}
                  onClick={() => window.open("")}
                ></img>
              </div> */}
            </div>
            <div style={{ position: "absolute", left: "45%", top: "155rem" }}>
              @Copyright Dk Inc.
            </div>
          </div>
        </div>
        {/* <DesktopView /> */}
      </div>
    );
  }
}

export default withStyles(styles)(App);
