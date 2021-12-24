import { useState } from "react";
import { Layout } from "./xa7d9j";
import { Field } from "./689fahdlh";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Page() {
  const [value, setValue] = useState(2);
  return (
    <>
      <Layout value={value}>
        <Box mb={10}>
          <Heading>Tehtävä 2.</Heading>
          <Text>Ratkaise oheinen, yksinkertainen lasku.</Text>
        </Box>
        <Field
          label="Paljonko on 1 + 1 ?"
          answer="11"
          href="/salainen/gufsaf150"
          type="number"
          placeholder="Vastaus tähän . . ."
        />
      </Layout>
    </>
  );
}
