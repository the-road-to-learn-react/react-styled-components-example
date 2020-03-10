import React from "react";
import styled from "styled-components";

const COURSES = [
  {
    id: "0",
    title: "Road to React",
    url: "http://roadtoreact.com/"
  },
  {
    id: "1",
    title: "Road to Firebase",
    url: "http://roadtofirebase.com/"
  },
  {
    id: "2",
    title: "Road to GraphQL",
    url: "http://roadtographql.com/"
  },
  {
    id: "3",
    title: "Road to Redux",
    url: "http://roadtoredux.com/"
  }
];

const applyFilter = searchTerm => article =>
  article.title.toLowerCase().includes(searchTerm.toLowerCase());

const AppWrapper = styled.div`
  margin: 20px;
`;

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <AppWrapper>
      <Search value={searchTerm} onSearch={handleSearch}>
        <p>Search</p>
      </Search>

      <Courses courses={COURSES.filter(applyFilter(searchTerm))} />
    </AppWrapper>
  );
};

const SearchWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const MyInput = styled.input`
  padding: 10px;
`;

const Search = ({ value, onSearch, children }) => (
  <SearchWrapper>
    {children}&nbsp;
    <MyInput value={value} onChange={onSearch} type="text" />
  </SearchWrapper>
);

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const ListItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid grey;
`;

const Courses = ({ courses }) => (
  <List>
    {courses.map(article => (
      <ListItem key={article.id}>
        <Article article={article} />
      </ListItem>
    ))}
  </List>
);

const MyLink = styled.a`
  text-decoration: none;
`;

const Article = ({ article }) => (
  <MyLink href={article.url}>{article.title}</MyLink>
);

export default App;
