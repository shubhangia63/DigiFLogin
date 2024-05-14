// RoleForm.js
import React from 'react';

function RoleForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Role Name" />
      <button type="submit">Add Role</button>
    </form>
  );
}

export default RoleForm;
