import { useState, useEffect } from "react";
import { calculators, categories } from "@shared/calculators";
import { CalculatorCard } from "@/components/CalculatorCard";
import { Input } from "@/components/ui/input";
import { Search, DollarSign, BookOpen, Heart, Clock, Wrench } from "lucide-react";

const iconMap = {
  DollarSign,
  BookOpen,
  Heart,
  Clock,
  Wrench
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCalculators, setFilteredCalculators] = useState(calculators);

  useEffect(() => {
    document.title = "Calculaki - Calculadoras Online Gratuitas";
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredCalculators(calculators);
    } else {
      const filtered = calculators.filter(calc => 
        calc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        calc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        calc.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredCalculators(filtered);
    }
  }, [searchTerm]);

  const calculatorsByCategory = searchTerm.trim() === "" 
    ? Object.entries(categories).map(([key, category]) => ({
        key,
        ...category,
        calculators: calculators.filter(calc => calc.category === key)
      }))
    : [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4" data-testid="text-hero-title">
            Precisa calcular algo? Calcula aqui!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8" data-testid="text-hero-subtitle">
            As melhores calculadoras online para finanças, saúde, estudos e muito mais. Tudo em um só lugar.
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="search"
              placeholder="Digite o que você precisa calcular..."
              className="pl-12 h-14 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              data-testid="input-search"
            />
          </div>
        </div>
      </section>

      <div className="container py-12">
        {/* Search Results */}
        {searchTerm.trim() !== "" && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {filteredCalculators.length > 0 
                ? `${filteredCalculators.length} resultado${filteredCalculators.length !== 1 ? 's' : ''} encontrado${filteredCalculators.length !== 1 ? 's' : ''}`
                : "Nenhum resultado encontrado"
              }
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCalculators.map((calc) => (
                <CalculatorCard
                  key={calc.id}
                  name={calc.name}
                  description={calc.description}
                  path={calc.path}
                />
              ))}
            </div>
          </div>
        )}

        {/* Categories */}
        {searchTerm.trim() === "" && calculatorsByCategory.map((category) => {
          const IconComponent = iconMap[category.icon as keyof typeof iconMap];
          
          return (
            <section key={category.key} className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <IconComponent className="h-8 w-8 text-primary" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground" data-testid={`text-category-${category.key}`}>
                    {category.name}
                  </h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.calculators.map((calc) => (
                  <CalculatorCard
                    key={calc.id}
                    name={calc.name}
                    description={calc.description}
                    path={calc.path}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
