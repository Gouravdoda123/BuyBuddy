import { Link } from "react-router-dom";
import { 
	Home, 
	ShoppingBag, 
	UserPlus, 
	LogIn, 
	Shield, 
	FileText, 
	Mail, 
	Phone, 
	MapPin,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
	Heart,
	MessageSquare,
	Truck,
	RotateCcw
} from "lucide-react";
import { useUserStore } from "../stores/useUserStore";

const Footer = () => {
	const { user } = useUserStore();
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative z-50 bg-gray-900 border-t border-emerald-800">
			{/* Main Footer Content */}
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="space-y-4">
						<Link to="/" className="text-2xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
							Buy-Buddy
						</Link>
						<p className="text-gray-300 text-sm leading-relaxed">
							Your trusted partner for eco-friendly fashion. Discover the latest trends while making sustainable choices for our planet.
						</p>
						<div className="flex space-x-4">
							<a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
								<Facebook size={20} />
							</a>
							<a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
								<Twitter size={20} />
							</a>
							<a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
								<Instagram size={20} />
							</a>
							<a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
								<Linkedin size={20} />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-white">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center">
									<Home size={16} className="mr-2" />
									Home
								</Link>
							</li>
							<li>
								<Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center">
									<ShoppingBag size={16} className="mr-2" />
									Categories
								</Link>
							</li>
							<li>
								<Link to="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center">
									<MessageSquare size={16} className="mr-2" />
									Contact Us
								</Link>
							</li>
							{user && (
								<li>
									<Link to="/cart" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center">
										<ShoppingBag size={16} className="mr-2" />
										Cart
									</Link>
								</li>
							)}
						</ul>
					</div>

					{/* Account & Legal */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-white">Account & Legal</h3>
						<ul className="space-y-2">
							{!user ? (
								<>
									<li>
										<Link to="/signup" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center">
											<UserPlus size={16} className="mr-2" />
											Sign Up
										</Link>
									</li>
									<li>
										<Link to="/login" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center">
											<LogIn size={16} className="mr-2" />
											Login
										</Link>
									</li>
								</>
							) : (
								<li>
									<span className="text-emerald-400 flex items-center">
										<Shield size={16} className="mr-2" />
										Welcome back!
									</span>
								</li>
							)}
							<li>
								<Link to="/privacy" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center">
									<Shield size={16} className="mr-2" />
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link 
									to='/terms' 
									className='text-gray-300 hover:text-emerald-400 transition-colors flex items-center'
								>
									<FileText size={16} className='mr-2' />
									Terms & Conditions
								</Link>
							</li>
							<li>
								<Link 
									to='/shipping-policy' 
									className='text-gray-300 hover:text-emerald-400 transition-colors flex items-center'
								>
									<Truck size={16} className='mr-2' />
									Shipping Policy
								</Link>
							</li>
							<li>
								<Link 
									to='/cancellation-refund' 
									className='text-gray-300 hover:text-emerald-400 transition-colors flex items-center'
								>
									<RotateCcw size={16} className='mr-2' />
									Cancellation & Refund
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-white">Contact Us</h3>
						<div className="space-y-3">
							<div className="flex items-center text-gray-300">
								<Mail size={16} className="mr-3 text-emerald-400" />
								<span className="text-sm">support@buybuddy.com</span>
							</div>
							<div className="flex items-center text-gray-300">
								<Phone size={16} className="mr-3 text-emerald-400" />
								<span className="text-sm">+1 (555) 123-4567</span>
							</div>
							<div className="flex items-start text-gray-300">
								<MapPin size={16} className="mr-3 mt-0.5 text-emerald-400" />
								<span className="text-sm">
									123 Fashion Street<br />
									Eco City, EC 12345
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-gray-800 bg-gray-950">
				<div className="container mx-auto px-4 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<div className="text-gray-400 text-sm">
							© {currentYear} Buy-Buddy. All rights reserved.
						</div>
						<div className="flex items-center space-x-2 text-gray-400 text-sm">
							<span>Made with</span>
							<Heart size={16} className="text-red-500 fill-current" />
							<span>for sustainable fashion</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
