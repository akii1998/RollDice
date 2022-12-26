import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { ListItem } from "@chakra-ui/layout";
import { List } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Box, Flex, Heading, Stack } from "@chakra-ui/layout";

import { useState } from "react";
const Main = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [dice, setDice] = useState(1);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0);
  const numbers = [1, 2, 3, 4, 5, 6];

  const startGameHandler = () => {
    setGameStarted(true);
  };

  const onNumberClicked = (value) => {
    setSelectedNumber(value);
    setError(null);
  };

  const genRandomNo = () => {
    if (selectedNumber) {
      const genratedNo = Math.ceil(Math.random() * 6);
      setDice(genratedNo);

      if (selectedNumber === genratedNo) {
        setScore((prev) => prev + genratedNo*2);
        setSelectedNumber( );
      } else {
        setScore((prev) => prev - 1);
        setSelectedNumber( );
      }
    } else {
      setError("Please Select Number");
    }
  };

  return (
    <>
      {gameStarted ? (
        <>
          <Stack
            justify="center"
            align="center"
            maxW="1200px"
            mx="auto"
            h="100vh"
          >
            <Heading
              as="h1"
              color={error ? "red" : "black"}
              fontSize="60px"
              mb="10"
            >
              {error ? error : "Select the Lucky Number"}
            </Heading>
            <Flex pb="10">
              {numbers.map((value) => (
                <Flex
                  justify="center"
                  align="center"
                  h="60px"
                  w="60px"
                  bg={selectedNumber === value ? "lime" : "grey"}
                  color="white"
                  fontSize="4xl"
                  key={value}
                  mr={4}
                  borderRadius="md"
                  cursor={"pointer"}
                  onClick={() => onNumberClicked(value)}
                >
                  {value}
                </Flex>
              ))}
            </Flex>
            <Box h="150px" width="150px"
             _hover={{ bg: "lime" }}     onClick={genRandomNo}>
              
              <Image src={`./image/dices/dice${dice}.png`}  />
            </Box>

            <Text as="p" fontSize="60px">
              Click on dice to roll
            </Text>

            <Text
              color={score > 0 ? "green" : "red"}
              fontSize="60px"
              fontWeight="bold"
            >
              {score}
            </Text>
            <Text fontSize="50px" fontWeight="bold">
              Total Score
            </Text>
            <Button  fontSize={"30px"} onClick={() => setScore(0)}>Reset Score</Button>
          </Stack>
          <Stack maxW="900px" mx="auto">
            <Heading as="h2" fontSize={"30px"}>Game Rules:-</Heading>
            <List fontSize={"25px"}>
              <ListItem>Select Number any number</ListItem>
              <ListItem>Click on dice image to roll it</ListItem>
              <ListItem>
                Select number is equal to the twice of obtained dice result then you will get
                same point of dice
              </ListItem>
              <ListItem>
                if You are Wrong Score will be deducted by 1 points
              </ListItem>
            </List>
          </Stack>
        </>
      ) : (
        <Flex justify="center" align="center">
          <Image width="50%" src="../image/dice.png" />
          <Stack>
            <Heading fontSize="50px" as="h1">
              {" "}
              The Dice Game
            </Heading>
            <Button
              alignSelf="flex-end"
              bg="black"
              fontSize={"35px"}
              color="white"
              _hover={{ bg: "grey" }}
              onClick={startGameHandler}
            >
              Start Game
            </Button>
          </Stack>
        </Flex>
      )}
    </>
  );
};

export default Main;
