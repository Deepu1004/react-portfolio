const Footer = () => {
    return (
      <footer className="bg-blue py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p className="text-sm md:text-base font-medium">
            © {new Date().getFullYear()} Sai Deepak Varanasi. All rights reserved.
          </p>
        </div>
      </footer>
    );
}

export default Footer;