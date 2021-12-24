import { useState } from "react";
import { Layout } from "./xa7d9j";
import { Field } from "./689fahdlh";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Page() {
  const [value, setValue] = useState(38.5);
  return (
    <>
      <Layout value={value}>
        <Box mb={10}>
          <Heading>Tehtävä 16.</Heading>
          <Text>Vastaa kysymykseen.</Text>
        </Box>
        <Field
          label="Mikäli oli edellisen tehtävän numero?"
          answer="5"
          href="/salainen/hifsa08"
          type="number"
          placeholder="Vastaus tähän . . ."
        />
      </Layout>
    </>
  );
}
