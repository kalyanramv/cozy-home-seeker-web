
import Navbar from '../components/Navbar';
import CategoryFilter from '../components/CategoryFilter';
import PropertyGrid from '../components/PropertyGrid';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CategoryFilter />
      <main className="flex-1">
        <PropertyGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
