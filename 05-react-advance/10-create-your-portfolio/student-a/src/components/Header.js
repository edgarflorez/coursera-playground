import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  { icon: faEnvelope, url: "mailto: hello@example.com" },
  { icon: faGithub, url: "https://github.com" },
  { icon: faLinkedin, url: "https://www.linkedin.com" },
  { icon: faMedium, url: "https://medium.com" },
  { icon: faStackOverflow, url: "https://stackoverflow.com" },
];

const Header = () => {
  const [transform, setTransform] = useState("translateY(0)");
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current) {
      // Scrolling down
      setTransform("translateY(-200px)");
    } else {
      // Scrolling up
      setTransform("translateY(0)");
    }

    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={transform}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={1}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Social Links */}
          <nav>
            <HStack spacing={8}>
              {socials.map((social, index) => (
                <a key={index} href={social.url}>
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>

          {/* Internal Links */}
          <nav>
            <HStack spacing={8}>
              <a href="#projects-section" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="#contactme-section" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
