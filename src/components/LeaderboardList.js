// LeaderboardList.js
import './Leaderboard.css';

export default function LeaderboardList({ users }) {
  return (
    <table className="leaderboard-table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>User</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <tr key={user._id}>
            <td>{i + 4}</td>
            <td>
              <span className="avatar-small">{user.avatar || '🧑'}</span>
              {user.name}
            </td>
            <td>{user.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
