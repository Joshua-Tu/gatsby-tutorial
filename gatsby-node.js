const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // 这里是nodeJS，所以graphql不能再像在gatsby react中那样把graphql
  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  data.tours.edges.forEach(({ node }) => {
    createPage({
      // 注意：属性名path和component这是不能用其他的，不能改变
      path: `tours/${node.slug}`,
      component: path.resolve('./src/templates/tour-template.js'),
      context: {
        // 这里下面的slug是你可以自己定义起名的变量，用slug是为了明确，你可以自己选其他的变量名
        slug: node.slug,
      },
    });
  });
};
