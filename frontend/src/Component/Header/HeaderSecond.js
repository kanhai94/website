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
    <Box style={{ position: "relative" }} ml={28} textAlign={"center"}>
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
      <br></br> <br></br>
      <br></br>
      <br></br>
      {/* <Image boxSize="10px," objectFit="cover" src={img} alt="line logo" /> */}
      <Image
        boxSize="3px,"
        objectFit="cover"
        src={img}
        alt="line logo"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)", // Center the line horizontally
          top: "40%", // Position the image vertically
          left: "50%",
          transform: "translateX(-50%)", // Center the image horizontally
          borderRadius: "3%", // Make the image appear rounded

        }}
        />
      {/* <Box mt={10}> */}
      <Link to="/appointment">
        <Button
          colorScheme="teal"
          size="sm"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)" // Center the button both horizontally and vertically
        >
          Start a Free Trial
        </Button>
        
        {/* */}
    
      </Link>
    
      {/* </Box> */}
      <Text
        style={{
          textAlign: "center", // Center the text horizontally
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
