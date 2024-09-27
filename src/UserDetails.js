export default function UserDetails({ user }) {
  return (
    <div>
    
    <h4>User Email</h4> {user.email}
      <h4>User Password</h4> {user.password}
      <h4>User Birthday Month</h4> {user.selectedOption}
      <h4>User Birth Year</h4> {user.selectyear}
      <h4>User Birth Day</h4> {user.selectday}
      <h4>User Gender</h4> {user.gender}
   
    </div>
  );
}

