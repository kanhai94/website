import React, { useState } from "react";
import { Box, Button, Text, Flex, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link component

import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import { MdPersonalInjury } from "react-icons/md";

const CardSecond = () => {
  const header = "Read More. To Know More.";
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
        {header}
      </Text>
      {/* <Flex> */}
      <SimpleGrid
        spacing={3}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        <Card variant={"unstyled"}>
          <CardBody mt={2}>
            <Box style={{ marginTop: "20px" }}>
              <Image
                src="https://bolsterlegal.com/wp-content/uploads/2023/06/AMERICAN-BANK-TRUST-Co.-V.-COMMUNITY-HOSPITAL-1.png"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
            </Box>

            <Box
              style={{
                border: "10px",
                border: "0.1rem inset black",
                marginTop: "20px",
                // boxShadow: "0 0 0 2rem skyblue",
                // outline: "0.5rem solid khaki",
                padding: "10px",
              }}
            >
              <Text style={{ fontWeight: "900", marginBottom: "19px" }}>
                Santa Clara Valley Transportation Authority et al., v. Valley
                Recycling
              </Text>
              <Text style={{ boder: "10px solid black", marginBottom: "25px" }}>
                The principles of res judicata and collateral estoppel play
                significant
              </Text>

              <Link to="/appointment">
                <Button colorScheme="teal" mb={3}>
                  Read More
                </Button>
                {/* */}
              </Link>
            </Box>
          </CardBody>
        </Card>

        {/* 2nd box */}
        <Card variant={"unstyled"}>
          <CardBody mt={2}>
            <Box style={{ marginTop: "20px" }}>
              <Image
                src="https://bolsterlegal.com/wp-content/uploads/2023/06/Michener-v.-Hutton-The-Principle-of-Res-ipsa-loquitur.png"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
            </Box>
            <Box
              style={{
                border: "10px",
                border: "0.1rem inset black",
                marginTop: "20px",
                // boxShadow: "0 0 0 2rem skyblue",
                // outline: "0.5rem solid khaki",
                padding: "10px",
              }}
            >
              <Text style={{ fontWeight: "900", marginBottom: "19px" }}>
                Michener v. Hutton- The Principle of Res ipsa loquitur
              </Text>
              <Text style={{ boder: "10px solid black", marginBottom: "25px" }}>
                In Michener v. Hutton, the plaintiff invoked the legal doctrine
                of res i
              </Text>

              <Link to="/appointment">
                <Button colorScheme="teal" mb={3}>
                  Read More
                </Button>
                {/* */}
              </Link>
            </Box>
          </CardBody>
        </Card>
        {/* 3rd box */}
        <Card variant={"unstyled"}>
          <CardBody mt={2}>
            <Box style={{ marginTop: "20px" }}>
              <Image
                src="https://bolsterlegal.com/wp-content/uploads/2023/05/Dee-Ann-Abelaret-al.v.-Jeffrey-Mora-Professional-Medical-Negligence_Bolster-Legal.png"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
            </Box>
            <Box
              style={{
                border: "10px",
                border: "0.1rem inset black",
                marginTop: "20px",
                // boxShadow: "0 0 0 2rem skyblue",
                // outline: "0.5rem solid khaki",
                padding: "10px",
              }}
            >
              <Text style={{ fontWeight: "900", marginBottom: "19px" }}>
                Dee Ann Abelaret al.v. Jeffrey Mora- Professional Medical
                Negligence
              </Text>
              <Text style={{ boder: "10px solid black", marginBottom: "25px" }}>
                Are you interested in learning about the intricate details of
                personal i
              </Text>

              <Link to="/appointment">
                <Button colorScheme="teal" mb={3}>
                  Read More
                </Button>
                {/* */}
              </Link>
            </Box>
          </CardBody>
        </Card>
        {/* </Flex> */}
      </SimpleGrid>
    </Box>
  );
};
export default CardSecond;