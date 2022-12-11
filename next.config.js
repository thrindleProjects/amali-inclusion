/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async redirects() {
		return [
			{
				source: "/master-agent",
				destination: "/master-agent/dashboard",
				permanent: true,
			},
			{
				source: "/admin",
				destination: "/admin/dashboard",
				permanent: true,
			},
			{
				source: "/sub-agent",
				destination: "/sub-agent/dashboard",
				permanent: true,
			},

		];
	},
};

module.exports = nextConfig;
