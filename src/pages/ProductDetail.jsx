import { useParams, useLocation } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();

  const product = location.state?.product;

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <section className="px-8 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto object-cover"
        />

        <div>
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-2xl font-bold ">{product.price}</p>
          <p className="text-gray-500">{product.subtitle}</p>
          <p className="w-120">
            Shirt <br/>
            Printed Lawn Shirt 3m<br/> 
            Embroidered Neckline 1pc<br/> Embroidered Hem
            & Sleeves Border 2pc <br/>Fabric: Lawn <br/>Colour: Black & Gray <br/>Dupatta<br/>
            Printed Voile Dupatta 2.5m <br/>Fabric: Voile <br/>Colour: Black & Gray
            <br/>Trouser <br/>Dyed Cotton Trouser 2.5m <br/>Fabric: Cotton <br/>Colour: Black & Gray<br/><br/>
            Note: Actual product color may vary slightly from the image.
          </p>
          <button className="bg-black mt-5 text-white px-6 py-3 font-semibold hover:bg-gray-800 transition">
            ADD TO BAG
          </button>
        </div>
      </div>
    </section>
  );
}
