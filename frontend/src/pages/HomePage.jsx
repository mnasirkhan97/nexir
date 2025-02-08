// import { useEffect } from "react";
// import CategoryItem from "../components/CategoryItem";
// import { useProductStore } from "../stores/useProductStore";
// import FeaturedProducts from "../components/FeaturedProducts";

// const categories = [
//   { href: "/watches", name: "Watches", imageUrl: "/watches.jpg" },
//   { href: "/bags", name: "Bags", imageUrl: "/bags1.jpg" },
//   { href: "/hats", name: "Hats & Caps", imageUrl: "/hat.jpg" },
//   { href: "/perfumes", name: "Perfumes", imageUrl: "/perfume.jpg" },
//   { href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
//   { href: "/hoodies", name: "Hoodies", imageUrl: "/hood.jpg" },
//   { href: "/formal-wear", name: "Formal Wear", imageUrl: "/formalwear.jpg" },
//   { href: "/ethnic-wear", name: "Ethnic Wear", imageUrl: "/shalwar.jpg" },
//   { href: "/belts", name: "Belts", imageUrl: "/belt.jpg" },
//   { href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
//   { href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
//   { href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
//   { href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
//   { href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
//   { href: "/socks", name: "Socks", imageUrl: "/socks.jpg" },
// ];

// const HomePage = () => {
//   const { fetchFeaturedProducts, products, isLoading } = useProductStore();

//   useEffect(() => {
//     fetchFeaturedProducts();
//   }, [fetchFeaturedProducts]);

//   return (
//     <div className="relative min-h-screen bg-[#0A192F] text-white overflow-hidden">
//       {/* Background Effect */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] to-[#2563EB] opacity-50"></div>

//       {/* Content Wrapper */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <h1 className="text-center text-5xl sm:text-6xl font-bold text-[#7DD3FC] mb-4">
//           Explore Nexir’s Collections
//         </h1>
//         <p className="text-center text-xl text-[#D1E8FF] mb-12">
//           Discover Trendsetting & Sustainable Fashion
//         </p>

//         {/* Categories Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {categories.map((category) => (
//             <CategoryItem category={category} key={category.name} />
//           ))}
//         </div>

//         {/* Featured Products Section */}
//         {!isLoading && products.length > 0 && (
//           <div className="mt-16">
//             <h2 className="text-center text-4xl font-bold text-[#7DD3FC] mb-6">
//               Featured Products
//             </h2>
//             <FeaturedProducts featuredProducts={products} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// ===> Old Theme ===
import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	// { href: "/glasses", name: "Glasses", imageUrl: "/glasses1.jpg" },
	{ href: "/watches", name: "Watches", imageUrl: "/watches.jpg" },
	{ href: "/bags", name: "Bags", imageUrl: "/bags1.jpg" },
	{ href: "/hats", name: "Hats & Caps", imageUrl: "/hat.jpg" },
	{ href: "/perfumes", name: "Perfumes", imageUrl: "/perfume.jpg" },
	{ href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
	{ href: "/hoodies", name: "Hoodies", imageUrl: "/hood.jpg" },
	{ href: "/formal-wear", name: "Formal Wear", imageUrl: "/formalwear.jpg" },
	{ href: "/ethnic-wear", name: "Ethnic Wear", imageUrl: "/shalwar.jpg" },
	{ href: "/belts", name: "Belts", imageUrl: "/belt.jpg" },
	{ href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
	{ href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
	{ href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
	{ href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
	{ href: "/socks", name: "Socks", imageUrl: "/socks.jpg" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	// return (
	// 	<div className='relative min-h-screen bg-gradient-to-b from-[#0A192F] to-[#2563EB] text-white overflow-hidden'>
	// 		<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
	// 			<h1 className='text-center text-5xl sm:text-6xl font-bold text-[#7DD3FC] mb-4'>
	// 				Explore Nexir’s Collections
	// 			</h1>
	// 			<p className='text-center text-xl text-[#D1E8FF] mb-12'>
	// 				Discover Trendsetting & Sustainable Fashion
	// 			</p>
	
	// 			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
	// 				{categories.map((category) => (
	// 					<CategoryItem category={category} key={category.name} />
	// 				))}
	// 			</div>
	
	// 			{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
	// 		</div>
	// 	</div>
	// );
	

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
					{/* Explore Our Categories */}
					Explore Nexir’s Collections
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
					{/* Discover the latest trends in eco-friendly fashion */}
					Discover Trendsetting & Sustainable Fashion
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePage;
