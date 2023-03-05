import React, { useMemo } from "react";

export const UserModal = ({user, open}) => {
  const userAddress = useMemo(() => {
    return `${user?.address.street} ${user?.address.suite} ${user?.address.city} ${user?.address.zipcode}`
  }, [user])
  return open ? (
    <div className="user-modal">
      <button className="user-modal-close">X</button>
      <div className="user-modal-body">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{userAddress}</p>
      </div>
    </div>
  ) : null
};
