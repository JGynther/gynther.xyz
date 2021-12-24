import { useState, useEffect } from "react";
import { Layout } from "./xa7d9j";
import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Page() {
  const [value, setValue] = useState(8.25);
  const [startTime, setStartTime] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [correct, setCorrect] = useState(false);
  const router = useRouter();

  const Tick = (timeNow) => {
    setTime(timeNow);
    if (value < 38.25) setValue(value + 0.05);
    if (!correct && 1000 * 60 * 10 - (timeNow - startTime) <= 0) {
      setCorrect(true);
    }
  };

  useEffect(() => {
    setStartTime(new Date());
  }, []);

  useEffect(() => {
    const timeNow = new Date();
    const timer = setInterval(() => Tick(timeNow), 1000);
    return () => clearInterval(timer);
  });

  return (
    <>
      <Layout value={value}>
        <Box mb={10}>
          <Heading>Tehtävä 5.</Heading>
          <Text>Suorita tehtävä: odota kymmenen minuuttia.</Text>
        </Box>
        <Stack spacing={10}>
          <Heading size="4xl" align="center">
            {`${Math.floor(
              (1000 * 60 * 10 - (time - startTime)) / 1000 / 60
            )} : ${Math.floor(
              ((1000 * 60 * 10 - (time - startTime)) / 1000) % 60
            )}`}
          </Heading>
          <Button
            disabled={!correct}
            onClick={() => router.push("/salainen/fda96h")}
          >
            Seuraava →
          </Button>
        </Stack>
      </Layout>
    </>
  );
}
