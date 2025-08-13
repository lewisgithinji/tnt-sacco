import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

export const ProductsSection = () => {
  const savingsProducts = [
    {
      title: "Share Capital Account",
      description: "Represents your ownership of the society in terms of shares.",
      href: "/deposit-products",
    },
    {
      title: "BOSA Deposits Account",
      description: "Save and build non-withdrawable deposits with competitive interest.",
      href: "/deposit-products",
    },
    {
      title: "Payroll Account",
      description: "Savings and salary/pension processing for salaried/pension members.",
      href: "/deposit-products",
    },
    {
      title: "Akiba Savings Account",
      description: "Voluntary personal savings outside salaries for all members.",
      href: "/deposit-products",
    },
    {
      title: "Lengo Savings Account",
      description: "Goal-oriented investment account with 3, 6, and 12 month terms.",
      href: "/deposit-products",
    },
    {
      title: "Junior Savings Account",
      description: "A plan for investing in dependents' future, operated by a guardian.",
      href: "/deposit-products",
    },
    {
      title: "Mstaafu Daima",
      description: "Voluntary savings for retiring members with structured payouts.",
      href: "/deposit-products",
    },
    {
      title: "Yield Plus Account",
      description: "Lump-sum investments with flexible periods and competitive returns.",
      href: "/deposit-products",
    },
  ];

  const loanProducts = [
    { title: "Elimu Plus", description: "Flexible financing for education-related needs.", href: "/loan-products" },
    { title: "Emergency Express", description: "Quick access funds for urgent situations.", href: "/loan-products" },
    { title: "iPremium Loan", description: "Premium facility tailored for qualified members.", href: "/loan-products" },
    { title: "Elimu Bora", description: "Affordable education-focused credit solution.", href: "/loan-products" },
    { title: "Tuliza Loan", description: "Short-term credit to ease cash flow.", href: "/loan-products" },
    { title: "Jipange Loan", description: "Plan and manage expenses with flexible terms.", href: "/loan-products" },
    { title: "Asset Finance", description: "Finance for vehicles and productive assets.", href: "/loan-products" },
  ];

  const ProductGrid = ({ items }: { items: { title: string; description: string; href: string }[] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {items.map((item, idx) => (
        <article
          key={idx}
          className="w-full max-w-sm bg-white border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
        >
          <h4 className="text-lg font-bold text-navy">{item.title}</h4>
          <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          <div className="mt-4">
            <Link
              to={item.href}
              className="font-medium text-navy underline decoration-yellow/60 decoration-2 underline-offset-4 hover:text-yellow transition-colors"
            >
              See details
            </Link>
          </div>
        </article>
      ))}
    </div>
  );

  return (
    <section id="products" className="py-20 bg-[#E5F3FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Products</h2>
        </div>

        <Tabs defaultValue="savings" className="w-full">
          <div className="flex justify-center">
            <TabsList className="bg-transparent p-1">
              <TabsTrigger
                value="savings"
                className="px-6 py-3 text-base md:text-lg font-semibold text-navy rounded-md data-[state=active]:bg-yellow data-[state=active]:text-navy"
              >
                Savings Products
              </TabsTrigger>
              <TabsTrigger
                value="loans"
                className="px-6 py-3 text-base md:text-lg font-semibold text-navy rounded-md data-[state=active]:bg-yellow data-[state=active]:text-navy"
              >
                Loan Products
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="savings" className="mt-10">
            <div className="flex justify-center">
              <div className="w-full">
                <ProductGrid items={savingsProducts} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="loans" className="mt-10">
            <div className="flex justify-center">
              <div className="w-full">
                <ProductGrid items={loanProducts} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductsSection;
