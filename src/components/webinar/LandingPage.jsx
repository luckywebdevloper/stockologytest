import React from "react";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import Webinar from "./webinar";
import Timer from "./Timer";
const LandingPage = () => {
  return (
    <section className=" bg-gradient-to-b from-blue-100 to-transparent   ">
      <div className=" h-[100ch] flex items-center justify-center">
        <>
          <div>
            <Box
              display={["flex"]}
              flexDirection={["column", "column ", "column", "row"]}
              className="container"
              alignItems={"center"}
              gap={["10", "10", "10", "0"]}
              h={"100%"}
              my="30"
            >
              <Box
                w={["100%", "100%", "100%", "50%"]}
                alignItems={["center", "center", "start", "start"]}
                className="flex justify-center flex-col "
              >
                <Heading
                  fontSize={["3xl", "5xl", "3xl", "6xl"]}
                  fontWeight={["semibold", "semibold", "bold", "bold"]}
                  className="heading_1"
                  w={"100%"}
                  marginTop={["0px", "40px", "0", "0"]}
                  textAlign={["center", "center", "left", "left"]}
                  my={["8"]}
                >
                  <span>BOOK </span>YOUR <br />
                  WEBINAR
                </Heading>
                <Text
                  fontSize={["sm", "md", "sm", "lg"]}
                  lineHeight={["4", "5", "5", "8"]}
                  textAlign={["justify", "justify", "justify", "left"]}
                  className="text"
                  width={["100%"]}
                  children="Youre invited! Don't miss the chance to learn with us"
                  mb={["8"]}
                />
                <Timer />
              </Box>
              <VStack
                h={"full"}
                w={["100%", "100%", "100%", "50%"]}
                justifyContent="center"
                spacing={"16"}
              >
                <Box className="shadow-md hover:scale-105 transition-all hover:shadow-lg p-7 rounded-xl h-full bg-white bg-opacity-50">
                  <Webinar />
                </Box>
              </VStack>
            </Box>
          </div>
        </>
      </div>
    </section>
  );
};

export default LandingPage;
