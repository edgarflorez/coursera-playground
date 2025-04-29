import { Heading, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack backgroundColor="white" rounded="lg" color="black" textAlign="left">
      <Image rounded="lg" src={imageSrc} alt="" />
      <VStack padding={4} alignItems="start" spacing={8}>
        <Heading as="h2" size="md">
          {title}
        </Heading>

        <Text fontSize="lg">{description}</Text>

        <Link href="#">
          <HStack>
            <Text as="b">See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </Link>
      </VStack>
    </VStack>
  );
};

export default Card;
