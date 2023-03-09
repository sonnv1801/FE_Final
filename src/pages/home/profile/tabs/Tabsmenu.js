import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./style.css";
class Tabsmenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      key: 1,
    };
  }

  handleSelect(key) {
    alert(`selected ${key}`);
    this.setState({ key });
  }

  render() {
    return (
      <Tabs
        className="tabs_container"
        defaultActiveKey={1}
        animation={false}
        id="noanim-tab-example"
      >
        <div className="tab-content">
          <Tab eventKey={1} title="Tab 1">
            Tab 1 content
          </Tab>
          <Tab eventKey={2} title="Tab 2">
            Tab 2 content
          </Tab>
          <Tab eventKey={3} title="Tab 3">
            Tab 3 content
          </Tab>
        </div>
      </Tabs>
    );
  }
}

// eslint-disable-next-line no-undef
export default Tabsmenu;
