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
import { useDispatch, useSelector } from "react-redux";
import LogoDark from "../images/logo-dark.svg";
import LogoLight from "../images/logo-light.svg";
import { toggleTheme, toggleLoggedIn } from "../redux/RootReducer";

const LoginPage = () => {
  const statex = useSelector((state) => state);
  const dispatch = useDispatch();

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
        shadow="md"
        p="lg"
        radius="sm"
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
            <Image
              mt="xs"
              src={statex.theme === "dark" ? LogoDark : LogoLight}
              width="140px"
              alt="Logo"
            />

            <Text fz="xs" c="dimmed" mb="xs" ta="center">
              Enter your creditials to start with Expensia.
            </Text>

            <TextInput
              autoComplete="off"
              withAsterisk
              label="User ID"
              placeholder="enter user id"
              icon=<User size={16} />
              {...form.getInputProps("userid")}
              style={{ width: "100%" }}
            />

            <TextInput
              autoComplete="off"
              type="password"
              withAsterisk
              label="Password"
              placeholder="enter password"
              icon=<Lock size={16} />
              {...form.getInputProps("password")}
              style={{ width: "100%" }}
            />

            <Button
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
              type="submit"
              my="sm"
              fullWidth
              onClick={() => dispatch(toggleLoggedIn())}
            >
              Login
            </Button>
          </Flex>
        </form>
      </Card>
      <ActionIcon
        mt={16}
        variant="light"
        onClick={() => dispatch(toggleTheme())}
      >
        {statex.theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </ActionIcon>
    </Container>
  );
};

export default LoginPage;
