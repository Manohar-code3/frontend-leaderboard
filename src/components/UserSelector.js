import { useState } from 'react';
import { api } from '../api';

export default function UserSelector({ users, onSelect, onUserAdded }) {
  const [newUser, setNewUser] = useState('');

  const addUser = async () => {
    if (!newUser.trim()) return;
    await api.post('/users', { name: newUser });
    setNewUser('');
    onUserAdded();
  };

  return (
    <div className="action-panel">
      <select onChange={e => onSelect(e.target.value)} defaultValue="">
        <option value="" disabled>Select a user…</option>
        {users.map(u => (
          <option key={u._id} value={u._id}>{u.name}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Add new user"
        value={newUser}
        onChange={e => setNewUser(e.target.value)}
      />
      <button onClick={addUser}>Add User</button>
    </div>
  );
}
