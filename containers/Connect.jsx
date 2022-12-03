import axios from "axios";
import { useState } from "react";
import { Form, Button } from 'react-bootstrap';

export default function Connect() {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    website: "",
    message: "",
  });

  const [result, setResult] = useState(null);

  const sendEmail = (event) => {
    event.preventDefault();
    axios
      .post("/send", { ...state })
      .then((response) => {
        setResult(response.data);
        setState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: "Something went wrong. Try again later",
        });
      });
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <>
      {result && (
        <p className={`${result.success ? "success" : "error"}`}>
          {result.message}
        </p>
      )}
      <div className="plnt__connect section__padding" id="connect">
        <div className="plnt__connect-content">
          <h3>Let&apos;s Connect</h3>
          <p>Fill out the form to email me!</p>
        </div>
        {/* <form onSubmit={sendEmail}>
          <label>Name</label> <br />
          <input
            type="text"
            name="name"
            value={state.name}
            placeholder="Enter your full name"
            onChange={onInputChange}
          />
          <label>Email</label> <br />
          <input
            type="email"
            name="email"
            value={state.email}
            placeholder="Enter your email"
            onChange={onInputChange}
          />
          <label>Subject</label> <br />
          <input
            type="text"
            name="subject"
            value={state.subject}
            placeholder="Enter subject"
            onChange={onInputChange}
          />
          <label>Message</label> <br />
          <input
            as="textarea"
            name="message"
            value={state.message}
            rows="3"
            placeholder="Enter your message"
            onChange={onInputChange}
          />
          <div className="plnt__connect-btn">
          <button type="submit">
            Submit
          </button>
          </div>
        </form> */}
      </div>
    </>
  );
}
