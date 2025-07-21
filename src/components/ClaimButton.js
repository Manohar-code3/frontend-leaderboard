import { api } from '../api';

export default function ClaimButton({ userId, onClaimed }) {
  const handleClick = async () => {
    if (!userId) {
      alert("Please select a user first.");
      return;
    }
    const res = await api.post(`/users/${userId}/claim`);
    alert(`🎉 ${res.data.randomPoints} points claimed!`);
    onClaimed();
  };

  return (
    <div className="claim-btn-panel">
      <button className="claim-points-btn" onClick={handleClick}>
        <span role="img" aria-label="points">🎲</span> Claim Points
      </button>
    </div>
  );
}
