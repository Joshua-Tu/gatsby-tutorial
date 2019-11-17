import React from 'react';
// 以下是安装react icons react icon的方式，注意react icon 不是gatsby plugin
import { FaMap } from 'react-icons/fa';
import Image from 'gatsby-image';
import styles from '../../css/tour.module.css';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const SingleTour = ({ tour }) => {
  // console.log(tour);

  const { name, price, country, days, slug, images } = tour;
  const mainImage = images[0].fluid;

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt={name} />
        <Link className={styles.link} to={`/tours/${slug}`}>
          details
        </Link>
      </div>

      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}></div>
        <h4 className={styles.country}>
          <FaMap className={styles.icon} /> {country}
        </h4>
        <div className={styles.details}>
          <h6>{days} days</h6>
          <h6>from ${price}</h6>
        </div>
      </div>
    </article>
  );
};

SingleTour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,

    // images 是一个含有object的数列
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

export default SingleTour;
