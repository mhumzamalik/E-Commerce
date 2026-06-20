import React from 'react'
import { Link } from 'react-router-dom';

// src/components/NewArrivals.jsx
export default function Women() {
  const products = [
    {
      id: 1,
      title: "3 PIECE - EMBROIDERED LAWN SUIT",
      subtitle: "UNSTITCHED SUMMER '26 - NEW ARRIVALS",
      price: "Rs.5,290",
      tag: "NEW IN",
      image: "https://images.unsplash.com/photo-1733470324488-d0e10d014d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFraXN0YW5pJTIwZHJlc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      title: "3 PIECE - EMBROIDERED DOBBY SUIT",
      subtitle: "UNSTITCHED SUMMER '26 - NEW ARRIVALS",
      price: "Rs.6,590",
      tag: "NEW IN",
      image: "https://images.unsplash.com/photo-1704119142483-1269733bcedb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFraXN0YW5pJTIwZHJlc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      title: "EMBELLISHED RAGLAN ABAYA SET",
      subtitle: "UNSTITCHED SUMMER '26 - NEW ARRIVALS",
      price: "Rs.10,990",
      tag: "NEW IN",
      image: "https://images.unsplash.com/photo-1705920824583-0e783235394d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFraXN0YW5pJTIwZHJlc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      title: "KAFTAN ABAYA SET",
      subtitle: "UNSTITCHED SUMMER '26 - NEW ARRIVALS",
      price: "Rs.10,990",
      tag: "NEW IN",
      image: "https://images.unsplash.com/photo-1701252072712-e939599623f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFraXN0YW5pJTIwZHJlc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      title: "3 PIECE - EMBROIDERED LAWN SUIT",
      subtitle: "UNSTITCHED SUMMER '26 - NEW ARRIVALS",
      price: "Rs.5,290",
      tag: "NEW IN",
      image: "https://images.unsplash.com/photo-1747847471517-952a3eb93a89?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFraXN0YW5pJTIwZHJlc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      title: "3 PIECE - EMBROIDERED DOBBY SUIT",
      subtitle: "UNSTITCHED SUMMER '26 - NEW ARRIVALS",
      price: "Rs.6,590",
      tag: "NEW IN",
      image: "https://images.unsplash.com/photo-1733470381591-c5dfb9df3c3d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFraXN0YW5pJTIwZHJlc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 7,
      title: "EMBELLISHED RAGLAN ABAYA SET",
      subtitle: "UNSTITCHED SUMMER '26 - NEW ARRIVALS",
      price: "Rs.10,990",
      tag: "NEW IN",
      image: "https://images.unsplash.com/photo-1760613130027-3959a3eb939c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBha2lzdGFuaSUyMGRyZXNzZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 8,
      title: "KAFTAN ABAYA SET",
      subtitle: "UNSTITCHED SUMMER '26 - NEW ARRIVALS",
      price: "Rs.10,990",
      tag: "NEW IN",
      image: "https://images.unsplash.com/photo-1733209589780-99d3a8a3b3e4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBha2lzdGFuaSUyMGRyZXNzZXN8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <section className="px-8 py-16 bg-white text-black">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((item) => (
                        <Link
                to={`/product/${item.id}`}
                state={{ product: item }}
                key={item.id}
              >
            <div className="text-center cursor-pointer hover:opacity-90 transition">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover"
              />
              <div className="mt-4">
                <h3 className="font-semibold text-sm tracking-wide">{item.title}</h3>
                {item.subtitle && (
                  <p className="text-gray-500 text-xs mt-1">{item.subtitle}</p>
                )}
                <p className="mt-2 font-medium">{item.price}</p>
                <span className="inline-block mt-2 text-xs font-semibold border border-gray-300 px-2 py-1">
                  {item.tag}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
