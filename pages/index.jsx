import Head from "next/head";
import Link from "next/link";
import {
  Text,
  IconButton,
  Button,
  ButtonGroup,
  Flex,
  Stack,
  Tooltip,
  Box,
} from "@chakra-ui/react";

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

import { useState, useEffect } from "react";

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
    <Flex
      minH="100vh"
      mx="10"
      my={["10", "0"]}
      alignItems="center"
      justifyContent="center"
    >
      <Head>
        <title>joona@gynther.xyz</title>
        <meta name="description" content="Personal website of Joona Gynther" />
      </Head>

      <main>
        <Banner />
        <Text
          my="4"
          fontSize={{ base: "sm", md: "md" }}
          fontWeight="bold"
          letterSpacing="0.08em"
        >
          Joona Gynther
        </Text>
        <Text my="1" fontSize={{ base: "sm", md: "md" }}>
          Statistical data analytics @ Tampere University
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

        <Stack mt={10} spacing={5}>
          <LinkButton href="/Resume_Gynther.pdf">RESUME / CV</LinkButton>
          <Flex alignItems="center">
            <LinkButton href="/public-key-joona@gynther.xyz.txt">
              PGP PUBLIC KEY
            </LinkButton>
            <Tooltip
              label="Emails from joona@gynther.xyz are signed with PGP, and can be verified with this key."
              fontSize="md"
            >
              <Box
                mx={4}
                bg="gray.700"
                w={6}
                h={6}
                borderRadius="100"
                textAlign="center"
              >
                <Text opacity={0.8} pointerEvents="none">
                  ?
                </Text>
              </Box>
            </Tooltip>
          </Flex>
        </Stack>
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
      variant: "solid",
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

function Banner() {
  const [banner, setBanner] = useState("");

  const getBanner = async () => {
    const text = await fetch("/banner.txt").then((r) => r.text());
    setBanner(text);
  };

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <Text
      fontSize={{ base: "5px", md: "8px" }}
      whiteSpace="pre"
      fontFamily="monospace"
      my=""
    >
      {banner}
    </Text>
  );
}

function LinkButton({ href, children, ...rest }) {
  return (
    <Box>
      <Link href={href} passHref>
        <a target="_blank">
          <Button
            rightIcon={<FaExternalLinkAlt />}
            variant="link"
            letterSpacing="0.1em"
            {...rest}
          >
            {children}
          </Button>
        </a>
      </Link>
    </Box>
  );
}
