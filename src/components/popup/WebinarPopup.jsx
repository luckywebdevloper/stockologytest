import { Modal } from "@nextui-org/react";
import { useEffect } from "react";

import { Box, Button, VStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { webinar } from "../../redux/actions/other";

import toast from "react-hot-toast";
import { Input, Text, Textarea } from "@nextui-org/react";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
const WebinarPopup = (closeHandler) => {
  const [visible, setVisible] = React.useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState();

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(webinar(name, email, phone, message));
    closeHandler();
  };

  return (
    <>
      <Modal
        closeButton
        animated={false}
        aria-labelledby="modal-title"
        open={visible}
        closeHandler
        width="600px"
      >
        <Modal.Header>
          <Box w="100%">
            <Text
              className=" font-semibold heading_1 text-2xl contact "
              fontWeight={"22px"}
            >
              Get a<span> Free Webinar </span>for your
              <br /> overall growth.
            </Text>
          </Box>
        </Modal.Header>
        <Modal.Body>
          <VStack h="full" justifyContent={"center"} spacing="16">
            {/* <Heading children="Contact Us" /> */}

            <form onSubmit={submitHandler} style={{ width: "100%" }}>
              <Box my={"4"}>
                <Input
                  required
                  id="name"
                  initialValue={name}
                  onChange={(e) => setName(e.target.value)}
                  width="100%"
                  underlined
                  label="Name"
                  placeholder="Enter Your Name"
                />
              </Box>
              <Box my={"4"}>
                <Input
                  required
                  id="phone"
                  initialValue={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  width="100%"
                  underlined
                  label="Phone"
                  placeholder="Enter Your phone"
                  type="number"
                />
              </Box>

              <Box my={"4"}>
                <Input
                  required
                  initialValue={email}
                  width="100%"
                  onChange={(e) => setEmail(e.target.value)}
                  // placeholder="abc@gmail.com"
                  type={"email"}
                  underlined
                  label="Email"
                  placeholder="Enter Your Email"
                />
              </Box>

              <Box my={"4"}>
                <GrammarlyEditorPlugin clientId="client_Ji4Ei5uQ7G8ASJ3NgWs4ub">
                  <Textarea
                    id="message"
                    initialValue={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message...."
                    label="Message"
                    width="100%"
                    bordered
                    rows={5}
                  />
                </GrammarlyEditorPlugin>
              </Box>

              <Box>
                <Text className="text md:text-base text-sm">
                  *By submitting this form you agree to our terms & conditions &
                  our privacy policy which explains how we may collect, use &
                  disclose your personal information including to third parties.
                </Text>
              </Box>

              <Button
                my={"5"}
                colorScheme="red"
                type="submit"
                w={["56"]}
                borderRadius={"full"}
                closeHandler
              >
                Submit
              </Button>
            </form>
          </VStack>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WebinarPopup;
