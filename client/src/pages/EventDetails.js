import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import river from "../assets/river-image.png";
import { GET_ONE_EVENT } from "../utils/queries";
import { Container, Card, Col, Button, Row, Stack, ButtonGroup } from "react-bootstrap";

const EventDetails = () => {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    cost: 0,
    location: "",
    date: "",
    time: 0,
  });

  const [countDown, setCountDown] = useState();
  const [countDownFormat, setCountDownFormat] = useState({
    timeRemaining: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const { eventId } = useParams();

  const { loading, error, data } = useQuery(GET_ONE_EVENT, {
    variables: { eventId: eventId },
  });

  useEffect(() => {
    if (!loading) {
      const timeStamp = parseInt(data.event.date);
      const date = new Date(timeStamp);
      const dateString = date.toLocaleDateString();
      const timeString = date.toLocaleTimeString();
      setEventData({
        title: data.event.title,
        description: data.event.description,
        cost: data.event.cost,
        location: data.event.location,
        date: dateString,
        time: timeString,
      });
      setCountDown(timeStamp);
    }
  }, [loading]);

  useEffect(() => {
    if (!countDown) return;

    const now = new Date().getTime();

    const intervalId = setInterval(() => {
      setCountDown(countDown - 1);
    }, 1000);

    const timeDifference = countDown - now;

    if (timeDifference <= 0) {
      setCountDownFormat({
        timeRemaining: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    } else {
      const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor(
        timeDifference / (1000 * 60 * 60) - daysLeft * 24
      );
      const minutesLeft = Math.floor(
        timeDifference / (1000 * 60) - (daysLeft * 24 * 60 + hoursLeft * 60)
      );
      const secondsLeft = Math.floor(
        timeDifference / 1000 -
          (daysLeft * 24 * 60 * 60 + hoursLeft * 60 * 60 + minutesLeft * 60)
      );

      setCountDownFormat({
        timeRemaining: timeDifference,
        days: daysLeft,
        hours: hoursLeft,
        minutes: minutesLeft,
        seconds: secondsLeft,
      });
    }

    return () => clearInterval(intervalId);
  }, [countDown]);

  const countDownStyle = {
    height: "300px",
    background: "linear-gradient(to right, #FFA500, #800080)", // Color gradient from orange to purple
  };

  const buttonStyle = {
    backgroundColor: "#FFA500",
    borderColor: "#FFA500",
    borderRadius: "5px",
    width: "20%",
    margin: "3%",
  };

  return (
    <>
      {/* Countdown timer section */}
      <Container fluid style={countDownStyle} className="text-center p-5 text-white">
        {countDownFormat.timeRemaining > 0 ? (
          <h2 className="p-2">
            GET EXCITED! {eventData.title.toUpperCase()} COMING SOON!
          </h2>
        ) : (
          <>
            <h2 className="p-2">
              {eventData.title.toUpperCase()} HAS ALREADY PASSED!
            </h2>
            <a href="/allEvents" style={{ color: "white" }}>
              check out all events to see more
            </a>
          </>
        )}
        <Stack
          direction="horizontal"
          gap={3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "40px",
            color: "white",
          }}
        >
          <Row className="justify-content-center">
            <Col className="text-center">
              <div>
                <div> {countDownFormat.days}</div>
                <div style={{ fontSize: "25px" }}>Days</div>
              </div>
            </Col>
            <Col className="text-center">
              <div>
                <div> {countDownFormat.hours}</div>
                <div style={{ fontSize: "25px" }}>Hours</div>
              </div>
            </Col>
            <Col className="text-center">
              <div>
                <div>{countDownFormat.minutes}</div>
                <div style={{ fontSize: "25px" }}>Minutes</div>
              </div>
            </Col>
            <Col className="text-center">
              <div>
                <div>{countDownFormat.seconds}</div>
                <div style={{ fontSize: "25px" }}>Seconds</div>
              </div>
            </Col>
          </Row>
        </Stack>
      </Container>

      {/* Event details section */}
      <Container>
        <ButtonGroup className="w-100">
          <Button style={buttonStyle}>Date: {eventData.date}</Button>
          <Button style={buttonStyle}>Time: {eventData.time}</Button>
          <Button style={buttonStyle}>Location: {eventData.location}</Button>
          <Button style={buttonStyle}>Cost: ${eventData.cost}</Button>
        </ButtonGroup>
        <Container className="mb-5">
          <Row>
            <Col md={6}>
              <Card className="border-0 p-3">
                <Card.Body>
                  <Card.Title>{eventData.title}</Card.Title>
                  <Card.Text>{eventData.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card.Img
                variant="top"
                className="border-0 p-3 h-100"
                src={river}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default EventDetails;
