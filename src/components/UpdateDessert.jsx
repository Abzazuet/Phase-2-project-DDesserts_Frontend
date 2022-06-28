import DisplayDessertsDropdown from "./DisplayDessertsDropdown";

function UpdateDessert({ desserts }) {
  return (
    <div className="background">
      <DisplayDessertsDropdown desserts={desserts} />
    </div>
  );
}
export default UpdateDessert;
