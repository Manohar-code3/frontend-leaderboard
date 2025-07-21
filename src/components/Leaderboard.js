import './Leaderboard.css';

export default function Leaderboard({ users }) {
    const sorted = [...users].sort((a, b) => b.points - a.points);
  
    return (
      <div style={{ marginBottom: '20px' }}>
        <h3>🏆 Leaderboard</h3>
        <table border="1" cellPadding="10">
          <thead>
            <tr><th>Rank</th><th>Name</th><th>Total Points</th></tr>
          </thead>
          <tbody>
            {sorted.map((user, i) => (
              <tr key={user._id}>
                <td>{i + 1}</td>
                <td>{user.name}</td>
                <td>{user.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  