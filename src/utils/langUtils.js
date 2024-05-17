import plArticles from '../components/AllEntries/DataEntries';
import enArticles from '../components/AllEntries/DataEntries';

const getArticles = (lang) => {
  switch (lang) {
    case "en":
      return enArticles;
    default:
      return plArticles;
  }
}

export {
  getArticles
}
