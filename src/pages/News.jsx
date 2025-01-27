import React from "react";
import Card from "../components/Card/NewsCard";
import event1 from "../assets/event-1.jpg";
import event2 from "../assets/event-2.jpg";
import event3 from "../assets/event-3.jpg";
import event4 from "../assets/event-4.jpg";
import event5 from "../assets/event-5.jpg";
import event6 from "../assets/event-6.jpg";
import event7 from "../assets/event-7.jpg";
import event8 from "../assets/event-8.jpg";
import NewsCard from "../components/Card/NewsCard";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
const News = () => {
  const newLists = [
    {
      id: 1,
      title:
        "Woman bakes expletive-laden pies to ‘get a rise’ out of her grandmother in annual tradition",
      description:
        "“What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition,” wrote Jess Lydon.",
      images: event1,
    },
    {
      id: 2,
      title:
        "Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans",
      description:
        "Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.",
      images: event2,
    },
    {
      id: 3,
      title: "Burger King is testing a new breakfast sandwich",
      description: "This is a win for the flatbread fans.",
      images: event3,
    },
    {
      id: 4,
      title: "Popeyes permanently adds chicken wings to its menu",
      description: "And you can get ’em in five different flavors.",
      images: event4,
    },
    {
      id: 5,
      title: "Top salmon with a sizzling mix of aromatics and spices",
      description:
        "Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.",
      images: event5,
    },
    {
      id: 6,
      title: "80 Christmas dinner ideas for the ultimate holiday feast",
      description:
        "Build the perfect Christmas menu with these delicious recipes.",
      images: event6,
    },
    {
      id: 7,
      title: "How to make the easiest prime rib roast for the holidays",
      description:
        "Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.",
      images: event7,
    },
    {
      id: 8,
      title: "Turn leftover turkey into a flavorful Waldorf salad",
      description:
        "This light, bright turkey salad is the best post-Thanksgiving lunch.",
      images: event8,
    },
  ];
  return (
    <div className=" mt-4">
      <h3 style={{ color: "red" }}>News Category</h3>
      <div className="news-list">
        <Row md={7}>
          {newLists.map((item) => (
            <Col key={item.id}>
              <NewsCard
                images={item.images}
                title={item.title}
                description={item.description}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default News;
