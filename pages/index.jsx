import Head from "next/head";
import Link from "next/link";
import {
  Text,
  IconButton,
  Button,
  ButtonGroup,
  Flex,
  Stack,
  Link as ChakraLink,
} from "@chakra-ui/react";
//import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useClipboard, useToast } from "@chakra-ui/react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaTelegramPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaCopy,
  FaCheck,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function Home() {
  const colorList = [
    "blue",
    "green",
    "red",
    "pink",
    "teal",
    "purple",
    "yellow",
  ];

  const shuffledColorList = colorList.sort(() => 0.5 - Math.random());

  return (
    <Flex minH="100vh" mx="10" alignItems="center" justifyContent="center">
      <Head>
        <title>joona@gynther.xyz</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <Text
          as="h1"
          color="white"
          fontSize={{ base: "4xl", md: "6xl" }}
          my="2"
          letterSpacing="0.08em"
          fontWeight="bold"
        >
          Joona Gynther
        </Text>
        <Text my="1" fontSize={{ base: "sm", md: "md" }}>
          Mathematics and statistical data analytics @ Tampere University
        </Text>
        <Text my="1" fontSize={{ base: "sm", md: "md" }}>
          Co-Founder, Chairperson and COO @{" "}
          <Link href="https://evon.fi" passHref>
            <a style={{ textDecoration: "underline" }} target="_blank">
              Evon Group
            </a>
          </Link>
        </Text>

        <Stack spacing={5} direction={["column", "row"]} my="5">
          <Link href="https://github.com/JGynther" passHref>
            <Button
              leftIcon={<FaGithub />}
              colorScheme={shuffledColorList[0]}
              variant="outline"
            >
              Github
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/joona-gynther" passHref>
            <Button
              leftIcon={<FaLinkedinIn />}
              colorScheme={shuffledColorList[1]}
              variant="outline"
            >
              LinkedIn
            </Button>
          </Link>
          <Link href="https://twitter.com/GyntherJoona" passHref>
            <Button
              leftIcon={<FaTwitter />}
              colorScheme={shuffledColorList[2]}
              variant="outline"
            >
              Twitter
            </Button>
          </Link>
          <Link href="https://instagram.com/gyntherjoona" passHref>
            <Button
              leftIcon={<FaInstagram />}
              colorScheme={shuffledColorList[3]}
              variant="outline"
            >
              Instagram
            </Button>
          </Link>
        </Stack>

        <Stack spacing={5} direction={["column", "row"]} my="4">
          <ButtonWithCopy
            colorScheme={shuffledColorList[4]}
            icon={<FaTelegramPlane />}
            href="https://t.me/Porvari"
            copy="@Porvari"
          >
            t.me
          </ButtonWithCopy>
          <ButtonWithCopy
            colorScheme={shuffledColorList[5]}
            icon={<FaEnvelope />}
            href="mailto:joona@gynther.xyz"
            copy="joona@gynther.xyz"
          >
            Email
          </ButtonWithCopy>
          <ButtonWithCopy
            colorScheme={shuffledColorList[6]}
            icon={<FaPhoneAlt />}
            href="tel:+358503236750"
            copy="+358503236750"
          >
            Phone
          </ButtonWithCopy>
        </Stack>

        <Link href="/Resume_Gynther.pdf" passHref>
          <a target="_blank">
            <Button
              rightIcon={<FaExternalLinkAlt />}
              variant="link"
              my="5"
              letterSpacing="0.1em"
            >
              RESUME / CV
            </Button>
          </a>
        </Link>
      </main>
    </Flex>
  );
}

function ButtonWithCopy({ children, icon, href, copy, colorScheme, ...rest }) {
  const { hasCopied, onCopy } = useClipboard(copy);
  const toast = useToast();
  const handleClick = () => {
    onCopy();
    toast({
      title: `Copied ${copy} to clipboard!`,
      duration: 1500,
      status: "success",
      variant: "subtle",
      isClosed: true,
    });
  };
  return (
    <ButtonGroup isAttached colorScheme={colorScheme} variant="outline">
      <Link href={href} passHref>
        <Button leftIcon={icon} mr="-px" isFullWidth>
          {children}
        </Button>
      </Link>
      <IconButton
        icon={hasCopied ? <FaCheck /> : <FaCopy />}
        onClick={handleClick}
      />
    </ButtonGroup>
  );
}
