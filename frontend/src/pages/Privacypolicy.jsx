import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Eye, Database, Lock, Bell, Globe, Mail } from "lucide-react";

const Privacypolicy = () => {
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
					<h1 className='text-3xl font-extrabold text-emerald-400'>Privacy Policy</h1>
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
								<Shield className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>1. Introduction</h2>
							</div>
							<p className='text-gray-300 leading-relaxed'>
								At BuyBuddy, we are committed to protecting your privacy and ensuring the security
								of your personal information. This Privacy Policy explains how we collect, use,
								disclose, and safeguard your information when you use our e-commerce platform.
							</p>
						</div>

						{/* Information We Collect */}
						<div className='border-b border-gray-700 pb-6'>
							<div className='flex items-center mb-4'>
								<Database className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>2. Information We Collect</h2>
							</div>
							<p className='text-gray-300 leading-relaxed mb-4'>
								We collect several types of information from and about users of our platform:
							</p>
							<div className='space-y-4'>
								<div>
									<h3 className='text-lg font-medium text-white mb-2'>Personal Information</h3>
									<ul className='list-disc list-inside text-gray-300 space-y-1 ml-4'>
										<li>Name and contact information</li>
										<li>Email address and phone number</li>
										<li>Billing and shipping addresses</li>
										<li>Payment information (processed securely)</li>
									</ul>
								</div>
								<div>
									<h3 className='text-lg font-medium text-white mb-2'>Usage Information</h3>
									<ul className='list-disc list-inside text-gray-300 space-y-1 ml-4'>
										<li>Browsing history and preferences</li>
										<li>Purchase history and order details</li>
										<li>Device information and IP address</li>
										<li>Cookies and similar technologies</li>
									</ul>
								</div>
							</div>
						</div>

						{/* How We Use Information */}
						<div className='border-b border-gray-700 pb-6'>
							<div className='flex items-center mb-4'>
								<Eye className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>3. How We Use Your Information</h2>
							</div>
							<p className='text-gray-300 leading-relaxed mb-4'>
								We use the information we collect for various purposes, including:
							</p>
							<ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
								<li>Processing and fulfilling your orders</li>
								<li>Providing customer support and service</li>
								<li>Improving our platform and user experience</li>
								<li>Sending order confirmations and updates</li>
								<li>Marketing communications (with your consent)</li>
								<li>Preventing fraud and ensuring security</li>
								<li>Complying with legal obligations</li>
							</ul>
						</div>

						{/* Information Sharing */}
						<div className='border-b border-gray-700 pb-6'>
							<div className='flex items-center mb-4'>
								<Globe className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>4. Information Sharing and Disclosure</h2>
							</div>
							<p className='text-gray-300 leading-relaxed mb-4'>
								We do not sell, trade, or otherwise transfer your personal information to third
								parties without your consent, except in the following circumstances:
							</p>
							<ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
								<li>Service providers who assist in our operations</li>
								<li>Payment processors for secure transactions</li>
								<li>Shipping partners for order delivery</li>
								<li>Legal requirements or law enforcement</li>
								<li>Business transfers or mergers</li>
							</ul>
						</div>

						{/* Data Security */}
						<div className='border-b border-gray-700 pb-6'>
							<div className='flex items-center mb-4'>
								<Lock className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>5. Data Security</h2>
							</div>
							<p className='text-gray-300 leading-relaxed mb-4'>
								We implement appropriate technical and organizational security measures to protect
								your personal information against unauthorized access, alteration, disclosure, or destruction.
							</p>
							<p className='text-gray-300 leading-relaxed'>
								These measures include encryption, secure servers, regular security assessments,
								and limited access to personal information on a need-to-know basis.
							</p>
						</div>

						{/* Cookies and Tracking */}
						<div className='border-b border-gray-700 pb-6'>
							<div className='flex items-center mb-4'>
								<Bell className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>6. Cookies and Tracking Technologies</h2>
							</div>
							<p className='text-gray-300 leading-relaxed mb-4'>
								We use cookies and similar tracking technologies to enhance your browsing experience
								and provide personalized content. These technologies help us:
							</p>
							<ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
								<li>Remember your preferences and settings</li>
								<li>Analyze website traffic and usage patterns</li>
								<li>Provide relevant product recommendations</li>
								<li>Improve our platform functionality</li>
							</ul>
							<p className='text-gray-300 leading-relaxed mt-4'>
								You can control cookie settings through your browser preferences.
							</p>
						</div>

						{/* Your Rights */}
						<div className='border-b border-gray-700 pb-6'>
							<h2 className='text-xl font-semibold text-white mb-4'>7. Your Privacy Rights</h2>
							<p className='text-gray-300 leading-relaxed mb-4'>
								Depending on your location, you may have certain rights regarding your personal information:
							</p>
							<ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
								<li>Access and review your personal information</li>
								<li>Request correction of inaccurate data</li>
								<li>Request deletion of your personal information</li>
								<li>Opt-out of marketing communications</li>
								<li>Data portability</li>
								<li>Withdraw consent for data processing</li>
							</ul>
						</div>

						{/* Children's Privacy */}
						<div className='border-b border-gray-700 pb-6'>
							<h2 className='text-xl font-semibold text-white mb-4'>8. Children's Privacy</h2>
							<p className='text-gray-300 leading-relaxed'>
								Our platform is not intended for children under the age of 13. We do not knowingly
								collect personal information from children under 13. If you believe we have collected
								such information, please contact us immediately.
							</p>
						</div>

						{/* International Transfers */}
						<div className='border-b border-gray-700 pb-6'>
							<h2 className='text-xl font-semibold text-white mb-4'>9. International Data Transfers</h2>
							<p className='text-gray-300 leading-relaxed'>
								Your information may be transferred to and processed in countries other than your own.
								We ensure that such transfers comply with applicable data protection laws and
								implement appropriate safeguards to protect your information.
							</p>
						</div>

						{/* Changes to Policy */}
						<div className='border-b border-gray-700 pb-6'>
							<h2 className='text-xl font-semibold text-white mb-4'>10. Changes to This Privacy Policy</h2>
							<p className='text-gray-300 leading-relaxed'>
								We may update this Privacy Policy from time to time. We will notify you of any
								material changes by posting the new policy on our platform and updating the
								"Last Updated" date. Your continued use of our service constitutes acceptance
								of the updated policy.
							</p>
						</div>

						{/* Contact Information */}
						<div>
							<div className='flex items-center mb-4'>
								<Mail className='h-6 w-6 text-emerald-400 mr-3' />
								<h2 className='text-xl font-semibold text-white'>11. Contact Us</h2>
							</div>
							<p className='text-gray-300 leading-relaxed'>
								If you have any questions, concerns, or requests regarding this Privacy Policy
								or our data practices, please contact us at{' '}
								<span className='text-emerald-400'>privacy@buybuddy.com</span>
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

export default Privacypolicy;

