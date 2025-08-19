import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Shield, Users, CreditCard, Truck, RotateCcw } from "lucide-react";

const Termsandconditions = () => {
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
						to='/signup'
						className='flex items-center text-emerald-400 hover:text-emerald-300 transition-colors'
					>
						<ArrowLeft className='h-5 w-5 mr-2' />
						Back to Sign Up
					</Link>
					<h1 className='text-3xl font-extrabold text-emerald-400'>Terms and Conditions</h1>
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
								<FileText className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>1. Introduction</h2>
							</div>
							<p className='text-gray-300 leading-relaxed'>
								Welcome to BuyBuddy. These Terms and Conditions govern your use of our e-commerce platform
								and services. By accessing or using our website, you agree to be bound by these terms.
								If you disagree with any part of these terms, please do not use our service.
							</p>
						</div>

						{/* Account Registration */}
						<div className='border-b border-gray-700 pb-6'>
							<div className='flex items-center mb-4'>
								<Users className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>2. Account Registration</h2>
							</div>
							<p className='text-gray-300 leading-relaxed mb-4'>
								To access certain features of our platform, you must create an account. You agree to:
							</p>
							<ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
								<li>Provide accurate and complete information</li>
								<li>Maintain the security of your account credentials</li>
								<li>Accept responsibility for all activities under your account</li>
								<li>Notify us immediately of any unauthorized use</li>
							</ul>
						</div>

						{/* Payment Terms */}
						<div className='border-b border-gray-700 pb-6'>
							<div className='flex items-center mb-4'>
								<CreditCard className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>3. Payment and Billing</h2>
							</div>
							<p className='text-gray-300 leading-relaxed mb-4'>
								All prices are listed in your local currency. Payment is due at the time of purchase.
								We accept major credit cards and other payment methods as indicated during checkout.
							</p>
							<p className='text-gray-300 leading-relaxed'>
								By completing a purchase, you authorize us to charge the specified amount to your
								selected payment method.
							</p>
						</div>

						{/* Shipping and Delivery */}
						<div className='border-b border-gray-700 pb-6'>
							<div className='flex items-center mb-4'>
								<Truck className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>4. Shipping and Delivery</h2>
							</div>
							<p className='text-gray-300 leading-relaxed mb-4'>
								We strive to process and ship orders promptly. Delivery times may vary based on:
							</p>
							<ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
								<li>Product availability</li>
								<li>Shipping method selected</li>
								<li>Destination location</li>
								<li>Customs processing (international orders)</li>
							</ul>
						</div>

						{/* Returns and Refunds */}
						<div className='border-b border-gray-700 pb-6'>
							<div className='flex items-center mb-4'>
								<RotateCcw className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>5. Returns and Refunds</h2>
							</div>
							<p className='text-gray-300 leading-relaxed mb-4'>
								We want you to be satisfied with your purchase. Most items can be returned within
								30 days of delivery for a full refund or exchange, subject to our return policy.
							</p>
							<p className='text-gray-300 leading-relaxed'>
								Certain items may not be eligible for return. Please review our return policy
								before making a purchase.
							</p>
						</div>

						{/* Privacy and Data */}
						<div className='border-b border-gray-700 pb-6'>
							<div className='flex items-center mb-4'>
								<Shield className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>6. Privacy and Data Protection</h2>
							</div>
							<p className='text-gray-300 leading-relaxed'>
								Your privacy is important to us. We collect, use, and protect your personal
								information in accordance with our Privacy Policy. By using our service, you
								consent to our data practices as described in our Privacy Policy.
							</p>
						</div>

						{/* Limitation of Liability */}
						<div className='border-b border-gray-700 pb-6'>
							<h2 className='text-xl font-semibold text-white mb-4'>7. Limitation of Liability</h2>
							<p className='text-gray-300 leading-relaxed'>
								BuyBuddy shall not be liable for any indirect, incidental, special, consequential,
								or punitive damages resulting from your use of our service or any products purchased
								through our platform.
							</p>
						</div>

						{/* Changes to Terms */}
						<div className='border-b border-gray-700 pb-6'>
							<h2 className='text-xl font-semibold text-white mb-4'>8. Changes to Terms</h2>
							<p className='text-gray-300 leading-relaxed'>
								We reserve the right to modify these terms at any time. Changes will be effective
								immediately upon posting. Your continued use of our service constitutes acceptance
								of the modified terms.
							</p>
						</div>

						{/* Contact Information */}
						<div>
							<h2 className='text-xl font-semibold text-white mb-4'>9. Contact Information</h2>
							<p className='text-gray-300 leading-relaxed'>
								If you have any questions about these Terms and Conditions, please contact us at{' '}
								<span className='text-emerald-400'>support@buybuddy.com</span>
							</p>
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

export default Termsandconditions;

