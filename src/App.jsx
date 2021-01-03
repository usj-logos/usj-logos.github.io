import "./App.css";
import { v4 } from "uuid";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Navbar,
  Row,
} from "react-bootstrap";
import BBS from "./Assets/small/BBS.png";
import BS from "./Assets/small/BS.png";
import WBS from "./Assets/small/WBS.png";
import WS from "./Assets/small/WS.png";
import BBL from "./Assets/FullSize/BLACK BLUE AIESEC IN USJ LOGO.png";
import BL from "./Assets/FullSize/BLACK AIESEC IN USJ LOGO.png";
import WBL from "./Assets/FullSize/WHITE BLUE AIESEC IN USJ LOGO.png";
import WL from "./Assets/FullSize/WHITE AIESEC IN USJ LOGO.png";
import { useState } from "react";

const images = [
  {
    img: WBS,
    key: v4(),
    bgType: "dark",
    dlFile: WBL,
    name: "White Blue",
    link:
      "https://firebasestorage.googleapis.com/v0/b/usj-logos.appspot.com/o/WHITE%20BLUE%20AIESEC%20IN%20USJ%20LOGO.png?alt=media&token=67dce033-19a5-4cac-82be-013f44711f83",
  },
  {
    img: WS,
    key: v4(),
    bgType: "dark",
    dlFile: WL,
    name: "White",
    link:
      "https://firebasestorage.googleapis.com/v0/b/usj-logos.appspot.com/o/WHITE%20AIESEC%20IN%20USJ%20LOGO.png?alt=media&token=f4c95b9e-bc42-430a-9663-79966d1162f6",
  },
  {
    img: BBS,
    key: v4(),
    bgType: "white",
    dlFile: BBL,
    name: "Black Blue",
    link:
      "https://firebasestorage.googleapis.com/v0/b/usj-logos.appspot.com/o/BLACK%20BLUE%20AIESEC%20IN%20USJ%20LOGO.png?alt=media&token=643e0645-a21d-410d-a9b8-1010d5d923d5",
  },
  {
    img: BS,
    key: v4(),
    bgType: "white",
    dlFile: BL,
    name: "Black",
    link:
      "https://firebasestorage.googleapis.com/v0/b/usj-logos.appspot.com/o/BLACK%20AIESEC%20IN%20USJ%20LOGO.png?alt=media&token=ed8a559a-cd7f-4c4a-bdfe-ee50ec094269",
  },
];

function App() {
  const [password, setPassword] = useState("");
  const [invalidated, setinValidated] = useState(false);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={WBS}
            width="50"
            // height="30"
            className="d-inline-block align-top"
          />{" "}
          AIESEC in USJ Logo Hub
        </Navbar.Brand>
      </Navbar>
      <div style={{ marginTop: "16px" }}>
        <Container fluid="lg">
          <Row className="justify-content-md-center">
            {images.map((item) => (
              <Col
                key={`${item.key}-col`}
                xs={11}
                sm={5}
                className="border border-2  px-0 m-3">
                <div
                  key={`${item.key}-bg`}
                  className={`bg-${item.bgType} d-flex align-content-center border-bottom`}>
                  <Image
                    key={`${item.key}-img`}
                    className="p-3 m-auto"
                    src={item.img}
                    // rounded
                    fluid></Image>
                </div>
                <div className="bg-light p-3 d-flex justify-content-between align-content-center align-items-center">
                  <span>{item.name}</span>
                  <Button
                    href={item.dlFile}
                    target="_blank"
                    download={`${item.name} Logo AIESEC in USJ`}
                    // onClick={() => window.open(item.link)}
                  >
                    Download
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
          <Container fluid="md" className="py-4">
            <h4>Get Source File</h4>
            <Form
              className="py-3"
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (password == "JLCUSJ") {
                  window.open(
                    "https://firebasestorage.googleapis.com/v0/b/usj-logos.appspot.com/o/AIESEC%20in%20USJ%20LOGO.ai?alt=media&token=ebbbada3-d81a-45a5-9bfd-f3cf57fe7c8d"
                  );
                  setinValidated(false);
                } else {
                  setinValidated(true);
                }
              }}>
              <Form.Group
                as={Row}
                controlId="horiziontalpassword"
                className="my-0">
                <Form.Label
                  column
                  sm={2}
                  lg={2}
                  className="py-2 align-self-center">
                  Password
                </Form.Label>
                <Col sm={8} className="py-2">
                  <Form.Control
                    sm={6}
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                </Col>
                <Col sm={2} className="py-2">
                  <Button type="submit">Download</Button>
                </Col>
              </Form.Group>
              <div
                className="text-danger"
                style={{ visibility: invalidated ? "visible" : "hidden" }}>
                Wrong Password
              </div>
            </Form>
          </Container>
        </Container>
      </div>
    </div>
  );
}

export default App;
///sfdsf
