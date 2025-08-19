import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, RotateCcw, Clock, CreditCard, Truck, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const Cancellationandrefund = () => {
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
					<h1 className='text-3xl font-extrabold text-emerald-400'>Cancellation & Refund Policy</h1>
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
								<RotateCcw className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>1. Overview</h2>
							</div>
							<p className='text-gray-300 leading-relaxed'>
								At Buy-Buddy, we want you to be completely satisfied with your purchase. 
								This policy outlines our cancellation and refund procedures to ensure a 
								transparent and hassle-free experience for our customers.
							</p>
						</div>

						{/* Cancellation Policy */}
						<div className='border-b border-gray-700 pb-6'>
							<div className='flex items-center mb-4'>
								<XCircle className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>2. Order Cancellation</h2>
							</div>
							<div className='space-y-4'>
								<div>
									<h3 className='text-lg font-medium text-white mb-2'>Before Shipment</h3>
									<p className='text-gray-300 leading-relaxed mb-3'>
										You can cancel your order at any time before it ships. To cancel:
									</p>
									<ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
										<li>Contact our customer support within 2 hours of placing the order</li>
										<li>Provide your order number and reason for cancellation</li>
										<li>We'll process the cancellation and issue a full refund</li>
									</ul>
								</div>
								<div>
									<h3 className='text-lg font-medium text-white mb-2'>After Shipment</h3>
									<p className='text-gray-300 leading-relaxed'>
										Once your order has shipped, it cannot be cancelled. However, you may 
										return the item(s) upon delivery following our return policy.
									</p>
								</div>
							</div>
						</div>

						{/* Return Policy */}
						<div className='border-b border-gray-700 pb-6'>
							<div className='flex items-center mb-4'>
								<RotateCcw className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>3. Return Policy</h2>
							</div>
							<div className='space-y-4'>
								<div>
									<h3 className='text-lg font-medium text-white mb-2'>Eligibility</h3>
									<p className='text-gray-300 leading-relaxed mb-3'>
										Most items can be returned within 30 days of delivery, provided they meet these conditions:
									</p>
									<ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
										<li>Item is in original, unworn condition</li>
										<li>Original tags and packaging are intact</li>
										<li>Item has not been altered or damaged</li>
										<li>Return is initiated within 30 days of delivery</li>
									</ul>
								</div>
								<div>
									<h3 className='text-lg font-medium text-white mb-2'>Non-Returnable Items</h3>
									<ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
										<li>Personalized or custom-made items</li>
										<li>Sale or clearance items (unless defective)</li>
										<li>Underwear, swimwear, and intimate apparel</li>
										<li>Items marked as "Final Sale"</li>
									</ul>
								</div>
							</div>
						</div>

						{/* Refund Process */}
						<div className='border-b border-gray-700 pb-6'>
							<div className='flex items-center mb-4'>
								<CreditCard className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>4. Refund Process</h2>
							</div>
							<div className='space-y-4'>
								<div>
									<h3 className='text-lg font-medium text-white mb-2'>Processing Time</h3>
									<p className='text-gray-300 leading-relaxed mb-3'>
										Once we receive your returned item(s), refunds are processed as follows:
									</p>
									<ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
										<li>Inspection and processing: 3-5 business days</li>
										<li>Refund issuance: 5-10 business days</li>
										<li>Bank processing: 3-7 business days (varies by bank)</li>
									</ul>
								</div>
								<div>
									<h3 className='text-lg font-medium text-white mb-2'>Refund Methods</h3>
									<ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
										<li>Original payment method (credit/debit card)</li>
										<li>Store credit for future purchases</li>
										<li>Bank transfer (for specific cases)</li>
									</ul>
								</div>
							</div>
						</div>

						{/* Return Shipping */}
						<div className='border-b border-gray-700 pb-6'>
							<div className='flex items-center mb-4'>
								<Truck className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>5. Return Shipping</h2>
							</div>
							<div className='space-y-4'>
								<div>
									<h3 className='text-lg font-medium text-white mb-2'>Free Returns</h3>
									<p className='text-gray-300 leading-relaxed mb-3'>
										We offer free return shipping for items that are:
									</p>
									<ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
										<li>Defective or damaged upon arrival</li>
										<li>Incorrect items shipped</li>
										<li>Size exchanges (first exchange only)</li>
									</ul>
								</div>
								<div>
									<h3 className='text-lg font-medium text-white mb-2'>Customer-Paid Returns</h3>
									<p className='text-gray-300 leading-relaxed'>
										For other returns, customers are responsible for return shipping costs. 
										We recommend using a trackable shipping method and keeping the receipt.
									</p>
								</div>
							</div>
						</div>

						{/* How to Return */}
						<div className='border-b border-gray-700 pb-6'>
							<h2 className='text-xl font-semibold text-white mb-4'>6. How to Return</h2>
							<div className='space-y-4'>
								<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
									<div className='text-center p-4 bg-gray-700 rounded-lg'>
										<div className='w-12 h-12 bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-3'>
											<span className='text-emerald-400 font-bold text-lg'>1</span>
										</div>
										<h3 className='text-white font-medium mb-2'>Initiate Return</h3>
										<p className='text-gray-300 text-sm'>
											Contact customer support or use our online return portal
										</p>
									</div>
									<div className='text-center p-4 bg-gray-700 rounded-lg'>
										<div className='w-12 h-12 bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-3'>
											<span className='text-emerald-400 font-bold text-lg'>2</span>
										</div>
										<h3 className='text-white font-medium mb-2'>Package Item</h3>
										<p className='text-gray-300 text-sm'>
											Securely package the item with original packaging and tags
										</p>
									</div>
									<div className='text-center p-4 bg-gray-700 rounded-lg'>
										<div className='w-12 h-12 bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-3'>
											<span className='text-emerald-400 font-bold text-lg'>3</span>
										</div>
										<h3 className='text-white font-medium mb-2'>Ship & Track</h3>
										<p className='text-gray-300 text-sm'>
											Ship using provided label and track your return
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Exchanges */}
						<div className='border-b border-gray-700 pb-6'>
							<h2 className='text-xl font-semibold text-white mb-4'>7. Exchanges</h2>
							<p className='text-gray-300 leading-relaxed mb-4'>
								We offer size exchanges for most items. To exchange an item:
							</p>
							<ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
								<li>Contact customer support within 30 days of delivery</li>
								<li>Specify the desired size and color</li>
								<li>Return the original item in new condition</li>
								<li>We'll ship the replacement item at no additional cost</li>
							</ul>
						</div>

						{/* Contact Information */}
						<div>
							<h2 className='text-xl font-semibold text-white mb-4'>8. Need Help?</h2>
							<p className='text-gray-300 leading-relaxed mb-4'>
								If you have questions about our cancellation and refund policy, please contact us:
							</p>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<div className='p-4 bg-emerald-900 bg-opacity-20 border border-emerald-800 rounded-lg'>
									<h3 className='text-emerald-400 font-medium mb-2'>Customer Support</h3>
									<p className='text-gray-300 text-sm'>
										Email: support@buybuddy.com<br />
										Phone: +1 (555) 123-4567
									</p>
								</div>
								<div className='p-4 bg-emerald-900 bg-opacity-20 border border-emerald-800 rounded-lg'>
									<h3 className='text-emerald-400 font-medium mb-2'>Business Hours</h3>
									<p className='text-gray-300 text-sm'>
										Monday - Friday: 8:00 AM - 6:00 PM EST<br />
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

export default Cancellationandrefund;

