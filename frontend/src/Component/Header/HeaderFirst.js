import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom"; // Import Link component
import { Box, Button, Text } from "@chakra-ui/react";

const divStyle = {
  display: "flex",
  alignItems: "center",
  // justifyContent: 'center',
  backgroundSize: "cover",
  height: "450px",
  position: "relative", 
};

const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  },
];

const HeaderFirst = () => {
  const message = "Let Our Experience";
  const [message2, setMessage2] = useState("be Your Guide.");

  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <Box style={{ position: "relative" }} ml={28} textAlign={"left"}>
                {/* Apply styles to the span elements */}
                <Text
                  style={{ fontSize: "40px", fontWeight: "bold", top: "20%" }}
                >
                  {message}
                </Text>

                <Text
                  style={{ fontSize: "40px", fontWeight: "bold", top: "80%" }}
                >
                  {message2}
                </Text>
                {/* Use Link component for navigation */}

                <Box mt={10}>
                  <Link to="/appointment">
                    <Button colorScheme="teal" size="sm">
                      Make an Appointment
                    </Button>
                    {/* */}
                  </Link>
                </Box>
              </Box>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default HeaderFirst;
