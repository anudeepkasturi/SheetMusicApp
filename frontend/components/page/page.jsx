import React from 'react';
import styles from '../styles';
import PageHeader from './page_header';

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page" style={styles.page}>
        <PageHeader/>
      </div>
    );
  }
}

export default Page;
