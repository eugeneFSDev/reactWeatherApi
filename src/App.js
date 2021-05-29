import React from "react";
import Info from "./components/info";
import Form from "./components/form";

class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default App;

