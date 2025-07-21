// Podium.js
import './Leaderboard.css';

// const rankClasses = ['podium-second', 'podium-first', 'podium-third'];
// const crownIcons = [
//   '🥈', // 2nd
//   '👑', // 1st
//   '🥉', // 3rd
// ];

export default function Podium({ topUsers }) {
  return (
    <div className="podium">
  {/* Second Place (Left) */}
  {topUsers[1] && (
    <div className="podium-place podium-second">
      <div className="crown">🥈</div>
      <div className="avatar">🧑</div>
      <div className="name">{topUsers[1].name}</div>
      <div className="score">{topUsers[1].points}</div>
    </div>
  )}

  {/* First Place (Center) */}
  {topUsers[0] && (
    <div className="podium-place podium-first">
      <div className="crown">👑</div>
      <div className="avatar">🧑</div>
      <div className="name">{topUsers[0].name}</div>
      <div className="score">{topUsers[0].points}</div>
    </div>
  )}

  {/* Third Place (Right) */}
  {topUsers[2] && (
    <div className="podium-place podium-third">
      <div className="crown">🥉</div>
      <div className="avatar">🧑</div>
      <div className="name">{topUsers[2].name}</div>
      <div className="score">{topUsers[2].points}</div>
    </div>
  )}
</div>

    
  );
}
