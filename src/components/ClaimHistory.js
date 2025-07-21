export default function ClaimHistory({ data }) {
    return (
      <div className="claim-history">
        <h3>🕓 Claim History</h3>
        <table className="claim-history-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Points</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.userId?.name || <i>Unknown</i>}</td>
                <td>
                  <span role="img" aria-label="points">🎲</span> {item.pointsClaimed}
                </td>
                <td>
                  {new Date(item.claimedAt).toLocaleString('en-IN', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  