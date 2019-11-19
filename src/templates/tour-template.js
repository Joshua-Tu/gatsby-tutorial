import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styles from '../css/template.module.css';
import Image from 'gatsby-image';
import { FaMoneyBillWave, FaMap } from 'react-icons/fa';
import { Link } from 'gatsby';

const TourTemplate = ({ data }) => {
  // console.log(data);
  const {
    name,
    price,
    country,
    days,
    description: { description },
    images,
    start,
    journey,
  } = data.tour;

  console.log(images);

  return (
    <Layout>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {images.map((item, index) => {
              return <Image key={index} fluid={item.fluid} alt={name} className={styles.image} />;
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      journey {
        day
        info
      }
      description {
        description
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;

export default TourTemplate;
