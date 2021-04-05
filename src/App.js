import './App.css';
import Banniere from './Banniere';
import requests from './request';
import Row from './row';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banniere/>
      <Row title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
