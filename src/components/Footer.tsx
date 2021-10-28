import tw from 'tailwind-styled-components';
import Link from 'next/link';
const FooterWrapper = tw.footer`grid sm:grid-cols-2 md:grid-cols-4 bg-gray-100 text-gray-600 gap-y-10 py-10 px-32`;
const FooterLinks = tw.div`py-4 md:py-2 space-y-4 text-xs text-gray-800`;
const LinkTitle = tw.h5`font-bold text-sm`;
const FooterLink = tw.a`block cursor-pointer text-gray-600 hover:text-gray-800 hover:text-sm`;

function Footer() {
	return (
		<FooterWrapper>
			<FooterLinks>
				<LinkTitle>ABOUT</LinkTitle>
				<Link href='#'>
					<FooterLink>How Airbnb works</FooterLink>
				</Link>
				<Link href='#'>
					<FooterLink>Newsroom</FooterLink>
				</Link>
				<Link href='#'>
					<FooterLink>Investors</FooterLink>
				</Link>
				<Link href='#'>
					<FooterLink>Airbnb Luxe</FooterLink>
				</Link>
			</FooterLinks>
			{/*  */}
			<FooterLinks>
				<LinkTitle>COMMUNITY</LinkTitle>
				<Link href='#'>
					<FooterLink>Accessibility</FooterLink>
				</Link>
				<Link href='#'>
					<FooterLink>This is not a real site</FooterLink>
				</Link>
				<Link href='#'>
					<FooterLink>Its pretty awesome</FooterLink>
				</Link>
				<Link href='#'>
					<FooterLink>Referrals Accepted</FooterLink>
				</Link>
				<Link href='#'>
					<FooterLink>Jagun</FooterLink>
				</Link>
			</FooterLinks>
			{/*  */}
			<FooterLinks>
				<LinkTitle>HOST</LinkTitle>
				<Link href='#'>
					<FooterLink>Lorem</FooterLink>
				</Link>
				<Link href='#'>
					<FooterLink>Ipsum</FooterLink>
				</Link>
				<Link href='#'>
					<FooterLink>Presaents</FooterLink>
				</Link>
				<Link href='#'>
					<FooterLink>Donor Ilsum</FooterLink>
				</Link>
			</FooterLinks>
			{/*  */}
			<FooterLinks>
				<LinkTitle>SUPPORT</LinkTitle>
				<Link href='#'>
					<FooterLink>Developers</FooterLink>
				</Link>
				<Link href='#'>
					<FooterLink>Customers</FooterLink>
				</Link>
				<Link href='#'>
					<FooterLink>Technical Team</FooterLink>
				</Link>
				<Link href='#'>
					<FooterLink>Blocked</FooterLink>
				</Link>
				<Link href='#'>
					<FooterLink>Open Now</FooterLink>
				</Link>
			</FooterLinks>
		</FooterWrapper>
	);
}

export default Footer;
