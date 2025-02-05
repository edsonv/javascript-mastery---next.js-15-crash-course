'use client';
import { useParams } from 'next/navigation';

const UserDetails = () => {
  const { id } = useParams();
  return <div>USER DETAILS PAGE: {id}</div>;
};

export default UserDetails;
