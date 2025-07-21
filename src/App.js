import { useEffect, useState } from 'react';
import { api } from './api';
import UserSelector from './components/UserSelector';
import ClaimButton from './components/ClaimButton';
import ClaimHistory from './components/ClaimHistory';

import Podium from './components/Podium';
import LeaderboardList from './components/LeaderboardList';
import './components/Leaderboard.css';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [claimHistory, setClaimHistory] = useState([]);

  const fetchUsers = async () => {
    const res = await api.get('/users');
    setUsers(res.data);
  };

  const fetchHistory = async () => {
    const res = await api.get('/history');
    setClaimHistory(res.data);
  };

  useEffect(() => {
    fetchUsers();
    fetchHistory();
  }, []);

  const handleUserSelected = (id) => setSelectedUserId(id);

  const handleAfterClaim = () => {
    fetchUsers();
    fetchHistory();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🏆 Leaderboard System</h1>
      <UserSelector users={users} onSelect={handleUserSelected} onUserAdded={fetchUsers} />
      <ClaimButton userId={selectedUserId} onClaimed={handleAfterClaim} />

      {/* NEW UI Components */}
      <Podium topUsers={users.slice(0, 3)} />
      <LeaderboardList users={users.slice(3)} />

      <ClaimHistory data={claimHistory} />
    </div>
  );
}

export default App;
