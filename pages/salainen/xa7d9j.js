import Head from "next/head";
import { useRouter } from "next/router";

import { useState } from "react";

import {
  Container,
  Flex,
  Box,
  Stack,
  Button,
  Heading,
  Text,
  Progress,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Fade,
} from "@chakra-ui/react";

export default function Page() {
  const [value, setValue] = useState(0);
  const [error, setError] = useState(false);
  const router = useRouter();
  const handleClick = () => router.push("/salainen/689fahdlh");
  return (
    <>
      <Head>
        <title>Huippusalainen</title>
      </Head>
      <Layout value={value}>
        <Stack spacing={10}>
          <Heading size="xl" align="center">
            Tervetuloa . . .
          </Heading>
          <Text>
            Your mission, should you choose to accept it... suorita mahdottomat
            tehtävät ja saa haltuun Joonan piilottama joululahja. Tehtävät ovat
            mahdottomia ja kuolema lähes varma.
          </Text>
          <Fade in={error}>
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>Huomio</AlertTitle>
              <AlertDescription>Tehtävä on pakko hyväksyä.</AlertDescription>
            </Alert>
          </Fade>
          <Stack spacing={5}>
            <Button onClick={handleClick}>Hyväksy tehtävä</Button>
            <Button disabled={error} onClick={() => setError(true)}>
              Hylkää tehtävä
            </Button>
          </Stack>
        </Stack>
      </Layout>
    </>
  );
}

export function Layout({ value, children }) {
  return (
    <Container>
      <Flex flexDirection="column" minHeight="100vh">
        <Box mt={5}>
          <Progress value={value} />
          <Text align="center" mt={1}>
            Edistymisesi . . .
          </Text>
        </Box>
        <Flex flexGrow={1} flexDirection="column" justify="center">
          {children}
        </Flex>
      </Flex>
    </Container>
  );
}
