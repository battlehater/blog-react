import React, { useMemo } from "react";
import './UserModal.css'

export const UserModal = ({user, open, onClose}) => {
  const userAddress = useMemo(() => {
    return user ? `${user?.address.street} ${user?.address.suite} ${user?.address.city} ${user?.address.zipcode}` : 'User not set'
  }, [user])



  return open ? (
    <div className="user-modal">
      <button className="user-modal-close" onClick={onClose}>X</button>
      <div className="user-modal-body">
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        <p>{userAddress}</p>
      </div>
    </div>
  ) : null
};
