import React from "react";
import { Box, Heading, FormControl, Input, Button, Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";

interface Tstate {
  Borgir: boolean;
  Bread: boolean;
  Breakfast: boolean;
  Cake: boolean;
  Chocolate: boolean;
  Desert: boolean;
  Fries: boolean;
  Noodles: boolean;
  Sausage: boolean;
  Spicy: boolean;
  Sweet: boolean;
  Favourite: boolean;
  Feature: boolean;
  New: boolean;
  dataCard: any[];
}

class Home extends React.Component<{}, Tstate> {
  constructor(props: any) {
    super(props);
    this.state = {
      Borgir: false,
      Bread: false,
      Breakfast: false,
      Cake: false,
      Chocolate: false,
      Desert: false,
      Fries: false,
      Noodles: false,
      Sausage: false,
      Spicy: false,
      Sweet: false,
      Favourite: false,
      Feature: false,
      New: false,
      dataCard: [],
    };
  }

  handleBorgir = () => {
    this.setState({ Borgir: true });
  };
  handleBread = () => {
    this.setState({ Bread: true });
  };
  handleBreakfast = () => {
    this.setState({ Breakfast: true });
  };
  handleCake = () => {
    this.setState({ Cake: true });
  };
  handleChocolate = () => {
    this.setState({ Chocolate: true });
  };
  handleDesert = () => {
    this.setState({ Desert: true });
  };
  handleFries = () => {
    this.setState({ Fries: true });
  };
  handleNoodles = () => {
    this.setState({ Noodles: true });
  };
  handleSausage = () => {
    this.setState({ Sausage: true });
  };
  handleSpicy = () => {
    this.setState({ Spicy: true });
  };
  handleSweet = () => {
    this.setState({ Sweet: true });
  };
  handleFavourite = () => {
    this.setState({ Favourite: true });
  };
  handleFeature = () => {
    this.setState({ Feature: true });
  };
  handleNew = () => {
    this.setState({ New: true });
  };

  showAlert = () => {
    const { Borgir, Bread, Breakfast, Cake, Chocolate, Desert, Fries, Noodles, Sausage, Spicy, Sweet, Favourite, Feature, New } = this.state;

    alert(
      `ANDA MEMILIH:\n\n${Borgir ? "🎇Borgir\n" : ""}${Bread ? "🎇Bread\n" : ""}${Breakfast ? "🎇Breakfast\n" : ""}${Chocolate ? "🎇Chocolate\n" : ""}${Desert ? "🎇Desert\n" : ""}${Fries ? "🎇Fries\n" : ""}${Noodles ? "🎇Noodles\n" : ""}${
        Sausage ? "🎇Sausage\n" : ""
      }${Spicy ? "🎇Spicy\n" : ""}${Sweet ? "🎇Sweet\n" : ""}${Cake ? "🎇Cake\n" : ""}${Favourite ? "🎇Favourite\n" : ""}${Feature ? "🎇Feature\n" : ""}${New ? "🎇New\n" : ""}\nTERIMA KASIH!`
    );
    this.setState({ Borgir: false, Bread: false, Breakfast: false, Cake: false, Chocolate: false, Desert: false, Fries: false, Noodles: false, Sausage: false, Spicy: false, Sweet: false, Favourite: false, Feature: false, New: false });
  };

  componentDidMount(): void {
    axios.get("https://api.npoint.io/3e72c110229ae65ddcc7").then((res) => {
      this.setState({ dataCard: res.data });
    });
  }

  render() {
    const { Borgir, Bread, Breakfast, Cake, Chocolate, Desert, Fries, Noodles, Sausage, Spicy, Sweet, Favourite, Feature, New, dataCard } = this.state;

    return (
      <div>
        <Navbar backgroundImage="" />
        <Box maxW={"1516px"} display="flex" flexDirection={{ sm: "row", base: "column" }} fontFamily={"hack"} m="0 auto">
          <Box w={{ lg: "20%", sm: "40%", base: "100%" }} bg="white" padding=" 0 20px">
            <FormControl display={"flex"} my={"1rem"}>
              <Input placeholder="" flex={3} borderRadius="10px 0 0 10px" />
              <Button bg={"grey"} color="white" flex={1} borderRadius="0 10px 10px 0" onClick={this.showAlert}>
                Cari
              </Button>
            </FormControl>
            <Accordion allowToggle>
              <AccordionItem>
                <AccordionButton disabled={false}>
                  <Box as="span" flex="1" textAlign="left">
                    Category
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <input type="checkbox" checked={Borgir} onChange={this.handleBorgir} style={{ marginRight: "1rem", cursor: "pointer" }} id="Borgir" />
                  <label htmlFor="Borgir" style={{ cursor: "pointer" }}>
                    Borgir
                  </label>
                  <Box mb={2} />
                  <input type="checkbox" checked={Bread} onChange={this.handleBread} style={{ marginRight: "1rem", cursor: "pointer" }} id="Bread" />
                  <label htmlFor="Bread" style={{ cursor: "pointer" }}>
                    Bread
                  </label>
                  <Box mb={2} />
                  <input type="checkbox" checked={Breakfast} onChange={this.handleBreakfast} style={{ marginRight: "1rem", cursor: "pointer" }} id="bf" />
                  <label htmlFor="bf" style={{ cursor: "pointer" }}>
                    Breakfast
                  </label>
                  <Box mb={2} />
                  <input type="checkbox" checked={Cake} onChange={this.handleCake} style={{ marginRight: "1rem", cursor: "pointer" }} id="c" />
                  <label htmlFor="c" style={{ cursor: "pointer" }}>
                    Cake
                  </label>
                  <Box mb={2} />
                  <input type="checkbox" checked={Chocolate} onChange={this.handleChocolate} style={{ marginRight: "1rem", cursor: "pointer" }} id="cc" />
                  <label htmlFor="cc" style={{ cursor: "pointer" }}>
                    Chocolate
                  </label>
                  <Box mb={2} />
                  <input type="checkbox" checked={Desert} onChange={this.handleDesert} style={{ marginRight: "1rem", cursor: "pointer" }} id="d" />
                  <label htmlFor="d" style={{ cursor: "pointer" }}>
                    Desert
                  </label>
                  <Box mb={2} />
                  <input type="checkbox" checked={Fries} onChange={this.handleFries} style={{ marginRight: "1rem", cursor: "pointer" }} id="ff" />
                  <label htmlFor="ff" style={{ cursor: "pointer" }}>
                    Fries
                  </label>
                  <Box mb={2} />
                  <input type="checkbox" checked={Noodles} onChange={this.handleNoodles} style={{ marginRight: "1rem", cursor: "pointer" }} id="nnn" />
                  <label htmlFor="nnn" style={{ cursor: "pointer" }}>
                    Noodles
                  </label>
                  <Box mb={2} />
                  <input type="checkbox" checked={Sausage} onChange={this.handleSausage} style={{ marginRight: "1rem", cursor: "pointer" }} id="sss" />
                  <label htmlFor="sss" style={{ cursor: "pointer" }}>
                    Sausage
                  </label>
                  <Box mb={2} />
                  <input type="checkbox" checked={Spicy} onChange={this.handleSpicy} style={{ marginRight: "1rem", cursor: "pointer" }} id="ssss" />
                  <label htmlFor="ssss" style={{ cursor: "pointer" }}>
                    Spicy
                  </label>
                  <Box mb={2} />
                  <input type="checkbox" checked={Sweet} onChange={this.handleSweet} style={{ marginRight: "1rem", cursor: "pointer" }} id="sssss" />
                  <label htmlFor="sssss" style={{ cursor: "pointer" }}>
                    Sweet
                  </label>
                  <Box mb={2} />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton disabled={false}>
                  <Box as="span" flex="1" textAlign="left">
                    Tags
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <input type="checkbox" checked={Favourite} onChange={this.handleFavourite} id="Favourite" style={{ marginRight: "1rem", cursor: "pointer" }} />
                  <label htmlFor="Favourite" style={{ backgroundColor: "green", color: "white", padding: "0 10px 4px 10px", borderRadius: "10PX", cursor: "pointer" }}>
                    Favourite
                  </label>

                  <Box mb="2" />
                  <input type="checkbox" checked={Feature} onChange={this.handleFeature} id="Featured" style={{ marginRight: "1rem", cursor: "pointer" }} />
                  <label htmlFor="Featured" style={{ backgroundColor: "red", color: "white", padding: "0 10px 4px 10px", borderRadius: "10PX", cursor: "pointer" }}>
                    Featured
                  </label>

                  <Box mb="2" />
                  <input type="checkbox" checked={New} onChange={this.handleNew} id="New" style={{ marginRight: "1rem", cursor: "pointer" }} />
                  <label htmlFor="New" style={{ backgroundColor: "black", color: "white", padding: "0 10px 4px 10px", borderRadius: "10PX", cursor: "pointer" }}>
                    New
                  </label>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box w={{ lg: "80%", sm: "60%", base: "100%" }} boxSizing="border-box" p={"20px"} display="flex" flexWrap="wrap" backgroundImage="radial-gradient(circle, #ff0000, #cd5800, #957200, #5b7d00, #008000)">
            {dataCard.map((item, ind) => (
              <Card
                key={ind}
                w={{ lg: "28%", md: "45%", sm: "80%", base: "80%" }}
                m="0 auto"
                my="2rem"
                borderRadius={"20px"}
                boxShadow="0 0 0 3px red,0 0 0 6px yellow,0 0 0 9px green"
                bg="grey"
                color="#dddddd"
                transition=".5s ease-in-out"
                _hover={{ transform: "scale(1.2) rotatex(360deg)" }}
              >
                <Image w="100%" h={"180px"} borderRadius={"20px 20px 0 0"} src={item.Image} />
                <CardBody>
                  <Link to={"/detail/" + ind}>
                    <Heading size="sm" textAlign={"center"}>
                      {item.title}
                    </Heading>
                  </Link>
                  <Text overflow="hidden" textAlign="justify" h={{ sm: "100px", base: "80px" }}>
                    {item.desc}
                  </Text>
                  <Box display={"flex"} justifyContent={"left"}>
                    <Button variant="unstyled" color={"green"} p="0">
                      #{item.button1}
                    </Button>
                    {item.button2 && (
                      <Button variant="unstyled" color={"red"} p="0 0 0 5px">
                        #{item.button2}
                      </Button>
                    )}
                    {item.new && (
                      <Button ml="auto" bg="red" color="white" transform="translate(-90px,-340px) skewy(5deg)" border="2px solid yellow">
                        💖{item.new}✨
                      </Button>
                    )}
                    {item.featured && (
                      <Button ml="auto" bg="#f78c0a" color="white" transform="translate(-63px,-340px) " border="2px solid yellow">
                        🤞{item.featured}🎉
                      </Button>
                    )}
                    {item.favourite && (
                      <Button ml="auto" bg="green" color="white" transform="translate(-60px,-340px)" border="2px solid yellow">
                        💚{item.favourite}🔫
                      </Button>
                    )}
                  </Box>
                </CardBody>
              </Card>
            ))}
          </Box>
        </Box>
      </div>
    );
  }
}

export default Home;
