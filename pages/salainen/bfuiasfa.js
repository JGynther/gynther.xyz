import { useState } from "react";
import { Layout } from "./xa7d9j";
import { Field } from "./689fahdlh";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Page() {
  const [value, setValue] = useState(47);
  return (
    <>
      <Layout value={value}>
        <Box mb={10}>
          <Heading>Tehtävä 25.</Heading>
          <Text>Vastaa kysymykseen.</Text>
        </Box>
        <Field
          label="Mikä on maailman suurin aavikko?"
          answer="Antarktis"
          href="/salainen/joona"
          type="text"
          placeholder="Vastaus tähän . . ."
        />
      </Layout>
    </>
  );
}
