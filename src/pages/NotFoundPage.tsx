import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-brand-new-black px-6 pt-20">
      <Seo title="Page Not Found | CBD Scrap Car Removal" description="The page you requested could not be found. Return to CBD Scrap Car Removal for Perth scrap car removal and cash for cars information." path="/404" robots="noindex, follow" />
      <div className="text-center max-w-xl">
        <p className="text-brand-yellow font-bold tracking-widest mb-4">404 ERROR</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">Page not found</h1>
        <p className="text-gray-400 mb-8">That page may have moved or the address may be incorrect.</p>
        <Link to="/" className="inline-flex items-center justify-center bg-brand-yellow text-brand-black font-semibold px-7 py-4 rounded-xl hover:bg-brand-light-green transition-colors">
          Return to homepage
        </Link>
      </div>
    </section>
  );
}
