import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Truck, Clock, MapPin, Package, Globe, CreditCard, AlertCircle } from "lucide-react";

const Shippingpolicy = () => {
	return (
		<div className='flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
			<motion.div
				className='sm:mx-auto sm:w-full sm:max-w-4xl'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<div className='flex items-center justify-between mb-8'>
					<Link
						to='/purchase-success'
						className='flex items-center text-emerald-400 hover:text-emerald-300 transition-colors'
					>
						<ArrowLeft className='h-5 w-5 mr-2' />
						Back to Purchase Success
					</Link>
					<h1 className='text-3xl font-extrabold text-emerald-400'>Shipping Policy</h1>
				</div>
			</motion.div>

			<motion.div
				className='sm:mx-auto sm:w-full sm:max-w-4xl'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				<div className='bg-gray-800 py-8 px-6 shadow sm:rounded-lg'>
					<div className='space-y-8'>
						{/* Introduction */}
						<div className='border-b border-gray-700 pb-6'>
							<div className='flex items-center mb-4'>
								<Truck className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>1. Overview</h2>
							</div>
							<p className='text-gray-300 leading-relaxed'>
								At Buy-Buddy, we strive to provide fast, reliable, and eco-friendly shipping 
								options for all our customers. This policy outlines our shipping methods, 
								delivery times, and shipping costs to ensure transparency and customer satisfaction.
							</p>
						</div>

						{/* Shipping Methods */}
						<div className='border-b border-gray-700 pb-6'>
							<div className='flex items-center mb-4'>
								<Package className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>2. Shipping Methods</h2>
							</div>
							<div className='space-y-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
									<div className='p-4 bg-gray-700 rounded-lg border border-gray-600'>
										<div className='flex items-center mb-3'>
											<div className='w-3 h-3 bg-emerald-400 rounded-full mr-3'></div>
											<h3 className='text-lg font-medium text-white'>Standard Shipping</h3>
										</div>
										<p className='text-gray-300 text-sm mb-3'>
											Our most popular shipping option, perfect for most orders.
										</p>
										<ul className='text-gray-400 text-sm space-y-1'>
											<li>• 5-7 business days</li>
											<li>• Free on orders over $50</li>
											<li>• $5.99 for orders under $50</li>
											<li>• Tracking included</li>
										</ul>
									</div>
									<div className='p-4 bg-gray-700 rounded-lg border border-gray-600'>
										<div className='flex items-center mb-3'>
											<div className='w-3 h-3 bg-emerald-400 rounded-full mr-3'></div>
											<h3 className='text-lg font-medium text-white'>Express Shipping</h3>
										</div>
										<p className='text-gray-300 text-sm mb-3'>
											Fast delivery for when you need your items quickly.
										</p>
										<ul className='text-gray-400 text-sm space-y-1'>
											<li>• 2-3 business days</li>
											<li>• $12.99 flat rate</li>
											<li>• Priority handling</li>
											<li>• Real-time tracking</li>
										</ul>
									</div>
								</div>
								<div className='p-4 bg-gray-700 rounded-lg border border-gray-600'>
									<div className='flex items-center mb-3'>
										<div className='w-3 h-3 bg-emerald-400 rounded-full mr-3'></div>
										<h3 className='text-lg font-medium text-white'>Overnight Shipping</h3>
									</div>
									<p className='text-gray-300 text-sm mb-3'>
										Next-day delivery for urgent orders (available in select areas).
									</p>
									<ul className='text-gray-400 text-sm space-y-1'>
										<li>• Next business day</li>
										<li>• $24.99 flat rate</li>
										<li>• Available Mon-Fri</li>
										<li>• Order by 2 PM EST</li>
									</ul>
								</div>
							</div>
						</div>

						{/* Processing Time */}
						<div className='border-b border-gray-700 pb-6'>
							<div className='flex items-center mb-4'>
								<Clock className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>3. Order Processing</h2>
							</div>
							<div className='space-y-4'>
								<p className='text-gray-300 leading-relaxed'>
									We process orders quickly to get your items shipped as soon as possible:
								</p>
								<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
									<div className='text-center p-4 bg-gray-700 rounded-lg'>
										<div className='w-12 h-12 bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-3'>
											<span className='text-emerald-400 font-bold text-lg'>1</span>
										</div>
										<h3 className='text-white font-medium mb-2'>Order Placed</h3>
										<p className='text-gray-300 text-sm'>
											Order received and confirmed
										</p>
									</div>
									<div className='text-center p-4 bg-gray-700 rounded-lg'>
										<div className='w-12 h-12 bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-3'>
											<span className='text-emerald-400 font-bold text-lg'>2</span>
										</div>
										<h3 className='text-white font-medium mb-2'>Processing</h3>
										<p className='text-gray-300 text-sm'>
											Items picked and packaged
										</p>
									</div>
									<div className='text-center p-4 bg-gray-700 rounded-lg'>
										<div className='w-12 h-12 bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-3'>
											<span className='text-emerald-400 font-bold text-lg'>3</span>
										</div>
										<h3 className='text-white font-medium mb-2'>Shipped</h3>
										<p className='text-gray-300 text-sm'>
											Tracking number provided
										</p>
									</div>
								</div>
								<div className='p-4 bg-emerald-900 bg-opacity-20 border border-emerald-800 rounded-lg'>
									<h3 className='text-emerald-400 font-medium mb-2'>Processing Times</h3>
									<ul className='text-gray-300 text-sm space-y-1'>
										<li>• Orders placed before 2 PM EST: Same-day processing</li>
										<li>• Orders placed after 2 PM EST: Next business day processing</li>
										<li>• Weekend orders: Processed on Monday</li>
										<li>• Holiday orders: May experience delays</li>
									</ul>
								</div>
							</div>
						</div>

						{/* Delivery Areas */}
						<div className='border-b border-gray-700 pb-6'>
							<div className='flex items-center mb-4'>
								<Globe className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>4. Delivery Areas</h2>
							</div>
							<div className='space-y-4'>
								<div>
									<h3 className='text-lg font-medium text-white mb-2'>Domestic Shipping</h3>
									<p className='text-gray-300 leading-relaxed mb-3'>
										We ship to all 50 US states and territories:
									</p>
									<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
										<div className='p-3 bg-gray-700 rounded-lg'>
											<h4 className='text-emerald-400 font-medium mb-2'>Continental US</h4>
											<p className='text-gray-300 text-sm'>
												All 48 contiguous states with standard shipping times
											</p>
										</div>
										<div className='p-3 bg-gray-700 rounded-lg'>
											<h4 className='text-emerald-400 font-medium mb-2'>Alaska & Hawaii</h4>
											<p className='text-gray-300 text-sm'>
												Extended delivery times may apply
											</p>
										</div>
									</div>
								</div>
								<div>
									<h3 className='text-lg font-medium text-white mb-2'>International Shipping</h3>
									<p className='text-gray-300 leading-relaxed'>
										Currently, we only ship within the United States. We're working on 
										expanding our international shipping options in the future.
									</p>
								</div>
							</div>
						</div>

						{/* Shipping Costs */}
						<div className='border-b border-gray-700 pb-6'>
							<div className='flex items-center mb-4'>
								<CreditCard className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>5. Shipping Costs</h2>
							</div>
							<div className='space-y-4'>
								<div className='overflow-x-auto'>
									<table className='w-full text-sm'>
										<thead>
											<tr className='border-b border-gray-600'>
												<th className='text-left py-3 px-4 text-white font-medium'>Order Value</th>
												<th className='text-left py-3 px-4 text-white font-medium'>Standard</th>
												<th className='text-left py-3 px-4 text-white font-medium'>Express</th>
												<th className='text-left py-3 px-4 text-white font-medium'>Overnight</th>
											</tr>
										</thead>
										<tbody className='text-gray-300'>
											<tr className='border-b border-gray-700'>
												<td className='py-3 px-4'>Under $25</td>
												<td className='py-3 px-4'>$5.99</td>
												<td className='py-3 px-4'>$12.99</td>
												<td className='py-3 px-4'>$24.99</td>
											</tr>
											<tr className='border-b border-gray-700'>
												<td className='py-3 px-4'>$25 - $49.99</td>
												<td className='py-3 px-4'>$3.99</td>
												<td className='py-3 px-4'>$12.99</td>
												<td className='py-3 px-4'>$24.99</td>
											</tr>
											<tr className='border-b border-gray-700'>
												<td className='py-3 px-4'>$50+</td>
												<td className='py-3 px-4 text-emerald-400 font-medium'>FREE</td>
												<td className='py-3 px-4'>$12.99</td>
												<td className='py-3 px-4'>$24.99</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className='p-4 bg-emerald-900 bg-opacity-20 border border-emerald-800 rounded-lg'>
									<h3 className='text-emerald-400 font-medium mb-2'>Free Shipping Benefits</h3>
									<ul className='text-gray-300 text-sm space-y-1'>
										<li>• Free standard shipping on orders $50 and above</li>
										<li>• No minimum purchase for loyalty members</li>
										<li>• Free shipping on all exchanges and returns</li>
									</ul>
								</div>
							</div>
						</div>

						{/* Tracking & Notifications */}
						<div className='border-b border-gray-700 pb-6'>
							<h2 className='text-xl font-semibold text-white mb-4'>6. Tracking & Notifications</h2>
							<div className='space-y-4'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									<div className='p-4 bg-gray-700 rounded-lg'>
										<h3 className='text-emerald-400 font-medium mb-2'>Order Tracking</h3>
										<ul className='text-gray-300 text-sm space-y-1'>
											<li>• Tracking number provided via email</li>
											<li>• Real-time updates on our website</li>
											<li>• Mobile app notifications</li>
											<li>• SMS updates (optional)</li>
										</ul>
									</div>
									<div className='p-4 bg-gray-700 rounded-lg'>
										<h3 className='text-emerald-400 font-medium mb-2'>Delivery Updates</h3>
										<ul className='text-gray-300 text-sm space-y-1'>
											<li>• Estimated delivery date</li>
											<li>• Out for delivery notifications</li>
											<li>• Delivery confirmation</li>
											<li>• Signature requirements</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						{/* Special Circumstances */}
						<div className='border-b border-gray-700 pb-6'>
							<div className='flex items-center mb-4'>
								<AlertCircle className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>7. Special Circumstances</h2>
							</div>
							<div className='space-y-4'>
								<div>
									<h3 className='text-lg font-medium text-white mb-2'>Weather Delays</h3>
									<p className='text-gray-300 leading-relaxed mb-3'>
										Severe weather conditions may cause delivery delays. We'll notify you 
										of any weather-related shipping issues and provide updated delivery estimates.
									</p>
								</div>
								<div>
									<h3 className='text-lg font-medium text-white mb-2'>Holiday Shipping</h3>
									<p className='text-gray-300 leading-relaxed mb-3'>
										During major holidays, processing and delivery times may be extended. 
										We recommend placing orders early during peak seasons.
									</p>
								</div>
								<div>
									<h3 className='text-lg font-medium text-white mb-2'>Address Issues</h3>
									<p className='text-gray-300 leading-relaxed'>
										Incorrect or incomplete addresses may cause delivery delays. Please 
										ensure your shipping address is accurate and complete.
									</p>
								</div>
							</div>
						</div>

						{/* Contact Information */}
						<div>
							<h2 className='text-xl font-semibold text-white mb-4'>8. Need Help?</h2>
							<p className='text-gray-300 leading-relaxed mb-4'>
								If you have questions about shipping or need assistance with your order:
							</p>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<div className='p-4 bg-emerald-900 bg-opacity-20 border border-emerald-800 rounded-lg'>
									<h3 className='text-emerald-400 font-medium mb-2'>Customer Support</h3>
									<p className='text-gray-300 text-sm'>
										Email: shipping@buybuddy.com<br />
										Phone: +1 (555) 123-4567
									</p>
								</div>
								<div className='p-4 bg-emerald-900 bg-opacity-20 border border-emerald-800 rounded-lg'>
									<h3 className='text-emerald-400 font-medium mb-2'>Live Chat</h3>
									<p className='text-gray-300 text-sm'>
										Available Mon-Fri: 8:00 AM - 6:00 PM EST<br />
										Saturday: 9:00 AM - 4:00 PM EST
									</p>
								</div>
							</div>
						</div>

						{/* Footer */}
						<div className='pt-6 border-t border-gray-700'>
							<p className='text-sm text-gray-400 text-center'>
								Last updated: {new Date().toLocaleDateString()}
							</p>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Shippingpolicy;

