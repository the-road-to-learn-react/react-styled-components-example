import React from 'react';
import styled from 'styled-components';

const ARTICLES = [
  { id: '0', title: 'How to fetch data in React', url: 'https://www.robinwieruch.de/react-fetching-data/' },
  { id: '1', title: 'React\'s Ecosystem as a flexible Framework', url: 'https://www.robinwieruch.de/essential-react-libraries-framework/' },
  { id: '2', title: 'What\'s new in React 16?', url: 'https://www.robinwieruch.de/what-is-new-in-react-16/' },
  { id: '3', title: '8 things to learn in React before using Redux', url: 'https://www.robinwieruch.de/learn-react-before-using-redux/' },
  { id: '4', title: 'Accept Stripe Payments with React and Express', url: 'https://www.robinwieruch.de/react-express-stripe-payment/' },
  { id: '5', title: 'Tips to learn React + Redux', url: 'https://www.robinwieruch.de/tips-to-learn-react-redux/' },
  { id: '6', title: '10 Reasons why I moved from Angular to React', url: 'https://www.robinwieruch.de/reasons-why-i-moved-from-angular-to-react/' },
  { id: '7', title: 'All the Conditional Renderings in React', url: 'https://www.robinwieruch.de/conditional-rendering-react/' },
  { id: '8', title: 'Redux or MobX: An attempt to dissolve the Confusion', url: 'https://www.robinwieruch.de/redux-mobx-confusion/' },
  { id: '9', title: 'Tips to learn React + Redux', url: 'https://www.robinwieruch.de/tips-to-learn-react-redux/' },
  { id: '10', title: 'A gentle Introduction to React\'s Higher Order Components', url: 'https://www.robinwieruch.de/gentle-introduction-higher-order-components/' },
  { id: '11', title: 'Complete Course to learn Redux and MobX', url: 'https://roadtoreact.com/' },
];

const applyFilter = searchTerm => article =>
  article.title.toLowerCase().includes(searchTerm.toLowerCase());

const applySearchTerm = searchTerm => () => ({
  searchTerm,
});

const AppWrapper = styled.div`
  margin: 20px;
`;

class App extends React.Component<AppProps, AppState> {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    const { value } = event.target;

    this.setState(applySearchTerm(value));
  }

  render() {
    const { searchTerm } = this.state;

    return (
      <AppWrapper>
        <Search value={searchTerm} onSearch={this.onSearch}>
          <p>Search</p>
        </Search>

        <Articles articles={ARTICLES.filter(applyFilter(searchTerm))} />

        <p>Found in <a href="https://roadtoreact.com/">the Road to learn React</a></p>
      </AppWrapper>
    );
  }
}

const SearchWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const MyInput = styled.input`
  padding: 10px;
`;

const Search = ({ value, onSearch, children }) =>
  <SearchWrapper>
    {children}&nbsp;<MyInput
      value={value}
      onChange={onSearch}
      type="text"
    />
  </SearchWrapper>

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const ListItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid grey;
`;

const Articles = ({ articles }) =>
  <List>
    {articles.map(article =>
      <ListItem key={article.id}>
        <Article article={article} />
      </ListItem>
    )}
  </List>

const MyLink = styled.a`
  text-decoration: none;
`;

const Article = ({ article }) =>
  <MyLink href={article.url}>{article.title}</MyLink>

export default App;
