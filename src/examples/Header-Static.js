import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const getData = graphql`
  query firstQuery {
    site {
      siteMetadata {
        description
        siteTitle: title
        author
        data {
          name
          age
        }
      }
    }
  }
`;

const HeaderStatic = () => {
  return (
    <StaticQuery
      query={getData}
      render={(data) => {
        // console.log(data);
        return (
          <div>
            <p>Description: {data.site.siteMetadata.description}</p>
          </div>
        );
      }}
    ></StaticQuery>
  );
};

export default HeaderStatic;
