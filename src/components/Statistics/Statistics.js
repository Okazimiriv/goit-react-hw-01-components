// import PropTypes from 'prop-types';

// const Statistics = ({ title, stats }) => {
//   return (
//     <section class="statistics">
//       {title && <h2 class="title">Upload stats</h2>}

//       <ul class="stat-list">
//         {stats.map((stat, index) => (
//           <li key={stat.id} class="item">
//             <span class="label">{stat.label}</span>
//             <span class="percentage">{stat.percentage + '%'}</span>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// Statistic.PropTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

// export default Statistics;