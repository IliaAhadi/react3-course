import Container from "../components/Container";
import Header from "../components/Header";
import OurProducts from "../components/OurProducts";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div>
      <Header />

      {/* session 3 */}
      <Container>
        <div className="my-15 mx-auto text-center">
          <h2 className="text-4xl font-bold ">Browse The Range</h2>
          <p className="text-gray-600 mt-3">
            Our popular products of this week
          </p>
          <ProductList />
          {/* session 4 */}
          <OurProducts />
          {/* end of session 4 */}
        </div>
      </Container>
      {/* end of session 3 */}
    </div>
  );
}
