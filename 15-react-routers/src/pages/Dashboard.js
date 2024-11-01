const Dashboard = ({ user }) => {
  // console.log(user, "user");
  return (
    <section className="section">
      <h5>Dashboard</h5>
      <h4>Hello, {user?.name}</h4>
    </section>
  );
};
export default Dashboard;
