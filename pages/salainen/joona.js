import { useState } from "react";
import { Layout } from "./xa7d9j";
import { Field } from "./689fahdlh";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Page() {
  const [value, setValue] = useState(59);
  return (
    <>
      <Layout value={value}>
        <Box mb={10}>
          <Heading>Tehtävä ???</Heading>
          <Text>???</Text>
        </Box>
        <Field
          label="Kuka on paras?"
          answer="Joona"
          href="/salainen/kuolema"
          type="text"
          placeholder="Vastaus tähän . . ."
        />
      </Layout>
    </>
  );
}
