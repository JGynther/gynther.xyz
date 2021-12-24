import { useState } from "react";
import { useRouter } from "next/router";
import { Layout } from "./xa7d9j";
import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  FormControl,
  FormLabel,
  Fade,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

export default function Page() {
  const [value, setValue] = useState(0.5);
  return (
    <>
      <Layout value={value}>
        <Box mb={10}>
          <Heading>Tehtävä 1.</Heading>
          <Text>Ratkaise oheinen, yksinkertainen lasku.</Text>
        </Box>
        <Field
          label="Paljonko on 1 + 1 ?"
          answer="2"
          href="/salainen/xgu97f"
          type="number"
          placeholder="Vastaus tähän . . ."
        />
      </Layout>
    </>
  );
}

export function Field({ label, answer, href, ...props }) {
  const [userAnswer, setUserAnswer] = useState("");
  const [error, setError] = useState(false);
  const [correct, setCorrect] = useState(false);
  const router = useRouter();
  const checkAnswer = () => {
    if (userAnswer === "") return;

    if (typeof answer === "string") {
      if (userAnswer.trim() === answer) {
        setError(false);
        setCorrect(true);
      } else {
        setError(true);
      }
    } else {
      if (answer.includes(userAnswer.trim())) {
        setError(false);
        setCorrect(true);
      } else {
        setError(true);
      }
    }
  };

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Stack spacing={5}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">?</InputLeftElement>
          <Input {...props} onChange={(e) => setUserAnswer(e.target.value)} />
        </InputGroup>
        <Button disabled={correct} onClick={checkAnswer}>
          Lukitse
        </Button>
        <Fade in={error || correct}>
          <Alert status={error ? "error" : "info"}>
            <AlertIcon />
            <AlertTitle>Vastaus on {error ? "väärin" : "oikein"}!</AlertTitle>
          </Alert>
        </Fade>
        <Fade in={correct}>
          <Button onClick={() => router.push(href)}>Seuraava →</Button>
        </Fade>
      </Stack>
    </FormControl>
  );
}
