import { useState } from "react";
import { motion } from "framer-motion";
import { 
	Mail, 
	Phone, 
	MapPin, 
	Clock, 
	MessageSquare, 
	User, 
	Send, 
	Loader,
	CheckCircle,
	AlertCircle
} from "lucide-react";

const ContactUs = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		
		// Simulate form submission
		try {
			await new Promise(resolve => setTimeout(resolve, 1500));
			setSubmitStatus('success');
			setFormData({ name: "", email: "", subject: "", message: "" });
		} catch (error) {
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const contactInfo = [
		{
			icon: Mail,
			title: "Email Us",
			details: "support@buybuddy.com",
			description: "We'll respond within 24 hours"
		},
		{
			icon: Phone,
			title: "Call Us",
			details: "+1 (555) 123-4567",
			description: "Mon-Fri from 8am to 6pm"
		},
		{
			icon: MapPin,
			title: "Visit Us",
			details: "123 Fashion Street, Eco City",
			description: "EC 12345, United States"
		},
		{
			icon: Clock,
			title: "Business Hours",
			details: "Monday - Friday",
			description: "8:00 AM - 6:00 PM EST"
		}
	];

	return (
		<div className='flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
			{/* Header Section */}
			<motion.div
				className='sm:mx-auto sm:w-full sm:max-w-4xl text-center'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<h1 className='text-4xl sm:text-5xl font-extrabold text-emerald-400 mb-4'>
					Get in Touch
				</h1>
				<p className='text-xl text-gray-300 max-w-2xl mx-auto'>
					Have questions about our eco-friendly fashion? We'd love to hear from you. 
					Send us a message and we'll respond as soon as possible.
				</p>
			</motion.div>

			<motion.div
				className='mt-12 sm:mx-auto sm:w-full sm:max-w-6xl'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					{/* Contact Form */}
					<div className='bg-gray-800 py-8 px-6 shadow-lg rounded-lg'>
						<h2 className='text-2xl font-bold text-white mb-6 flex items-center'>
							<MessageSquare className='h-6 w-6 text-emerald-400 mr-3' />
							Send us a Message
						</h2>

						{submitStatus === 'success' && (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								className='mb-6 p-4 bg-emerald-900 border border-emerald-700 rounded-lg flex items-center'
							>
								<CheckCircle className='h-5 w-5 text-emerald-400 mr-3' />
								<span className='text-emerald-300'>
									Thank you! Your message has been sent successfully. We'll get back to you soon.
								</span>
							</motion.div>
						)}

						{submitStatus === 'error' && (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								className='mb-6 p-4 bg-red-900 border border-red-700 rounded-lg flex items-center'
							>
								<AlertCircle className='h-5 w-5 text-red-400 mr-3' />
								<span className='text-red-300'>
									Something went wrong. Please try again or contact us directly.
								</span>
							</motion.div>
						)}

						<form onSubmit={handleSubmit} className='space-y-6'>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
								<div>
									<label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-2'>
										Full Name
									</label>
									<div className='relative'>
										<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
											<User className='h-5 w-5 text-gray-400' />
										</div>
										<input
											id='name'
											name='name'
											type='text'
											required
											value={formData.name}
											onChange={handleInputChange}
											className='block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 
												rounded-md shadow-sm placeholder-gray-400 focus:outline-none 
												focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'
											placeholder='John Doe'
										/>
									</div>
								</div>

								<div>
									<label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-2'>
										Email Address
									</label>
									<div className='relative'>
										<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
											<Mail className='h-5 w-5 text-gray-400' />
										</div>
										<input
											id='email'
											name='email'
											type='email'
											required
											value={formData.email}
											onChange={handleInputChange}
											className='block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 
												rounded-md shadow-sm placeholder-gray-400 focus:outline-none 
												focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'
											placeholder='you@example.com'
										/>
									</div>
								</div>
							</div>

							<div>
								<label htmlFor='subject' className='block text-sm font-medium text-gray-300 mb-2'>
									Subject
								</label>
								<input
									id='subject'
									name='subject'
									type='text'
									required
									value={formData.subject}
									onChange={handleInputChange}
									className='block w-full px-3 py-2 bg-gray-700 border border-gray-600 
										rounded-md shadow-sm placeholder-gray-400 focus:outline-none 
										focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'
									placeholder='How can we help you?'
								/>
							</div>

							<div>
								<label htmlFor='message' className='block text-sm font-medium text-gray-300 mb-2'>
									Message
								</label>
								<textarea
									id='message'
									name='message'
									rows={6}
									required
									value={formData.message}
									onChange={handleInputChange}
									className='block w-full px-3 py-2 bg-gray-700 border border-gray-600 
										rounded-md shadow-sm placeholder-gray-400 focus:outline-none 
										focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm resize-none'
									placeholder='Tell us more about your inquiry...'
								/>
							</div>

							<button
								type='submit'
								disabled={isSubmitting}
								className='w-full flex justify-center py-3 px-4 border border-transparent 
									rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600
									hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2
									focus:ring-emerald-500 transition duration-150 ease-in-out disabled:opacity-50
									disabled:cursor-not-allowed'
							>
								{isSubmitting ? (
									<>
										<Loader className='mr-2 h-5 w-5 animate-spin' />
										Sending Message...
									</>
								) : (
									<>
										<Send className='mr-2 h-5 w-5' />
										Send Message
									</>
								)}
							</button>
						</form>
					</div>

					{/* Contact Information */}
					<div className='space-y-6'>
						<h2 className='text-2xl font-bold text-white mb-6 flex items-center'>
							<MapPin className='h-6 w-6 text-emerald-400 mr-3' />
							Contact Information
						</h2>

						<div className='space-y-6'>
							{contactInfo.map((info, index) => (
								<motion.div
									key={info.title}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
									className='flex items-start space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-750 
										transition-colors duration-200'
								>
									<div className='flex-shrink-0 p-3 bg-emerald-900 rounded-lg'>
										<info.icon className='h-6 w-6 text-emerald-400' />
									</div>
									<div className='flex-1 min-w-0'>
										<h3 className='text-lg font-semibold text-white mb-1'>
											{info.title}
										</h3>
										<p className='text-emerald-400 font-medium mb-1'>
											{info.details}
										</p>
										<p className='text-gray-400 text-sm'>
											{info.description}
										</p>
									</div>
								</motion.div>
							))}
						</div>

						{/* Additional Info */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.7 }}
							className='mt-8 p-6 bg-emerald-900 bg-opacity-20 border border-emerald-800 rounded-lg'
						>
							<h3 className='text-lg font-semibold text-emerald-400 mb-3'>
								Why Choose Buy-Buddy?
							</h3>
							<ul className='space-y-2 text-gray-300 text-sm'>
								<li className='flex items-center'>
									<span className='w-2 h-2 bg-emerald-400 rounded-full mr-3'></span>
									Eco-friendly and sustainable fashion
								</li>
								<li className='flex items-center'>
									<span className='w-2 h-2 bg-emerald-400 rounded-full mr-3'></span>
									Fast and reliable customer support
								</li>
								<li className='flex items-center'>
									<span className='w-2 h-2 bg-emerald-400 rounded-full mr-3'></span>
									Secure shopping experience
								</li>
								<li className='flex items-center'>
									<span className='w-2 h-2 bg-emerald-400 rounded-full mr-3'></span>
									Quality products at competitive prices
								</li>
							</ul>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default ContactUs;

