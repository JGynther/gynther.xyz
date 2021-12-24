import { useState } from "react";
import { Layout } from "./xa7d9j";
import { Field } from "./689fahdlh";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Page() {
  const [value, setValue] = useState(5);
  return (
    <>
      <Layout value={value}>
        <Box mb={10}>
          <Heading>Tehtävä 3.</Heading>
          <Text>Ratkaise oheinen, vähemmän yksinkertainen lasku.</Text>
        </Box>
        <Field
          label="2x² + 3x + 1 = 0, x = ?"
          answer={["-1", "-1/2"]}
          href="/salainen/vhjhfasifhal"
          type="text"
          placeholder="Vastaus tähän . . ."
        />
      </Layout>
    </>
  );
}
