
import { ArrowRight, Shield, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-navy/5 via-yellow/5 to-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Partner in
                <span className="bg-gradient-to-r from-navy to-yellow bg-clip-text text-transparent">
                  {" "}Financial Growth
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                TNT SACCO is a deposit-taking entity that empowers Kenyan citizens and businesses with comprehensive financial services including affordable credit and competitive savings accounts. Join thousands of members in building your financial future.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-navy">10K+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow">KSh 2B+</div>
                <div className="text-sm text-muted-foreground">Assets Under Management</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-navy">15+</div>
                <div className="text-sm text-muted-foreground">Years of Service</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Become a Member
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8">
                Calculate Loan
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
              <div className="flex items-center space-x-4">
                <div className="bg-navy/10 p-3 rounded-full">
                  <Shield className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground">Secure & Licensed</h3>
                  <p className="text-muted-foreground">Registered under the Co-operative Act and licensed by SASRA and insured by Kenya Deposit Insurance Corporation</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow/10 p-3 rounded-full">
                  <Users className="w-8 h-8 text-yellow" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground">Community Focused</h3>
                  <p className="text-muted-foreground">Owned and governed by our members for our members</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
              <div className="flex items-center space-x-4">
                <div className="bg-navy/10 p-3 rounded-full">
                  <TrendingUp className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground">Competitive Returns</h3>
                  <p className="text-muted-foreground">Earn up to 12% annual dividend on your savings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
