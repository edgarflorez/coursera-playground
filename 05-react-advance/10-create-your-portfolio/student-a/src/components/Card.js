import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      spacing={0}
      align="flex-start"
      backgroundColor="white"
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      height="100%"
      justifyContent="space-between"
    >
      {/* Project image */}
      <Image src={imageSrc} alt={title} objectFit="cover" w="100%" h="200px" />

      {/* Text and link area */}
      <VStack align="flex-start" p={4} spacing={3}>
        <Heading size="md" color="black">{title}</Heading>
        <Text fontSize="md" color="black">{description}</Text>
        <HStack spacing={2}>
          <Text fontWeight="bold" fontSize="sm" color="black">Learn More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
