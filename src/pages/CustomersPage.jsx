import ComingSoon from "../components/ComingSoon.jsx";

const CustomersPage = () => {
  return (
    <section
      className="rounded-lg h-full
      grid grid-cols-4 gap-4
      border border-gray-500/10"
    >
      <ComingSoon />
    </section>
  );
};

export default CustomersPage;
