import { useState } from "react";
import { Layout } from "./xa7d9j";
import { Field } from "./689fahdlh";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Page() {
  const [value, setValue] = useState(89);
  return (
    <>
      <Layout value={value}>
        <Box mb={10}>
          <Heading>???</Heading>
          <Text>???</Text>
        </Box>
        <Field
          label="???"
          answer="?"
          href="/salainen/onnittelut"
          type="text"
          placeholder="Vastaus tähän . . ."
        />
      </Layout>
    </>
  );
}
