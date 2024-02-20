import React, { useState } from "react";
import { Box, Button, Text, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link component

const HeaderSecond = () => {
  const img = "./lineImage.png";
  const message = "Welcome to kanhai Legal - Virtual Legal Assistant";
  const secondMessage = "Professional .Fast .Quality";
  const thirdMessage =
    "Providing a complete set of legal and paralegal services to meet the objectives and needs of attorneys and law firms based in the United States. Our legal professionals understand and completely follow the notion that both intricate and monotonous legal services can be delivered more effectively with scalable, repeatable, well-managed process methodologies.";
  return (
    <Box style={{ position: "relative" }} textAlign={"center"}>
      {/* Apply styles to the span elements */}
      <Text
        style={{
          marginTop: "70px",
          fontSize: "35px",
          fontWeight: "bold",
          top: "30%",
        }}
      >
        {message}
      </Text>
      <Text
        style={{
          fontSize: "18px",
          color: "#26252c",
          lineHeight: "35px",
          textAlign: "center",
          fontWeight: "400",
          fontStyle: "normal",
          marginTop: "16px",

          fontWeight: "normal",
          top: "30%",
        }}
      >
        {secondMessage}
      </Text>
        <br/>
      
      <Link to="/appointment">
        <Button
        w= {'50%'}
          colorScheme="teal"
        >
          Start a Free Trial
        </Button>
        <br/>
        <br/>

        {/* */}
    
      </Link>
    
      {/* </Box> */}
      <Text
        style={{
        //   textAlign: "justify", // Center the text horizontally
          fontSize: "15px",
          fontWeight: "normal", // Set font weight to normal
          fontStyle: "italic", // Set font style to italic
          marginTop: "10px", // Add margin from the top
          marginLeft: "auto", // Center the text horizontally
          marginRight: "auto", // Center the text horizontally
          maxWidth: "800px", // Set maximum width for the text
        }}
      >
        {thirdMessage}
      </Text>
    </Box>
  );
};

export default HeaderSecond;
