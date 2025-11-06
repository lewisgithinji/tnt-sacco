
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
              {/* Slogan Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-navy to-yellow animate-fade-in">
                <span className="text-sm lg:text-base font-semibold text-white">
                  Tujitegemee Kiuchumi
                </span>
              </div>
              
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
                <div className="text-2xl font-bold text-navy">48+</div>
                <div className="text-sm text-muted-foreground">Years of Service</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/downloads/membership-application.pdf';
                  link.download = 'TNT-SACCO-Membership-Application.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Become a Member
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8"
                onClick={() => {
                  const loanSection = document.getElementById('loans');
                  if (loanSection) {
                    loanSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Calculate Loan
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <div className="bg-card rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow border border-border">
              <div className="flex items-center space-x-4">
                <div className="bg-navy/10 p-3 rounded-full">
                  <Shield className="w-7 h-7 text-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">Secure & Licensed</h3>
                  <p className="text-sm text-muted-foreground">Registered under the Co-operative Act and licensed by SASRA and insured by Kenya Deposit Insurance Corporation</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow border border-border">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow/10 p-3 rounded-full">
                  <Users className="w-7 h-7 text-yellow" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">Community Focused</h3>
                  <p className="text-sm text-muted-foreground">Owned and governed by our members for our members</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow border border-border">
              <div className="flex items-center space-x-4">
                <div className="bg-navy/10 p-3 rounded-full">
                  <TrendingUp className="w-7 h-7 text-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">Competitive Returns</h3>
                  <p className="text-sm text-muted-foreground">Earn attractive annual dividends on your savings.</p>
                </div>
              </div>
            </div>

            {/* Paybill Info Card */}
            <div className="bg-gradient-to-br from-navy to-navy/90 rounded-2xl p-5 shadow-lg border-2 border-yellow/20">
              <div className="flex items-start space-x-3">
                <div className="bg-yellow/20 p-2 rounded-full flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white mb-2">Pay via M-PESA</h3>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/70">Paybill Number:</span>
                      <span className="text-lg font-bold text-yellow">533888</span>
                    </div>
                    <div className="flex items-start justify-between">
                      <span className="text-xs text-white/70">Account No:</span>
                      <span className="text-xs font-semibold text-white text-right">Your ID or<br/>Membership No.</span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-yellow text-yellow hover:bg-yellow hover:text-navy text-xs w-full mt-3 font-semibold"
                    onClick={() => {
                      navigator.clipboard.writeText('533888');
                      const btn = document.activeElement as HTMLButtonElement;
                      const originalText = btn.textContent;
                      btn.textContent = 'Copied!';
                      setTimeout(() => {
                        btn.textContent = originalText;
                      }, 2000);
                    }}
                  >
                    Copy Paybill
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
