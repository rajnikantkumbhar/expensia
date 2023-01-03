import {
  Card,
  Image,
  Button,
  Container,
  Flex,
  ActionIcon,
  Text,
  TextInput,
} from "@mantine/core";
import { User, Lock, Sun, Moon } from "tabler-icons-react";
import { useForm } from "@mantine/form";

import Logo from "../images/logo-dark.svg";

const LoginPage = () => {
  const form = useForm({
    initialValues: {
      userid: "",
      password: "",
    },

    validate: {
      userid: (value) => (value.length < 1 ? "Should not be blank" : null),
      password: (value) => (value.length < 1 ? "Should not be blank" : null),
    },
  });
  return (
    <Container
      fluid
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Card
        shadow="sm"
        p="lg"
        radius="md"
        withBorder
        style={{ width: "20rem" }}
      >
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Flex
            mih={50}
            gap="lg"
            justify="flex-start"
            align="center"
            direction="column"
            wrap="wrap"
          >
            <Image mt="xs" src={Logo} width="140px" alt="Logo" />

            <Text fz="xs" c="dimmed" mb="xs" ta="center">
              Enter your creditials to start with Expensia.
            </Text>

            <TextInput
              withAsterisk
              label="User ID"
              placeholder="enter user id"
              icon=<User size={16} />
              {...form.getInputProps("userid")}
              style={{ width: "100%" }}
            />

            <TextInput
              type="password"
              withAsterisk
              label="Password"
              placeholder="enter password"
              icon=<Lock size={16} />
              {...form.getInputProps("password")}
              style={{ width: "100%" }}
            />

            <Button type="submit" my="sm" fullWidth>
              Login
            </Button>
          </Flex>
        </form>
      </Card>
      <ActionIcon mt={16} variant="light">
        <Sun size={16} />
      </ActionIcon>
    </Container>
  );
};

export default LoginPage;
