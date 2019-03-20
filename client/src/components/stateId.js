import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Card, Col, Row } from "antd";
import axios from "axios";

const myStyles = {
  height: "500px"
};

const StateId = props => {
  let [usaState, setUsaState] = useState(props.usaState);
  let [inPerson, setInPerson] = useState("In person details here");
  let [absentee, setAbsentee] = useState("Absentee details here");

  useEffect(() => {
    setUsaState(props.usaState)
    axios
      .get(`http://localhost:8000/api/voterId/${usaState}`, {
        params: {
          id: ""
        }
      })
      .then(response => {
        console.log("use effect response", response.data);
        //setUsaState(response.data[0].state);
        setInPerson(response.data[0].in_person);
        setAbsentee(response.data[0].absentee);
      })
      .catch(error => {
        console.log(error);
      });
  });

  return (
    <div style={{ background: "#ECECEC", padding: "30px" }}>
      <h1>{usaState}</h1>
      <Row gutter={16}>
        <Col span={12}>
          <Card title="In-person Voting" bordered={false} style={myStyles}>
            <p>{inPerson}</p>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Absentee Voting" bordered={false} style={myStyles}>
            <p>{absentee}</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default StateId;